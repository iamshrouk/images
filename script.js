
const images = [
    'image1.jpg',
    'image3.jpg',
    'image4.jpg',
    'image5.jpg'
    
  ];
  
  let currentIndex = 0;
  
  function showImage(index) {
    const imageElement = document.getElementById('current-image');
    imageElement.src = images[index];
  }
  
  function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }
  
  function showPreviousImage() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }
  
  
  showImage(currentIndex);
  