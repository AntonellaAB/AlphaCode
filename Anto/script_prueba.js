// class name {
//     constructor(parameters) {
        
//     }
// }



// const img = document.getElementById('producto1');

// img.addEventListener('mouseover', () => {
//     img.src = 'photos/productos/Camisetas 1B.png';
// });

// img.addEventListener('mouseout', () => {
//     img.src = 'photos/productos/Camisetas 1.png';
// });

const imgs = document.querySelectorAll('#product1 .pro img');

imgs.forEach(img => {
  const originalSrc = img.src;
  const hoverSrc = img.dataset.hover;

  img.addEventListener('mouseover', () => {
    img.src = hoverSrc;
  });

  img.addEventListener('mouseout', () => {
    img.src = originalSrc;
  });
});