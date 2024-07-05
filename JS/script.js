document.addEventListener('DOMContentLoaded', () => {
    const scrollContent = document.querySelector('.scroll-content');
    const items = Array.from(scrollContent.children);

    // Clone the items to ensure infinite scroll effect
    items.forEach(item => {
        const clone = item.cloneNode(true);
        scrollContent.appendChild(clone);
    });
});