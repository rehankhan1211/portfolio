# EmailJS Setup Guide

This portfolio uses EmailJS to send contact form emails directly to your Gmail inbox without redirecting to the mail client.

## Setup Steps:

### 1. Create an EmailJS Account
- Go to [EmailJS](https://www.emailjs.com/)
- Sign up for a free account
- Verify your email

### 2. Add Gmail Service
- In the EmailJS dashboard, go to **Email Services**
- Click **Add Service**
- Select **Gmail**
- Follow the instructions to connect your Gmail account (rehankhan121102@gmail.com)
- Copy the **Service ID** (it will look like: `service_xxxxx`)

### 3. Create an Email Template
- Go to **Email Templates**
- Click **Create New Template**
- Set up the template with the following variables:
  - `{{from_name}}` - Visitor's name
  - `{{from_email}}` - Visitor's email
  - `{{subject}}` - Email subject
  - `{{message}}` - Email message
  
Example template content:
```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}
```

- Copy the **Template ID** (it will look like: `template_xxxxx`)

### 4. Get Your Public Key
- Go to **Account** settings
- Copy your **Public Key** (it will look like: `xxxxx_xxxxx_xxxxx`)

### 5. Update the Contact Component
Replace the placeholder values in `src/components/Contact.jsx`:

```javascript
// Line 26: Replace 'YOUR_PUBLIC_KEY_HERE' with your actual public key
emailjs.init('YOUR_PUBLIC_KEY_HERE');

// Line 51: Replace the service and template IDs
emailjs.send('YOUR_SERVICE_ID_HERE', 'YOUR_TEMPLATE_ID_HERE', templateParams)
```

### Example:
```javascript
emailjs.init('abc123_def456_ghi789');
emailjs.send('service_abc123def', 'template_xyz789abc', templateParams)
```

## Testing
1. Run `npm install` to install the EmailJS package
2. Run `npm start` to start the development server
3. Fill out the contact form and click "Send Message"
4. The email should arrive in your Gmail inbox within seconds
5. The button will show "Sending..." while processing
6. After successful send, it will show "Message Sent! ✓"

## Troubleshooting
- If emails are not being sent, check the browser console for error messages
- Make sure your Gmail account is properly connected in EmailJS
- Verify that the Service ID and Template ID are correct
- Check that your Public Key is correctly set in the code

## Notes
- EmailJS free tier allows 200 emails per month
- No backend server required
- Emails are sent securely through EmailJS servers
- Your Gmail password is never exposed in the code
