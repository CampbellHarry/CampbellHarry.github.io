document.addEventListener('DOMContentLoaded', (event) => {
    const featureChanger = document.getElementById('feturechanger');
    const informationElements = document.querySelectorAll('.information');

    const updateFeatureChangerText = (text, color) => {
        // Remove existing animation classes
        featureChanger.classList.remove('feture-animation-enter', 'feture-animation-exit');

        // Set the text content
        featureChanger.textContent = text;

        // Set the text color
        featureChanger.style.color = color;

        // Add the enter animation class
        featureChanger.classList.add('feture-animation-enter');

        // Remove the enter animation class after the animation duration
        setTimeout(() => {
            featureChanger.classList.remove('feture-animation-enter');
        }, 500);
    };

    informationElements.forEach(element => {
        element.addEventListener('mouseover', () => {
            // Exit animation for the current text
            featureChanger.classList.add('feture-animation-exit');

            setTimeout(() => {
                let text = '';
                let color = '';

                // Determine text and color based on the hovered element
                switch (element.id) {
                    case 'fullstacksite':
                        text = 'Full Stack';
                        color = '#008080';
                        break;
                    case 'IT':
                        text = 'IT Services';
                        color = 'rgb(29, 112, 112)';
                        break;
                    case 'nodejs':
                        text = 'Node.JS';
                        color = '#6cc24a';
                        break;
                    case 'GITskills':
                        text = 'Git';
                        color = '#f14e32';
                        break;
                    case 'communication':
                        text = 'communication';
                        color = 'purple';
                        break;
                    case 'network':
                        text = 'network';
                        color = '#5865F2';
                        break;
                    case 'projectmanagment':
                        text = 'project management';
                        color = 'teal';
                        break;
                    case 'security':
                        text = 'security';
                        color = '#0047AB';
                        break;
                    default:
                        text = 'features';
                        color = 'var(--hovered-navitem-color)';
                }

                updateFeatureChangerText(text, color);
            }, 500); 
        });

        element.addEventListener('mouseout', () => {
            // Exit animation for the current text
            featureChanger.classList.add('feture-animation-exit');

            setTimeout(() => {
                updateFeatureChangerText('development', 'var(--hovered-navitem-color)');
            }, 500); 
        });
    });
});
