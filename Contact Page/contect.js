document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Simulate a successful form submission
  const responseMessage = document.getElementById('responseMessage');
  responseMessage.textContent = 'Thank you for your message! We will get back to you soon.';
  responseMessage.classList.remove('d-none');

  // Reset the form
  this.reset();
});
