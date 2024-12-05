const images = document.querySelectorAll('.slider-images img');
const sliderImagesContainer = document.querySelector('.slider-images');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const indicatorsContainer = document.getElementById('indicators');
let currentIndex = 0;
const imageCount = images.length;

// Create position indicator dots
function createIndicators() {
    for (let i = 0; i < imageCount; i++) {
        const dot = document.createElement('span');
        dot.classList.add('indicator-dot');
        dot.addEventListener('click', () => goToImage(i));
        indicatorsContainer.appendChild(dot);
    }
}

// Update the display for the active image and indicator
function updateDisplay() {
    // Move the slider horizontally
    sliderImagesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;

    // Update indicators
    const dots = document.querySelectorAll('.indicator-dot');
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

// Show the first image on page load
function showImage(index) {
    currentIndex = index;
    updateDisplay();
}

// Navigate to the next image
function nextImage() {
    currentIndex = (currentIndex + 1) % imageCount; // Loop back to the first image
    showImage(currentIndex);
}

// Navigate to the previous image
function prevImage() {
    currentIndex = (currentIndex - 1 + imageCount) % imageCount; // Loop back to the last image
    showImage(currentIndex);
}

// Go to specific image when dot is clicked
function goToImage(index) {
    currentIndex = index;
    showImage(currentIndex);
}

// Event listeners for arrow buttons
nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

// Automatic slideshow functionality
setInterval(nextImage, 3000); // Change image every 3 seconds

// Initial setup
createIndicators();
showImage(currentIndex);
