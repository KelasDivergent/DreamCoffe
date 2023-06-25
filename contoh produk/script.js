const products = document.querySelectorAll(".product");

products.forEach(product => {
  product.addEventListener("click", () => {
    // Hapus kelas active dari semua produk
    products.forEach(product => {
      product.classList.remove("active");
    });
    
    // Tambahkan kelas active pada produk yang di klik
    product.classList.add("active");
  });
});
