
// Skills array
const skills = [
    { name: "HTML", icon: "fa-html5", percent: 90 },
    { name: "CSS", icon: "fa-css3-alt", percent: 85 },
    { name: "JavaScript", icon: "fa-js", percent: 80 },
    { name: "React", icon: "fa-react", percent: 75 },
    { name: "MySQL", icon: "fa-database", percent: 80 }
];

// Projects array
const projects = [
    {
        name: "StudySync",
        description: "A Smart Study Planner using React and MySQL.",
        icon: "fa-book-open"
    },
    {
        name: "Ambulance Management System",
        description: "A database project for managing ambulance services.",
        icon: "fa-truck-medical"
    },
    {
        name: "Personal Portfolio",
        description: "A website showcasing my skills and projects.",
        icon: "fa-desktop"
    }
];

// Function to display skills
function displaySkills() {

    const list = document.getElementById("skillList");

    list.innerHTML = "";

    skills.forEach(function(skill) {

        const card = document.createElement("div");

        card.className = "skill-card";

        card.innerHTML = `
            <i class="fab ${skill.icon}"></i>
            <h3>${skill.name}</h3>

            <div class="progress">
                <div class="progress-bar"
                     style="width:${skill.percent}%">
                </div>
            </div>

            <span class="skill-percent">${skill.percent}%</span>
        `;

        list.appendChild(card);

    });
}

// Function to display projects
function displayProjects() {

    const list = document.getElementById("projectList");

    list.innerHTML = "";

    projects.forEach(function(project) {

        const card = document.createElement("div");

        card.className = "project-card";

        card.innerHTML = `
            <div class="project-icon">
                <i class="fas ${project.icon}"></i>
            </div>

            <div>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="#contact">View Project <i class="fas fa-arrow-right"></i></a>
            </div>
        `;

        list.appendChild(card);

    });

}

// Function to handle contact form
function handleSubmit(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("result").textContent =
        "Thank you, " + name + "! Your message has been received.";

    document.getElementById("contactForm").reset();

}

// Event listener for contact form
document.getElementById("contactForm")
    .addEventListener("submit", handleSubmit);

// Function to go to top
function goToTop() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// Show back-to-top button when scrolling
window.addEventListener("scroll", function() {

    const button = document.getElementById("topBtn");

    if (window.scrollY > 300) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }

});

// Initial display
displaySkills();
displayProjects();
