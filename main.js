function toggleMenu(){ document.querySelector('.nav__dropdown')?.classList.toggle('is-open'); }
window.toggleMenu = toggleMenu;

document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname.split("/").pop(); 
    const navLinks = document.querySelectorAll(".nav__item a");
  
    navLinks.forEach(link => {
      if (link.getAttribute("href") === currentPage) {
        link.classList.add("nav__link--active");
      }
    });
  });

  const galleryItems = document.querySelectorAll(".projects img, .projects video");
  const lightbox = document.querySelector(".lightbox");
  const lightboxContent = document.querySelector(".lightbox__content");
  const closeBtn = document.querySelector(".lightbox__close");


  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex"; 

      if (item.tagName === "IMG") {
        lightboxContent.innerHTML = `<img src="${item.src}" alt="${item.alt}">`;
      } else if (item.tagName === "VIDEO") {

        lightboxContent.innerHTML = `
          <video src="${item.querySelector("source")?.src || item.src}" 
                 controls autoplay></video>`;
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
    lightboxContent.innerHTML = "";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
      lightboxContent.innerHTML = "";
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        document.querySelectorAll('.typewriter').forEach(el => el.classList.add('run'));
      });
    } else {

      document.querySelectorAll('.typewriter').forEach(el => el.classList.add('run'));
    }
  });