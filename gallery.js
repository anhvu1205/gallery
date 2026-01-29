const galleryItem = document.querySelectorAll('.gallery-image')

const lightbox = document.getElementById('lightbox')
const lightboxImage = document.getElementById('lightbox-image')
const closeBtn = document.getElementById('closeBtn')
const nextBtn = document.getElementById('nextBtn')
const prevBtn = document.getElementById('prevBtn')

const imageData = Array.from(galleryItem).map(item => ({
    src: item.src,
    alt: item.alt
}))
let currentIndex = 0;

const caption = document.getElementById('caption');
function updateLightbox(index) {
    currentIndex = index;
    const data = imageData[currentIndex];
    lightboxImage.style.animation = 'none';
    lightboxImage.offsetHeight;
    lightboxImage.style.animation = null;
    lightboxImage.src = data.src;
    caption.textContent = data.alt;
    lightbox.classList.add('active');
}
galleryItem.forEach((item, index) => {
    item.addEventListener('click', () => {
        updateLightbox(index);
    });
});
nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imageData.length;
    updateLightbox(currentIndex);
});
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    updateLightbox(currentIndex);
});
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});




