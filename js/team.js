document.addEventListener('DOMContentLoaded', function () {
    const userAvatars = document.querySelectorAll('.userav');

    userAvatars.forEach(function (avatar) {
        avatar.addEventListener('mouseover', function (event) {
            const tooltipContent = this.getAttribute('data-content');
            const tooltipTitle = this.getAttribute('data-title');

            // Create tooltip element
            const tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerHTML = `
                <span class="tooltiptitle">${tooltipTitle} <br></span>
                <span class="tooltiptext">${tooltipContent}</span>
            `;

            // Position tooltip relative to the hovered element
            const rect = this.getBoundingClientRect();
            tooltip.style.top = rect.top + window.scrollY + 'px';
            tooltip.style.left = rect.left + window.scrollX + 'px';

            // Add tooltip to the document body
            document.body.appendChild(tooltip);

            // Fade in animation
            tooltip.style.opacity = '0';
            tooltip.style.transition = 'opacity 0.3s';
            setTimeout(function () {
                tooltip.style.opacity = '1';
            }, 10);

            // Remove tooltip when mouse leaves the hovered element
            this.addEventListener('mouseleave', function () {
                // Check if tooltip is still a child of document.body
                if (tooltip.parentNode === document.body) {
                    // Fade out animation
                    tooltip.style.opacity = '0';
                    setTimeout(function () {
                        document.body.removeChild(tooltip);
                    }, 300);
                }
            });
        });
    });
});