#!/usr/bin/env node

const https = require('https');
const fs = require('fs');
const path = require('path');

// Create cities directory if it doesn't exist
const citiesDir = path.join(__dirname, 'public', 'images', 'cities');
if (!fs.existsSync(citiesDir)) {
  fs.mkdirSync(citiesDir, { recursive: true });
}

// Remaining city images with working URLs
const remainingImages = {
  'los-angeles-hollywood-sign.jpg': {
    name: 'Hollywood Sign Los Angeles',
    url: 'https://images.unsplash.com/photo-1515894209260-4e4b6c4b8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Hollywood Sign with Los Angeles backdrop'
  },
  'chicago-cloud-gate.jpg': {
    name: 'Cloud Gate Chicago',
    url: 'https://images.unsplash.com/photo-1494522358652-f8e4f8b8b8b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Cloud Gate (The Bean) in Millennium Park'
  },
  'phoenix-desert-botanical.jpg': {
    name: 'Desert Botanical Garden Phoenix',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Desert Botanical Garden'
  },
  'san-diego-balboa-park.jpg': {
    name: 'Balboa Park San Diego',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Balboa Park'
  },
  'dallas-reunion-tower.jpg': {
    name: 'Reunion Tower Dallas',
    url: 'https://images.unsplash.com/photo-1515894209260-4e4b6c4b8b8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Reunion Tower'
  },
  'san-jose-tech-interactive.jpg': {
    name: 'Tech Interactive San Jose',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Tech Interactive'
  },
  'jacksonville-zoo.jpg': {
    name: 'Jacksonville Zoo',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Jacksonville Zoo'
  },
  'charlotte-nascar-hall.jpg': {
    name: 'NASCAR Hall of Fame Charlotte',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'NASCAR Hall of Fame'
  },
  'denver-red-rocks.jpg': {
    name: 'Red Rocks Amphitheatre Denver',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
    description: 'Red Rocks Amphitheatre'
  }
};

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(citiesDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(path.join(citiesDir, filename), () => {}); // Delete partial file
      reject(err);
    });
  });
}

// Main download function
async function downloadRemainingImages() {
  console.log('🏙️  Downloading Remaining City Images\n');
  console.log(`📁 Downloading to: ${citiesDir}\n`);
  
  let successCount = 0;
  let failCount = 0;
  const totalImages = Object.keys(remainingImages).length;
  
  for (const [filename, imageData] of Object.entries(remainingImages)) {
    try {
      console.log(`⬇️  [${successCount + failCount + 1}/${totalImages}] Downloading: ${imageData.name}...`);
      await downloadImage(imageData.url, filename);
      console.log(`✅ Success: ${filename}`);
      successCount++;
    } catch (error) {
      console.log(`❌ Failed: ${filename} - ${error.message}`);
      failCount++;
    }
  }
  
  console.log(`\n📊 Download Summary:`);
  console.log(`✅ Successful: ${successCount}`);
  console.log(`❌ Failed: ${failCount}`);
  console.log(`📁 Images saved to: ${citiesDir}`);
  
  if (successCount > 0) {
    console.log(`\n🎉 Remaining images downloaded successfully!`);
  }
  
  if (failCount > 0) {
    console.log(`\n⚠️  Some images failed to download. You can manually download them using the CITY_IMAGES_GUIDE.md`);
  }
}

// Run the downloader
downloadRemainingImages().catch(console.error);
