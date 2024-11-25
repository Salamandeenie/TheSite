// Array of project data
const projects = [
    {
        title: "Dummy Project",
        description: "This is a dummy project. This is only used to test display functionality of project chips. Ignore this project.",
        status: "Dummy",
        Ghub: "#",
        Live: "#"
    },
    {
        title: "Finished Game",
        description: "A fully completed game project showcasing mechanics and design.",
        status: "Finished",
        Ghub: "https://github.com/example/finished-game",
        Live: "https://example.com/finished-game"
    },
    {
        title: "Work in Progress Game",
        description: "A game that's currently in development.",
        status: "In Progress",
        Ghub: "https://github.com/example/wip-game",
        Live: ""
    }
];

// Status color mapping
const statusColors = {
    Finished: "limegreen",
    "In Progress": "yellow",
    Shelved: "orange",
    Scrapped: "red",
    Dummy: "purple"
};

// Function to generate project chips
function generateProjectChips(projects) {
    const container = document.getElementById("projects-container");

    projects.forEach(project => {
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

        // Add links
        const links = document.createElement("div");
        links.classList.add("links");

        // GitHub link
        const githubLink = document.createElement("a");
        githubLink.href = project.Ghub || "#";
        githubLink.classList.add("github-link");
        githubLink.innerHTML = `<img src="github-logo.svg" alt="GitHub Logo"> GitHub Page`;
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
        chip.appendChild(links);

        // Append chip to container
        container.appendChild(chip);
    });
}

// Generate chips on page load
document.addEventListener("DOMContentLoaded", () => generateProjectChips(projects));
