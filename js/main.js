/* ════════════════════════════════════════════════════════════
   main.js — Porty Clone interactions
   ════════════════════════════════════════════════════════════ */

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
    git: '#',
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
    tab_webdesign: "Web Design",
    tab_branding: "Branding",
    tab_development: "Development",
    service_1_exp: "5 Years Exp",
    service_1_title: "Web Design",
    service_1_desc: "Since beginning my journey as a freelance designer nearly 8 years ago, I've done work for agencies, consulted for startups and collaborated with talented people to create digital products for businesses.",
    btn_start: "Start Now",
    btn_contact: "Contact Me",
    service_2_exp: "4 Years Exp",
    service_2_title: "Branding",
    service_2_desc: "Creating cohesive visual identities that communicate your brand's values and differentiate you in the market. From logo design to full brand systems.",
    service_3_exp: "6 Years Exp",
    service_3_title: "Development",
    service_3_desc: "Clean, efficient code that brings designs to life. Specializing in HTML, CSS, JavaScript, and modern web technologies to build fast, responsive websites.",
    tools_ticker_label: "Explore my services",
    tools_title: "Mastered<br><span class=\"outline-text\">Tools</span>",
    tools_title_outline: "Tools",
    tools_desc: "Proficient in industry-standard design software and tools.",
    tool_1_desc: "Core Web",
    tool_2_desc: "Frontend Dev",
    tool_3_desc: "Version Control",
    tool_4_desc: "Design Tool",
    tool_5_desc: "Mobile First",
    tool_6_desc: "Productivity",
    process_title: "Work<br><span class=\"outline-text\">Process</span>",
    process_title_outline: "Process",
    process_desc: "A glimpse into my collaborative and iterative design process.",
    process_1_title: "Discovery<br>Session",
    process_1_desc: "Understanding your goals, audience, and project requirements in depth.",
    process_2_title: "Strategy<br>Mapping",
    process_2_desc: "Creating a clear roadmap and defining the visual direction.",
    process_3_title: "Prototype<br>Creation",
    process_3_desc: "Building interactive prototypes to validate design decisions early.",
    process_4_title: "Final<br>Delivery",
    process_4_desc: "Polished, production-ready deliverables with full handoff support.",
    faq_title: "Common<br><span class=\"outline-text\">Questions</span>",
    faq_title_outline: "Questions",
    faq_desc: "Helping you understand our process and offerings.",
    faq_1_q: "Why should I hire you? <span class=\"faq-icon\">+</span>",
    faq_1_a: "I specialize in web design and development for individuals and businesses, combining technical skill with creative thinking to deliver results that work.",
    faq_2_q: "How long will it take to complete my project? <span class=\"faq-icon\">+</span>",
    faq_2_a: "Timelines vary by scope. Basic projects typically take 1–2 weeks; larger builds 3–6 weeks. I provide clear timelines upfront after our discovery session.",
    faq_3_q: "How does your maintenance service work? <span class=\"faq-icon\">+</span>",
    faq_3_a: "I offer ongoing maintenance including content updates, bug fixes, performance optimization, and regular support depending on your plan.",
    faq_4_q: "What is your refund policy? <span class=\"faq-icon\">+</span>",
    faq_4_a: "Refunds are available if the product doesn't work as described. Since each project involves time and effort, change-of-mind refunds aren't offered, but I'm always happy to resolve issues.",
    faq_5_q: "Can I pay directly using my credit card? <span class=\"faq-icon\">+</span>",
    faq_5_a: "Yes, secure credit card payments are supported. You'll receive instant confirmation once the transaction is complete.",
    contact_title: "Contact<br><span class=\"outline-text\">For Work</span>",
    contact_title_outline: "For Work",
    placeholder_email: "Your Email",
    placeholder_phone: "Your Phone",
    placeholder_budget: "Your Budget",
    select_price_point: "Select Price Point",
    price_point_1: "Less than $1,000",
    price_point_2: "$1,000 – $5,000",
    price_point_3: "$5,000 – $10,000",
    price_point_4: "$10,000 – $20,000",
    price_point_5: "More than $20,000",
    btn_submit: "Submit Now",
    slots_notice: "<span class=\"avail-dot\"></span> Available for 2 Slots",
    footer_tag_1: "High quality",
    footer_tag_2: "Creative",
    footer_tag_3: "Fast & Responsive",
    footer_tag_4: "Easy to Use",
    footer_tag_5: "100% SEO",
    footer_tag_6: "Collaboration",
    back_to_top: "Back to Top ↑"
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
    tab_webdesign: "Diseño Web",
    tab_branding: "Branding",
    tab_development: "Desarrollo",
    service_1_exp: "5 Años de Exp",
    service_1_title: "Diseño Web",
    service_1_desc: "Desde que comencé mi viaje como diseñador freelance hace casi 8 años, he trabajado para agencias, consultado para startups y colaborado con personas talentosas para crear productos digitales para empresas.",
    btn_start: "Empezar Ahora",
    btn_contact: "Contáctame",
    service_2_exp: "4 Años de Exp",
    service_2_title: "Branding",
    service_2_desc: "Creación de identidades visuales cohesivas que comunican los valores de su marca y lo diferencian en el mercado. Desde el diseño del logo hasta sistemas de marca completos.",
    service_3_exp: "6 Años de Exp",
    service_3_title: "Desarrollo",
    service_3_desc: "Código limpio y eficiente que da vida a los diseños. Especializado en HTML, CSS, JavaScript y tecnologías web modernas para construir sitios rápidos y responsivos.",
    tools_ticker_label: "Explora mis servicios",
    tools_title: "Herramientas<br><span class=\"outline-text\">Dominadas</span>",
    tools_title_outline: "Dominadas",
    tools_desc: "Competente en software y herramientas de diseño estándar de la industria.",
    tool_1_desc: "Web Principal",
    tool_2_desc: "Desarrollo Frontend",
    tool_3_desc: "Control de Versiones",
    tool_4_desc: "Herramienta de Diseño",
    tool_5_desc: "Móvil Primero",
    tool_6_desc: "Productividad",
    process_title: "Proceso de<br><span class=\"outline-text\">Trabajo</span>",
    process_title_outline: "Trabajo",
    process_desc: "Un vistazo a mi proceso de diseño colaborativo e iterativo.",
    process_1_title: "Sesión de<br>Descubrimiento",
    process_1_desc: "Comprender sus objetivos, audiencia y requisitos del proyecto en profundidad.",
    process_2_title: "Mapeo de<br>Estrategia",
    process_2_desc: "Crear una hoja de ruta clara y definir la dirección visual.",
    process_3_title: "Creación de<br>Prototipos",
    process_3_desc: "Construir prototipos interactivos para validar las decisiones de diseño tempranamente.",
    process_4_title: "Entrega<br>Final",
    process_4_desc: "Entregables pulidos y listos para producción con soporte completo de entrega.",
    faq_title: "Preguntas<br><span class=\"outline-text\">Comunes</span>",
    faq_title_outline: "Comunes",
    faq_desc: "Ayudándole a entender nuestro proceso y ofertas.",
    faq_1_q: "¿Por qué debería contratarte? <span class=\"faq-icon\">+</span>",
    faq_1_a: "Me especializo en diseño y desarrollo web para individuos y empresas, combinando habilidad técnica con pensamiento creativo para entregar resultados que funcionan.",
    faq_2_q: "¿Cuánto tiempo tomará completar mi proyecto? <span class=\"faq-icon\">+</span>",
    faq_2_a: "Los plazos varían según el alcance. Los proyectos básicos suelen tardar entre 1 y 2 semanas; las construcciones más grandes entre 3 y 6 semanas. Proporciono plazos claros por adelantado después de nuestra sesión de descubrimiento.",
    faq_3_q: "¿Cómo funciona su servicio de mantenimiento? <span class=\"faq-icon\">+</span>",
    faq_3_a: "Ofrezco mantenimiento continuo que incluye actualizaciones de contenido, corrección de errores, optimización del rendimiento y soporte regular según su plan.",
    faq_4_q: "¿Cuál es su política de reembolso? <span class=\"faq-icon\">+</span>",
    faq_4_a: "Los reembolsos están disponibles si el producto no funciona como se describe. Dado que cada proyecto implica tiempo y esfuerzo, no se ofrecen reembolsos por cambio de opinión, pero siempre estoy feliz de resolver problemas.",
    faq_5_q: "¿Puedo pagar directamente usando mi tarjeta de crédito? <span class=\"faq-icon\">+</span>",
    faq_5_a: "Sí, se admiten pagos seguros con tarjeta de crédito. Recibirá una confirmación instantánea una vez que se complete la transacción.",
    contact_title: "Contacto para<br><span class=\"outline-text\">Trabajar</span>",
    contact_title_outline: "Trabajar",
    placeholder_email: "Tu Correo",
    placeholder_phone: "Tu Teléfono",
    placeholder_budget: "Tu Presupuesto",
    select_price_point: "Selecciona el punto de precio",
    price_point_1: "Menos de $1,000",
    price_point_2: "$1,000 – $5,000",
    price_point_3: "$5,000 – $10,000",
    price_point_4: "$10,000 – $20,000",
    price_point_5: "Más de $20,000",
    btn_submit: "Enviar Ahora",
    slots_notice: "<span class=\"avail-dot\"></span> Disponible para 2 Cupos",
    footer_tag_1: "Alta calidad",
    footer_tag_2: "Creativo",
    footer_tag_3: "Rápido y Responsivo",
    footer_tag_4: "Fácil de usar",
    footer_tag_5: "100% SEO",
    footer_tag_6: "Colaboración",
    back_to_top: "Volver Arriba ↑"
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

/* ── Counter animation ────────────────────────────────────── */
function animateCounter(el) {
  const target  = parseInt(el.dataset.target, 10);
  const duration = 1600;
  const start   = performance.now();

  function step(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    el.textContent = Math.floor(eased * target);
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target;
  }

  requestAnimationFrame(step);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(el => counterObserver.observe(el));

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

/* ── FAQ accordion ────────────────────────────────────────── */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item    = btn.closest('.faq-item');
    const isOpen  = item.classList.contains('open');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));

    // Toggle clicked
    if (!isOpen) item.classList.add('open');
  });
});

/* ── Contact form submit ──────────────────────────────────── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  btn.textContent = '✓ Message Sent!';
  btn.style.background = '#4ade80';
  btn.style.color = '#000';
  setTimeout(() => {
    btn.textContent = 'Submit Now';
    btn.style.background = '';
    btn.style.color = '';
    e.target.reset();
  }, 3000);
}
