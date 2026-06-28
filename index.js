 document.querySelectorAll('.nav-link[data-target]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            this.classList.add('active');

            const target = this.getAttribute('data-target');
            document.querySelectorAll('.page').forEach(page => {
                page.classList.add('d-none');
            });
            document.getElementById(target).classList.remove('d-none');
        });
    });