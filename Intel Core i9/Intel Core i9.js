// ==== Thumbnail Image Switcher ====
const mainImage = document.querySelector(".main-image");
const thumbnails = document.querySelectorAll(".thumbnails img");

thumbnails.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
    thumbnails.forEach(img => img.classList.remove("active-thumb"));
    thumb.classList.add("active-thumb");
  });
});

// ==== Add to Cart Button ====
const cartBtn = document.querySelector(".add-to-cart");
cartBtn.addEventListener("click", () => {
  alert("✅ Intel Core i5-12600K added to your cart!");
});

// ==== Buy Now Button ====
const buyBtn = document.querySelector(".buy-now");
buyBtn.addEventListener("click", () => {
  alert("⚡ Redirecting to checkout...");
  // here you could redirect to checkout page:
  // window.location.href = "checkout.html";
});
