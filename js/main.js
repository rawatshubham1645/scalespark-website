document.addEventListener('DOMContentLoaded', () => {
    try {
        Navigation.init();
        Animations.init();
    } catch (error) {
        console.error('Initialization error:', error);
    }
});
