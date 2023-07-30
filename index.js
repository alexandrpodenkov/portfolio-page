let menuIcon = document.querySelector('.menu-icon-container');
let burgerMenu = document.querySelector('.burgerMenu');
let closeBtn = document.querySelector('.closeBtn')

menuIcon.addEventListener('click', function(event){
    burgerMenu.style.display = 'block';
});

closeBtn.addEventListener('click', function(event){
    burgerMenu.style.display = 'none';
})





