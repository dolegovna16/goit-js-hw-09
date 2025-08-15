let formData = { email: '', message: '' };
const inputForm = document.querySelector('.feedback-form');

  if (localStorage.getItem('feedback-form-state')) {
    const formDefault = JSON.parse(localStorage.getItem('feedback-form-state'));
    formData = formDefault;
    inputForm.elements.email.value = formData.email;
    inputForm.elements.message.value = formData.message;
  }


inputForm.addEventListener('input', () => {
  formData.email = inputForm.elements.email.value.trim();
  formData.message = inputForm.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

inputForm.addEventListener('submit', e => {
  e.preventDefault();

  if (
    inputForm.elements.email.value.trim() === '' ||
    inputForm.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }
  if (
    inputForm.elements.email.value.trim() !== '' &&
    inputForm.elements.message.value.trim() !== ''
  ) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    Object.keys(formData).forEach(key => (formData[key] = ''));
    Array.from(inputForm.elements).forEach(element => (element.value = ''));
  }
});