// script.js - front-end interactions (no backend)
$(function () {
  // Thumbnail click -> change main image
  $('.thumbnails').on('click', '.thumb', function () {
    var $t = $(this);
    var full = $t.data('full') || $t.attr('src');
    $('#mainImage').attr('src', full);
    $('.thumbnails .thumb').removeClass('active');
    $t.addClass('active');
  });

  // Quantity controls
  function sanitizeQty(v) {
    v = parseInt(v) || 1;
    if (v < 1) v = 1;
    if (v > 99) v = 99;
    return v;
  }
  $('#incQty').on('click', function () {
    var q = sanitizeQty($('#qtyInput').val()) + 1;
    $('#qtyInput').val(q);
  });
  $('#decQty').on('click', function () {
    var q = sanitizeQty($('#qtyInput').val()) - 1;
    $('#qtyInput').val(q);
  });
  $('#qtyInput').on('input blur', function () {
    $(this).val(sanitizeQty($(this).val()));
  });

  // Add to cart (simulated)
  $('#addToCart').on('click', function () {
    var qty = sanitizeQty($('#qtyInput').val());
    var title = $('#productTitle').text().trim();
    var price = $('#productPrice').text().trim();
    var toastMsg = qty + ' × ' + title + ' (' + price + ') added to cart';
    $('#toastBody').text(toastMsg);
    var toastEl = document.getElementById('cartToast');
    var bsToast = new bootstrap.Toast(toastEl, { delay: 2500 });
    bsToast.show();

    // visual cart count (simple client-side)
    var $cartLink = $('.site-header a[href="#"]').filter(function(){ return $(this).text().trim().startsWith('Cart') });
    // If you have a cart count element, update it here. Example below (uncomment if used):
    // var current = parseInt($('#cartCount').text()) || 0; $('#cartCount').text(current + qty);
  });

  // Keep price in purchase card consistent (if dynamic replace script to recalc)
  // Example: if price on page changes, update #priceCard
  var pagePrice = $('#productPrice').text().trim();
  $('#priceCard').text(pagePrice);
});
