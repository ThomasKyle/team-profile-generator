const generatePage = (employees) => {
    const managerCard = (manager) => {
        return `
        <div class="card mb-3" style="max-width: 18rem;">
        <div class="info-header">
          <h2>${manager.name}</h2> <h3>Manager</h3>
        </div>
        <div class="info-body">
        <p class="info-text">ID:${manager.id}</p>
        <p class="info-text">Email:${manager.email}<a href="${manager.email}"></a></p>
        <p class="info-text">Office Number:${manager.officeNumber}</p>
        </div>
      </div>`;
    };

    const engineerCard = (engineer) => {
        return `
        <div class="info mb-3" style="max-width: 18rem;">
        <div class="info-header">
          <h2>${engineer.name}</h2> <h3>Engineer</h3>
        </div>
        <div class="info-body">
        <p class="info-text">ID:${engineer.id}</p>
        <p class="info-text">Email:${engineer.email}<a href="${engineer.email}"></a></p>
        <p class="info-text">GitHub:${engineer.github}</p>
        </div>
      </div>`;
    };

    const internCard = (intern) => {
        return `
        <div class="info mb-3" style="max-width: 18rem;">
        <div class="info-header">
          <h2>${intern.name}</h2> <h3>Intern</h3>
        </div>
        <div class="info-body">
        <p class="info-text">ID:${intern.id}</p>
        <p class="info-text">Email:${intern.email}<a href="${intern.email}"></p>
        <p class="info-text">School:${intern.school}</p>
        </div>
      </div>`;
    };

};
