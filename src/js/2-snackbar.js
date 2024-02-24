const elForm = document.querySelector('.form');

elForm.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formEl = event.curentTarget;
  console.dir(event);
}
