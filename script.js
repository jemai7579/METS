// script.js
    const darkModeBtn = document.getElementById('darkModeBtn');
    darkModeBtn.addEventListener('click', function(){
      document.body.classList.toggle('dark-mode');
      darkModeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
    });

    // === Language switcher ===
    const langSelect = document.getElementById('langSelect');
    const translations = {
      fr: {
        heroTitle: "METS - Solutions électrotechniques",
        heroDesc: "Des équipements sur mesure, maintenance proactive et conseil technique pour des installations fiables et durables.",
        aboutTitle: "À propos de METS",
        aboutDesc1: "METS est une entreprise tunisienne spécialisée dans la conception, la fabrication et la maintenance d'équipements électrotechniques adaptés aux besoins industriels. Nous combinons savoir-faire local et standards internationaux pour assurer performance, durabilité et satisfaction.",
        aboutDesc2: "Notre équipe accompagne chaque projet, du dimensionnement à l'intégration, avec un suivi personnalisé.",
        productsTitle: "Produits & Services",
        cards: [
          {title:"Produits sur mesure",desc:"Câblage, armoires, systèmes de distribution adaptés à votre architecture électrique.",small:"Conception selon vos exigences techniques."},
          {title:"Maintenance",desc:"Interventions préventives et correctives pour garantir la continuité de service.",small:"Contrats personnalisés avec suivi régulier."},
          {title:"Ingénierie & conseil",desc:"Audit, optimisation énergétique et solutions pour améliorer l'efficacité globale.",small:"Analyse de bout en bout."}
        ],
        referencesTitle: "Nos Références",
        references: [
          {title:"Usine agroalimentaire",desc:"Automatisation complète avec équipements sur mesure.",small:"Réduction des arrêts techniques."},
          {title:"Complexe résidentiel",desc:"Distribution électrique sécurisée et conforme.",small:"Projet livré dans les délais."},
          {title:"Centrale énergétique",desc:"Maintenance continue et supervision.",small:"Performance optimale garantie."},
          {title:"Usine textile",desc:"Audit énergétique et réingénierie des circuits.",small:"Baisse notable de la consommation."}
        ],
        chatbotTitle: "Assistant Client",
        chatbotSuggestions: ["Prix", "Maintenance", "Contact", "Produit", "Urgent", "Qualité", "Réclamation"],
        sidebarMenu: ["Accueil", "Services", "Références", "Assistant Client"],
        sidebarConnect: "Se connecter"
      },
      en: {
        heroTitle: "METS - Electrotechnical Solutions",
        heroDesc: "Custom equipment, proactive maintenance and technical advice for reliable and durable installations.",
        aboutTitle: "About METS",
        aboutDesc1: "METS is a Tunisian company specializing in the design, manufacture and maintenance of electrotechnical equipment for industrial needs. We combine local expertise and international standards for performance, durability and satisfaction.",
        aboutDesc2: "Our team supports each project, from sizing to integration, with personalized follow-up.",
        productsTitle: "Products & Services",
        cards: [
          {title:"Custom Products",desc:"Wiring, cabinets, distribution systems adapted to your electrical architecture.",small:"Designed to your technical requirements."},
          {title:"Maintenance",desc:"Preventive and corrective interventions to ensure service continuity.",small:"Personalized contracts with regular follow-up."},
          {title:"Engineering & Consulting",desc:"Audit, energy optimization and solutions to improve overall efficiency.",small:"End-to-end analysis."}
        ],
        referencesTitle: "Our References",
        references: [
          {title:"Food Factory",desc:"Complete automation with custom equipment.",small:"Reduced technical downtime."},
          {title:"Residential Complex",desc:"Secure and compliant electrical distribution.",small:"Project delivered on time."},
          {title:"Energy Plant",desc:"Continuous maintenance and supervision.",small:"Optimal performance guaranteed."},
          {title:"Textile Factory",desc:"Energy audit and circuit reengineering.",small:"Noticeable reduction in consumption."}
        ],
        chatbotTitle: "Client Assistant",
        chatbotSuggestions: ["Price", "Maintenance", "Contact", "Product", "Urgent", "Quality", "Complaint"],
        sidebarMenu: ["Home", "Services", "References", "Client Assistant"],
        sidebarConnect: "Login"
      },
      ar: {
        heroTitle: "ميتس - حلول الكهروميكانيك",
        heroDesc: "معدات مخصصة، صيانة استباقية واستشارات تقنية لتركيبات موثوقة ودائمة.",
        aboutTitle: "حول ميتس",
        aboutDesc1: "ميتس هي شركة تونسية متخصصة في تصميم وتصنيع وصيانة المعدات الكهروميكانيكية حسب الاحتياجات الصناعية. نجمع بين الخبرة المحلية والمعايير الدولية لضمان الأداء والمتانة والرضا.",
        aboutDesc2: "فريقنا يرافق كل مشروع من التحديد إلى الدمج مع متابعة شخصية.",
        productsTitle: "المنتجات والخدمات",
        cards: [
          {title:"منتجات مخصصة",desc:"أسلاك، خزائن، أنظمة توزيع حسب هندستك الكهربائية.",small:"تصميم حسب متطلباتك التقنية."},
          {title:"الصيانة",desc:"تدخلات وقائية وتصحيحية لضمان استمرارية الخدمة.",small:"عقود مخصصة مع متابعة منتظمة."},
          {title:"الهندسة والاستشارة",desc:"تدقيق، تحسين الطاقة وحلول لرفع الكفاءة العامة.",small:"تحليل شامل من البداية للنهاية."}
        ],
        referencesTitle: "مراجعنا",
        references: [
          {title:"مصنع أغذية",desc:"أتمتة كاملة بمعدات مخصصة.",small:"تقليل التوقفات التقنية."},
          {title:"مجمع سكني",desc:"توزيع كهربائي آمن ومتوافق.",small:"تم تسليم المشروع في الوقت المحدد."},
          {title:"محطة طاقة",desc:"صيانة مستمرة وإشراف.",small:"ضمان أداء مثالي."},
          {title:"مصنع نسيج",desc:"تدقيق الطاقة وإعادة هندسة الدوائر.",small:"انخفاض ملحوظ في الاستهلاك."}
        ],
        chatbotTitle: "مساعد العملاء",
        chatbotSuggestions: ["السعر", "الصيانة", "الاتصال", "المنتج", "عاجل", "الجودة", "شكوى"],
        sidebarMenu: ["الرئيسية", "الخدمات", "المراجع", "مساعد العملاء"],
        sidebarConnect: "تسجيل الدخول"
      }
    };

    function setLanguage(lang) {
      const t = translations[lang] || translations.fr;
      document.querySelector('#hero h1').textContent = t.heroTitle;
      document.querySelector('#hero p').textContent = t.heroDesc;
      document.querySelector('#about h2').textContent = t.aboutTitle;
      document.querySelectorAll('#about p')[0].textContent = t.aboutDesc1;
      document.querySelectorAll('#about p')[1].textContent = t.aboutDesc2;
      document.querySelector('#products-services h2').textContent = t.productsTitle;
      const cards = document.querySelectorAll('#products-services .card');
      t.cards.forEach((c,i)=>{
        cards[i].querySelector('h3').textContent = c.title;
        cards[i].querySelector('p').textContent = c.desc;
        cards[i].querySelector('small').textContent = c.small;
      });
      document.querySelector('#references h2').textContent = t.referencesTitle;
      const refCards = document.querySelectorAll('#references .card');
      t.references.forEach((c,i)=>{
        refCards[i].querySelector('h3').textContent = c.title;
        refCards[i].querySelector('p').textContent = c.desc;
        refCards[i].querySelector('small').textContent = c.small;
      });
      document.querySelector('#chatbot-section h2').textContent = t.chatbotTitle;
      // Update chatbot suggestion buttons
      const suggestionBtns = document.querySelectorAll('#suggestionButtons .suggestion-btn');
      t.chatbotSuggestions.forEach((label,i)=>{
        if(suggestionBtns[i]) suggestionBtns[i].textContent = label;
      });
      // Update sidebar menu links
      const sidebarLinks = document.querySelectorAll('.sidebar-nav a');
      t.sidebarMenu.forEach((label,i)=>{
        if(sidebarLinks[i]) sidebarLinks[i].textContent = label;
      });
      // Update sidebar connect button
      const sidebarConnectBtn = document.getElementById('loginBtnSidebar');
      if(sidebarConnectBtn) sidebarConnectBtn.textContent = t.sidebarConnect;
      // Update sidebar chatbot button
      const sidebarChatbotBtn = document.getElementById('sidebarChatbotLink');
      if(sidebarChatbotBtn) sidebarChatbotBtn.textContent = t.sidebarMenu[3];
    }
    langSelect.addEventListener('change', function(){
      setLanguage(langSelect.value);
    });
    // Initial language
    setLanguage('fr');
    // === Sidebar initial state cleanup ===
    window.addEventListener('DOMContentLoaded', function() {
      const sidebar = document.getElementById('sidebar');
      if (sidebar && sidebar.classList.contains('open')) {
        sidebar.classList.remove('open');
      }
      const sidebarToggle = document.getElementById('sidebarToggle');
      if (sidebarToggle) {
        sidebarToggle.textContent = '☰';
        sidebarToggle.setAttribute('aria-label', 'Ouvrir le menu');
      }
    });

    // === Modal connexion ===
    const modalBg = document.getElementById('modalBackground');
    const closeModalBtn = document.getElementById('closeModal');
    const userTypeRadios = document.getElementsByName('userType');
    const clientForm = document.getElementById('clientForm');
    const employeeForm = document.getElementById('employeeForm');
    const employeeMessagesDiv = document.getElementById('employeeMessages');
    const employeeRatingsDiv = document.getElementById('employeeRatings');
    const loginBtnSidebar = document.getElementById('loginBtnSidebar');

    let clientMessages = [];
    let clientRatings = [];

    function openModal() {
      modalBg.style.display = 'flex';
      resetForms();
    }
    if (loginBtnSidebar) {
      loginBtnSidebar.addEventListener('click', openModal);
    }
    closeModalBtn.addEventListener('click', () => modalBg.style.display = 'none');
    modalBg.addEventListener('click', e => { if (e.target === modalBg) modalBg.style.display = 'none'; });

    function showForm(type){
      if(type==='client'){
        clientForm.classList.add('active');
        employeeForm.classList.remove('active');
        document.getElementById('clientChoiceBtns').style.display = 'flex';
        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('requestForm').style.display = 'none';
      } else if(type==='employee'){
        employeeForm.classList.add('active');
        clientForm.classList.remove('active');
        document.getElementById('clientChoiceBtns').style.display = 'none';
        document.getElementById('feedbackForm').style.display = 'none';
        document.getElementById('requestForm').style.display = 'none';
        updateEmployeeView();
      }
    }
    userTypeRadios.forEach(r => r.addEventListener('change', e => showForm(e.target.value)));
    function resetForms(){
      clientForm.classList.remove('active');
      employeeForm.classList.remove('active');
      userTypeRadios.forEach(r => r.checked=false);
      document.getElementById('clientChoiceBtns').style.display = 'none';
      document.getElementById('feedbackForm').style.display = 'none';
      document.getElementById('requestForm').style.display = 'none';
      if(document.getElementById('feedbackForm')) document.getElementById('feedbackForm').reset();
      if(document.getElementById('requestForm')) document.getElementById('requestForm').reset();
    }
    clientForm.addEventListener('submit', e => {
      e.preventDefault();
    });
    function updateEmployeeView(){
      if(clientMessages.length === 0){
        employeeMessagesDiv.textContent = 'Aucun message pour le moment.';
      } else {
        employeeMessagesDiv.textContent = clientMessages.map((m,i)=> `#${i+1}:\n${m}`).join('\n\n');
      }
      if(clientRatings.length === 0){
        employeeRatingsDiv.textContent = 'Aucune note pour le moment.';
      } else {
        const avg = (clientRatings.reduce((a,b)=>a+b,0)/clientRatings.length).toFixed(2);
        employeeRatingsDiv.textContent = `Nombre d'avis : ${clientRatings.length} – Note moyenne : ${avg} / 5`;
      }
    }

    // === Chatbot mot-clés ===
    // === Gestion des choix client ===
    const btnFeedback = document.getElementById('btnFeedback');
    const btnRequest = document.getElementById('btnRequest');
    const feedbackForm = document.getElementById('feedbackForm');
    const requestForm = document.getElementById('requestForm');
    if(btnFeedback && btnRequest){
      btnFeedback.addEventListener('click', function(){
        feedbackForm.style.display = 'block';
        requestForm.style.display = 'none';
      });
      btnRequest.addEventListener('click', function(){
        feedbackForm.style.display = 'none';
        requestForm.style.display = 'block';
      });
    }

    if(feedbackForm){
      feedbackForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('feedbackName').value.trim();
        const email = document.getElementById('feedbackEmail').value.trim();
        const text = document.getElementById('feedbackText').value.trim();
        const rate = parseInt(document.getElementById('feedbackRate').value);
        if(!name || !email || !text || !rate){
          alert('Veuillez remplir tous les champs.');
          return;
        }
        clientMessages.push(`Nom: ${name}\nEmail: ${email}\nFeedback: ${text}`);
        clientRatings.push(rate);
        alert('Feedback envoyé, merci !');
        feedbackForm.reset();
        feedbackForm.style.display = 'none';
        document.getElementById('clientChoiceBtns').style.display = 'flex';
        updateEmployeeView();
      });
    }
    if(requestForm){
      requestForm.addEventListener('submit', function(e){
        e.preventDefault();
        const name = document.getElementById('requestName').value.trim();
        const email = document.getElementById('requestEmail').value.trim();
        const service = document.getElementById('requestService').value.trim();
        if(!name || !email || !service){
          alert('Veuillez remplir tous les champs.');
          return;
        }
        clientMessages.push(`Nom: ${name}\nEmail: ${email}\nDemande: ${service}`);
        alert('Demande envoyée, merci !');
        requestForm.reset();
        requestForm.style.display = 'none';
        document.getElementById('clientChoiceBtns').style.display = 'flex';
        updateEmployeeView();
      });
    }

    const userInput = document.getElementById('userInput');
    const sendBtn = document.getElementById('sendBtn');
    const messagesDiv = document.getElementById('messages');

    const knowledgeBase = [
      {
        keywords: ['prix', 'tarif', 'devis', 'coût'],
        response: "Pour obtenir un devis, remplissez le formulaire client avec votre besoin précis. Vous voulez que je vous l'ouvre ?"
      },
      {
        keywords: ['maintenance', 'réparation', 'support'],
        response: "Nous offrons des contrats de maintenance préventive et corrective. Souhaitez-vous une estimation ?"
      },
      {
        keywords: ['contact', 'joindre', 'appel', 'email'],
        response: "Vous pouvez nous contacter via le formulaire client. Voulez-vous que je l'affiche ?"
      },
      {
        keywords: ['produit', 'offre', 'service'],
        response: "Nous proposons : produits sur mesure, maintenance et ingénierie. Laquelle vous intéresse ?"
      },
      {
        keywords: ['urgent', 'immédiat', 'rapidement'],
        response: "Je peux marquer votre demande comme urgente ; décrivez brièvement ce qu'il faut faire."
      },
      {
        keywords: ['qualité', 'normes', 'fiabilité'],
        response: "Nos équipements respectent les normes internationales et passent des contrôles qualité stricts."
      },
      {
        keywords: ['réclamation', 'problème', 'insatisfaction'],
        response: "Désolé pour la gêne. Décrivez votre souci, je peux générer une fiche ou transmettre au support."
      }
    ];

    function addMessage(text, sender='bot'){
      const wrapper = document.createElement('div');
      wrapper.classList.add('message', sender);
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.textContent = text;
      wrapper.appendChild(bubble);
      messagesDiv.appendChild(wrapper);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    function detectAnswer(input){
      const sanitized = input.toLowerCase();
      for(const item of knowledgeBase){
        for(const kw of item.keywords){
          if(sanitized.includes(kw)){
            return item.response;
          }
        }
      }
      return null;
    }

    function botReply(userText){
      const typing = document.createElement('div');
      typing.className='bot-typing';
      typing.textContent='Le chatbot réfléchit...';
      messagesDiv.appendChild(typing);
      messagesDiv.scrollTop = messagesDiv.scrollHeight;

      setTimeout(() => {
        typing.remove();
        const answer = detectAnswer(userText);
        if(answer){
          addMessage(answer, 'bot');
        } else {
          addMessage("Désolé, je n'ai pas compris. Voulez-vous que je vous mette en relation avec un conseiller humain ?", 'bot');
        }
      }, 600);
    }

    sendBtn.addEventListener('click', () => {
      const text = userInput.value.trim();
      if(!text) return;
      addMessage(text, 'user');
      userInput.value='';
      botReply(text);
    });

    userInput.addEventListener('keypress', e => {
      if(e.key === 'Enter'){
        sendBtn.click();
      }
    });

    document.querySelectorAll('.suggestion-btn').forEach(btn => {
      btn.addEventListener('click', function() {
        const question = btn.getAttribute('data-question');
        addMessage(question, 'user');
        botReply(question);
      });
    });

    window.addEventListener('load', () => {
      setTimeout(() => {
        addMessage("Bonjour ! Comment puis-je vous aider aujourd'hui ? Vous pouvez demander sur les prix, la maintenance, le contact, etc.", 'bot');
      }, 400);
    });

    // === Sidebar toggle logic with title behavior ===
    const sidebar = document.getElementById('sidebar');
    const sidebarToggle = document.getElementById('sidebarToggle');
    sidebarToggle.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('open');
      sidebarToggle.textContent = isOpen ? '×' : '☰';
      sidebarToggle.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
      if (isOpen) {
        document.body.classList.add('compact-title');
      } else {
        document.body.classList.remove('compact-title');
      }
    });
    window.addEventListener('click', function(e){
      if(sidebar.classList.contains('open')){
        if(!sidebar.contains(e.target) && e.target !== sidebarToggle){
          sidebar.classList.remove('open');
          sidebarToggle.textContent = '☰';
          sidebarToggle.setAttribute('aria-label', 'Ouvrir le menu');
          document.body.classList.remove('compact-title');
        }
      }
    });

    // Scroll vers la section Assistant Client quand on clique dans la sidebar
    const sidebarChatbotLink = document.getElementById('sidebarChatbotLink');
    sidebarChatbotLink.addEventListener('click', function(e){
      e.preventDefault();
      sidebar.classList.remove('open');
      sidebarToggle.textContent = '☰';
      sidebarToggle.setAttribute('aria-label', 'Ouvrir le menu');
      document.body.classList.remove('compact-title');
      document.getElementById('chatbot-section').scrollIntoView({behavior: 'smooth'});
    });