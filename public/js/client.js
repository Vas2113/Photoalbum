// Регистрация
const regForm = document.querySelector('#regForm');
if (regForm) {
  regForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const {
      login, email, password1, passwordRepeat, method,
    } = e.target;
    const res = await fetch('/reg', {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        login: login.value,
        email: email.value,
        password1: password1.value,
        passwordRepeat: passwordRepeat.value,
      }),
    });
    const data = await res.json();

    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
      errorBlock.style.visibility = 'visible';
    } else {
      window.location.assign('/main');
    }
  });
}

// Авторизация

const logForm = document.querySelector('#loginForm');
if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(e.target.email.value);
    const { email, password, method } = e.target;
    const res = await fetch('/auth', {
      method,
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const data = await res.json();

    if (!data.status) {
      const errorBlock = document.querySelector('.errorBlock');
      errorBlock.innerHTML = data.message;
      errorBlock.style.visibility = 'visible';
    } else {
      window.location.assign('/');
    }
  });
}
