const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click',function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');

    })





        // Automatically update the year
        document.getElementById('2024').textContent = new Date().getFullYear();
    
    
        const toggleButton = document.getElementById('navbar-toggle');
        const navbarMenu = document.querySelector('.navbar__menu');
    
        toggleButton.addEventListener('click', () => {
            navbarMenu.classList.toggle('active');
        });
    
    