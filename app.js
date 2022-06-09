const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransitions() {
    const controls = [...document.querySelectorAll('.control')]

    controls.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.active-btn').classList.remove('active-btn');
            this.classList.add('active-btn');  
        })
    })

    // Adding active class to each section
    allSections.addEventListener('click', e => {
        const id = e.target.dataset.id;
        if(id){
            // hide other sections
            sections.forEach(sect => {
                sect.classList.remove('active');
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions()