/* ── Navbar scroll shadow ─────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
});

/* ── Project Modal Logic ──────────────────────────────────── */
const projectModal = document.getElementById('project-modal');
const modalName = document.getElementById('modal-project-name');
const modalDesc = document.getElementById('modal-project-desc');
const modalTech = document.getElementById('modal-project-tech');
const modalLinkSite = document.getElementById('modal-link-site');
const modalLinkGit = document.getElementById('modal-link-git');

const projectData = {
  'project_1': {
    site: 'https://ljcodesystems.site/',
    git: 'https://github.com/JohanM-1/LJ-Code-System',
    tech: [
      { class: 'fab fa-html5', name: 'HTML5' },
      { class: 'fab fa-css3-alt', name: 'CSS3' },
      { class: 'fab fa-js', name: 'JavaScript' },
      { class: 'fab fa-react', name: 'React' },
      { class: 'fas fa-shield-halved', name: 'Security (HSTS)' }
    ]
  },
  'project_2': {
    site: '#',
    git: 'https://github.com/MartinezSantiago03/portfolio-landing',
    tech: [
      { class: 'fab fa-html5', name: 'HTML5' },
      { class: 'fab fa-css3-alt', name: 'CSS3' },
      { class: 'fab fa-js', name: 'JavaScript' }
    ]
  }
};

function openProjectModal(projectId) {
  const nameMap = {
    'project_1': 'LJ Code Systems',
    'project_2': 'This portfolio '
  };
  
  modalName.textContent = nameMap[projectId];
  modalDesc.innerHTML = translations[currentLang][projectId + '_desc'];
  
  // Render tech icons
  modalTech.innerHTML = '';
  if (projectData[projectId] && projectData[projectId].tech) {
    projectData[projectId].tech.forEach(t => {
      const iconWrap = document.createElement('div');
      iconWrap.className = 'tech-icon-item';
      iconWrap.innerHTML = `
        <i class="${t.class}"></i>
        <span class="tech-tooltip">${t.name}</span>
      `;
      modalTech.appendChild(iconWrap);
    });
  }
  
  // Set links
  if (projectData[projectId]) {
    modalLinkSite.href = projectData[projectId].site;
    modalLinkGit.href = projectData[projectId].git;
    
    // Hide buttons if no link
    modalLinkSite.style.display = projectData[projectId].site === '#' ? 'none' : 'block';
    modalLinkGit.style.display = projectData[projectId].git === '#' ? 'none' : 'grid';
  }
  
  projectModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  projectModal.classList.remove('active');
  document.body.style.overflow = ''; // Restore scroll
}

// Close on click outside the card
projectModal.addEventListener('click', (e) => {
  if (e.target === projectModal) closeProjectModal();
});

/* ── Translation Logic ────────────────────────────────────── */
const translations = {
  en: {
    nav_home: "Home",
    nav_projects: "Projects",
    nav_services: "Services",
    nav_pricing: "Pricing",
    nav_contact: "Contact",
    hero_badge: "<span class=\"badge-dot\"></span> Hello",
    hero_role: "Frontend Web Developer<br>& Digital Content Creator",
    hero_quote: "I build modern and responsive websites using HTML, CSS and JavaScript, and create digital content to promote businesses through social media and online advertising.",
    hero_stat_customers: "Development",
    hero_stat_experience: "Marketing",
    hero_btn_start: "Download CV",
    hero_btn_works: "Contact Me ↗",
    hero_availability: "<span class=\"avail-dot\"></span> Open to Opportunities",
    hero_photo_placeholder: "Your Photo",
    hero_ticker_1: "Frontend Developer",
    hero_ticker_2: "Building real projects",
    hero_ticker_3: "Learning modern technologies",
    hero_ticker_4: "Focused on clean UI",
    hero_ticker_5: "Growing every day",
    ticker_label: "What I Work With",
    projects_title: "My Projects",
    projects_desc: "A selection of projects where I apply frontend development, responsive design, and real-world problem solving.",
    project_1_tag: "CSS, HTML, Java Script",
    project_1_desc: "Business website for a digital solutions brand, combining frontend development and digital content to promote services and improve online presence.",
    project_2_tag: "CSS, HTML, Java Script",
    project_2_desc: "Personal portfolio designed and developed to showcase projects, skills and responsive design practices.",
    tab_webdesign: "Web Development",
    tab_branding: "Digital Content",
    tab_development: "Learning & Growth",
    service_1_exp: "Frontend Focus",
    service_1_title: "Web Development",
    service_1_desc: "I build responsive and modern websites using HTML, CSS and JavaScript, focusing on clean design and user experience.",
    btn_start: "View Projects",
    btn_see_work: "See Work",
    btn_my_projects: "My Projects",
    btn_contact: "Contact Me",
    service_2_exp: "Content & Ads",
    service_2_title: "Digital Content & Marketing",
    service_2_desc: "I create digital content for social media and support basic advertising campaigns using Meta Ads to help promote services and improve online presence.",
    service_3_exp: "Always Learning",
    service_3_title: "Learning & Growth",
    service_3_desc: "Currently improving my skills in frontend development, building real projects and learning new technologies to grow as a web developer.",
    tools_ticker_label: "Explore my services",
    tools_title: "Technologies &<br><span class=\"outline-text\">Tools</span>",
    tools_title_outline: "Tools",
    tools_desc: "Technologies I use to build websites and create digital content.",
    tool_1_name: "HTML / CSS",
    tool_1_desc: "Frontend Structure",
    tool_2_name: "JavaScript",
    tool_2_desc: "Interactivity",
    tool_3_name: "Responsive Design",
    tool_3_desc: "Mobile First",
    tool_4_name: "GitHub",
    tool_4_desc: "Version Control",
    tool_5_name: "Figma",
    tool_5_desc: "UI Design",
    contact_title: "Let's Work<br><span class=\"outline-text\">Together</span>",
    contact_title_outline: "Together",
    contact_desc: "I'm open to job opportunities and collaborations. Feel free to reach out.",
    placeholder_name: "Your Name",
    placeholder_email: "Your Email",
    placeholder_message: "Your Message",
    btn_submit: "Send Message",
    footer_phrase: "Building modern web solutions and digital content.",
    footer_tag_1: "Frontend Development",
    footer_tag_2: "Responsive Design",
    footer_tag_3: "JavaScript",
    footer_tag_4: "Digital Content",
    back_to_top: "Back to Top ↑",
    skill_html_css_title: "HTML / CSS",
    skill_html_css_desc: "The foundation of the web. I use HTML5 for semantic structure and CSS3 for modern styling, including Flexbox, Grid, and animations.",
    skill_js_title: "JavaScript",
    skill_js_desc: "Adding life to websites. I focus on ES6+ features, DOM manipulation, and creating interactive user experiences.",
    skill_responsive_title: "Responsive Design",
    skill_responsive_desc: "Mobile-first approach. Ensuring that every website looks and works perfectly on any device, from smartphones to large desktops.",
    skill_github_title: "GitHub",
    skill_github_desc: "Version control and collaboration. I use Git to track changes, manage projects, and collaborate with other developers.",
    skill_figma_title: "Figma",
    skill_figma_desc: "Turning ideas into visuals. I use Figma to design clean, modern interfaces and prototypes before writing a single line of code."
  },
  es: {
    nav_home: "Inicio",
    nav_projects: "Proyectos",
    nav_services: "Servicios",
    nav_pricing: "Precios",
    nav_contact: "Contacto",
    hero_badge: "<span class=\"badge-dot\"></span> Hola",
    hero_role: "Desarrollador Web Frontend<br>& Creador de Contenido Digital",
    hero_quote: "Construyo sitios web modernos y responsivos usando HTML, CSS y JavaScript, y creo contenido digital para promocionar negocios a través de redes sociales y publicidad online.",
    hero_stat_customers: "Desarrollo",
    hero_stat_experience: "Marketing",
    hero_btn_start: "Descargar CV",
    hero_btn_works: "Contáctame ↗",
    hero_availability: "<span class=\"avail-dot\"></span> Abierto a Oportunidades",
    hero_photo_placeholder: "Tu Foto",
    hero_ticker_1: "Desarrollador Frontend",
    hero_ticker_2: "Construyendo proyectos reales",
    hero_ticker_3: "Aprendiendo tecnologías modernas",
    hero_ticker_4: "Enfocado en UI limpia",
    hero_ticker_5: "Creciendo cada día",
    ticker_label: "Con lo que Trabajo",
    projects_title: "Mis Proyectos",
    projects_desc: "Una selección de proyectos donde aplico desarrollo frontend, diseño responsivo y resolución de problemas reales.",
    project_1_tag: "CSS, HTML, JavaScript",
    project_1_desc: "Sitio web empresarial para una marca de soluciones digitales, combinando desarrollo frontend y contenido digital para promocionar servicios y mejorar la presencia online.",
    project_2_tag: "CSS, HTML, JavaScript",
    project_2_desc: "Portafolio personal diseñado y desarrollado para mostrar proyectos, habilidades y prácticas de diseño responsivo.",
    tab_webdesign: "Desarrollo Web",
    tab_branding: "Contenido Digital",
    tab_development: "Aprendizaje y Crecimiento",
    service_1_exp: "Enfoque Frontend",
    service_1_title: "Desarrollo Web",
    service_1_desc: "Construyo sitios web responsivos y modernos usando HTML, CSS y JavaScript, enfocándome en un diseño limpio y la experiencia del usuario.",
    btn_start: "Ver Proyectos",
    btn_see_work: "Ver Trabajo",
    btn_my_projects: "Mis Proyectos",
    btn_contact: "Contáctame",
    service_2_exp: "Contenido y Ads",
    service_2_title: "Contenido Digital y Marketing",
    service_2_desc: "Creo contenido digital para redes sociales y apoyo campañas publicitarias básicas usando Meta Ads para ayudar a promocionar servicios y mejorar la presencia online.",
    service_3_exp: "Siempre Aprendiendo",
    service_3_title: "Aprendizaje y Crecimiento",
    service_3_desc: "Actualmente mejorando mis habilidades en desarrollo frontend, construyendo proyectos reales y aprendiendo nuevas tecnologías para crecer como desarrollador web.",
    tools_ticker_label: "Explora mis servicios",
    tools_title: "Tecnologías &<br><span class=\"outline-text\">Herramientas</span>",
    tools_title_outline: "Herramientas",
    tools_desc: "Tecnologías que utilizo para construir sitios web y crear contenido digital.",
    tool_1_name: "HTML / CSS",
    tool_1_desc: "Estructura Frontend",
    tool_2_name: "JavaScript",
    tool_2_desc: "Interactividad",
    tool_3_name: "Diseño Responsivo",
    tool_3_desc: "Móvil Primero",
    tool_4_name: "GitHub",
    tool_4_desc: "Control de Versiones",
    tool_5_name: "Figma",
    tool_5_desc: "Diseño UI",
    contact_title: "Trabajemos<br><span class=\"outline-text\">Juntos</span>",
    contact_title_outline: "Juntos",
    contact_desc: "Estoy abierto a oportunidades laborales y colaboraciones. No dudes en contactarme.",
    placeholder_name: "Tu Nombre",
    placeholder_email: "Tu Correo",
    placeholder_message: "Tu Mensaje",
    btn_submit: "Enviar Mensaje",
    footer_phrase: "Construyendo soluciones web modernas y contenido digital.",
    footer_tag_1: "Desarrollo Frontend",
    footer_tag_2: "Diseño Responsivo",
    footer_tag_3: "JavaScript",
    footer_tag_4: "Contenido Digital",
    back_to_top: "Volver Arriba ↑",
    skill_html_css_title: "HTML / CSS",
    skill_html_css_desc: "La base de la web. Utilizo HTML5 para estructura semántica y CSS3 para estilos modernos, incluyendo Flexbox, Grid y animaciones.",
    skill_js_title: "JavaScript",
    skill_js_desc: "Dando vida a los sitios web. Me enfoco en características de ES6+, manipulación del DOM y creación de experiencias de usuario interactivas.",
    skill_responsive_title: "Diseño Responsivo",
    skill_responsive_desc: "Enfoque mobile-first. Asegurando que cada sitio web se vea y funcione perfectamente en cualquier dispositivo, desde smartphones hasta computadores.",
    skill_github_title: "GitHub",
    skill_github_desc: "Control de versiones y colaboración. Utilizo Git para rastrear cambios, gestionar proyectos y colaborar con otros desarrolladores.",
    skill_figma_title: "Figma",
    skill_figma_desc: "Transformando ideas en visuales. Uso Figma para diseñar interfaces limpias y modernas antes de escribir una sola línea de código."
  }
};

let currentLang = 'en';

function setLanguage(lang) {
  currentLang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });

  document.documentElement.lang = lang;
}

const langBtn = document.getElementById('lang-btn');
langBtn.addEventListener('click', () => {
  const newLang = currentLang === 'en' ? 'es' : 'en';
  setLanguage(newLang);
});

/* ── Mobile nav toggle ────────────────────────────────────── */
const navToggle = document.querySelector('.nav-toggle');
const navLinks  = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ── Hero name lines stagger animation ───────────────────── */
document.querySelectorAll('.name-line').forEach((el, i) => {
  const delay = parseInt(el.dataset.delay || 0, 10);
  el.style.animation = `fadeUp 0.55s ${0.3 + delay / 1000}s forwards`;
});

/* ── Scroll reveal ────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ── Services tabs ────────────────────────────────────────── */
document.querySelectorAll('.tab').forEach(btn => {
  btn.addEventListener('click', () => {
    const tabId = btn.dataset.tab;

    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    document.querySelectorAll('.service-panel').forEach(panel => {
      panel.classList.remove('active');
    });

    const target = document.getElementById('tab-' + tabId);
    if (target) target.classList.add('active');
  });
});

/* ─── Mobile Hero Scroll Effect ───────────────────────────── */
window.addEventListener('scroll', () => {
  if (window.innerWidth <= 768) {
    const heroRight = document.querySelector('.hero-right');
    const scrollPos = window.scrollY;
    
    // Calculate blur and opacity based on scroll
    // Start blurring after 50px, full blur at 300px
    const blurVal = Math.min(scrollPos / 15, 10); 
    const opacityVal = Math.max(1 - scrollPos / 400, 0);
    
    if (heroRight) {
      heroRight.style.filter = `blur(${blurVal}px)`;
      heroRight.style.opacity = opacityVal;
    }
  }
});

/* ─── Textarea auto-resize ─────────────────────────────────── */
const textarea = document.querySelector('.contact-form textarea');
if (textarea) {
  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = (this.scrollHeight) + 'px';
  });
}

/* ─── Skill Modals ────────────────────────────────────────── */
const skillModal = document.getElementById('skill-modal');
const skillIcon = document.getElementById('skill-icon');
const skillTitle = document.getElementById('skill-title');
const skillDesc = document.getElementById('skill-desc');

const skillData = {
  'html_css': { icon: '<i class="fab fa-html5"></i>', key: 'skill_html_css' },
  'js': { icon: '<i class="fab fa-js"></i>', key: 'skill_js' },
  'responsive': { icon: '<i class="fas fa-mobile-alt"></i>', key: 'skill_responsive' },
  'github': { icon: '<i class="fab fa-github"></i>', key: 'skill_github' },
  'figma': { icon: '<i class="fab fa-figma"></i>', key: 'skill_figma' }
};

function openSkillModal(skillId) {
  const data = skillData[skillId];
  if (!data) return;

  skillIcon.innerHTML = data.icon;
  skillTitle.textContent = translations[currentLang][data.key + '_title'];
  skillDesc.textContent = translations[currentLang][data.key + '_desc'];

  skillModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeSkillModal() {
  skillModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on outside click
skillModal.addEventListener('click', (e) => {
  if (e.target === skillModal) closeSkillModal();
});

/* ── Contact form submit ──────────────────────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  
  // Get form data
  const formData = new FormData(e.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');
  
  // Email config
  const myEmail = 'damh0310@gmail.com';
  const subject = `Nuevo mensaje de portafolio - ${name}`;
  const body = `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`;
  const mailtoUrl = `mailto:${myEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  
  // Visual feedback
  const btn = e.target.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  
  btn.textContent = '✓ Opening Email...';
  btn.style.background = '#4ade80';
  btn.style.color = '#000';

  // Open default email client
  setTimeout(() => {
    window.location.href = mailtoUrl;
    
    // Reset button after a delay
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      e.target.reset();
    }, 2000);
  }, 1000);
}
