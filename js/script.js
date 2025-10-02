document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".btn-primary");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      alert("Thanks for choosing Dream Travel! We'll contact you soon.");
      
    });
  });
});
