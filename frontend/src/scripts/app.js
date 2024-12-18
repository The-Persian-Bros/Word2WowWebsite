document.addEventListener('DOMContentLoaded', () => {
    const storyForm = document.getElementById('storyForm');
    const inputSection = document.getElementById('input-section');
    const previewSection = document.getElementById('preview-section');
    const comicLayout = document.getElementById('comicLayout');
    const storyInput = document.getElementById('storyInput');
    const charCounter = document.getElementById('charCounter');
    const maxChars = 500;

    // Update Character Counter
    storyInput.addEventListener('input', () => {
        const currentLength = storyInput.value.length;
        charCounter.textContent = `${currentLength} / ${maxChars}`;
    });

    // Form Submission Logic
    storyForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (storyInput.value.trim()) {
            // Trigger Input Section Animation
            inputSection.classList.add('moving-section');

            // Simultaneous Scroll and Show Preview Section
            setTimeout(() => {
                previewSection.classList.add('show-preview');
                previewSection.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }, 300); // Slight delay for smooth scroll and appearance

            // Simulate Loading Effect
            comicLayout.innerHTML = `
                <div class="loading-clouds">
                    <div class="cloud cloud1"></div>
                    <div class="cloud cloud2"></div>
                    <div class="cloud cloud3"></div>
                    <div class="cloud cloud4"></div>
                    <div class="cloud cloud5"></div>
                    <div class="cloud cloud6"></div>
                </div>
            `;

            // Show Comic After Animation
            setTimeout(() => {
                comicLayout.innerHTML = `
                    <div class="glass-container">
                        <h3>Comic Generated:</h3>
                        <p>Your story: "${storyInput.value}"</p>
                        <p>[Generated comic images will appear here]</p>
                    </div>
                `;
            }, 7000); // Simulated loading delay
        } else {
            comicLayout.innerHTML = `<p class="placeholder-text">Please enter a valid story.</p>`;
        }
    });
});
