# Email Setup Guide for Deepthink SEO

## Overview
All forms on your website now use a custom API endpoint that sends emails from `deepthinkseo@gmail.com` to both your business email and the customer.

## What's Been Set Up

### 1. API Endpoint
- **Location**: `/src/app/api/contact/route.ts`
- **Function**: Handles all form submissions
- **Email From**: `deepthinkseo@gmail.com`
- **Email To**: `deepthinkseo@gmail.com` (your business email)

### 2. Updated Forms
- **Contact Form** (`/contact` page)
- **Proposal Form** (Proposal component)
- **Hero Form** (main page hero section)
- **Award Form** (award section)

### 3. Email Features
- **Dual Emails**: Sends to both business and customer
- **Form Type Detection**: Different email templates based on form type
- **Confirmation Emails**: Automatic customer confirmations
- **Error Handling**: Graceful fallbacks if email service fails

## Setup Instructions

### Step 1: Create Gmail App Password
1. Go to [Google Account Settings](https://myaccount.google.com/)
2. Navigate to **Security** → **2-Step Verification** (enable if not already)
3. Go to **Security** → **App passwords**
4. Generate a new app password for "Mail"
5. Copy the 16-character password

### Step 2: Set Environment Variable
Create a `.env.local` file in your project root with:

```env
EMAIL_PASSWORD=your_16_character_app_password_here
```

**Important**: Never commit this file to version control!

### Step 3: Test the Setup
1. Start your development server: `npm run dev`
2. Go to `http://localhost:3000/contact`
3. Fill out and submit the contact form
4. Check both:
   - Your business email (`deepthinkseo@gmail.com`)
   - The customer's email (if provided)

## Form Types and Email Templates

### Contact Form
- **Type**: `contact`
- **Fields**: name, email, message
- **Subject**: "New Contact Form Submission"

### Proposal Form
- **Type**: `proposal`
- **Fields**: name, email, company, website, phone, message
- **Subject**: "New Proposal Form Submission"

### Hero Form
- **Type**: `hero-proposal`
- **Fields**: website only
- **Subject**: "New Hero Proposal Form Submission"

### Award Form
- **Type**: `award-proposal`
- **Fields**: website only
- **Subject**: "New Award Proposal Form Submission"

## Email Content

### Business Email
- Form type and all submitted fields
- Professional formatting
- Clear identification of form source

### Customer Confirmation
- Thank you message
- Summary of submission
- Contact information
- Professional branding

## Troubleshooting

### Common Issues

1. **"Email service not configured" error**
   - Check that `EMAIL_PASSWORD` is set in `.env.local`
   - Verify the app password is correct

2. **"Failed to send email" error**
   - Check Gmail account settings
   - Verify 2-factor authentication is enabled
   - Ensure app password is valid

3. **Forms not submitting**
   - Check browser console for errors
   - Verify API endpoint is accessible
   - Check network tab for failed requests

### Testing Checklist
- [ ] Contact form sends emails
- [ ] Proposal form sends emails
- [ ] Hero form sends emails
- [ ] Award form sends emails
- [ ] Customer receives confirmation emails
- [ ] Business receives notification emails
- [ ] Error handling works when email service is down

## Security Notes

- App passwords are more secure than regular passwords
- Environment variables keep credentials out of code
- All forms validate required fields
- Error messages don't expose sensitive information

## Production Deployment

When deploying to production:
1. Set the `EMAIL_PASSWORD` environment variable in your hosting platform
2. Ensure the production domain is configured
3. Test all forms after deployment
4. Monitor email delivery rates

## Support

If you encounter issues:
1. Check the console logs for detailed error messages
2. Verify Gmail account settings
3. Test with a simple form submission
4. Contact your hosting provider if needed
