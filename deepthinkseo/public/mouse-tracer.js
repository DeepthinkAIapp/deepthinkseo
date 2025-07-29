// ===== MOUSE TRACER FUNCTIONALITY =====
class MouseTracer {
  constructor() {
    this.tracer = null;
    this.isVisible = false;
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetX = 0;
    this.targetY = 0;
    this.animationId = null;
    
    this.init();
  }

  init() {
    // Create tracer element
    this.createTracer();
    
    // Add event listeners
    this.addEventListeners();
    
    // Start animation loop
    this.animate();
    
    // Check for reduced motion preference
    this.checkReducedMotion();
  }

  createTracer() {
    this.tracer = document.createElement('div');
    this.tracer.className = 'mouse-tracer';
    this.tracer.style.display = 'none';
    document.body.appendChild(this.tracer);
  }

  addEventListeners() {
    // Mouse move event
    document.addEventListener('mousemove', (e) => {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      
      if (!this.isVisible) {
        this.show();
      }
      
      // Update position immediately for better responsiveness
      this.updatePosition();
    });

    // Mouse enter/leave document
    document.addEventListener('mouseenter', () => {
      this.show();
    });

    document.addEventListener('mouseleave', () => {
      this.hide();
    });

    // Window resize
    window.addEventListener('resize', () => {
      this.updatePosition();
    });

    // Scroll events
    window.addEventListener('scroll', () => {
      this.updatePosition();
    });

    // Touch events for mobile
    document.addEventListener('touchstart', (e) => {
      if (e.touches.length > 0) {
        this.mouseX = e.touches[0].clientX;
        this.mouseY = e.touches[0].clientY;
        this.show();
      }
    });

    document.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        this.mouseX = e.touches[0].clientX;
        this.mouseY = e.touches[0].clientY;
        e.preventDefault();
      }
    });

    document.addEventListener('touchend', () => {
      this.hide();
    });

    // Interactive element hover effects
    this.addInteractiveEffects();
  }

  addInteractiveEffects() {
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, .service-card, .cta-button, .contact-form-card, .proposal-form-card');
    
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', () => {
        this.tracer.style.transform = 'scale(1.5)';
        this.tracer.style.background = 'var(--primary-dark)';
        this.tracer.style.mixBlendMode = 'multiply';
      });

      element.addEventListener('mouseleave', () => {
        this.tracer.style.transform = 'scale(1)';
        this.tracer.style.background = 'var(--primary)';
        this.tracer.style.mixBlendMode = 'difference';
      });
    });
  }

  show() {
    if (this.tracer && !this.isVisible) {
      this.tracer.style.display = 'block';
      this.isVisible = true;
    }
  }

  hide() {
    if (this.tracer && this.isVisible) {
      this.tracer.style.display = 'none';
      this.isVisible = false;
    }
  }

  updatePosition() {
    if (this.tracer && this.isVisible) {
      this.targetX = this.mouseX - 12; // Center the tracer (24px / 2)
      this.targetY = this.mouseY - 12;
      
      this.tracer.style.left = this.targetX + 'px';
      this.tracer.style.top = this.targetY + 'px';
    }
  }

  animate() {
    if (this.isVisible && this.tracer) {
      // Smooth interpolation for smoother movement
      const easing = 0.15;
      const currentX = parseFloat(this.tracer.style.left) || this.targetX;
      const currentY = parseFloat(this.tracer.style.top) || this.targetY;
      
      const newX = currentX + (this.targetX - currentX) * easing;
      const newY = currentY + (this.targetY - currentY) * easing;
      
      this.tracer.style.left = newX + 'px';
      this.tracer.style.top = newY + 'px';
    }
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }

  checkReducedMotion() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.hide();
      this.tracer.style.display = 'none';
    }
  }

  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
    
    if (this.tracer) {
      this.tracer.remove();
    }
    
    // Remove event listeners
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseenter', this.show);
    document.removeEventListener('mouseleave', this.hide);
  }
}

// ===== THEME UTILITIES =====
class ThemeManager {
  constructor() {
    this.currentTheme = 'light';
    this.init();
  }

  init() {
    this.setupThemeToggle();
    this.loadSavedTheme();
    this.applyTheme();
  }

  setupThemeToggle() {
    const toggle = document.getElementById('theme-toggle');
    if (toggle) {
      toggle.addEventListener('click', () => {
        this.toggleTheme();
      });

      // Add hover effects
      toggle.addEventListener('mouseenter', () => {
        toggle.style.transform = 'scale(1.1)';
      });

      toggle.addEventListener('mouseleave', () => {
        toggle.style.transform = 'scale(1)';
      });
    }
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.saveTheme();
    this.applyTheme();
  }

  applyTheme() {
    document.documentElement.setAttribute('data-theme', this.currentTheme);
    
    const toggle = document.getElementById('theme-toggle');
    const icon = toggle ? toggle.querySelector('.theme-icon') : null;
    if (icon) {
      icon.textContent = this.currentTheme === 'light' ? '🌙' : '☀️';
    }
  }

  saveTheme() {
    localStorage.setItem('theme', this.currentTheme);
  }

  loadSavedTheme() {
    const saved = localStorage.getItem('theme');
    if (saved) {
      this.currentTheme = saved;
    } else {
      // Check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        this.currentTheme = 'dark';
      }
    }
  }
}

// ===== INITIALIZATION =====
// Moved to fallback initialization below

// ===== ADDITIONAL EFFECTS =====
function addParallaxEffects() {
  // Disabled parallax effects to prevent image disappearing issues
  // const parallaxElements = document.querySelectorAll('.hero-image, .ai-hero-image, .section-img-wide');
  
  // window.addEventListener('scroll', () => {
  //   const scrolled = window.pageYOffset;
    
  //   parallaxElements.forEach(element => {
  //     const speed = 0.5;
  //     const yPos = -(scrolled * speed);
  //     element.style.transform = `translateY(${yPos}px)`;
  //   });
  // });
}

function addScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  const animatedElements = document.querySelectorAll('.service-card, .process-step, .faq-card, .results-stat');
  
  animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
  });
}

// ===== EXPORT FOR MODULE USE =====
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { MouseTracer, ThemeManager };
}

// ===== FALLBACK INITIALIZATION =====
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeThemeSystem);
} else {
  // DOMContentLoaded has already fired
  initializeThemeSystem();
}

function initializeThemeSystem() {
  console.log('Theme system initializing...');
  
  // Initialize mouse tracer
  const mouseTracer = new MouseTracer();
  console.log('Mouse tracer initialized');
  
  // Initialize theme manager
  const themeManager = new ThemeManager();
  console.log('Theme manager initialized');
  
  // Add some fun interactive effects
  addParallaxEffects();
  addScrollAnimations();
  
  console.log('Theme system ready!');
} 