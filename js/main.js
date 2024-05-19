///form//
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form-log");
  const mobileInput = document.querySelector('.mobile-input[type="number"]');
  const passwordInput = document.querySelector(
    '.mobile-input[type="password"]'
  );
  const errorContainer = document.createElement("div");
  errorContainer.className = "error-container text-danger text-center mb-3";
  form.insertBefore(errorContainer, form.firstChild);

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Clear previous errors
    errorContainer.innerHTML = "";

    // Validation flags
    let isValid = true;
    let errors = [];

    // Validate mobile number
    const mobileValue = mobileInput.value.trim();
    if (mobileValue === "") {
      isValid = false;
      errors.push("يرجى إدخال رقم الجوال.");
    } else if (!/^\d{10}$/.test(mobileValue)) {
      isValid = false;
      errors.push("يرجى إدخال رقم جوال صحيح مكون من 10 أرقام.");
    }

    // Validate password
    const passwordValue = passwordInput.value.trim();
    if (passwordValue === "") {
      isValid = false;
      errors.push("يرجى إدخال كلمة المرور.");
    } else if (passwordValue.length < 6) {
      isValid = false;
      errors.push("يجب أن تكون كلمة المرور مكونة من 6 أحرف على الأقل.");
    }

    // Display errors or submit form
    if (!isValid) {
      errors.forEach(function (error) {
        const errorElement = document.createElement("p");
        errorElement.textContent = error;
        errorContainer.appendChild(errorElement);
      });
    } else {
      form.submit(); // Submit form if valid
    }
  });
});
