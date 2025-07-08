const products = {
  "Intel i3 - 13100F": 122.49, 
  "Intel i5 - 12600K": 189.09,
  "Intel Core i9 - 14900k": 575.66,
  "Amd Ryzen 3": 68.50,
  "Amd Ryze 5 5600G": 159.99,
  "AMD Ryzen 7 7800X3D": 449.00,
  "Amd Ryzen 9 7950X3D": 626.53,
  "Corsair iCUE H170i ELITE LCD": 299.99,
  "Corsair iCUE H150i ELITE CAPELLIX XT": 219.99,
  "NZXT Kraken Elite 360 RGB": 350.93,
  "NZXT Kraken Z63": 265.35,
  "Asus ROG STRIX GAMING OC 3080": 258.36,
  "Asus ROG STRIX GAMING OC 4080 White": 365.25,
  "GeForec RTX 4080": 575.66,
  "Asus ROG STRIX GAMING OC 4090": 896.99,
  "Corsair Vengeance RGB 64 GB": 150.00,
  "Corsair RM1000e 1000 W": 199.99,
  "Corsair RM850e 850 W": 149.99,
  "Corsair Vengeance RGB 32 GB": 99.99,
  "GeForce 3080 TI": 219.99,
  "HP HyperX Cloud II": 78.62,
  "Logitech Pro X HeadPhones": 105.63,
  "Razer BlackWidow V3": 115.99,
  "Logitech PRO X KeyBoard": 99.99,
  "SteelSeries Apex Pro": 245.99,
  "Corsair K65 60%": 304.93,
  "MSI Optix G271CP": 304.93,
  "MSI G274QPX": 350.00,
  "Samsung Odyssey Neo G95NC": 400.00,
  "Samsung Odyssey G5": 500.00,
  "Asus TUF Gaming VG27AQ1A": 250.00,
  "Asus GeForce RTX 5090 32GB TUF OC Gaming": 2549.50,
  "ASUS GeForce RTX 5080 ROG Astral OC 16GB GDDR7": 1579.50,
  "Asus GeForce RTX 5070 Ti OC, 16GB GDDR7": 1149.50
};

let wishlist = [];

const productList = document.getElementById("productList");
const wishlistContainer = document.getElementById("wishlist");
const toggleBtn = document.getElementById("toggleProductsBtn");

toggleBtn.addEventListener("click", () => {
  productList.classList.toggle("hidden");
  toggleBtn.textContent = productList.classList.contains("hidden")
    ? "Show Products"
    : "Hide Products";
});

function renderProductList() {
  productList.innerHTML = "";
  Object.keys(products).forEach(name => {
    const div = document.createElement("div");
    div.className = "product-name";
    div.textContent = name;
    div.onclick = () => addToWishlist(name);
    productList.appendChild(div);
  });
}

function renderWishlist() {
  wishlistContainer.innerHTML = "";
  wishlist.forEach(({ name, price }) => {
    const item = document.createElement("div");
    item.className = "wishlist-item";
    item.innerHTML = `
      <h4>${name}</h4>
      <p>${price.toFixed(2)} €</p>
      <button onclick="addToCart('${name}')">Add to Cart</button>
      <button onclick="removeFromWishlist('${name}')">Remove</button>
    `;
    wishlistContainer.appendChild(item);
  });
}

function addToWishlist(name) {
  if (!wishlist.some(p => p.name === name)) {
    wishlist.push({ name, price: products[name] });
    renderWishlist();
  }
}

function removeFromWishlist(name) {
  wishlist = wishlist.filter(p => p.name !== name);
  renderWishlist();
}

function addToCart(name) {
  alert(`Added ${name} to cart!`);
}

renderProductList();
