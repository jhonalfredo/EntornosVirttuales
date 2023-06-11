window.addEventListener('DOMContentLoaded', (event) => {
    const fileInput = document.getElementById('fileInput');
    const previewImage = document.getElementById('previewImage');
  
    fileInput.addEventListener('change', (event) => {
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.addEventListener('load', (event) => {
        previewImage.src = event.target.result;
        previewImage.style.display = 'block';
      });
  
      if (file) {
        reader.readAsDataURL(file);
      }
    });
  });
  