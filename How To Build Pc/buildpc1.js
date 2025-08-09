// Accordion functionality
const accordions = document.querySelectorAll('.accordion-btn');

accordions.forEach(button => {
  button.addEventListener('click', () => {
    const panel = button.nextElementSibling;
    const expanded = panel.style.maxHeight && panel.style.maxHeight !== '0px';

    // Close all panels
    document.querySelectorAll('.accordion-panel').forEach(p => {
      p.style.maxHeight = null;
    });

    if (!expanded) {
      panel.style.maxHeight = panel.scrollHeight + 'px';
    }
  });
});

// Contact form AJAX submission
const form = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', e => {
  e.preventDefault();
  formMessage.textContent = 'Sending...';

  const formData = new FormData(form);

  fetch('contact.php', {
    method: 'POST',
    body: formData
  })
    .then(response => response.text())
    .then(text => {
      formMessage.textContent = text;
      if (text.toLowerCase().includes('thank')) {
        form.reset();
      }
    })
    .catch(() => {
      formMessage.textContent = 'Error sending message. Please try again later.';
    });
});
