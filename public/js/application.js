// DELETE

document.querySelector('.allAlbums').addEventListener('click', async (e) => {
  console.log('ПРИШЛИ!!!!');
  if (e.target.classList.contains('delete')) {
    e.preventDefault();
    const { id } = e.target.dataset;

    const res = await fetch(`/photos/${id}`, {
      method: 'DELETE',

    });
    const data = await res.json();
    console.log('СНОВА ПРИШЛИ!!!)');
    console.log(data);
    if (data.key > 0) {
      e.target.closest('.albCard').remove();
    }
  }
});
