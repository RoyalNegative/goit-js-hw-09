const form = document.getElementById('feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];
const STORAGE_KEY = 'feedback-form-state';

document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  if (savedData.email) emailInput.value = savedData.email;
  if (savedData.message) messageInput.value = savedData.message;
});

form.addEventListener('input', () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email && message) {
    console.log({ email, message });
    localStorage.removeItem(STORAGE_KEY);
    form.reset();
  } else {
    return;
  }
});
