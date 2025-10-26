#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Create cities directory if it doesn't exist
const citiesDir = path.join(__dirname, 'public', 'images', 'cities');

// List of missing images (0 bytes)
const missingImages = [
  'los-angeles-hollywood-sign.jpg',
  'chicago-cloud-gate.jpg',
  'phoenix-desert-botanical.jpg',
  'san-diego-balboa-park.jpg',
  'dallas-reunion-tower.jpg',
  'san-jose-tech-interactive.jpg',
  'jacksonville-zoo.jpg',
  'charlotte-nascar-hall.jpg',
  'denver-red-rocks.jpg'
];

// Create a simple placeholder image (1x1 pixel transparent PNG)
const placeholderImage = Buffer.from([
  0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A, 0x00, 0x00, 0x00, 0x0D,
  0x49, 0x48, 0x44, 0x52, 0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,
  0x08, 0x06, 0x00, 0x00, 0x00, 0x1F, 0x15, 0xC4, 0x89, 0x00, 0x00, 0x00,
  0x0A, 0x49, 0x44, 0x41, 0x54, 0x78, 0x9C, 0x63, 0x00, 0x01, 0x00, 0x00,
  0x05, 0x00, 0x01, 0x0D, 0x0A, 0x2D, 0xB4, 0x00, 0x00, 0x00, 0x00, 0x49,
  0x45, 0x4E, 0x44, 0xAE, 0x42, 0x60, 0x82
]);

console.log('🖼️  Creating Placeholder Images\n');

missingImages.forEach(filename => {
  const filePath = path.join(citiesDir, filename);
  
  // Check if file exists and is empty
  if (fs.existsSync(filePath) && fs.statSync(filePath).size === 0) {
    fs.writeFileSync(filePath, placeholderImage);
    console.log(`✅ Created placeholder: ${filename}`);
  } else {
    console.log(`⚠️  Skipped: ${filename} (already exists or not empty)`);
  }
});

console.log('\n📋 Next Steps:');
console.log('1. Replace placeholder images with actual city photos');
console.log('2. Use the CITY_IMAGES_GUIDE.md for image sources');
console.log('3. Test your city pages to ensure images load correctly');
console.log('\n🔗 Test URLs:');
console.log('   http://localhost:3000/new-york-city');
console.log('   http://localhost:3000/los-angeles');
console.log('   http://localhost:3000/chicago');
console.log('   http://localhost:3000/seattle');
console.log('   http://localhost:3000/washington-dc');
