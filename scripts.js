document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        {
            title: 'Find lost things webapp',
            description: 'A webapp that helps people find their lost things. This project is built using Django.',
            url: 'https://github.com/pakaremon/timdothatlac-webapp'
        },
        {
            title: 'Caro game',
            description: 'A simple caro game built using C# and Winform.',
            url: 'https://github.com/pakaremon/Project_game_caro'
        },
        {
            title: 'Thesis project',
            description: 'applied machine learning to detect malicious packages on popular repositories.',
            url: 'https://github.com/ngoiThu0/thesis'
        }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.url}">View Project</a>
        `;

        projectList.appendChild(projectDiv);
    });
});     