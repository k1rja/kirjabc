const $  = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));


function toggleMenu() {
  const menu = $('.nav__dropdown');
  if (!menu) return;
  const isOpen = menu.classList.toggle('is-open');

  const btn = $('.burger');
  if (btn) btn.setAttribute('aria-expanded', String(isOpen));
}
window.toggleMenu = toggleMenu; 


document.addEventListener('DOMContentLoaded', () => {

  const current = location.pathname
    .replace(/\/+$/, '')     
    .split('/').pop() || 'index';
  const currentKey = current.replace(/\.html$/i, ''); 

  $$('.nav__item a').forEach(a => {
    const hrefKey = (a.getAttribute('href') || '/')
      .replace(/^\//, '')   
      .replace(/\/+$/, '')    
      .replace(/\.html$/i, '')  
      || 'index';
    if (hrefKey === currentKey) a.classList.add('nav__link--active');
  });

 
  const lightbox        = $('.lightbox');
  const lightboxContent = $('.lightbox__content');
  const closeBtn        = $('.lightbox__close');
  const galleryItems    = $$('.projects img, .projects video');

  const openLightbox = (html) => {
    if (!lightbox || !lightboxContent) return;
    lightboxContent.innerHTML = html;
    lightbox.classList.add('is-open');
    document.body.classList.add('modal-open'); 
  };

  const closeLightbox = () => {
    if (!lightbox || !lightboxContent) return;
    lightbox.classList.remove('is-open');
    lightboxContent.innerHTML = '';
    document.body.classList.remove('modal-open');
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      if (item.tagName === 'IMG') {
        openLightbox(`<img src="${item.src}" alt="${item.alt || ''}">`);
      } else {
        const src = item.querySelector('source')?.src || item.currentSrc || item.src;
        openLightbox(`<video src="${src}" controls autoplay></video>`);
      }
    });
  });

  closeBtn?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLightbox(); });

 
  const startTypewriter = () =>
    $$('.typewriter').forEach(el => el.classList.add('run'));

  startTypewriter(); 
});