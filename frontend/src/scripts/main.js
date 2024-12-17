// Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Lightbox Effect for Demo Images
const images = document.querySelectorAll('.demo-img');

images.forEach(image => {
    image.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox';
        lightbox.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0, 0, 0, 0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;';
        const img = document.createElement('img');
        img.src = image.src;
        img.style.cssText = 'max-width: 90%; max-height: 90%;';
        lightbox.appendChild(img);
        lightbox.addEventListener('click', () => lightbox.remove());
        document.body.appendChild(lightbox);
    });
});

// Select Elements
const modal = document.querySelector('#successModal');
const form = document.querySelector('form');
const closeModalBtn = document.querySelector('.close-modal');

// Show Modal Function
function showModal() {
    modal.classList.add('show');
    document.body.classList.add('modal-active'); // Disable scrolling
}

// Close Modal Function
function closeModal() {
    modal.classList.remove('show');
    document.body.classList.remove('modal-active'); // Enable scrolling
}

// Listen for Form Submission
form.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent actual form submission
    showModal(); // Show the modal after submission
    form.reset(); // Clear form inputs
});

// Close Modal on Button Click
closeModalBtn.addEventListener('click', closeModal);

// Close Modal on Outside Click
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});
