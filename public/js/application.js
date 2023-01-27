// DELETE

document.querySelector('.allAlbums').addEventListener('click', async (e) => {
  // console.log('ПРИШЛИ!!!!');
  if (e.target.classList.contains('delete')) {
    e.preventDefault();
    const { id } = e.target.dataset;

    const res = await fetch(`/main/${id}`, {
      method: 'DELETE',
    });

    console.log('ПРИШЛИ!!!______________________!');

    const data = await res.json();
    console.log(data, '----------------DATADATA');
    if (data.status) {
      e.target.closest('.albCard').remove();
    }
  }
});
