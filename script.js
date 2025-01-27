const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');
let menuVisible = false;
const nav_home = document.getElementById('home');
const nav_about = document.getElementById('about');
const nav_skills = document.getElementById('skillss');
const nav_resume = document.getElementById('resume');
const nav_portfolio = document.getElementById('portafolio');
const nav_contact = document.getElementById('contact');
const about_title = document.getElementById('about_title');
const about_description = document.getElementById('about_description');
const personal_data_title = document.getElementById('pesronal_data_title');
const birthday = document.getElementById('birthday');
const number_phone = document.getElementById('number_phone');
const address = document.getElementById('address');
const job_position = document.getElementById('job_position');
const interests_title = document.getElementById('interests_title');
const programming = document.getElementById('programming');
const music = document.getElementById('music');
const networks = document.getElementById('networks');
const soccer = document.getElementById('soccer');
const teaching = document.getElementById('teaching');
const cars = document.getElementById('cars');
const download_cv = document.getElementById('download_cv');
const skills_title = document.getElementById('skills_title');
const technical_skills_title = document.getElementById('technical_skills_title');
const networks_skill = document.getElementById('networks_skill');
const professional_skills_title = document.getElementById('professional_skills_title');
const communication = document.getElementById('communication');
const teamwork = document.getElementById('teamwork');
const creativity = document.getElementById('creativity');
const dedication = document.getElementById('dedication');
const proyect_management = document.getElementById('proyect_management');
const resume_title = document.getElementById('resume_title');
const formal_education = document.getElementById('formal_education');

//Toggle List IDIOMAS

idiomaActual.addEventListener('click',()=>{
    listaIdiomas.classList.toggle('toggle');
});

const opcionesArray = Array.from(idiomas);

opcionesArray.forEach((opcion)=>{
    opcion.addEventListener('click',()=>{
        const idioma = opcion.getElementsByTagName('span')[0].textContent;
        establecerIdioma(idioma);
    })
})

function establecerIdioma(idioma){
    idiomaActual.getElementsByTagName('img')[0].src = `img/${idioma}.png`;
    switch(idioma){
        case 'USA':
            nav_home.textContent = 'HOME';
            nav_about.textContent = 'ABOUT';
            nav_skills.textContent = 'SKILLS'
            nav_resume.textContent = 'RESUME';
            nav_portfolio.textContent = 'PORTFOLIO';
            nav_contact.textContent = 'CONTACT';
            about_title.textContent = 'About';
            about_description.textContent = "Hi, I'm Tomás Delgado, I'm a student of the Bachelor's degree in Computer Security at Universidad Siglo 21. I have worked as an instructor in platforms such as Udemy and EC-Council Learning doing courses related to programming and cybersecurity (personal and corporate). My forte in programming are Python and C languages. I have the certifications Experto Universitario en Ethical Hacking by the Universidad Tecnológica Nacional and Ethical Hacking Essentials (EHE) by EC-Council, among others. In addition, I have medium/high level experience in handling GNU/Linux and Windows systems.";
            personal_data_title.textContent = "Personal data";
            birthday.textContent = "Birthday";
            number_phone.textContent = "Phone";
            address.textContent = "Location";
            job_position.textContent = "Job position";
            interests_title.textContent = "Interests";
            programming.textContent = "PROGRAMMING";
            music.textContent = "MUSIC";
            networks.textContent = "NETWORKS";
            soccer.textContent = "SOCCER";
            teaching.textContent = "TEACHING";
            cars.textContent = "CARS";
            download_cv.textContent = "Download CV";
            skills_title.textContent = "Skills";
            technical_skills_title.textContent = "Technical Skills";
            networks_skill.textContent = "Networks";
            professional_skills_title.textContent = "Professional Skills";
            communication.textContent = "Communication";
            teamwork.textContent = "Teamwork";
            creativity.textContent = "Creativity";
            dedication.textContent = "Dedication";
            proyect_management.textContent = "Proyect Management";
            resume_title.textContent = "Resume";
            formal_education.textContent = "Formal education"


            break;
        
        case 'ESP':
            nav_home.textContent = 'INICIO';
            nav_skills.textContent = 'HABILIDADES'
            nav_resume.textContent = 'CURRICULUM';
            nav_portfolio.textContent = 'PORTAFOLIO';
            nav_contact.textContent = 'CONTACTO';
            about_title.textContent = 'Sobre Mí';
            about_description.textContent = "Hola, soy Tomás Delgado, soy estudiante de la carrera de Licenciatura en Seguridad Informática en la Universidad Siglo 21. Me he desempeñado como instructor en plataformas como Udemy y EC-Council Learning realizando cursos relacionados con la programación y ciberseguridad (personal y corporativa). Mi fuerte en la programación son los lenguajes Python y C. Cuento con las certificaciones Experto Universitario en Ethical Hacking por la Universidad Tecnológica Nacional y Ethical Hacking Essentials (EHE) de EC-Council, entre otras. Además, poseo experiencia de nivel medio/alto en el manejo de sistemas GNU/Linux y Windows.";
            personal_data_title.textContent = "Datos personales";
            birthday.textContent = "Cumpleaños";
            number_phone.textContent = "Teléfono";
            address.textContent = "Localidad";
            job_position.textContent = "Cargo";
            interests_title.textContent = "Intereses";
            programming.textContent = "PROGRAMAR";
            music.textContent = "MUSICA";
            networks.textContent = "REDES";
            soccer.textContent = "FUTBOL";
            teaching.textContent = "ENSEÑANZA";
            cars.textContent = "AUTOS";
            download_cv.textContent = "Descarga CV";
            skills_title.textContent = "Habilidades";
            technical_skills_title.textContent = "Habilidades Técnicas";
            networks_skill.textContent = "Redes";
            professional_skills_title.textContent = "Habilidades profesionales";
            communication.textContent = "Comunicación";
            teamwork.textContent = "Trabajo en equipo";
            creativity.textContent = "Creatividad";
            dedication.textContent = "Dedicación";
            proyect_management.textContent = "Gestión de proyectos";
            resume_title.textContent = "Curriculum";
            formal_education.textContent = "Educación formal"


            break;
        
        default:
            break;

    }
}

document.addEventListener('DOMContentLoaded',()=>{
    alert(navigator.language)
    switch (navigator.language) {
        case 'en-US':
            establecerIdioma('USA');
            break;
        
        case 'es-419':
            establecerIdioma('ESP')
            break;
        
        case 'es-ES':
            establecerIdioma('ESP');
    
        default:
            break;
    }
});

//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("c");
        habilidades[3].classList.add("linux");
        habilidades[4].classList.add("redes");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
}

