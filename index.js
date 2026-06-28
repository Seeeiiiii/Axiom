document.querySelectorAll('[data-target]').forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('data-target');

        document.querySelectorAll('.page').forEach(page => page.classList.add('d-none'));
    
        document.getElementById(targetId).classList.remove('d-none');

        document.querySelectorAll('.sidebar .nav-link').forEach(link => {
            link.classList.remove('active');
        });

        const activeLink = document.querySelector(`.sidebar .nav-link[data-target="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    });
});