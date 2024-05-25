if(document.querySelector("#typetext")){
    var typed = new Typed("#typetext", {
        strings: ["IT training in your browser"],
        loop: false,
        typeSpeed: 100,
        backSpeed: 25,
        backDelay: 500,
        showCursor: false,
    });
} else {
    console.warn("Typed.js not loaded, check if the script is loaded in the head tag.");
}

// click to view the image in full screen
if (document.querySelector(".project-image")) {
    document.querySelectorAll(".project-image").forEach(function (image) {
        image.addEventListener("click", function () {
            var modal = document.createElement("div");
            modal.classList.add("modal");
            modal.innerHTML = "<img src='" + this.src + "' alt='Project Image'>";
            modal.addEventListener("click", function () {
                this.remove();
                document.body.style.overflowY = "auto"; 
            });
            document.body.appendChild(modal);
            document.body.style.overflow = "hidden";
        });
    });
}

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
                    case 'levelup':
                        text = 'levels';
                        color = 'gold';
                        break;
                    case 'trainings':
                        text = 'trainings';
                        color = 'rgb(29, 112, 112)';
                        break;
                    case 'cloudstorage':
                        text = 'cloud storage';
                        color = 'rgb(0, 255, 255)';
                        break;
                    case 'certificates':
                        text = 'certificates';
                        color = 'gold';
                        break;
                    case 'statistics':
                        text = 'statistics';
                        color = 'purple';
                        break;
                    case 'links':
                        text = 'community';
                        color = '#5865F2';
                        break;
                    case 'customtrainings':
                        text = 'custom trainings';
                        color = 'teal';
                        break;
                    case 'customerservice':
                        text = 'customer service';
                        color = 'gold';
                        break;
                    default:
                        text = 'features';
                        color = 'var(--hovered-navitem-color)';
                }

                updateFeatureChangerText(text, color);
            }, 500); // Match this timeout with the exit animation duration
        });

        element.addEventListener('mouseout', () => {
            // Exit animation for the current text
            featureChanger.classList.add('feture-animation-exit');

            setTimeout(() => {
                updateFeatureChangerText('features', 'var(--hovered-navitem-color)');
            }, 500); // Match this timeout with the exit animation duration
        });
    });
});