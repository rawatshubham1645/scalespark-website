const Navigation = {
    init() {
        this.setupSmoothScroll();
        this.setupNavbarScroll();
        this.setupSidebar();
    },

    setupSidebar() {
        const toggle = Utils.safeQuerySelector(CONSTANTS.SELECTORS.NAV_TOGGLE);
        const overlay = Utils.safeQuerySelector(CONSTANTS.SELECTORS.SIDEBAR_OVERLAY);
        const closeBtn = Utils.safeQuerySelector(CONSTANTS.SELECTORS.SIDEBAR_CLOSE);
        const links = Utils.safeQuerySelectorAll(CONSTANTS.SELECTORS.SIDEBAR_LINKS);

        const openSidebar = () => {
            document.body.classList.add('sidebar-open');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'true');
                toggle.setAttribute('aria-label', 'Close menu');
            }
            const sidebar = Utils.safeQuerySelector(CONSTANTS.SELECTORS.NAV_SIDEBAR);
            if (sidebar) sidebar.setAttribute('aria-hidden', 'false');
        };

        const closeSidebar = () => {
            document.body.classList.remove('sidebar-open');
            if (toggle) {
                toggle.setAttribute('aria-expanded', 'false');
                toggle.setAttribute('aria-label', 'Open menu');
            }
            const sidebar = Utils.safeQuerySelector(CONSTANTS.SELECTORS.NAV_SIDEBAR);
            if (sidebar) sidebar.setAttribute('aria-hidden', 'true');
        };

        if (toggle) toggle.addEventListener('click', () => {
            const isOpen = document.body.classList.contains('sidebar-open');
            if (isOpen) closeSidebar();
            else openSidebar();
        });

        if (overlay) overlay.addEventListener('click', closeSidebar);
        if (closeBtn) closeBtn.addEventListener('click', closeSidebar);

        links.forEach(link => {
            link.addEventListener('click', () => {
                closeSidebar();
            });
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && document.body.classList.contains('sidebar-open')) {
                closeSidebar();
            }
        });
    },
    
    setupSmoothScroll() {
        const links = Utils.safeQuerySelectorAll(CONSTANTS.SELECTORS.NAV_LINKS);
        
        links.forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const href = anchor.getAttribute('href');
                if (!href) return;
                
                const target = Utils.safeQuerySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: CONSTANTS.SCROLL.BEHAVIOR,
                        block: CONSTANTS.SCROLL.BLOCK
                    });
                }
            });
        });
    },
    
    setupNavbarScroll() {
        const nav = Utils.safeQuerySelector(CONSTANTS.SELECTORS.NAV);
        if (!nav) return;
        
        const handleScroll = Utils.debounce(() => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= CONSTANTS.NAVBAR.SCROLL_THRESHOLD) {
                nav.style.background = CONSTANTS.NAVBAR.BACKGROUND_TRANSPARENT;
            } else {
                nav.style.background = CONSTANTS.NAVBAR.BACKGROUND_SCROLLED;
            }
        }, CONSTANTS.SCROLL.DEBOUNCE_DELAY);
        
        window.addEventListener('scroll', handleScroll);
    }
};
