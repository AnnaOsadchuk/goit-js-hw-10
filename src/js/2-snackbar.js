import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Error_png from '../img/error.png';
import OK_png from '../img/ok.png';

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

  promise
    .then(message =>
      iziToast.show({
        title: 'OK',
        icon: '/img/icons.svg',
        message: `${message}`,
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#59A10D',
        position: 'topRight',
        timeout: 3000,
        iconUrl: OK_png,
      })
    )
    .catch(message =>
      iziToast.show({
        title: 'Error',
        titleColor: '#FFFFFF',
        titleSize: '16px',
        messageSize: '16px',
        messageColor: '#FFFFFF',
        backgroundColor: '#B51B1B',
        message: `${message}`,
        position: 'topRight',
        timeout: 3000,
        iconUrl: Error_png,
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
