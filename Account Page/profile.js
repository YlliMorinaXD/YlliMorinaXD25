const profileForm = document.getElementById('profile-form');

profileForm.addEventListener('submit', (e) => {
  e.preventDefault();

  if (!profileForm.checkValidity()) {
    alert("Please fill in all required fields correctly.");
    return;
  }

  alert("Profile saved successfully!");
});
