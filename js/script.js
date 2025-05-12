'use strict';

document.addEventListener("DOMContentLoaded", function () {
  // Contact form 
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();

      alert(
        `Thank you ${name}!\n\n` +
        `📧 Email: ${email}\n` +
        `📝 Message: ${message}\n\n` +
        `Your message will be replied to as soon as possible.`
      );

      form.reset();
    });
  }

  // Discount popup form 
  const discountForm = document.getElementById("discountForm");
  if (discountForm) {
    discountForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("discountName").value.trim();
      const email = document.getElementById("discountEmail").value.trim();

      alert(`Thanks, ${name}! 🎉\nCheck your inbox (${email}) — your 10% discount code is on the way!`);

      discountForm.reset();

      // Hide the Bootstrap modal
      const discountModalElement = document.getElementById('discountModal');
      const discountModal = bootstrap.Modal.getInstance(discountModalElement);
      discountModal.hide();
    });
  }
});