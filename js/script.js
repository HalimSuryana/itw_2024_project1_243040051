// navigation
const menuToggle = document.querySelector(".menu-toggle input");
const menuToggle1 = document.querySelector(".nav-list ul");
const nav = document.querySelector(".nav-list");
const nava = document.querySelector(".nav-list");

menuToggle.addEventListener("click", function () {
  nav.classList.toggle("slide");
});
menuToggle1.addEventListener("click", function () {
  nav.classList.toggle("slide");
  document.getElementById("checkbox").checked = false;
});

<script>
  // Pilih semua gambar di photo-about document.querySelectorAll('.photo-about
  img').forEach((image) ={" "}
  {image.addEventListener("click", () => {
    image.classList.toggle("zoomed");
  })}
  );
</script>;
