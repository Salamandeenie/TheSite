// Array of project data
const projects = [
    {
        title: "Dummy Project",
        description: "This is a dummy project. This is only used to test display functionality of project chips. Ignore this project.",
        status: "Dummy",
        codebase: ['pseudoscript'],
        display: false,
        Ghub: "#",
        Live: "#"
    },

    {
        title: "TheSite",
        description: "The website you are currently viewing.",
        status: "In Progress",
        codebase: ['HTML', 'CSS', 'JS'],
        Ghub: "https://github.com/Salamandeenie/TheSite",
        Live: "https://salamandeenie.github.io/TheSite/"
    },

    {
        title: "Numberdle",
        description: "My numerical take on a popular word guessing game.",
        status: "Finished",
        codebase: ['HTML', 'CSS', 'JS'],
        Ghub: "https://github.com/Salamandeenie/Numberdle",
        Live: "https://salamandeenie.github.io/Numberdle/Project%20Numberpad/Index.html"
    },

    {
        title: "Chesstack",
        description: "A chess-like game where the pieces are replaced by a bunch of cups that move corresponding to their stack height.",
        status: "Shelved",
        codebase: ['HTML', 'CSS', 'JS'],
        Ghub: "https://github.com/Salamandeenie/Chesstack-v2",
        Live: "https://salamandeenie.github.io/Chesstack/"
    },

    {
        title: "Chesstack (POC)",
        description: "A chess-like game where the pieces are replaced by a bunch of cups that move corresponding to their stack height. This is the very rough proof of concept version. It is suggested that you play the non-POC release",
        status: "Finished",
        codebase: ['HTML', 'CSS', 'JS'],
        Ghub: "https://github.com/Salamandeenie/POC__Chesstack",
        Live: "https://salamandeenie.github.io/POC__Chesstack/Project%20Stackers/Index.html"
    },

    {
        title: "FloCode Studio",
        description: "If OneNote, Visual Code Studio, and MS Paint had a baby. This project has been scrapped as the work needed to create an IDE is currently beyond me. If you are interested in the idea, I just ask for a simple mention, lol",
        status: "Scrapped",
        codebase: ["pseudoscript"],
    },
];

// Status color mapping
const statusColors = {
    Finished: "limegreen",
    "In Progress": "yellow",
    Shelved: "orange",
    Scrapped: "red",
    Dummy: "purple"
};

const codebases = 
{

}

// Function to generate project chips
function generateProjectChips(projects) {
    const container = document.getElementById("projects-container");

    projects.forEach(project => {
        if(project.display === false) return;
        // Default to "Dummy" if status is invalid or missing
        const status = statusColors[project.status] ? project.status : "Dummy";

        // Create the project chip
        const chip = document.createElement("section");
        chip.classList.add("project-chip");

        // Add title and status
        const titleContainer = document.createElement("div");
        titleContainer.classList.add("title-status");
        titleContainer.innerHTML = `
            <h2>${project.title}</h2>
            <span class="status" style="background-color: ${statusColors[status]};">${status}</span>
        `;

        // Add description
        const description = document.createElement("p");
        description.classList.add("description");
        description.textContent = project.description;

        // Add codebase icons
        const iconsContainer = document.createElement("div");
        iconsContainer.classList.add("icons-container");

        // Map each language to its respective icon (add more mappings as needed)
        const languageIcons = {
            HTML: "icons/html5/html5-original.svg",
            JS: "icons/javascript/javascript-original.svg",
            CSS: "icons/css3/css3-original.svg",
            pseudoscript: "icons/devicon/devicon-original.svg" // Example for dummy language
        };

        // Only display up to 3 icons
        project.codebase.slice(0, 3).forEach(language => {
            const icon = document.createElement("img");
            icon.src = languageIcons[language] || "icons/default-icon.svg"; // Fallback to a default icon
            icon.alt = `${language} icon`;
            icon.classList.add("language-icon");
            iconsContainer.appendChild(icon);
        });

        // Add links
        const links = document.createElement("div");
        links.classList.add("links");

        // GitHub link
        const githubLink = document.createElement("a");
        githubLink.href = project.Ghub || "#";
        githubLink.classList.add("github-link");
        githubLink.innerHTML = `<img src="github-logo.svg" alt="GitHub Logo"> GitHub Page`;
        if (!project.Ghub) {
            githubLink.style.backgroundColor = "#555";
            githubLink.style.color = "#999";
            githubLink.style.pointerEvents = "none"; // Disable link if unavailable
        }
        links.appendChild(githubLink);

        // Live demo link
        const liveDemoLink = document.createElement("a");
        liveDemoLink.href = project.Live || "#";
        liveDemoLink.classList.add("demo-link");
        liveDemoLink.textContent = "⚡ Live Demo";
        if (!project.Live) {
            liveDemoLink.style.backgroundColor = "#555";
            liveDemoLink.style.color = "#999";
            liveDemoLink.style.pointerEvents = "none"; // Disable link if unavailable
        }
        links.appendChild(liveDemoLink);

        // Append all elements to chip
        chip.appendChild(titleContainer);
        chip.appendChild(description);
        chip.appendChild(iconsContainer); // Add icons container
        chip.appendChild(links);

        // Append chip to container
        container.appendChild(chip);
    });
}

// Generate chips on page load
document.addEventListener("DOMContentLoaded", () => generateProjectChips(projects));
