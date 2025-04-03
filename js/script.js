const projectContainer = document.getElementById('projectContainer');
const certificateContainer = document.getElementById('certificateContainer');

async function getData(type) {
    try {
        const response = await fetch('../data.json');
        const result = await response.json();
        if (type === 'project') return result.projects;
        if (type === 'certificate') return result.certificates;
    } catch (e) {
        console.error(e);
    }
}

/*
getData('project').then(res => {
    res.forEach(data => {
        const element = document.createElement('div');
        element.classList.add('col-lg-4', 'col-md-12', 'p-3', 'border-top', 'border-bottom');

        // Conditionally render demo button if available
        const demoBtn = data.link[1]
            ? `<a href="${data.link[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-gradient mr-2">
                    <i class="fa fa-globe"></i> Demo
               </a>`
            : '';

        element.innerHTML = `
            <div class="row">
                <div class="col">
                    <img src="${data.img}" alt="${data.nama}" class="img-fluid rounded box-shadow">
                </div>
                <div class="col pl-2">
                    <h2 class="h4 gradient-text font-weight-medium">${data.nama}</h2>   
                    ${data.tags.map(tag => `<small class="tag">${tag}</small>`).join(' ')}
                </div>
            </div>
            <p class="text-secondary mt-1 project-description">${data.desc}</p>
            <div class="d-flex ml-3 mb-2">
                ${demoBtn}
                <a href="${data.link[0]}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
                    <i class="fab fa-github"></i> Github
                </a>
            </div>
        `;
        projectContainer.appendChild(element);
    });
});
*/




// This will fetch data from tech-skills.html
    fetch('tech-skills.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('techSkillsContainer').innerHTML = data;
    });

// Render Certificates as Bootstrap Carousel without tags
getData('certificate').then(certificates => {
    if (!certificates) return;

    const indicators = certificates.map((_, index) => 
        `<li data-target="#certCarousel" data-slide-to="${index}" class="${index === 0 ? 'active' : ''}"></li>`
    ).join('');

    const items = certificates.map((data, index) => {
        const activeClass = index === 0 ? 'active' : '';
        return `
            <div class="carousel-item ${activeClass}">
                <div class="d-flex flex-column align-items-center">
                    <img src="${data.img}" class="img-fluid rounded mb-3" alt="${data.ket}" style="max-height: 500px; object-fit: contain;">
                    <div class="text-center pb-5">
                        <h5 class="gradient-text mb-2">${data.ket}</h5>
                    </div>
                </div>
            </div>`;
    }).join('');

    certificateContainer.innerHTML = `
        <div id="certCarousel" class="carousel slide" data-ride="carousel" data-interval="2500">
            <div class="carousel-inner">
                ${items}
            </div>
            <ol class="carousel-indicators">
                ${indicators}
            </ol>
            <a class="carousel-control-prev d-none d-md-flex align-items-center justify-content-center" href="#certCarousel" role="button" data-slide="prev" style="width: 40px; height: 40px; background-color: rgba(0,0,0,0.5); border-radius: 50%; position: absolute; top: 50%; transform: translateY(-50%); left: 15px; z-index: 2;">
                <span class="text-white" style="font-size: 2rem;">&lt;</span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next d-none d-md-flex align-items-center justify-content-center" href="#certCarousel" role="button" data-slide="next" style="width: 40px; height: 40px; background-color: rgba(0,0,0,0.5); border-radius: 50%; position: absolute; top: 50%; transform: translateY(-50%); right: 15px; z-index: 2;">
                <span class="text-white" style="font-size: 2rem;">&gt;</span>
                <span class="sr-only">Next</span>
            </a>
        </div>`;
});





/*
getData('certificate').then(res => {
    res.forEach(data => {
        const element2 = document.createElement('div');
        element2.classList.add('col-lg-4', 'col-md-12', 'p-3');
        element2.innerHTML = `
            <h2 class="text-center text-secondary h4">${data.ket}</h2>
            <img src="${data.img}" alt="${data.ket}" class="img-fluid rounded box-shadow">
        `;
        certificateContainer.appendChild(element2);
    });
});
*/




/*const projectContainer = document.getElementById('projectContainer')
const certificateContainer = document.getElementById('certificateContainer')

async function getData(data) {
    try {
        const response = await fetch('../data.json')
        const result = await response.json()
        const dataProject = await result.projects
        const dataCertificate = await result.certificates
        if (data == 'certificate') {
            return dataCertificate
        } else if (data == 'project') {
            return dataProject
        }

    } catch (e) {
        console.log(e)
    }
}

getData('project').then(res => {
    res.forEach(data => {
        const element = document.createElement('div');
        element.classList.add('col-lg-4', 'col-md-12', 'p-3', 'border-top', 'border-bottom');
        element.innerHTML = `
            <div class="row">
                            <div class="col">
                                <img src="${data.img}" alt="${data.nama}" class="img-fluid rounded box-shadow">
                            </div>
                            <div class="col pl-2">
                                <h2 class="h4 gradient-text font-weight-medium">${data.nama}</h2>   
                                <small class="tag">${data.tags[0]}</small>
                                <small class="tag">${data.tags[1]}</small>
                                <small class="tag">${data.tags[2]}</small>
                            </div >
                        </div >
                        <p class="text-secondary mt-1 project-description">${data.desc}</p>
                        <div class="row ml-3">
                            <div class="row ">
                                <a href="${data.link[1]}" target="_blank" rel="noopener noreferrer" class="btn btn-gradient"><i
                                        class="fa fa-globe"></i> Demo</a>
                            </div>
                            <div class="row ml-4">
                                <a href="${data.link[0]}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary"><i
                                        class="fab fa-github"></i> Github</a>
                            </div>


                        </div>
            `
        projectContainer.appendChild(element);


    });
})

getData('certificate').then(res => {
    res.forEach(data => {
        const element2 = document.createElement('div');
        element2.classList.add('col-lg-4', 'col-md-12', 'p-3');
        element2.innerHTML = `
    <h2 class= "text-center text-secondary h4" > ${data.ket}.</h2>
<img src="${data.img}" alt="${data.ket}"
    class="img-fluid rounded  box-shadow">

    `
        certificateContainer.appendChild(element2)

    })
}) */
