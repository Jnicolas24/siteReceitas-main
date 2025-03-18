document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    window.location.href = `detalhes.html?id=${id}`;
  });
});
