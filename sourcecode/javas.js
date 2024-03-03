// JavaScript
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
        link.addEventListener("click", () => {
            // Remove the "active" class from all links
            navLinks.forEach((navLink) => {
                navLink.classList.remove("active");
            });

            // Add the "active" class to the clicked link
            link.classList.add("active");
        });
    });
});
// JavaScript Code
// JavaScript Code
// JavaScript Code
let projectIndex = 0;
const transitionDuration = 300; // Adjust this value as needed

function showProjects() {
    const projects = document.querySelectorAll('.project-box:not(.empty)');
    const projectContainer = document.querySelector('.project-container');
    
    for (let i = 0; i < projects.length; i++) {
        projects[i].style.transitionDuration = `${transitionDuration}ms`;
        projects[i].style.transform = `translateX(-${projectIndex * 100}%)`;
    }
    
    projectIndex++;
    if (projectIndex >= projects.length - 2) { 
        projectContainer.style.transitionDuration = '0ms';
        projectIndex = 0; 
        setTimeout(() => {
            projectContainer.style.transitionDuration = `${transitionDuration}ms`;
        }, 50); // Allow a short delay before re-starting the transition
    }

    setTimeout(showProjects, 2000); // Change slide every 2 seconds
}

showProjects();
