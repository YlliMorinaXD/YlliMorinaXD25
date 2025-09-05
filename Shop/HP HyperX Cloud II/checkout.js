// Dummy data for products (replace this with dynamic cart data from cart.html)
const cartItems = [
  { name: "Intel i3 - 13100F", price: "$122.49" },
  { name: "Intel i5 - 12600K", price: "$189.09" }
];  
  
  // Function to populate country dropdown
  function populateCountries() {
    const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", 
"Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", 
"Cabo Verde", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Congo (Congo-Brazzaville)", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czechia (Czech Republic)", 
"Denmark", "Djibouti", "Dominica", "Dominican Republic", 
"Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini (fmr. Swaziland)", "Ethiopia", 
"Fiji", "Finland", "France", 
"Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", 
"Haiti", "Holy See", "Honduras", "Hungary", 
"Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", 
"Jamaica", "Japan", "Jordan", 
"Kazakhstan", "Kenya", "Kiribati", "Korea (North)", "Korea (South)", "Kosovo", "Kuwait", "Kyrgyzstan", 
"Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", 
"Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar (Burma)", 
"Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Macedonia", "Norway", 
"Oman", 
"Pakistan", "Palau", "Palestine State", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", 
"Qatar", 
"Romania", "Russia", "Rwanda", 
"Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", 
"Tajikistan", "Tanzania", "Thailand", "Timor-Leste", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", 
"Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "USA", "Uruguay", "Uzbekistan", 
"Vanuatu", "Venezuela", "Vietnam", 
"Yemen", 
"Zambia", "Zimbabwe"]; // List of countries
    const countrySelect = document.getElementById("country");
  
    countries.forEach(country => {
      const option = document.createElement("option");
      option.value = country;
      option.textContent = country;
      countrySelect.appendChild(option);
    });
  }
  
  // Function to display products in the cart
  function displayCartProducts() {
    const cartContainer = document.getElementById("cartProducts");
    product.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `<p>${cart.name} - ${cart.price}</p>`;
      cartContainer.appendChild(div);
    });
  }
  
  // Function to validate and submit the form
  function submitForm() {
    const checkoutForm = document.getElementById("checkoutForm");
    const creditCardForm = document.getElementById("creditCardForm");
  
    if (checkoutForm.checkValidity() && creditCardForm.checkValidity()) {
      alert("Order submitted successfully!");
    } else {
      alert("Please fill out all fields correctly.");
    }
  }
  
  // Initialize the form on page load
  window.onload = function() {
    populateCountries();
    displayCartProducts();
  };
  