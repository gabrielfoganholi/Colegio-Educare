document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.getElementById('menu-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });
    
    closeBtn.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
    
    document.addEventListener('click', (e) => {
        if (!mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.arrow-left');
    const nextButton = document.querySelector('.arrow-right');
    const gallery = document.querySelector('.gallery');
    const totalItems = document.querySelectorAll('.item').length;
    let currentIndex = 0;

    function updateGallery() {
        const offset = -currentIndex * 100;
        gallery.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
        updateGallery();
    });

    nextButton.addEventListener('click', function () {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
        updateGallery();
    });

    updateGallery(); // Inicializa a galeria com o índice inicial
});



