document.addEventListener('DOMContentLoaded', () => {
    // Resaltar el menú activo
    const navItems = document.querySelectorAll('.nav__items');
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');
        });
    });

    document.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prueba comentar esta línea si no funciona
        window.location.href = this.href; 
    });
});

});
