#!/usr/bin/env node

const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create cities directory if it doesn't exist
const citiesDir = path.join(__dirname, 'public', 'images', 'cities');
if (!fs.existsSync(citiesDir)) {
  fs.mkdirSync(citiesDir, { recursive: true });
}

// City images with direct download URLs from Unsplash (free, high-quality)
const cityImages = {
  'new-york-city-skyline.jpg': {
    name: 'New York City Skyline',
    url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Manhattan skyline with Empire State Building'
  },
  'los-angeles-hollywood-sign.jpg': {
    name: 'Hollywood Sign Los Angeles',
    url: 'https://images.unsplash.com/photo-1515894209260-4e4b6c4b8b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Hollywood Sign with Los Angeles backdrop'
  },
  'chicago-cloud-gate.jpg': {
    name: 'Cloud Gate Chicago',
    url: 'https://images.unsplash.com/photo-1494522358652-f8e4f8b8b8b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Cloud Gate (The Bean) in Millennium Park'
  },
  'houston-space-center.jpg': {
    name: 'Space Center Houston',
    url: 'https://images.unsplash.com/photo-1446776877081-d282a0f896e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Space Center Houston'
  },
  'phoenix-desert-botanical.jpg': {
    name: 'Desert Botanical Garden Phoenix',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Desert Botanical Garden'
  },
  'philadelphia-liberty-bell.jpg': {
    name: 'Liberty Bell Philadelphia',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Liberty Bell'
  },
  'san-antonio-alamo.jpg': {
    name: 'The Alamo San Antonio',
    url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'The Alamo Mission'
  },
  'san-diego-balboa-park.jpg': {
    name: 'Balboa Park San Diego',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Balboa Park'
  },
  'dallas-reunion-tower.jpg': {
    name: 'Reunion Tower Dallas',
    url: 'https://images.unsplash.com/photo-1515894209260-4e4b6c4b8b8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Reunion Tower'
  },
  'san-jose-tech-interactive.jpg': {
    name: 'Tech Interactive San Jose',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Tech Interactive'
  },
  'austin-capitol.jpg': {
    name: 'Texas State Capitol Austin',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Texas State Capitol'
  },
  'jacksonville-zoo.jpg': {
    name: 'Jacksonville Zoo',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Jacksonville Zoo'
  },
  'fort-worth-stockyards.jpg': {
    name: 'Fort Worth Stockyards',
    url: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Fort Worth Stockyards'
  },
  'columbus-statehouse.jpg': {
    name: 'Ohio Statehouse Columbus',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Ohio Statehouse'
  },
  'charlotte-nascar-hall.jpg': {
    name: 'NASCAR Hall of Fame Charlotte',
    url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'NASCAR Hall of Fame'
  },
  'seattle-space-needle.jpg': {
    name: 'Space Needle Seattle',
    url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Space Needle'
  },
  'denver-red-rocks.jpg': {
    name: 'Red Rocks Amphitheatre Denver',
    url: 'https://images.unsplash.com/photo-1506905925346-14b1e5d06187?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Red Rocks Amphitheatre'
  },
  'washington-dc-capitol.jpg': {
    name: 'U.S. Capitol Washington DC',
    url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'U.S. Capitol Building'
  },
  'boston-faneuil-hall.jpg': {
    name: 'Faneuil Hall Boston',
    url: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    description: 'Faneuil Hall'
  }
};

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(citiesDir, filename));
    const protocol = url.startsWith('https') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          resolve();
        });
      } else {
        reject(new Error(`Failed to download ${filename}: ${response.statusCode}`));
      }
    }).on('error', (err) => {
      fs.unlink(path.join(citiesDir, filename), () => {}); // Delete partial file
      reject(err);
    });
  });
}

// Main download function
async function downloadAllImages() {
  console.log('🏙️  City Images Downloader\n');
  console.log(`📁 Downloading to: ${citiesDir}\n`);
  
  let successCount = 0;
  let failCount = 0;
  
  for (const [filename, imageData] of Object.entries(cityImages)) {
    try {
      console.log(`⬇️  Downloading: ${imageData.name}...`);
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
    console.log(`\n🎉 Images downloaded successfully!`);
    console.log(`🔗 Test your city pages at:`);
    console.log(`   http://localhost:3000/new-york-city`);
    console.log(`   http://localhost:3000/los-angeles`);
    console.log(`   http://localhost:3000/chicago`);
  }
}

// Run the downloader
downloadAllImages().catch(console.error);
