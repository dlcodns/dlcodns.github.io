document.addEventListener("DOMContentLoaded", function() {
    // Side Menu Functionality
    const menuTrigger = document.querySelector('.menu-trigger');
    const sideMenu = document.querySelector('.side_menu');
    const overlay = document.querySelector('.overlay');

    menuTrigger.addEventListener('click', function(event) {
        event.preventDefault();
        menuTrigger.classList.toggle('active-1');
        if (sideMenu.classList.contains('active')) {
            sideMenu.classList.remove('active');
            overlay.classList.remove('active');
        } else {
            sideMenu.classList.add('active');
            overlay.classList.add('active');
        }
    });

    overlay.addEventListener('click', function() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        menuTrigger.classList.remove('active-1');
    });


    // Dropdown Functionality
    var dropdowns = document.querySelectorAll('.side_menu .dropdown > a');

    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', function(event) {
            event.preventDefault();
            var parent = this.parentElement;
            parent.classList.toggle('active');
        });
    });

    // Post Collapse Functionality with slideDown and slideUp animations
    const posts = document.querySelectorAll('.post .title');

    posts.forEach((title) => {
        title.addEventListener('click', function() {
            const post = this.parentElement;
            const content = post.querySelector('.content');
            if (post.classList.contains('active')) {
                post.classList.remove('active');
                post.classList.add('removing');
                setTimeout(() => {
                    post.classList.remove('removing');
                    content.style.display = 'none';
                }, 470); // Match the duration of the slideUp animation
            } else {
                content.style.display = 'block';
                post.classList.add('active');
            }
        });
    });
});