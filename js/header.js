const addprojectsDropdown = function() {
    const projectsDrop = document.getElementById('projectsdrop');
    const deploydropdownzone = document.getElementById('deploydropdownzone');
    
    if (!document.getElementById('aboutdropdown')) {
        projectsDrop.classList.add('activehover');

        
        const aboutDropdownHtml = `
        <div class="dropdown" id="aboutdropdown">
            <div class="holdercontaineroverflower">
                <div class="dropdowncontentholder">
                    <div class="innerdropdown">
                        <div class="sectiondroptitles">
                            <p>H-Class work</p>
                        </div>
                        <a id="atexttopheader" href="/projects/hcyber">
                        <div class="higherlongside">
                            <div class="projectheader">
                                <div class="imageholder">
                                    <img src="/img/HCyber (40 x 40 px).png">
                                </div>
                                <div class="projecttextheader">
                                    <h2>HCyber</h2>
                                    <p>HCyber, The IT training platform</p>
                                </div>
                            </div>
                        </a>
                        </div>
                    </div>
                    <div class="sectiondroptitles lowertitleheader">
                        <p>Personal Projects</p>
                    </div>
                    <div class="innerdropdown">
                    <a id="atexttopheader" href="/projects/securesync">
                        <div class="halfprojectcontainer">
                            <div class="projectheader">
                                <div class="imageholder">
                                    <img src="/img/securesynclogo.png">
                                </div>
                                <div class="projecttextheader">
                                    <h2>SecureSync</h2>
                                    <p>Cloud Storage</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;
        
        deploydropdownzone.insertAdjacentHTML('beforeend', aboutDropdownHtml);
        
    }
};

const addaboutDropdown = function() {
    const aboutsDrop = document.getElementById('aboutsdrop'); // corrected ID
    const deploydropdownzone = document.getElementById('deploydropdownzone');
    
    if (!document.getElementById('aboutmecontainerdropdown')) {
        aboutsDrop.classList.add('activehover');
        
        const aboutDropdownHtml = `
        <div class="dropdown" id="aboutmecontainerdropdown">
            <div class="holdercontaineroverflower">
                <div class="dropdowncontentholder">
                    <div class="innerdropdown">
                        <div class="sectiondroptitles">
                            <p>Personal Life</p>
                        </div>
                        <a id="atexttopheader" href="/about/motivation">
                        <div class="higherlongside">
                            <div class="projectheader">
                                <div class="imageholder">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 21H13V6C13 4.34315 14.3431 3 16 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21ZM11 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H8C9.65685 3 11 4.34315 11 6V21ZM11 21H13V23H11V21Z"></path></svg>
                                </div>
                                <div class="projecttextheader">
                                    <h2>Motivating Factors</h2>
                                    <p>Why did I start my IT career?</p>
                                </div>
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        `;
        deploydropdownzone.insertAdjacentHTML('beforeend', aboutDropdownHtml);
    }
};

// Function to add the experience dropdown
const addExperienceDropdown = function() {
    const experiencedrop = document.getElementById('experiencedropdown');
    const deploydropdownzone = document.getElementById('deploydropdownzone');
    
    if (!document.getElementById('experiencedropdownholder')) {
        experiencedrop.classList.add('activehover');
        
        const experienceDropdownHtml = `
        <div class="dropdown" id="experiencedropdownholder">
            <div class="holdercontaineroverflower">
                <div class="dropdowncontentholder">
                    <div class="innerdropdown">
                        <div class="sectiondroptitles">
                            <p>Hdev Group</p>
                        </div>
                        <a id="atexttopheader" href="/#experience">
                        <div class="higherlongside">
                        <div class="projectheader">
                            <div class="imageholder">
                                <img src="/img/logo (2).png">
                            </div>
                            <div class="projecttextheader">
                                <h2>What I do</h2>
                                <p>Explore what I do at Hdev.</p>
                            </div>
                        </div>
                        </a>
                    </div>
                    <a href="/experience/hdevteam" id="atexttopheader">
                    <div class="higherlongside">
                    <div class="projectheader">
                        <div class="imageholder">
                            <img src="/img/logo (2).png">
                        </div>
                        <div class="projecttextheader">
                            <h2>Meet the team</h2>
                            <p>Hdev, Software / Security Engineering</p>
                        </div>
                    </div>
                </div>
                </a>
                    </div>
                </div>
            </div>
        </div>`;
        
        deploydropdownzone.insertAdjacentHTML('beforeend', experienceDropdownHtml);
    }
};
const addDropdownEventListeners = function() {
    const main = document.getElementById('mainclassremovaldropdown');
    const projectsDrop = document.getElementById('projectsdrop');
    const aboutsDrop = document.getElementById('aboutsdrop');
    const experiencedrop = document.getElementById('experiencedropdown');
    let activeDropdown = null; // Variable to store the active dropdown

    const removeDropdowns = function() {
        // Remove all dropdowns except the active one
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (dropdown !== activeDropdown) {
                const aboutsdrop = document.getElementById('aboutsdrop');
                const projectsdrop = document.getElementById('projectsdrop');
                const experiencedrop = document.getElementById('experiencedropdown');
                aboutsdrop.classList.remove('activehover');
                projectsdrop.classList.remove('activehover');
                experiencedrop.classList.remove('activehover');

                dropdown.classList.remove('activehover');
                dropdown.classList.add('removeheader');
                setTimeout(() => {
                    dropdown.remove();
                }, 500);
            }
        });
    };

    const showProjectsDropdown = function() {
        removeDropdowns();
        activeDropdown = addprojectsDropdown();
    };

    const showAboutsDropdown = function() {
        removeDropdowns();
        activeDropdown = addaboutDropdown();
    };

    const showExperienceDropdown = function() {
        removeDropdowns();
        activeDropdown = addExperienceDropdown();
    };

    // Event listener for mouseenter on main to remove dropdowns
    main.addEventListener('mouseenter', removeDropdowns);

    // Event listeners for showing dropdowns
    projectsDrop.addEventListener('mouseenter', showProjectsDropdown);
    aboutsDrop.addEventListener('mouseenter', showAboutsDropdown);
    experiencedrop.addEventListener('mouseenter', showExperienceDropdown);
};

// Call the function to add event listeners
addDropdownEventListeners();

// burger listeners
function burgerprojects(){
    const projectburger = document.getElementById('projectburger');
    const projectburgerdropdown = document.getElementById('projectburgerdropdown');
    projectburger.addEventListener('click', function(){
        projectburgerdropdown.classList.toggle('activedropdown');
        projectburgerdropdown.classList.toggle('hiddendropdown');
    });
}
function burgerabout(){
    const aboutburger = document.getElementById('aboutburger');
    const aboutburgerdropdown = document.getElementById('aboutburgerdropdown');
    aboutburger.addEventListener('click', function(){
        aboutburgerdropdown.classList.toggle('activedropdown');
        aboutburgerdropdown.classList.toggle('hiddendropdown');
    });
}
function burgerexperience(){
    const experienceburger = document.getElementById('experienceburger');
    const experienceburgerdropdown = document.getElementById('experienceburgerdropdown');
    experienceburger.addEventListener('click', function(){
        experienceburgerdropdown.classList.toggle('activedropdown');
        experienceburgerdropdown.classList.toggle('hiddendropdown');
    });
}
function burgermenudeploy() {
    const burgermenumain = document.getElementById('burgermenumain');
    const activeburgermenu = 'activeburgermenu';
    
    if(burgermenumain.classList.contains(activeburgermenu)){
        burgermenumain.classList.add('removeburgermenu');
        setTimeout(() => {
            burgermenumain.classList.remove(activeburgermenu);
            burgermenumain.classList.remove('removeburgermenu');
        }, 500);
    } else {
        burgermenumain.classList.add(activeburgermenu);
    }
}