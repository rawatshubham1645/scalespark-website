const Animations = {
    init() {
        this.setupIntersectionObserver();
    },
    
    setupIntersectionObserver() {
        const observerOptions = {
            threshold: CONSTANTS.ANIMATION.THRESHOLD,
            rootMargin: CONSTANTS.ANIMATION.ROOT_MARGIN
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = CONSTANTS.ANIMATION.FADE_IN_UP;
                }
            });
        }, observerOptions);
        
        const elementsToObserve = [
            CONSTANTS.SELECTORS.SERVICE_CARDS,
            CONSTANTS.SELECTORS.PROMISE_CONTENT,
            CONSTANTS.SELECTORS.FOUNDER_INFO,
            CONSTANTS.SELECTORS.CONTACT_CARDS
        ];
        
        elementsToObserve.forEach(selector => {
            const elements = Utils.safeQuerySelectorAll(selector);
            elements.forEach(el => observer.observe(el));
        });
    }
};
