const openMenuBtn = document.querySelector('.open');
const closeMenuBtn = document.querySelector('.close');
const navBar = document.querySelector('nav');
const overlay = document.querySelector('.overlay');

openMenuBtn.addEventListener('click', () => {
    navBar.style.transform = 'translateX(0)';
    overlay.style.display = 'block';
})

closeMenuBtn.addEventListener('click', () => {
    navBar.style.transform = 'translateX(100vh)';
    overlay.style.display = 'none';
})


// Optionally, close the menu by clicking the overlay
overlay.addEventListener('click', () => {
    navBar.style.display = 'none';
    overlay.style.display = 'none';
});
