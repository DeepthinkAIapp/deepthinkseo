#!/usr/bin/env node

/**
 * City Images Download Helper
 * 
 * This script provides direct links to high-quality images for each city.
 * Copy these URLs and download the images manually, or use a tool like wget/curl.
 */

const cityImages = {
  'new-york-city-skyline.jpg': {
    name: 'New York City Skyline',
    searchTerms: ['New York City skyline', 'Manhattan skyline', 'Empire State Building'],
    sources: [
      'https://unsplash.com/s/photos/new-york-city-skyline',
      'https://www.pexels.com/search/new%20york%20city%20skyline/',
      'https://pixabay.com/images/search/new%20york%20city%20skyline/'
    ],
    description: 'Manhattan skyline with Empire State Building visible'
  },
  'los-angeles-hollywood-sign.jpg': {
    name: 'Hollywood Sign Los Angeles',
    searchTerms: ['Hollywood Sign Los Angeles', 'Hollywood Sign aerial view'],
    sources: [
      'https://unsplash.com/s/photos/hollywood-sign',
      'https://www.pexels.com/search/hollywood%20sign/',
      'https://pixabay.com/images/search/hollywood%20sign/'
    ],
    description: 'Hollywood Sign with Los Angeles city backdrop'
  },
  'chicago-cloud-gate.jpg': {
    name: 'Cloud Gate Chicago',
    searchTerms: ['Cloud Gate Chicago', 'The Bean Millennium Park'],
    sources: [
      'https://unsplash.com/s/photos/cloud-gate-chicago',
      'https://www.pexels.com/search/cloud%20gate%20chicago/',
      'https://pixabay.com/images/search/cloud%20gate%20chicago/'
    ],
    description: 'Cloud Gate (The Bean) sculpture in Millennium Park'
  },
  'houston-space-center.jpg': {
    name: 'Space Center Houston',
    searchTerms: ['Space Center Houston', 'Johnson Space Center'],
    sources: [
      'https://unsplash.com/s/photos/space-center-houston',
      'https://www.pexels.com/search/space%20center%20houston/',
      'https://pixabay.com/images/search/space%20center%20houston/'
    ],
    description: 'Space Center Houston or Johnson Space Center'
  },
  'phoenix-desert-botanical.jpg': {
    name: 'Desert Botanical Garden Phoenix',
    searchTerms: ['Desert Botanical Garden Phoenix', 'Camelback Mountain Phoenix'],
    sources: [
      'https://unsplash.com/s/photos/desert-botanical-garden',
      'https://www.pexels.com/search/desert%20botanical%20garden/',
      'https://pixabay.com/images/search/desert%20botanical%20garden/'
    ],
    description: 'Desert Botanical Garden or Camelback Mountain'
  },
  'philadelphia-liberty-bell.jpg': {
    name: 'Liberty Bell Philadelphia',
    searchTerms: ['Liberty Bell Philadelphia', 'Independence Hall Philadelphia'],
    sources: [
      'https://unsplash.com/s/photos/liberty-bell',
      'https://www.pexels.com/search/liberty%20bell/',
      'https://pixabay.com/images/search/liberty%20bell/'
    ],
    description: 'Liberty Bell or Independence Hall'
  },
  'san-antonio-alamo.jpg': {
    name: 'The Alamo San Antonio',
    searchTerms: ['The Alamo San Antonio', 'Alamo Mission San Antonio'],
    sources: [
      'https://unsplash.com/s/photos/alamo-san-antonio',
      'https://www.pexels.com/search/alamo%20san%20antonio/',
      'https://pixabay.com/images/search/alamo%20san%20antonio/'
    ],
    description: 'The Alamo Mission in San Antonio'
  },
  'san-diego-balboa-park.jpg': {
    name: 'Balboa Park San Diego',
    searchTerms: ['Balboa Park San Diego', 'San Diego Zoo'],
    sources: [
      'https://unsplash.com/s/photos/balboa-park-san-diego',
      'https://www.pexels.com/search/balboa%20park%20san%20diego/',
      'https://pixabay.com/images/search/balboa%20park%20san%20diego/'
    ],
    description: 'Balboa Park or San Diego Zoo'
  },
  'dallas-reunion-tower.jpg': {
    name: 'Reunion Tower Dallas',
    searchTerms: ['Reunion Tower Dallas', 'Dallas skyline'],
    sources: [
      'https://unsplash.com/s/photos/reunion-tower-dallas',
      'https://www.pexels.com/search/reunion%20tower%20dallas/',
      'https://pixabay.com/images/search/reunion%20tower%20dallas/'
    ],
    description: 'Reunion Tower or Dallas skyline'
  },
  'san-jose-tech-interactive.jpg': {
    name: 'Tech Interactive San Jose',
    searchTerms: ['Tech Interactive San Jose', 'Santana Row San Jose'],
    sources: [
      'https://unsplash.com/s/photos/tech-interactive-san-jose',
      'https://www.pexels.com/search/tech%20interactive%20san%20jose/',
      'https://pixabay.com/images/search/tech%20interactive%20san%20jose/'
    ],
    description: 'Tech Interactive or Santana Row'
  },
  'austin-capitol.jpg': {
    name: 'Texas State Capitol Austin',
    searchTerms: ['Texas State Capitol Austin', 'Austin Capitol Building'],
    sources: [
      'https://unsplash.com/s/photos/texas-state-capitol',
      'https://www.pexels.com/search/texas%20state%20capitol/',
      'https://pixabay.com/images/search/texas%20state%20capitol/'
    ],
    description: 'Texas State Capitol Building'
  },
  'jacksonville-zoo.jpg': {
    name: 'Jacksonville Zoo',
    searchTerms: ['Jacksonville Zoo', 'Jacksonville downtown'],
    sources: [
      'https://unsplash.com/s/photos/jacksonville-zoo',
      'https://www.pexels.com/search/jacksonville%20zoo/',
      'https://pixabay.com/images/search/jacksonville%20zoo/'
    ],
    description: 'Jacksonville Zoo or downtown'
  },
  'fort-worth-stockyards.jpg': {
    name: 'Fort Worth Stockyards',
    searchTerms: ['Fort Worth Stockyards', 'Fort Worth cattle'],
    sources: [
      'https://unsplash.com/s/photos/fort-worth-stockyards',
      'https://www.pexels.com/search/fort%20worth%20stockyards/',
      'https://pixabay.com/images/search/fort%20worth%20stockyards/'
    ],
    description: 'Fort Worth Stockyards'
  },
  'columbus-statehouse.jpg': {
    name: 'Ohio Statehouse Columbus',
    searchTerms: ['Ohio Statehouse Columbus', 'Columbus Statehouse'],
    sources: [
      'https://unsplash.com/s/photos/ohio-statehouse',
      'https://www.pexels.com/search/ohio%20statehouse/',
      'https://pixabay.com/images/search/ohio%20statehouse/'
    ],
    description: 'Ohio Statehouse'
  },
  'charlotte-nascar-hall.jpg': {
    name: 'NASCAR Hall of Fame Charlotte',
    searchTerms: ['NASCAR Hall of Fame Charlotte', 'Charlotte uptown'],
    sources: [
      'https://unsplash.com/s/photos/nascar-hall-of-fame',
      'https://www.pexels.com/search/nascar%20hall%20of%20fame/',
      'https://pixabay.com/images/search/nascar%20hall%20of%20fame/'
    ],
    description: 'NASCAR Hall of Fame or Charlotte uptown'
  },
  'seattle-space-needle.jpg': {
    name: 'Space Needle Seattle',
    searchTerms: ['Space Needle Seattle', 'Seattle Space Needle'],
    sources: [
      'https://unsplash.com/s/photos/space-needle-seattle',
      'https://www.pexels.com/search/space%20needle%20seattle/',
      'https://pixabay.com/images/search/space%20needle%20seattle/'
    ],
    description: 'Space Needle'
  },
  'denver-red-rocks.jpg': {
    name: 'Red Rocks Amphitheatre Denver',
    searchTerms: ['Red Rocks Amphitheatre Denver', 'Red Rocks Park Denver'],
    sources: [
      'https://unsplash.com/s/photos/red-rocks-amphitheatre',
      'https://www.pexels.com/search/red%20rocks%20amphitheatre/',
      'https://pixabay.com/images/search/red%20rocks%20amphitheatre/'
    ],
    description: 'Red Rocks Amphitheatre'
  },
  'washington-dc-capitol.jpg': {
    name: 'U.S. Capitol Washington DC',
    searchTerms: ['U.S. Capitol Washington DC', 'Capitol Building DC'],
    sources: [
      'https://unsplash.com/s/photos/us-capitol-washington',
      'https://www.pexels.com/search/us%20capitol%20washington/',
      'https://pixabay.com/images/search/us%20capitol%20washington/'
    ],
    description: 'U.S. Capitol Building'
  },
  'boston-faneuil-hall.jpg': {
    name: 'Faneuil Hall Boston',
    searchTerms: ['Faneuil Hall Boston', 'Boston Common'],
    sources: [
      'https://unsplash.com/s/photos/faneuil-hall-boston',
      'https://www.pexels.com/search/faneuil%20hall%20boston/',
      'https://pixabay.com/images/search/faneuil%20hall%20boston/'
    ],
    description: 'Faneuil Hall or Boston Common'
  }
};

console.log('🏙️  City Images Download Helper\n');
console.log('This script provides search links for high-quality city landmark images.\n');
console.log('📁 Target Directory: public/images/cities/\n');

Object.entries(cityImages).forEach(([filename, data], index) => {
  console.log(`${index + 1}. ${data.name}`);
  console.log(`   File: ${filename}`);
  console.log(`   Description: ${data.description}`);
  console.log(`   Search Terms: ${data.searchTerms.join(', ')}`);
  console.log('   Sources:');
  data.sources.forEach(source => {
    console.log(`     - ${source}`);
  });
  console.log('');
});

console.log('📋 Instructions:');
console.log('1. Visit the provided links above');
console.log('2. Search for high-quality images (1920x1080 or larger)');
console.log('3. Download images and save them as the specified filenames');
console.log('4. Place all images in the public/images/cities/ directory');
console.log('5. Optimize images using TinyPNG or similar tool');
console.log('6. Test your city pages to ensure images load correctly\n');

console.log('🎯 Quick Start:');
console.log('Start with these popular cities:');
console.log('- New York City (most searched)');
console.log('- Los Angeles (Hollywood Sign)');
console.log('- Chicago (Cloud Gate)');
console.log('- Seattle (Space Needle)');
console.log('- Washington DC (Capitol)');
