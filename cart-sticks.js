document.querySelector('.sticks-select')?.addEventListener('change', function () {
  localStorage.setItem('sticks', this.value);
});