const showBtn = document.getElementById('show-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

showBtn.addEventListener('click', () => {
  sidebar.style.display = 'block';
  overlay.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  sidebar.style.display = 'none';
  overlay.style.display = 'none';
});
