
// Transicion de imagenes a la segunda imagen 
// falta ajustar los valores de img.style.opacity = '0';
const imgs = document.querySelectorAll('#product1 .pro img');

imgs.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  img.addEventListener('mouseover', () => {
    img.src = hoverSrc;
    //img.style.opacity = '0.5';
    //setTimeout() => {
      //img.style.opacity = '1'; // prueba mejorar 
     //400); // esperar a que desaparezca antes de cambiar
  });

  img.addEventListener('mouseout', () => {
    img.src = originalSrc;
    //img.style.opacity = '0.5';
    //setTimeout() => {
      
      //img.style.opacity = '1';
    //} 400);
  });
});
