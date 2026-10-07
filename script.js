/* ==========================================
   FOLIO EDITORIAL PORTFOLIO - YUKESH S
   ========================================== */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------
  // 1. DATA SOURCES FOR YUKESH'S PROJECTS & PUBLICATIONS
  // ------------------------------------------

  const CASE_STUDIES = {
    'ngo-platform': {
      id: 'ngo-platform',
      title: 'NGO Event & Donation Management Platform',
      tagline: 'A responsive full-stack platform enabling volunteers to browse upcoming events, register, and make secure charitable donations online.',
      category: 'Full-Stack • Java Spring Boot • Razorpay',
      year: '2026',
      client: 'Charity & NGO Ecosystem',
      role: 'Full-Stack Java Engineer',
      duration: '2 Months',
      tech: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'Bootstrap', 'Razorpay API', 'Render', 'Netlify', 'Aiven'],
      heroImg: './assets/ngo_connect.png',
      overview: 'Built a responsive full-stack NGO event and donation management web application. The platform enables users to explore upcoming charitable events, sign up as volunteers, and contribute via secure online donations.',
      challenge: 'Integrating a reliable payment gateway while coordinating asynchronous cloud database operations across a distributed microservices environment (Render API server, Netlify frontend, and Aiven MySQL cluster).',
      solution: 'Developed robust RESTful endpoints in Java Spring Boot with strict transaction validation, integrated Razorpay API for seamless payment handling, and optimized front-end state rendering using Bootstrap and JavaScript.',
      keyMetrics: [
        { label: 'Payment Gateway Security', value: '100%' },
        { label: 'Classification Accuracy', value: 'Instant' },
        { label: 'Cloud Architecture Uptime', value: '99.9%' }
      ],
      process: [
        'Domain Architecture & Database Schema Design in MySQL (Aiven)',
        'RESTful API Backend Development using Java & Spring Boot (Render)',
        'Responsive Frontend UI Engineering with HTML5, CSS3, JS & Bootstrap (Netlify)',
        'Razorpay Payment Gateway Integration & Transaction Verification'
      ],
      links: [
        { label: 'Live Platform (ImpactPulse)', url: 'https://impactpulseorg.netlify.app/' },
        { label: 'Production API (Render)', url: 'https://www.linkedin.com/in/yukesh07' },
        { label: 'GitHub Repository', url: 'https://github.com/Yukesh07-dev' }
      ],
      nextId: 'food-delivery'
    },

    'food-delivery': {
      id: 'food-delivery',
      title: 'Full-Stack Food Delivery Web Application',
      tagline: 'Production-grade MERN web application for food ordering, menu browsing, cart state management, and Stripe payment handling.',
      category: 'Full-Stack • MERN • Stripe',
      year: '2026',
      client: 'Food Tech Project',
      role: 'MERN Stack Developer',
      duration: '2 Months',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Stripe API', 'CSS3'],
      heroImg: './assets/food_delivery.png',
      overview: 'Engineered an end-to-end MERN stack food delivery platform allowing users to search restaurant menus, manage cart operations dynamically, and complete checkout with secure payment processing.',
      challenge: 'Managing real-time cart state, session persistence, and instant payment confirmation without data sync delays between React frontend and Express backend.',
      solution: 'Created custom React hooks for cart state, built RESTful endpoints in Node.js/Express, and implemented Stripe webhooks for instant order confirmation.',
      keyMetrics: [
        { label: 'Order Processing Speed', value: '<2s' },
        { label: 'Cart Synchronization', value: '100%' },
        { label: 'UI Responsiveness', value: 'Mobile-First' }
      ],
      process: [
        'React Componentizing & UI/UX State Architecture',
        'Express RESTful API Routing & Controller Setup',
        'MongoDB Schema & Order Collection Design',
        'Stripe Checkout API & Webhook Integration'
      ],
      links: [
        { label: 'Live Application (Cravo)', url: 'https://cravo-frontend-7gzl.onrender.com/' },
        { label: 'GitHub Repository', url: 'https://github.com/Yukesh07-dev' }
      ],
      nextId: 'resnet-bird'
    },

    'resnet-bird': {
      id: 'resnet-bird',
      title: 'IEEE Publication: Bird Species Classification Using ResNet-50',
      tagline: 'Published research paper at ICISS 2026 detailing a deep learning framework achieving 96% classification accuracy across 15 bird species.',
      category: 'Research Publication • IEEE Xplore',
      year: '2026',
      client: 'IEEE Xplore / ICISS 2026',
      role: 'Lead Researcher & AI Author',
      duration: '4 Months',
      tech: ['Python', 'TensorFlow', 'ResNet-50', 'OpenCV', 'Data Augmentation', 'Transfer Learning'],
      heroImg: './assets/ieee_paper_xplore.png',
      overview: 'Authored and presented a research paper titled "Deep Learning-Based Bird Species Classification Using ResNet-50" at the 8th International Conference on Intelligent Sustainable Systems (ICISS 2026), published on IEEE Xplore.',
      challenge: 'High intra-class variation and complex background noise in natural wildlife images leading to misclassification in baseline CNN models.',
      solution: 'Utilized ResNet-50 transfer learning pretrained on ImageNet, fine-tuned dense layers, and applied robust data augmentation (random flips, rotation, scaling) with OpenCV image preprocessing.',
      keyMetrics: [
        { label: 'Classification Accuracy', value: '96.0%' },
        { label: 'Bird Species Covered', value: '15' },
        { label: 'IEEE Publication Status', value: 'Indexed' }
      ],
      process: [
        'Dataset Curation & OpenCV Image Preprocessing',
        'ResNet-50 Architecture Setup & Transfer Learning Fine-Tuning',
        'Hyperparameter Optimization & Training Validation',
        'Paper Writing, Peer Review & Presentation at ICISS 2026'
      ],
      links: [
        { label: 'View IEEE Xplore Publication', url: 'https://ieeexplore.ieee.org/document/11453967' }
      ],
      nextId: 'deep-taxonomy'
    },

    'deep-taxonomy': {
      id: 'deep-taxonomy',
      title: 'Taxonomy Classification — Deep Learning System',
      tagline: 'Automated deep learning model using TensorFlow and OpenCV to classify organism taxonomy from biological images.',
      category: 'AI / ML • Computer Vision • TensorFlow',
      year: '2025',
      client: 'BioTech AI Project',
      role: 'Machine Learning Developer',
      duration: '2 Months',
      tech: ['Python', 'TensorFlow', 'ResNet-50', 'OpenCV', 'Pandas', 'NumPy'],
      heroImg: './assets/bird_species_predictor.png?v=2',
      overview: 'Developed a computer vision system to automate biological taxonomy classification from image datasets, reducing manual classification time for researchers.',
      challenge: 'Handling imbalanced image classes and subtle feature variations across biological sub-species.',
      solution: 'Applied class weighting, transfer learning, and feature map visualizations to verify model focus on key morphological traits.',
      keyMetrics: [
        { label: 'Classification Speed', value: '50ms/img' },
        { label: 'Model Generalization', value: 'High' },
        { label: 'Data Preprocessing Speed', value: '3x Faster' }
      ],
      process: [
        'Data Cleaning & Augmentation Pipeline',
        'TensorFlow Model Training & Evaluation',
        'Accuracy Tuning & Feature Extraction Analysis'
      ],
      links: [
        { label: 'Live Application (Streamlit)', url: 'https://taxonomyclassifcation.streamlit.app/' },
        { label: 'GitHub Repository', url: 'https://github.com/Yukesh07-dev' }
      ],
      nextId: 'ngo-platform'
    }
  };

  const BLOG_ARTICLES = {
    'ieee-paper': {
      id: 'ieee-paper',
      title: 'Deep Learning-Based Bird Species Classification Using ResNet-50 (IEEE Research Summary)',
      date: '2026 Conference Paper',
      readTime: '6 min read',
      category: 'AI / ML Research',
      coverImg: './assets/ieee_paper_xplore.png',
      excerpt: 'Key takeaways and methodology from my IEEE Xplore paper on achieving 96% accuracy in automated bird species classification using ResNet-50.',
      content: `
        <p class="mb-6 leading-relaxed">In biological conservation and ecological research, automated species identification plays a crucial role in monitoring biodiversity. In my research paper presented at the 8th International Conference on Intelligent Sustainable Systems (ICISS 2026) and published on <strong>IEEE Xplore</strong>, I developed a transfer learning framework using ResNet-50.</p>
        
        <h3 class="text-2xl font-bold mb-4 font-heading text-primary">Key Methodology</h3>
        <p class="mb-6 leading-relaxed">Baseline convolutional neural networks often overfit when trained on limited wildlife datasets. By leveraging ResNet-50's residual connections and pretrained ImageNet weights, the model captures fine-grained plumage patterns and beak structures.</p>
        
        <blockquote class="my-8 p-6 border-l-4 border-accent bg-secondary rounded-r-lg italic text-lg text-primary">
          "Achieved 96.0% classification accuracy across 15 distinct bird species through transfer learning, data augmentation, and OpenCV spatial filtering."
        </blockquote>

        <h3 class="text-2xl font-bold mb-4 font-heading text-primary">Publication Details</h3>
        <p class="mb-4 text-secondary">
          <strong>Conference:</strong> 8th International Conference on Intelligent Sustainable Systems (ICISS 2026)<br>
          <strong>Publisher:</strong> IEEE Xplore<br>
          <strong>Link:</strong> <a href="https://ieeexplore.ieee.org/document/11453967" target="_blank" class="text-accent underline font-semibold">View Paper on IEEE Xplore ↗</a>
        </p>
      `
    },

    'mern-architecture': {
      id: 'mern-architecture',
      title: 'Building Production-Grade MERN Food Delivery Apps with Stripe',
      date: 'July 2026',
      readTime: '5 min read',
      category: 'Full-Stack Dev',
      coverImg: './assets/food_delivery.png',
      excerpt: 'How to structure RESTful APIs, cart state in React, and secure Stripe payment handling for scalable web applications.',
      content: `
        <p class="mb-6 leading-relaxed">Developing full-stack web applications requires balancing fast user interface responsiveness with rigid backend data security. In my full-stack food delivery application, I implemented a modular MERN architecture.</p>

        <h3 class="text-2xl font-bold mb-4 font-heading text-primary">Architecture Breakdown</h3>
        <ul class="list-disc list-inside space-y-3 mb-6 text-secondary">
          <li><strong>Frontend (React.js):</strong> Context API for dynamic shopping cart operations and instant UI updates.</li>
          <li><strong>Backend (Node.js & Express):</strong> REST APIs handling user authentication, menu filtering, and payment payloads.</li>
          <li><strong>Database (MongoDB):</strong> Document schema tailored for multi-item order collections.</li>
          <li><strong>Payments (Stripe):</strong> Secure checkout sessions with webhook verification.</li>
        </ul>
      `
    },

    'spring-boot-ngo': {
      id: 'spring-boot-ngo',
      title: 'Architecting Enterprise Java Spring Boot Backends with Cloud MySQL',
      date: 'June 2026',
      readTime: '7 min read',
      category: 'Java & Cloud',
      coverImg: './assets/ngo_connect.png',
      excerpt: 'Lessons learned building an NGO event and donation portal deployed across Netlify, Render, Aiven MySQL, and Razorpay API.',
      content: `
        <p class="mb-6 leading-relaxed">For applications handling financial transactions and volunteer registrations, Java Spring Boot provides unmatched type-safety, dependency injection, and enterprise reliability.</p>

        <h3 class="text-2xl font-bold mb-4 font-heading text-primary">Distributed Deployment Pipeline</h3>
        <p class="mb-6 leading-relaxed">By hosting the frontend on Netlify, backend REST APIs on Render, and MySQL on Aiven cloud cluster, the system maintains 99.9% uptime while handling Razorpay transaction webhooks effortlessly.</p>
      `
    }
  };

  // ------------------------------------------
  // 2. THEME CONTROLLER (LIGHT/DARK)
  // ------------------------------------------
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const htmlDoc = document.documentElement;

  function getInitialTheme() {
    const savedTheme = localStorage.getItem('folio_theme');
    if (savedTheme) return savedTheme;
    return 'dark';
  }

  function setTheme(theme) {
    htmlDoc.setAttribute('data-theme', theme);
    localStorage.setItem('folio_theme', theme);
    
    themeToggleBtns.forEach(btn => {
      const sunIcon = btn.querySelector('.sun-icon');
      const moonIcon = btn.querySelector('.moon-icon');
      if (sunIcon && moonIcon) {
        if (theme === 'dark') {
          sunIcon.classList.remove('hidden');
          moonIcon.classList.add('hidden');
        } else {
          sunIcon.classList.add('hidden');
          moonIcon.classList.remove('hidden');
        }
      }
    });
  }

  setTheme(getInitialTheme());

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = htmlDoc.getAttribute('data-theme');
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(nextTheme);
    });
  });

  // ------------------------------------------
  // 3. SCROLL PROGRESS & NAVBAR CONTROLLER
  // ------------------------------------------
  const navbarHeader = document.querySelector('.navbar-header');
  const globalProgressBar = document.querySelector('.scroll-progress-bar');
  const backToTopBtn = document.querySelector('.back-to-top-btn');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

    if (globalProgressBar) {
      globalProgressBar.style.width = `${scrollPercent}%`;
    }

    if (navbarHeader) {
      if (scrollTop > 40) {
        navbarHeader.classList.add('scrolled');
      } else {
        navbarHeader.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ------------------------------------------
  // 4. FLOATING THREE-DOT MOBILE MENU CONTROLLER
  // ------------------------------------------
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenuPanel = document.getElementById('mobile-menu-panel');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-connect-btn');

  function openMobileMenu() {
    if (!mobileMenuPanel || !mobileMenuBtn) return;
    mobileMenuPanel.classList.add('active');
    mobileMenuBtn.classList.add('active');
  }

  function closeMobileMenu() {
    if (!mobileMenuPanel || !mobileMenuBtn) return;
    mobileMenuPanel.classList.remove('active');
    mobileMenuBtn.classList.remove('active');
  }

  if (mobileMenuBtn && mobileMenuPanel) {
    mobileMenuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isActive = mobileMenuPanel.classList.contains('active');
      if (isActive) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    document.addEventListener('click', (e) => {
      if (mobileMenuPanel.classList.contains('active') &&
          !mobileMenuPanel.contains(e.target) &&
          !mobileMenuBtn.contains(e.target)) {
        closeMobileMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuPanel.classList.contains('active')) {
        closeMobileMenu();
      }
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        closeMobileMenu();
      });
    });
  }

  // ------------------------------------------
  // 5. INTERSECTION OBSERVER FOR SCROLL REVEALS
  // ------------------------------------------
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // ------------------------------------------
  // 6. CASE STUDY MODAL CONTROLLER
  // ------------------------------------------
  const caseStudyModal = document.getElementById('case-study-modal');
  const caseStudyBody = document.getElementById('case-study-modal-body');
  const modalProgressBar = document.getElementById('modal-progress-bar');
  const modalCloseBtns = document.querySelectorAll('.close-modal-trigger');

  function openCaseStudy(projectId) {
    const data = CASE_STUDIES[projectId];
    if (!data || !caseStudyModal || !caseStudyBody) return;

    caseStudyBody.innerHTML = `
      <!-- Case Study Header -->
      <div class="mb-8">
        <div class="flex flex-wrap items-center justify-between gap-4 mb-3">
          <span class="eyebrow-badge">${data.category}</span>
          ${data.links && data.links.length > 0 ? `
            <a href="${data.links[0].url}" target="_blank" rel="noopener noreferrer" class="px-4 py-2 rounded-xl bg-accent text-white font-mono text-xs font-bold hover:bg-accent-hover transition-colors flex items-center gap-2 shadow-sm">
              <span>${data.links[0].label} ↗</span>
            </a>
          ` : ''}
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-heading mb-4 text-primary leading-tight">${data.title}</h2>
        <p class="text-lg md:text-xl text-secondary mb-6 leading-relaxed">${data.tagline}</p>
        
        <!-- Metadata Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-secondary border border-border font-mono text-sm mb-8">
          <div>
            <span class="text-muted block text-xs uppercase tracking-wider mb-1">Domain</span>
            <span class="text-primary font-semibold">${data.client}</span>
          </div>
          <div>
            <span class="text-muted block text-xs uppercase tracking-wider mb-1">Role</span>
            <span class="text-primary font-semibold">${data.role}</span>
          </div>
          <div>
            <span class="text-muted block text-xs uppercase tracking-wider mb-1">Duration</span>
            <span class="text-primary font-semibold">${data.duration}</span>
          </div>
          <div>
            <span class="text-muted block text-xs uppercase tracking-wider mb-1">Year</span>
            <span class="text-primary font-semibold">${data.year}</span>
          </div>
        </div>
      </div>

      <!-- Hero Banner Image -->
      <div class="w-full aspect-video rounded-2xl overflow-hidden border border-border mb-10 bg-secondary">
        <img src="${data.heroImg}" alt="${data.title}" class="w-full h-full object-cover" />
      </div>

      <!-- Overview & Challenge -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div class="p-6 rounded-2xl bg-card border border-border">
          <h3 class="text-xl font-bold font-heading text-primary mb-3">Project Overview</h3>
          <p class="text-secondary leading-relaxed text-sm md:text-base">${data.overview}</p>
        </div>
        <div class="p-6 rounded-2xl bg-card border border-border">
          <h3 class="text-xl font-bold font-heading text-primary mb-3">Technical Challenge</h3>
          <p class="text-secondary leading-relaxed text-sm md:text-base">${data.challenge}</p>
        </div>
      </div>

      <!-- Key Impact Metrics -->
      <div class="mb-12 p-8 rounded-2xl bg-secondary border border-border">
        <h3 class="text-xs font-mono font-semibold uppercase tracking-widest text-accent mb-6">Key Results & Performance</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          ${data.keyMetrics.map(m => `
            <div>
              <span class="block text-4xl md:text-5xl font-bold font-heading text-primary mb-1">${m.value}</span>
              <span class="text-sm text-secondary font-medium">${m.label}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Solution & Stack -->
      <div class="mb-12">
        <h3 class="text-2xl font-bold font-heading text-primary mb-4">Architecture & Engineering Solution</h3>
        <p class="text-secondary leading-relaxed mb-6">${data.solution}</p>
        
        <h4 class="text-sm font-mono font-semibold uppercase tracking-wider text-accent mb-4">Technologies & Tools</h4>
        <div class="flex flex-wrap gap-2 mb-8">
          ${data.tech.map(t => `<span class="px-3 py-1.5 rounded-lg bg-secondary border border-border text-xs font-mono font-medium text-primary">${t}</span>`).join('')}
        </div>

        <h4 class="text-sm font-mono font-semibold uppercase tracking-wider text-accent mb-4">Implementation Process</h4>
        <div class="space-y-3 mb-8">
          ${data.process.map((step, idx) => `
            <div class="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
              <span class="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center font-mono text-xs font-bold text-accent">0${idx + 1}</span>
              <span class="text-sm md:text-base font-medium text-primary">${step}</span>
            </div>
          `).join('')}
        </div>

        ${data.links && data.links.length > 0 ? `
          <h4 class="text-sm font-mono font-semibold uppercase tracking-wider text-accent mb-4">External Links & Credentials</h4>
          <div class="flex flex-wrap gap-3">
            ${data.links.map(l => `
              <a href="${l.url}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs py-2 px-4">
                <span>${l.label} ↗</span>
              </a>
            `).join('')}
          </div>
        ` : ''}
      </div>

      <!-- Next Project Link -->
      ${data.nextId ? `
        <div class="pt-8 border-t border-border flex justify-between items-center">
          <span class="text-sm text-muted">Explore next project</span>
          <button class="next-case-study-btn btn-secondary text-sm" data-next="${data.nextId}">
            Next Project →
          </button>
        </div>
      ` : ''}
    `;

    caseStudyModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const modalContainer = caseStudyModal.querySelector('.modal-container');
    if (modalContainer && modalProgressBar) {
      modalProgressBar.style.width = '0%';
      modalContainer.onscroll = () => {
        const mTop = modalContainer.scrollTop;
        const mHeight = modalContainer.scrollHeight - modalContainer.clientHeight;
        const mPercent = mHeight > 0 ? (mTop / mHeight) * 100 : 0;
        modalProgressBar.style.width = `${mPercent}%`;
      };
    }

    const nextBtn = caseStudyBody.querySelector('.next-case-study-btn');
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        const nId = e.currentTarget.getAttribute('data-next');
        openCaseStudy(nId);
      });
    }
  }

  // Choice Modal Controller
  const projectChoiceModal = document.getElementById('project-choice-modal');
  const choiceCategory = document.getElementById('choice-project-category');
  const choiceTitle = document.getElementById('choice-project-title');
  const choiceDetailsBtn = document.getElementById('choice-view-details-btn');
  const choiceLiveBtn = document.getElementById('choice-visit-live-btn');
  const choiceLiveUrlText = document.getElementById('choice-live-url-text');
  const closeChoiceTriggers = document.querySelectorAll('.close-choice-trigger');

  let activeProjectIdForChoice = null;

  function openProjectChoiceModal(projectId, liveUrl) {
    const data = CASE_STUDIES[projectId];
    activeProjectIdForChoice = projectId;

    if (data) {
      if (choiceCategory) choiceCategory.textContent = (data.category || 'FULL-STACK PROJECT').replace(/•/g, '·').toUpperCase();
      if (choiceTitle) choiceTitle.textContent = data.title;
    }

    const targetUrl = liveUrl || (data && data.links && data.links[0] ? data.links[0].url : 'https://impactpulseorg.netlify.app/');
    if (choiceLiveBtn) choiceLiveBtn.href = targetUrl;
    if (choiceLiveUrlText) choiceLiveUrlText.textContent = targetUrl;

    if (projectChoiceModal) {
      projectChoiceModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeChoiceModal() {
    if (projectChoiceModal) projectChoiceModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  if (choiceDetailsBtn) {
    choiceDetailsBtn.addEventListener('click', () => {
      closeChoiceModal();
      if (activeProjectIdForChoice) {
        openCaseStudy(activeProjectIdForChoice);
      }
    });
  }

  if (choiceLiveBtn) {
    choiceLiveBtn.addEventListener('click', () => {
      closeChoiceModal();
    });
  }

  closeChoiceTriggers.forEach(btn => btn.addEventListener('click', closeChoiceModal));

  if (projectChoiceModal) {
    projectChoiceModal.addEventListener('click', (e) => {
      if (e.target === projectChoiceModal) closeChoiceModal();
    });
  }

  function closeModal() {
    if (caseStudyModal) caseStudyModal.classList.remove('active');
    if (projectChoiceModal) projectChoiceModal.classList.remove('active');
    const blogModal = document.getElementById('blog-modal');
    if (blogModal) blogModal.classList.remove('active');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-project-id]').forEach(card => {
    card.addEventListener('click', () => {
      const pId = card.getAttribute('data-project-id');
      const liveUrl = card.getAttribute('data-live-url') || (CASE_STUDIES[pId] && CASE_STUDIES[pId].links && CASE_STUDIES[pId].links[0] ? CASE_STUDIES[pId].links[0].url : null);
      openProjectChoiceModal(pId, liveUrl);
    });
  });

  modalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  if (caseStudyModal) {
    caseStudyModal.addEventListener('click', (e) => {
      if (e.target === caseStudyModal) closeModal();
    });
  }

  // ------------------------------------------
  // 7. BLOG ARTICLE MODAL CONTROLLER
  // ------------------------------------------
  const blogModal = document.getElementById('blog-modal');
  const blogModalBody = document.getElementById('blog-modal-body');
  const blogProgressBar = document.getElementById('blog-modal-progress-bar');

  function openBlogArticle(articleId) {
    const article = BLOG_ARTICLES[articleId];
    if (!article || !blogModal || !blogModalBody) return;

    blogModalBody.innerHTML = `
      <div class="mb-8">
        <div class="flex items-center gap-3 mb-4">
          <span class="eyebrow-badge">${article.category}</span>
          <span class="text-xs font-mono text-muted">${article.date} • ${article.readTime}</span>
        </div>
        <h2 class="text-3xl md:text-5xl font-bold font-heading text-primary mb-4 leading-tight">${article.title}</h2>
        <p class="text-lg text-secondary italic leading-relaxed mb-6">${article.excerpt}</p>
      </div>

      <div class="w-full aspect-video rounded-2xl overflow-hidden border border-border mb-8 bg-secondary">
        <img src="${article.coverImg}" alt="${article.title}" class="w-full h-full object-cover" />
      </div>

      <div class="prose max-w-none text-secondary">
        ${article.content}
      </div>

      <div class="mt-12 pt-6 border-t border-border flex justify-end">
        <button class="btn-secondary text-sm close-modal-trigger">
          Close Article
        </button>
      </div>
    `;

    blogModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const bContainer = blogModal.querySelector('.modal-container');
    if (bContainer && blogProgressBar) {
      blogProgressBar.style.width = '0%';
      bContainer.onscroll = () => {
        const bTop = bContainer.scrollTop;
        const bHeight = bContainer.scrollHeight - bContainer.clientHeight;
        const bPercent = bHeight > 0 ? (bTop / bHeight) * 100 : 0;
        blogProgressBar.style.width = `${bPercent}%`;
      };
    }

    const cBtn = blogModalBody.querySelector('.close-modal-trigger');
    if (cBtn) cBtn.addEventListener('click', closeModal);
  }

  document.querySelectorAll('[data-blog-id]').forEach(card => {
    card.addEventListener('click', () => {
      const bId = card.getAttribute('data-blog-id');
      openBlogArticle(bId);
    });
  });

  if (blogModal) {
    blogModal.addEventListener('click', (e) => {
      if (e.target === blogModal) closeModal();
    });
  }

  // ------------------------------------------
  // 8. INTERACTIVE CONTACT FORM & TOAST
  // ------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const toastNotification = document.getElementById('toast-notification');
  const toastMessage = document.getElementById('toast-message');
  const copyEmailBtn = document.getElementById('copy-email-btn');

  function showToast(msg) {
    if (!toastNotification || !toastMessage) return;
    toastMessage.textContent = msg;
    toastNotification.classList.add('active');
    setTimeout(() => {
      toastNotification.classList.remove('active');
    }, 3500);
  }

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('form-name')?.value || '';
      const email = document.getElementById('form-email')?.value || '';
      const serviceSelect = document.getElementById('form-service');
      const serviceText = serviceSelect && serviceSelect.selectedIndex >= 0 
        ? serviceSelect.options[serviceSelect.selectedIndex].text 
        : 'General Inquiry';
      const message = document.getElementById('form-message')?.value || '';

      const fullMessage = `Hi Yukesh!\n\n*Name:* ${name}\n*Email:* ${email}\n*Inquiry:* ${serviceText}\n\n*Message:*\n${message}`;
      const whatsappUrl = `https://wa.me/919342480882?text=${encodeURIComponent(fullMessage)}`;

      showToast('Opening WhatsApp to send your message...');

      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        contactForm.reset();
      }, 500);
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'yukeshyuki96000@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        showToast('Yukesh\'s email copied to clipboard!');
      }).catch(() => {
        showToast(`Email: ${email}`);
      });
    });
  }

  // ------------------------------------------
  // 9. PROFILE IMAGE LIGHTBOX MODAL
  // ------------------------------------------
  const profileImageModal = document.getElementById('profile-image-modal');
  const closeProfileBtns = document.querySelectorAll('.close-profile-modal');

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('.profile-img-trigger');
    if (trigger) {
      e.preventDefault();
      e.stopPropagation();
      if (profileImageModal) {
        profileImageModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    }
  });

  if (profileImageModal) {
    closeProfileBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        profileImageModal.classList.remove('active');
        document.body.style.overflow = '';
      });
    });

    profileImageModal.addEventListener('click', (e) => {
      if (e.target === profileImageModal) {
        profileImageModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
