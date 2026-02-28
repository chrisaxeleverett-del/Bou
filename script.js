// A simple event listener to handle the logic when the 'view bouquet' CTA is clicked.
document.getElementById('view-bouquet-cta').addEventListener('click', () => {
    
    const introScreen = document.getElementById('intro-screen');
    const mainScreen = document.getElementById('main-content-screen');
    const personalLetter = document.getElementById('personal-letter-wrapper');

    // Step 1: Fade out the intro screen.
    introScreen.style.opacity = '0';

    // Step 2: Handle timing of the reveal.
    setTimeout(() => {
        // Remove the intro from the visual flow.
        introScreen.classList.add('hidden');
        
        // Step 3: Reveal the main container (will start out invisible but present).
        mainScreen.classList.remove('hidden');
        
        // Trigger the fade-in of the main screen (which includes your background).
        setTimeout(() => {
            mainScreen.style.opacity = '1';

            // Step 4: After the main background is visible, reveal the letter with depth.
            // We give the bouquet a moment to start floating before showing the letter.
            setTimeout(() => {
                personalLetter.classList.add('visible-element');
                personalLetter.classList.remove('hidden-element');
            }, 800);

        }, 50); // Small 50ms delay ensures the style transition triggers.
    }, 1500); // Wait for the intro screen's 1.5s CSS transition to finish.
});