// Регистрация
const regForm = document.querySelector('#regForm');
const logForm = document.querySelector('#loginForm');
const addPhoto = document.querySelector('.addPhoto');

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

if (logForm) {
  logForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log(e.target.email.value);
    const { email, password, method } = e.target;
    const res = await fetch('/log', {
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
      window.location.assign('/main');
    }
  });
}

if (addPhoto) {
  addPhoto.addEventListener('change', async (e) => {
    const picturesData = [...e.target.files];
    console.log(e.target.dataset.id, '0000000000000');
    const album_id = e.target.dataset.id;
    const data = new FormData();
    picturesData.forEach((img) => {
      data.append('homesImg', img);
    });
    const newPhoto = await fetch(`/myAlbums/${album_id}/photos/addPhoto`, {
      method: 'POST',
      body: data,
    });
    const dataUrl = await newPhoto.json();

    const al = document.querySelector('.allAlbums');
    dataUrl.forEach((el) => {
      al.insertAdjacentHTML('beforeend', `
<div class="albCard">

<img class="albumPhoto" src=${el.photo} alt="logo" />

</div>
`);
    });
  });
}
