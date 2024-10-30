const herramientas = {
    github: {
        descripcion: "GitHub Pages permite alojar sitios web estáticos directamente desde repositorios de GitHub, ideal para proyectos HTML, CSS y JavaScript.",
        caracteristicas: [
            "Totalmente gratuito y fácil de usar.",
            "Soporta dominios personalizados.",
            "Compatible con Jekyll para crear blogs y sitios estáticos."
        ],
        idealPara: "Proyectos de portafolio, sitios web personales o blogs estáticos.",
        enlace: "GitHub Pages"
    },
    netlify: {
        descripcion: "Netlify es una plataforma de despliegue y alojamiento de aplicaciones estáticas y JAMstack (JavaScript, APIs, y Markup).",
        caracteristicas: [
            "Ofrece un plan gratuito con gran capacidad y funciones de despliegue continuo.",
            "Permite usar dominios personalizados y HTTPS.",
            "Compatible con frameworks modernos como React, Vue, y Angular."
        ],
        idealPara: "Desplegar aplicaciones web modernas y sitios estáticos.",
        enlace: "Netlify"
    },
    vercel: {
        descripcion: "Vercel es una plataforma de despliegue enfocada en aplicaciones web frontend, especialmente con frameworks como Next.js.",
        caracteristicas: [
            "Integración continua y despliegue automático desde GitHub, GitLab o Bitbucket.",
            "Admite dominios personalizados y certificados SSL gratuitos.",
            "Escalabilidad y rendimiento optimizados."
        ],
        idealPara: "Aplicaciones web frontend con frameworks modernos.",
        enlace: "Vercel"
    },
    wix: {
        descripcion: "Wix es una plataforma fácil de usar que permite crear sitios web sin necesidad de programar, usando un editor visual.",
        caracteristicas: [
            "Ofrece plantillas prediseñadas y opciones de personalización.",
            "Permite añadir funcionalidades como blogs y tiendas online.",
            "La versión gratuita incluye un subdominio Wix y anuncios de la plataforma."
        ],
        idealPara: "Sitios de portafolio, landing pages y pequeñas empresas.",
        enlace: "Wix"
    },
    wordpress: {
        descripcion: "WordPress.com permite crear sitios web fácilmente, ideal para blogs y sitios de contenido.",
        caracteristicas: [
            "Amplia gama de temas y plugins.",
            "Opciones de personalización limitadas en la versión gratuita.",
            "Ideal para contenido a largo plazo."
        ],
        idealPara: "Blogs, sitios de contenido y pequeñas empresas.",
        enlace: "WordPress.com"
    },
    google: {
        descripcion: "Google Sites permite crear sitios web básicos y colaborativos fácilmente, sin conocimientos de programación.",
        caracteristicas: [
            "Integración con productos de Google como Drive, Calendar y Maps.",
            "Interfaz intuitiva y fácil de personalizar.",
            "No admite dominios personalizados en la versión gratuita."
        ],
        idealPara: "Proyectos educativos, presentaciones y sitios internos.",
        enlace: "Google Sites"
    },
    cloudflare: {
        descripcion: "Cloudflare Pages es una plataforma de hosting gratuita para aplicaciones y sitios estáticos, con CDN integrado.",
        caracteristicas: [
            "Despliegue automático desde repositorios de GitHub.",
            "Rápido rendimiento gracias a su CDN global.",
            "Compatible con frameworks modernos y generación de contenido estático."
        ],
        idealPara: "Aplicaciones estáticas y sitios JAMstack.",
        enlace: "Cloudflare Pages"
    },
    carrd: {
        descripcion: "Carrd es una plataforma simplificada para crear sitios web de una sola página (landing pages).",
        caracteristicas: [
            "Plantillas prediseñadas y fáciles de personalizar.",
            "Plan gratuito con opciones de suscripción pagas para dominios personalizados y funciones avanzadas."
        ],
        idealPara: "Portafolios personales, sitios de presentación y landing pages.",
        enlace: "Carrd"
    }
};

function mostrarInformacion(herramienta) {
    const infoDiv = document.getElementById('informacion');
    const menuDiv = document.getElementById('menu');
    const contenidoDiv = document.getElementById('contenido');
    const volverBtn = document.getElementById('volver');

    // Limpiar el contenido previo
    infoDiv.innerHTML = '';

    // Mostrar información de la herramienta seleccionada
    const herramientaInfo = herramientas[herramienta];
    infoDiv.innerHTML = `
        <h3>${herramientaInfo.enlace}</h3>
        <p>${herramientaInfo.descripcion}</p>
        <h4>Características:</h4>
        <ul>
            ${herramientaInfo.caracteristicas.map(caracteristica => `<li>${caracteristica}</li>`).join('')}
        </ul>
        <p><strong>Ideal para:</strong> ${herramientaInfo.idealPara}</p>
    `;

    // Ocultar el menú y mostrar el contenido
    menuDiv.style.display = 'none';
    contenidoDiv.style.marginLeft = '0';
    volverBtn.style.display = 'block';
}

function volverAlMenu() {
    const menuDiv = document.getElementById('menu');
    const contenidoDiv = document.getElementById('contenido');
    const volverBtn = document.getElementById('volver');

    // Volver a mostrar el menú
    menuDiv.style.display = 'block';
    contenidoDiv.style.marginLeft = '220px';
    volverBtn.style.display = 'none';
}
