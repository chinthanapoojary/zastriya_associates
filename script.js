document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm")
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()
  
      const name = document.getElementById("name").value
      const email = document.getElementById("email").value
      const message = document.getElementById("message").value
  
      // Create the email body
      const emailBody = `
  Name: ${name}
  Email: ${email}
  
  Message:
  ${message}
          `
  
      // Create the mailto link
      const mailtoLink = `mailto:zastriya.associates@gmail.com?subject=New Contact Form Submission&body=${encodeURIComponent(emailBody)}`
  
      // Open the user's default email client
      window.location.href = mailtoLink
  
      // Log the form data (for demonstration purposes)
      console.log("Form submitted:", { name, email, message })
  
      // Reset form after submission
      contactForm.reset()
  
      // Show a confirmation message
      alert(
        "Thank you for your message. Your default email client should open with the form data. Please send the email to complete your submission.",
      )
    })
  })
  
  