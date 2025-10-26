import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Email configuration
const createTransporter = () => {
  const emailPassword = process.env.EMAIL_PASSWORD || 'zujddkfrjeixfwtl'
  
  if (!emailPassword) {
    throw new Error('EMAIL_PASSWORD environment variable is not set')
  }
  
  return nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'deepthinkseo@gmail.com',
      pass: emailPassword,
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, message, company, website, phone, formType = 'contact' } = body

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = createTransporter()

    // Create email content based on form type
    let subject = 'New Contact Form Submission'
    let emailContent = `
      <h2>New ${formType.charAt(0).toUpperCase() + formType.slice(1)} Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
    `

    if (company) emailContent += `<p><strong>Company:</strong> ${company}</p>`
    if (website) emailContent += `<p><strong>Website:</strong> ${website}</p>`
    if (phone) emailContent += `<p><strong>Phone:</strong> ${phone}</p>`
    
    emailContent += `
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>This message was sent from the Deepthink SEO website contact form.</em></p>
    `

    // Send email to your business email
    await transporter.sendMail({
      from: 'deepthinkseo@gmail.com',
      to: 'deepthinkseo@gmail.com',
      subject: subject,
      html: emailContent,
    })

    // Send confirmation email to the user
    const userConfirmationContent = `
      <h2>Thank you for contacting Deepthink SEO!</h2>
      <p>Hi ${name},</p>
      <p>Thank you for reaching out to us. We have received your message and will get back to you within 24 hours.</p>
      <p>Here's a summary of what you submitted:</p>
      <p><strong>Message:</strong> ${message}</p>
      <p>If you have any urgent questions, please call us at (385) 216-2993.</p>
      <p>Best regards,<br>Deepthink SEO Team</p>
    `

    await transporter.sendMail({
      from: 'deepthinkseo@gmail.com',
      to: email,
      subject: 'Thank you for contacting Deepthink SEO',
      html: userConfirmationContent,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    
    // Check if it's an environment variable error
    if (error instanceof Error && error.message.includes('EMAIL_PASSWORD')) {
      return NextResponse.json(
        { error: 'Email service not configured. Please contact support.' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
