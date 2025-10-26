// Test the contact API endpoint
const testContactAPI = async () => {
  try {
    console.log('Testing contact API...')
    
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'Test User',
        email: 'test@example.com',
        message: 'This is a test message',
        formType: 'contact'
      })
    })

    const result = await response.json()
    
    console.log('Response status:', response.status)
    console.log('Response body:', result)
    
    if (response.ok) {
      console.log('✅ Contact API test successful!')
    } else {
      console.log('❌ Contact API test failed!')
    }
  } catch (error) {
    console.log('❌ Contact API test error:', error.message)
  }
}

testContactAPI()
