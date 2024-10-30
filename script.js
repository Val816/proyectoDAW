let timeout;

// Mostrar el menú al acercarse al borde izquierdo y ocultarlo después de un tiempo
document.addEventListener('mousemove', function(event) {
    const menu = document.getElementById('menu');
    if (event.clientX < 50) {
        clearTimeout(timeout);
        menu.style.left = '0'; // Mostrar el menú
    } else {
        timeout = setTimeout(function() {
            menu.style.left = '-200px'; // Ocultar el menú después de un segundo
        }, 100000);
    }
});

function mostrarInformacion(herramienta) {
    const informacion = {
        github: `
        <h2>GitHub Pages</h2>
        <p>Descripción: GitHub Pages permite alojar sitios web estáticos directamente desde repositorios de GitHub, ideal para proyectos HTML, CSS y JavaScript.</p>
        <strong>Características:</strong>
        <ul>
            <li>Totalmente gratuito y fácil de usar.</li>
            <li>Soporta dominios personalizados.</li>
            <li>Compatible con Jekyll para crear blogs y sitios estáticos.</li>
        </ul>
        <strong>Ideal para:</strong> Proyectos de portafolio, sitios web personales o blogs estáticos.<br>
        <strong>Enlace:</strong> <a href="https://pages.github.com/" target="_blank">GitHub Pages</a>
    `,
    netlify: `
        <h2>Netlify</h2>
        <p>Descripción: Netlify es una plataforma de despliegue y alojamiento de aplicaciones estáticas y JAMstack (JavaScript, APIs, y Markup).</p>
        <strong>Características:</strong>
        <ul>
            <li>Ofrece un plan gratuito con gran capacidad y funciones de despliegue continuo.</li>
            <li>Permite usar dominios personalizados y HTTPS.</li>
            <li>Compatible con frameworks modernos como React, Vue, y Angular.</li>
        </ul>
        <strong>Ideal para:</strong> Desplegar aplicaciones web modernas y sitios estáticos.<br>
        <strong>Enlace:</strong> <a href="https://www.netlify.com/" target="_blank">Netlify</a>
    `,
    vercel: `
        <h2>Vercel</h2>
        <p>Descripción: Vercel es una plataforma de despliegue enfocada en aplicaciones web frontend, especialmente con frameworks como Next.js.</p>
        <strong>Características:</strong>
        <ul>
            <li>Integración continua y despliegue automático desde GitHub, GitLab o Bitbucket.</li>
            <li>Admite dominios personalizados y certificados SSL gratuitos.</li>
            <li>Escalabilidad y rendimiento optimizados.</li>
        </ul>
        <strong>Ideal para:</strong> Aplicaciones web frontend con frameworks modernos.<br>
        <strong>Enlace:</strong> <a href="https://vercel.com/" target="_blank">Vercel</a>
    `,
    wix: `
        <h2>Wix</h2>
        <p>Descripción: Wix es una plataforma fácil de usar que permite crear sitios web sin necesidad de programar, usando un editor visual.</p>
        <strong>Características:</strong>
        <ul>
            <li>Ofrece plantillas prediseñadas y opciones de personalización.</li>
            <li>Permite añadir funcionalidades como blogs y tiendas online.</li>
            <li>La versión gratuita incluye un subdominio Wix y anuncios de la plataforma.</li>
        </ul>
        <strong>Ideal para:</strong> Sitios de portafolio, landing pages y pequeñas empresas.<br>
        <strong>Enlace:</strong> <a href="https://www.wix.com/" target="_blank">Wix</a>
    `,
    wordpress: `
        <h2>WordPress.com</h2>
        <p>Esta opción la vamos a estudiar con más detalle en el próximo tema, dejarlo pendiente.</p>
    `,
    google: `
        <h2>Google Sites</h2>
        <p>Descripción: Google Sites permite crear sitios web básicos y colaborativos fácilmente, sin conocimientos de programación.</p>
        <strong>Características:</strong>
        <ul>
            <li>Integración con productos de Google como Drive, Calendar y Maps.</li>
            <li>Interfaz intuitiva y fácil de personalizar.</li>
            <li>No admite dominios personalizados en la versión gratuita.</li>
        </ul>
        <strong>Ideal para:</strong> Sitios colaborativos y presentaciones de contenido.<br>
        <strong>Enlace:</strong> <a href="https://sites.google.com/" target="_blank">Google Sites</a>
    `,
    cloudflare: `
        <h2>Cloudflare Pages</h2>
        <p>Descripción: Cloudflare Pages permite alojar y desplegar sitios estáticos con una configuración simple y rápida.</p>
        <strong>Características:</strong>
        <ul>
            <li>Protección DDoS y rendimiento optimizado a través de la red de Cloudflare.</li>
            <li>HTTPS gratuito para todos los dominios.</li>
        </ul>
        <strong>Ideal para:</strong> Sitios estáticos y aplicaciones JAMstack.<br>
        <strong>Enlace:</strong> <a href="https://pages.cloudflare.com/" target="_blank">Cloudflare Pages</a>
    `,
    carrd: `
        <h2>Carrd</h2>
        <p>Descripción: Carrd es una plataforma simple para crear sitios web de una sola página de forma rápida y fácil.</p>
        <strong>Características:</strong>
        <ul>
            <li>Interfaz de arrastrar y soltar para construir páginas.</li>
            <li>Plan gratuito y opciones de suscripción para características adicionales.</li>
            <li>Soporta dominios personalizados.</li>
        </ul>
        <strong>Ideal para:</strong> Páginas de presentación personal, portafolios y sitios de una sola página.<br>
        <strong>Enlace:</strong> <a href="https://carrd.co/" target="_blank">Carrd</a>
    `
};
 
 // Inserta la información de la herramienta seleccionada y añade el botón de regreso
 document.getElementById('informacion').innerHTML = `
 <p>${informacion[herramienta]}</p>
 <button onclick="volverAlMenu()" style="background-color: #800080; color: white; padding: 10px; border: none; cursor: pointer;">Regresar al Menú</button>
`;
document.getElementById('informacion').style.display = 'block'; // Muestra la sección de información
document.getElementById('menu').style.left = '-200px'; // Oculta el menú
document.getElementById('bienvenida').style.display = 'none'; // Oculta la bienvenida
}

// Función para volver al menú desde la información
function volverAlMenu() {
document.getElementById('informacion').style.display = 'none'; // Oculta la información
document.getElementById('bienvenida').style.display = 'block'; // Muestra la bienvenida
}