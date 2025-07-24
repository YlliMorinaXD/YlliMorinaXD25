$(document).ready(function() {
    // Quantity increment/decrement
    $('#increase').click(function() {
        let qty = parseInt($('#quantity').val());
        $('#quantity').val(qty + 1);
    });

    $('#decrease').click(function() {
        let qty = parseInt($('#quantity').val());
        if (qty > 1) {
            $('#quantity').val(qty - 1);
        }
    });

    // Thumbnail click to change main image
    $('.thumb').click(function() {
        let newSrc = $(this).attr('src');
        $('.main-img').attr('src', newSrc);
    });

    // Add to cart button
    $('#add-to-cart').click(function() {
        const qty = $('#quantity').val();
        alert(`Added ${qty} unit(s) to the cart.`);
    });
});
