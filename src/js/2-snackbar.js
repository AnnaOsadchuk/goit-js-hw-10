// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('form input[name="delay"]');
const stateEls = document.querySelectorAll('form input[name="state"]');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  let delay = delayEl.value;
  let state = null;

  stateEls.forEach(stateEl => {
    if (stateEl.checked) {
      console.log(stateEl.value);
      state = stateEl.value;
    }
  });

  const promise = createPromise(state, delay);

  promise({ delay })
    .then(delay =>
      iziToast.show({
        title: 'OK',
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        message: 'Fulfilled promise in ${delay}ms',
        position: 'topRight',
        timeout: '${delay}',
        close: true,
      })
    )
    .catch(delay =>
      iziToast.show({
        title: 'Error',
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        message: 'Rejected promise in ${delay}ms',
        position: 'topRight',
        timeout: '${ delay }',
        close: true,
      })
    );
}

function createPromise(state, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state == 'fulfilled') {
        resolve(`Fulfilled promise in ${delay}ms`);
      } else {
        reject(`Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}
