const idiomaActual = document.getElementById('idioma');
const listaIdiomas = document.getElementById('idiomas');
const idiomas = document.getElementsByClassName('opcion');
let menuVisible = false;
const overview_title_web = document.getElementById('overview_title_web');
const web_title = document.getElementById('web_title');
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
const seg_inf = document.getElementById('seg_inf');
const seg_inf_description = document.getElementById('seg_inf_description');
const sis_info = document.getElementById("sis_info");
const sis_info_description = document.getElementById("sis_info_description");
const baccalaureate = document.getElementById('baccalaureate');
const baccalaureate_description = document.getElementById('baccalaureate_description');
const work_experience_title = document.getElementById('work_experience_title');
const date_eccouncil = document.getElementById('date_eccouncil');
const eccouncil_description_work = document.getElementById('eccouncil_description_work');
const udemy_description = document.getElementById('udemy_description');
const electromechanical_technician = document.getElementById('electromechanical_technician');
const portfolio_title = document.getElementById('portfolio_title');
const retrieveinfo_description = document.getElementById('retrieveinfo_description');
const project_view1 = document.getElementById('project_view1');
const pynumverify_description = document.getElementById('pynumverify_description');
const project_view2 = document.getElementById('project_view2');
const view_site1 = document.getElementById('view_site1');
const easypentesting_description = document.getElementById('easypentesting_description');
const project_view3 = document.getElementById('project_view3');
const web_tp2_description = document.getElementById('web_tp2_description');
const project_view4 = document.getElementById('project_view4');

//AQUI LOS CURSOS
const nav_course = document.getElementById('course');
const courses_title = document.getElementById('courses_title');
const course_title1 = document.getElementById('course_title1');
const view_course1 = document.getElementById('view_course1');
const course_title2 = document.getElementById('course_title2');
const view_course2 = document.getElementById('view_course2');


const contact_title = document.getElementById('contact_title');
const contact_name = document.getElementById('contact_name');
const contact_phone = document.getElementById('contact_phone');
const contact_email = document.getElementById('contact_email');
const contact_subject = document.getElementById('contact_subject');
const contact_message = document.getElementById("contact_message");
const contact_send_button = document.getElementById('contact_send_button');
const name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const tema = document.getElementById('tema');
const message = document.getElementById('message');
let idioma_actual_texto = document.getElementById('idioma_actual_texto');

//Toggle List IDIOMAS

idiomaActual.addEventListener('click',(event)=>{
    listaIdiomas.classList.toggle('toggle');
    event.stopInmediatePropagation(); // Evita que el clic se propague al documento
});

document.addEventListener("click", (event) => {
    if (!listaIdiomas.contains(event.target) && !idiomaActual.contains(event.target)) {
      listaIdiomas.classList.remove('toggle');
    }
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
    if(idioma == 'ESP'){
        idioma_actual_texto.textContent = "Español(ES)"
    }
    else if(idioma == "USA"){
        idioma_actual_texto.textContent = "English(US)"
    }
    
    switch(idioma){
        case 'USA':
            overview_title_web.textContent = "Tomás Delgado | Cybersecurity Consultant";
            web_title.textContent = "Tomás Delgado | Cybersecurity Consultant";
            nav_home.textContent = 'HOME';
            nav_about.textContent = 'ABOUT';
            nav_skills.textContent = 'SKILLS'
            nav_resume.textContent = 'RESUME';
            nav_portfolio.textContent = 'PROJECTS';
            nav_contact.textContent = 'CONTACT';
            about_title.textContent = 'ABOUT';
            about_description.textContent = "Passionate about cybersecurity and teaching, I merge my technical knowledge with solid Python and C expertise. As an instructor at Udemy and EC-Council Learning, I have trained others in computer security and development. Certified in Ethical Hacking by UTN and EC-Council, with skills in GNU/Linux, Windows and networking. I am looking for challenges that allow me to continue growing and contributing to the world of security and technology 🚀🔐.";
            /*
            Hola, soy Tomás Delgado, soy estudiante de la carrera de Licenciatura en Seguridad Informática en la Universidad Siglo 21. Me he desempeñado como instructor en plataformas como Udemy y EC-Council Learning realizando cursos relacionados con la programación y ciberseguridad (personal y corporativa). Mi fuerte en la programación son los lenguajes Python y C. Cuento con las certificaciones Experto Universitario en Ethical Hacking por la Universidad Tecnológica Nacional y Ethical Hacking Essentials (EHE) de EC-Council, entre otras. Además, poseo experiencia de nivel medio/alto en el manejo de sistemas GNU/Linux y Windows.
            */ 
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
            download_cv.textContent = "Download resume";
            skills_title.textContent = "SKILLS";
            technical_skills_title.textContent = "Technical Skills";
            networks_skill.textContent = "Networks";
            professional_skills_title.textContent = "Professional Skills";
            communication.textContent = "Communication";
            teamwork.textContent = "Teamwork";
            creativity.textContent = "Creativity";
            dedication.textContent = "Dedication";
            proyect_management.textContent = "Proyect Management";
            resume_title.textContent = "RESUME";
            formal_education.textContent = "Formal education";
            seg_inf.textContent = "Bachelor's Degree in Computer Security";
            seg_inf_description.textContent = "Design IT security strategies, define requirements for their implementation and develop internal policies to manage complex incidents. Lead risk analysis, assessing assets, threats and vulnerabilities, and establish control systems and continuous improvement. Advise on forensic analysis of devices and coordinate interdisciplinary teams to investigate incidents.";
            sis_info.textContent = "Bachelor's Degree in Information Systems";
            sis_info_description.textContent = "Design of information systems in distributed environments as well as in programming, databases and networks.";
            baccalaureate.textContent = "Baccalaureate";
            baccalaureate_description.textContent = "General academic training with a solid technical background in areas related to mechanics, electricity and automation.";
            work_experience_title.textContent = "Work experience";
            date_eccouncil.textContent = "2025 - actuality";
            eccouncil_description_work.textContent = "Course licensing and collaboration of my training courses on the EC-Council Learning CodeRed platform.";
            udemy_description.textContent = "Professional development as an instructor teaching courses on programming languages such as Perl and Python. Currently I have +8500 students among all my courses.";
            electromechanical_technician.textContent = "Electromechanical Technician - Internship";
            portfolio_title.textContent = "PROJECTS";
            retrieveinfo_description.textContent = "RetrieveInfo is an automated tool for extracting and collecting key information from Windows systems using native command prompt (CMD) commands.";
            project_view1.textContent = "See project";
            pynumverify_description.textContent = "PyNumVerify is a Python tool that allows users to validate phone numbers using the API Layer service.";
            project_view2.textContent = "See project";
            view_site1.textContent = "View site";
            easypentesting_description.textContent = "An automated tool to run and simplify the use of Nmap, optimizing scanning and reporting tasks with greater efficiency and ease.";
            project_view3.textContent = "See project";
            web_tp2_description.textContent = "Front-End website for a 2D MMORPG game using HTML5, CSS3, PHP7 and Boostrap";
            project_view4.textContent = "View site";

            //AQUI LOS CURSOS

            nav_course.textContent = "COURSES";
            courses_title.textContent = "COURSES";
            course_title1.textContent = "Quick and easy introduction to Python programming";
            view_course1.textContent = "See course";
            course_title2.textContent = "Learn to program in Perl from 0";
            view_course2.textContent = "See course";
            

            contact_title.textContent = "CONTACT";
            contact_send_button.textContent = "Send message "
            name.placeholder = "Name";
            phone.placeholder = "Phone number";
            email.placeholder  = "E-mail address";
            tema.placeholder = "Subject";
            message.placeholder = "Message";


            break;
        
        case 'ESP':
            overview_title_web.textContent = "Tomás Delgado | Cybersecurity Consultant";
            web_title.textContent = "Tomás Delgado | Cybersecurity Consultant";
            nav_home.textContent = 'INICIO';
            nav_about.textContent = 'SOBRE MÍ';
            nav_skills.textContent = 'HABILIDADES'
            nav_resume.textContent = 'CURRICULUM';
            nav_portfolio.textContent = 'PROYECTOS';
            nav_contact.textContent = 'CONTACTO';
            about_title.textContent = 'SOBRE MÍ';
            about_description.textContent = "Apasionado por la ciberseguridad y la enseñanza, fusiono mi conocimiento técnico con una sólida experiencia en Python y C. Como instructor en Udemy y EC-Council Learning, he capacitado a otros en seguridad informática y desarrollo. Certificado en Ethical Hacking por la UTN y EC-Council, con habilidades en GNU/Linux, Windows y redes. Busco desafíos que me permitan seguir creciendo y aportar en el mundo de la seguridad y la tecnología 🚀🔐.";
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
            skills_title.textContent = "HABILIDADES";
            technical_skills_title.textContent = "Habilidades Técnicas";
            networks_skill.textContent = "Redes";
            professional_skills_title.textContent = "Habilidades profesionales";
            communication.textContent = "Comunicación";
            teamwork.textContent = "Trabajo en equipo";
            creativity.textContent = "Creatividad";
            dedication.textContent = "Dedicación";
            proyect_management.textContent = "Gestión de proyectos";
            resume_title.textContent = "CURRICULUM";
            formal_education.textContent = "Educación formal";
            seg_inf.textContent = "Licenciatura en Seguridad Informática";
            seg_inf_description.textContent = "Diseñar estrategias de seguridad informática, definir requisitos para su implementación y desarrollar políticas internas para gestionar incidentes complejos. Liderar análisis de riesgos, evaluando activos, amenazas y vulnerabilidades, y establecer sistemas de control y mejora continua. Asesorar en análisis forense de dispositivos y coordinar equipos interdisciplinarios para investigar incidentes.";
            sis_info.textContent = "Licenciatura en Sistemas de Información";
            sis_info_description.textContent = "Diseño de sistemas de información en ambientes distribuidos como así también en programación, bases de datos y redes.";
            baccalaureate.textContent = "Bachillerato";
            baccalaureate_description.textContent = "Formación académica general con una sólida preparación técnica en áreas vinculadas a la mecánica, la electricidad y la automatización."
            work_experience_title.textContent = "Experiencia laboral";
            date_eccouncil.textContent = "2025 - actualidad";
            eccouncil_description_work.textContent = "Licenciamiento de cursos y colaboración de mis formaciones en la plataforma de EC-Council Learning CodeRed";
            udemy_description.textContent = "Desarrollo profesional como instructor dictando cursos sobre programación en lenguajes como Perl y Python. Actualmente cuento con +8500 estudiantes entre todos mis cursos.";
            electromechanical_technician.textContent = "Tecnico Electromecanico - Practicas";
            portfolio_title.textContent = "PROYECTOS";
            retrieveinfo_description.textContent = "RetrieveInfo es una herramienta automatizada para extraer y recopilar información clave de sistemas Windows utilizando comandos nativos del símbolo del sistema (CMD)";
            project_view1.textContent = "Ver proyecto";
            pynumverify_description.textContent = "PyNumVerify es una herramienta de Python que permite a los usuarios validar números de teléfono mediante el servicio API Layer.";
            project_view2.textContent = "Ver proyecto";
            view_site1.textContent = "Ver sitio";
            easypentesting_description.textContent = "Una herramienta automatizada para ejecutar y simplificar el uso de Nmap, optimizando tareas de escaneo y generación de reportes con mayor eficiencia y facilidad.";
            project_view3.textContent = "Ver proyecto";
            web_tp2_description.textContent = "Front-End de sitio web para un juego 2D MMORPG utilizando HTML5, CSS3, PHP7 y Boostrap";
            project_view4.textContent = "Ver sitio";

            // AQUI LOS CURSOS
            nav_course.textContent = "CURSOS";
            courses_title.textContent = "CURSOS";
            course_title1.textContent = "Introducción a la programación en Python fácil y rápido";
            view_course1.textContent = "Ver curso";
            course_title2.textContent = "Aprende a programar en Perl desde 0";
            view_course2.textContent = "Ver curso";


            contact_title.textContent = "CONTACTO";
            contact_send_button.textContent = "Enviar mensaje "
            name.placeholder = "Nombre";
            phone.placeholder = "Numero telefónico";
            email.placeholder  = "Correo electrónico";
            tema.placeholder = "Tema";
            message.placeholder = "Mensaje";



            break;
        
        default:
            break;

    }
}

document.addEventListener('DOMContentLoaded',()=>{
    //alert(navigator.language)
    switch (navigator.language) {
        
        // HISPANO HABLANTE
        case 'es-419':
            establecerIdioma('ESP');
            break;

        case 'es-US':
            establecerIdioma('ESP');
            break;
        
        case 'es-MX':
            establecerIdioma('ESP');
            break;

        case 'es-AR':
            establecerIdioma('ESP');
            break;
        
        case 'es-ES':
            establecerIdioma('ESP');
            break;
        
        case 'es-CO':
            establecerIdioma('ESP');
            break;
        
        case 'es-CL':
            establecerIdioma('ESP');
            break;

        case 'es-PE':
            establecerIdioma('ESP');
            break;

        case 'es-VE':
            establecerIdioma('ESP');
            break;

        case 'es-UY':
            establecerIdioma('ESP');
            break;

        case 'es-EC':
            establecerIdioma('ESP');
            break;

        case 'es-BO':
            establecerIdioma('ESP');
            break;

        case 'es-CR':
            establecerIdioma('ESP');
            break;

        case 'es-CU':
            establecerIdioma('ESP');
            break;

        case 'es-DO':
            establecerIdioma('ESP');
            break;

        case 'es-GT':
            establecerIdioma('ESP');
            break;

        case 'es-HN':
            establecerIdioma('ESP');
            break;

        case 'es-PR':
            establecerIdioma('ESP');
            break;

        case 'es-PY':
            establecerIdioma('ESP');
            break;

        case 'es-SV':
            establecerIdioma('ESP');
            break;

        case 'es-NI':
            establecerIdioma('ESP');
            break;

        //HABLA INGLESA

        case 'en-US':
            establecerIdioma('USA');
            break;
        
        case 'en-001':
            establecerIdioma('USA');
            break;

        case 'en-GB':
            establecerIdioma('USA');
            break;

        case 'en-CA':
            establecerIdioma('USA');
            break;

        case 'en-AU':
            establecerIdioma('USA');
            break;

        case 'en-NZ':
            establecerIdioma('USA');
            break;

        case 'en-IN':
            establecerIdioma('USA');
            break;

        case 'en-IE':
            establecerIdioma('USA');
            break;

        case 'en-ZA':
            establecerIdioma('USA');
            break;
        
        case 'en-ES':
            establecerIdioma('USA');
            break;
        
    
        default:
            break;
    }
});


//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }
    else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

document.addEventListener("click", function(event) {
    const nav = document.getElementById("nav");
    const navButton = document.querySelector(".nav-responsive");

    // Si el clic no fue dentro del menú ni en el botón, ocultamos el menú
    if (!nav.contains(event.target) && !navButton.contains(event.target) && menuVisible) {
        nav.classList.remove("responsive");
        menuVisible = false;
    }
});



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


