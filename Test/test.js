function changeImage(el) {
  document.getElementById("main-img").src = el.src;
}

$(document).ready(function() {
  $('form').on('submit', function(e) {
    alert("Porosia juaj u shtua me sukses!");
  });
});
