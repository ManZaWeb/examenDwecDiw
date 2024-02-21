//Autor: Mario Alfonso Nuñez
//GitHub Link: https://github.com/ManZaWeb/examenDwecDiw


document.addEventListener("DOMContentLoaded", function () {
    iniciarApp();
  });
   


  //Funcion que inicia la app y sus funciones.
  function iniciarApp() {
    
    crearGaleria();
    
    scrollNav();
   
  }

  function crearGaleria() {
    const galeria = document.querySelector(".galeria-imagenes");
   
    for (let i = 1; i <= 6; i++) {
      const imagen = document.createElement("picture");
      imagen.innerHTML = `
   
  <source srcset="build/fotos/thumb/${i}.webp" type="image/webp">
  <img loading="lazy" width="200" height="300" src="build/fotos/thumb/${i}.jpg" alt="imagen galeria">
          `;
      imagen.onclick = function () {
        mostrarImagen(i);
      };
   
      galeria.appendChild(imagen);
    }
  }
   
  function mostrarImagen(id) {
    const imagen = document.createElement("picture");
    imagen.innerHTML = `
    <source srcset="build/fotos/grande/${id}.webp" type="image/webp">
    <img loading="lazy" width="700" height="500" src="build/fotos/grande/${id}.jpg" alt="imagen galeria">
     `;
   
    const overlay = document.createElement("DIV");
    overlay.appendChild(imagen);
    overlay.classList.add("overlay");
    overlay.onclick = function () {
      const body = document.querySelector("body");
      body.classList.remove("fijar-body");
      overlay.remove();
    };
   
    const cerrarModal = document.createElement("P");
    cerrarModal.textContent = "X";
    cerrarModal.classList.add("btn-cerrar");
    cerrarModal.onclick = function () {
      const body = document.querySelector("body");
      body.classList.remove("fijar-body");
      overlay.remove();
    };
    overlay.appendChild(cerrarModal);
   
    const body = document.querySelector("body");
    body.appendChild(overlay);
    body.classList.add("fijar-body");
  }

document.addEventListener('DOMContentLoaded', function () {
    const modoOscuroBtn = document.getElementById('dark');
    const body = document.body;
  
    console.log("Script de Modo Oscuro cargado.");
  
    modoOscuroBtn.addEventListener('click', function () {
      console.log("Botón de Modo Oscuro clickeado.");
      body.classList.toggle('modo-oscuro');
  
      if (body.classList.contains('modo-oscuro')) {
        localStorage.setItem('modoOscuro', 'activo');
        console.log("Modo oscuro activado.");
      } else {
        localStorage.removeItem('modoOscuro');
        console.log("Modo oscuro desactivado.");
      }
    });
  });

  
  
  function scrollNav() {
    const enlaces = document.querySelectorAll(".navegacion-principal a");
  
    
  
    enlaces.forEach((enlace) => {
      enlace.addEventListener("click", function (e) {
        
        e.preventDefault();
  
       
        const seccionScroll = e.target.attributes.href.value;
      
        const seccion = document.querySelector(seccionScroll);
        
        seccion.scrollIntoView({ behavior: "smooth" });
      });
    });
  }
  