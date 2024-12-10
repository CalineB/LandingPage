document.addEventListener('DOMContentLoaded', function() {

const form = document.querySelector('#contact-form');
const responseMessage = document.querySelector('#response-message');

if (form) {
form.addEventListener('submit', async () => {

  const formData = new FormData(form);

  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
    phone: formData.get('phone'),

  };

  try {

    const result = await response.json();
    if (result.success) {
      form.style.display = 'none';
      responseMessage.style.display = 'block'; 
      responseMessage.textContent = 'Thank your for reaching out, your email was successfully sent, I\'ll contact you ASAP!';
      responseMessage.style.color = 'green';
    } else {
      form.style.display = 'none';
      responseMessage.style.display = 'block';
      responseMessage.textContent = 'Error: ' + result.message;
      responseMessage.style.color = 'red';

      setTimeout(() => {
        responseMessage.style.display = 'none';
        form.style.display = 'block';
      }, 30000);
    }

  } catch (error) {
    form.style.display = 'block';
    responseMessage.style.display = 'block';
    responseMessage.textContent = 'An error occurred while sending your email. Please try again later.';
    responseMessage.style.color = 'red';

    setTimeout(() => {
      responseMessage.style.display = 'none';
      form.style.display = 'block';
    }, 5000);
  }
});
}
});
