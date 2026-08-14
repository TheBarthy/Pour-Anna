document.addEventListener("DOMContentLoaded", () => {
  // 1. GENERATION DU FOND ÉTOILÉ FIXE
  const starsBg = document.getElementById("stars-background");
  const starCount = 70;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.classList.add("bg-star");
    star.style.top = `${Math.random() * 100}vh`;
    star.style.left = `${Math.random() * 100}vw`;
    const size = Math.random() * 2.5 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.setProperty("--duration", `${Math.random() * 3 + 2}s`);
    starsBg.appendChild(star);
  }

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  // 1.5. ÉCRITURE CINÉMATIQUE INTRO
  const text1 = "J'ai toujours aimé regarder les étoiles et m'y perdre... mais les plus belles sont celles que tu as mises dans mes yeux en débarquant dans ma vie.";
  const text2 = "Et puisque ces étoiles m'ont tant marqué, je les partage avec toi. Chaque étoile cache quelque chose que j'aime chez toi, mais malheureusement le ciel est tellement vaste que je ne peux y mettre toutes les étoiles et tout ce que j'aime chez toi... il faudra donc te contenter de cela.";
  
  const astroText = "En astrophysique, regarder loin dans l'espace, c'est observer le passé. Et puisqu'on ne peut pas remonter le temps sur Terre, profitons d'être plongés dans le cosmos pour voyager loin, très loin... jusqu'à revivre le Big Bang, l'origine de tout, afin de retrouver l'étincelle de notre univers. Nous pourrons ensuite revenir tranquillement vers la Terre, en remontant le fil de notre histoire au fur et à mesure qu'on avance dans le temps.";

  const CHAR_SPEED = 45; 

  function typeCharacterByCharacter(elementId, text) {
    return new Promise((resolve) => {
      const element = document.getElementById(elementId);
      if(!element) return resolve();
      element.classList.add("typing-cursor");
      let i = 0;

      function type() {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          
          let delay = CHAR_SPEED;
          const char = text.charAt(i - 1);
          if (char === '.' || char === '!' || char === '?') delay = 450;
          else if (char === ',') delay = 200;

          setTimeout(type, delay);
        } else {
          element.classList.remove("typing-cursor");
          resolve();
        }
      }

      type();
    });
  }

  async function startCinematicIntro() {
    await typeCharacterByCharacter("cinematic-p1", text1);
    await new Promise(resolve => setTimeout(resolve, 800));
    await typeCharacterByCharacter("cinematic-p2", text2);
    await new Promise(resolve => setTimeout(resolve, 600));
    document.getElementById("btn-reveal-sky").classList.add("visible");
  }

  startCinematicIntro();

  // 2. CONFIGURATION DES ÉTOILES DU CIEL
  const centerPanStars = [
    { text: "J'adore ta façon d'être. C'est difficile à décrire tant tu es complexe et fascinante, mais la façon dont tu agis m'émerveille. Tes petits \"gnagnagna\" ou tes \"mais euh\" font désormais partie de toi, et je les adore. Tu as ce charme unique qui rend chaque instant plus doux et plus agréable.", top: '25%', left: '25%' },
    { text: "Ta présence est une véritable source de bonheur. Te côtoyer, même à travers l'écran d'un téléphone, c'est laisser entrer une lumière infiniment chaleureuse dans sa vie. Chaque moment à tes côtés devient précieux. Ta présence rassure, apaise et apporte une joie qu'aucun mot ne peut vraiment décrire.", top: '35%', left: '75%' },
    { text: "Ta gentillesse est sans doute la qualité qui te définit le mieux. Tu as ce cœur si grand qui t'honore, même si le monde autour ne la mérite pas toujours à sa juste valeur. Rencontrer une personne aussi attentive, authentique et profondément gentille que toi est quelque chose de très rare.", top: '55%', left: '50%' },
    { text: "Ta spontanéité mérite toute sa place ici. Tu as cette capacité fascinante d'être toi-même en toutes circonstances, avec une simplicité captivante. Grâce à toi, j'ai tout de suite su que je pouvais tomber le masque sans crainte d'être jugé. Pour quelqu'un de timide comme moi, réussir à être entièrement moi-même aux côtés d'une personne qui compte autant, c'est quelque chose de magique.", top: '75%', left: '25%' },
    { text: "Et puis, il y a ta belle folie ! Dit comme ça, on pourrait croire à une critique, mais c'est tout l'inverse. C'est ce grain de folie qui apporte de la nouveauté, des aventures et des rires. Être à tes côtés, c'est l'assurance d'un quotidien vivant, débordant de joie et de bonne humeur... en un mot : parfait.", top: '75%', left: '75%' }
  ];

  const leftPanStars = [
    { id: 1, text: "Impossible de rater ta magnifique chevelure rousse. Sa couleur est tout simplement fabuleuse et m'a ébloui dès le premier regard. Mais alors, quand j'ai vu le soleil s'y accrocher et y faire danser ses reflets, j'en ai pris plein les yeux.", top: '25%', left: '20%' },
    { id: 2, text: "Tes magnifiques yeux bleu-vert sont une pure merveille. Que dire de plus ? Maudit soit l'inventeur du GPS, parce que dans ton regard, je veux juste m'égarer sans jamais retrouver mon chemin. C'est sans doute ton âme si pure qui brille à travers... Ce qui est certain, c'est que je suis totalement tombé sous le charme.", top: '35%', left: '75%' },
    { id: 3, text: "Ton joli sourire apporterait de la joie à n'importe qui. Je consacrerais volontiers tout mon temps à amuser la galerie si ça me donne la chance de le voir. Et surtout, d'entendre ton rire : une mélodie si douce qui fait accélérer mon cœur, juste parce que je sais que c'est toi que je rends heureuse.", top: '65%', left: '25%' },
    { id: 4, text: "Ton strabisme. Même si tu as du mal avec cela, il donne à ton regard une préciosité et un charme uniques. Tes yeux expriment déjà tant de choses magnifiques, mais ce petit détail rend ton regard mémorable. Croiser tes yeux, c'est savoir qu'on contemple quelque chose qu'on ne reverra nulle part ailleurs, et c'est absolument merveilleux.", top: '75%', left: '70%' }
  ];

  const leftPanSpecialStar = {
    text: "Le ciel n'est pas assez grand pour tout contenir, alors je dois faire un résumé express — même si chaque détail chez toi mérite qu'on s'y attarde. Tes taches de rousseur magnifiques, ton style vestimentaire impeccable, tes lunettes qui illuminent ton visage avec tant de fraîcheur... La façon dont tu te coiffes, dont tu me regardes, dont tu te déplaces. Et puis tes mains, si jolies et si douces à tenir. Mon seul regret est d'avoir attendu la toute fin de notre date pour enfin oser prendre la tienne.",
    top: '50%', left: '50%'
  };

  const rightPanStars = [
    { id: 1, text: "Je ne te l'ai jamais dit, mais la tendresse et l'amour que tu portes aux animaux font partie des choses qui m'ont fait craquer. La nature et le monde animal ont une place très importante pour moi, et voir ton comportement et ta sensibilité envers eux me confirme chaque jour à quel point tu es une femme exceptionnelle.", top: '25%', left: '20%' },
    { id: 2, text: "J'admire aussi profondément ta soif d'évasion et ton désir de découvrir le monde. Parcourir la Terre est mon plus grand rêve — tout juste après celui de te retrouver —, et savoir que nous partageons cette envie est un bonheur immense. Si ce vœu devait se réaliser, c'est sans hésiter à La Réunion que je t'emmènerais en premier, car je sais combien cette île te tient à cœur.", top: '35%', left: '75%' },
    { id: 3, text: "La façon dont tu contemples ce qui t'entoure est fascinante. Cette capacité que tu as de t'émerveiller devant les plus petites choses rend ta personnalité magnifique. Et sous ce regard doux et innocent se cache aussi une force remarquable, forgée par les épreuves que tu as su traverser. Je t'admire énormément, tu sais.", top: '65%', left: '25%' }
  ];

  const rightPanSpecialStar = {
    text: "Je n'ai malheureusement pas eu le temps de te découvrir entièrement, d'apprendre chacun de tes rêves ou de connaître toutes tes passions. Je comptais sur l'avenir pour écrire la suite... Mais c'est aussi la preuve de tout ce qui te rend si captivante : tu es déjà une personne fabuleuse, et tu recèles encore plein de merveilleux mystères que j'aimerais tant explorer.",
    top: '50%', left: '50%'
  };

  const bottomPanStars = [
    { id: 1, text: "Tu as traversé des tempêtes silencieuses et des épreuves que bien peu de personnes auraient eu la force d'endurer. Des rumeurs injustes aux relations qui t'ont blessée et rabaissée, ton parcours a été semé d'obstacles cruels. Et pourtant, malgré toutes ces blessures, tu n'as jamais laissé ce monde abîmer la pureté et la douceur de ton cœur.", top: '25%', left: '20%' },
    { id: 2, text: "Ton combat contre la maladie est une preuve immense de ta bravoure. Je me souviendrai toujours de cette période où tu étais à l'hôpital et où nous n'avions droit qu'à 10 petites minutes d'appel par jour. Et quelles victoires lorsque l'on réussissait à grapiller un peu plus de temps — 30 minutes, 1 heure, et même 1 heure et demie une fois ! Malgré la distance et la lourdeur des soins, entendre ta voix était à chaque fois le plus beau moment de ma journée. Tu te bats depuis si longtemps avec un courage qui m'impressionne.", top: '35%', left: '75%' },
    { id: 3, text: "Je sais que le chemin est parfois éprouvant et que les ombres cherchent parfois à revenir. Mais s'il y a une chose dont je suis certain, c'est de la force extraordinaire qui réside en toi. Tu t'es déjà relevée, tu as su te libérer de ce qui te faisait du mal, et tu as en toi cette lumière capable d'éclairer même les moments les plus sombres.", top: '65%', left: '25%' },
    { id: 4, text: "Tu n'as pas besoin d'être parfaite ni de te montrer toujours forte. Tu as le droit de traverser des moments de doute et de fatigue. Peu importe les épreuves ou ce que l'avenir réserve, sache que mon regard sur toi ne changera jamais : je vois une femme d'une valeur inestimable, d'une gentillesse rare et d'une dignité qui m'impressionne chaque jour.", top: '75%', left: '70%' }
  ];

  const bottomPanSpecialStar = {
    text: "Si j'ai tenu à dédier toute cette partie du ciel à ton histoire, c'est parce que chaque épreuve que tu as surmontée fait de toi la personne unique et précieuse que tu es aujourd'hui. Ne doute jamais de ta capacité à te relever. Quoi qu'il arrive, n'oublie jamais à quel point tu es forte, à quel point tu mérites d'être heureuse, et combien ton étincelle est magnifique.",
    top: '50%', left: '50%'
  };

  const viewedLeftStars = new Set();
  const viewedRightStars = new Set();
  const viewedBottomStars = new Set();

  const totalNormalLeftStars = leftPanStars.length;
  const totalNormalRightStars = rightPanStars.length;
  const totalNormalBottomStars = bottomPanStars.length;

  const starModal = document.getElementById("star-modal");
  const starModalText = document.getElementById("star-modal-text");
  const closeModalBtn = document.getElementById("close-modal");

  function buildCenterPan() {
    const container = document.getElementById("stars-center");
    if (!container) return;
    container.innerHTML = "";
    centerPanStars.forEach(starItem => {
      const starEl = document.createElement("div");
      starEl.classList.add("interactive-star");
      starEl.innerHTML = "✦";
      starEl.style.top = starItem.top;
      starEl.style.left = starItem.left;
      starEl.addEventListener("click", () => {
        starModalText.textContent = starItem.text;
        starModal.classList.remove("hidden");
        starEl.classList.add("clicked");
      });
      container.appendChild(starEl);
    });
  }

  function buildLeftPan() {
    const container = document.getElementById("stars-left");
    if (!container) return;
    container.innerHTML = "";
    leftPanStars.forEach(starItem => {
      const starEl = document.createElement("div");
      starEl.classList.add("interactive-star");
      starEl.innerHTML = "✦";
      starEl.style.top = starItem.top;
      starEl.style.left = starItem.left;
      if (viewedLeftStars.has(starItem.id)) starEl.classList.add("clicked");
      starEl.addEventListener("click", () => {
        starModalText.textContent = starItem.text;
        starModal.classList.remove("hidden");
        starEl.classList.add("clicked");
        viewedLeftStars.add(starItem.id);
        updateLeftSpecialStarState();
      });
      container.appendChild(starEl);
    });

    const specialEl = document.createElement("div");
    specialEl.id = "special-star-left";
    specialEl.classList.add("interactive-star", "star-locked");
    specialEl.style.top = leftPanSpecialStar.top;
    specialEl.style.left = leftPanSpecialStar.left;
    specialEl.innerHTML = `✦ <span class="star-badge" id="special-badge-left">0/${totalNormalLeftStars}</span>`;
    specialEl.addEventListener("click", () => {
      if (viewedLeftStars.size < totalNormalLeftStars) {
        starModalText.textContent = `Regarde d'abord les ${totalNormalLeftStars - viewedLeftStars.size} autre(s) étoile(s) de ce ciel pour débloquer celle-ci... ✨`;
        starModal.classList.remove("hidden");
      } else {
        starModalText.textContent = leftPanSpecialStar.text;
        starModal.classList.remove("hidden");
        specialEl.classList.add("clicked");
      }
    });
    container.appendChild(specialEl);
    updateLeftSpecialStarState();
  }

  function updateLeftSpecialStarState() {
    const specialEl = document.getElementById("special-star-left");
    const badgeEl = document.getElementById("special-badge-left");
    if (!specialEl || !badgeEl) return;
    const count = viewedLeftStars.size;
    badgeEl.textContent = `${count}/${totalNormalLeftStars}`;
    if (count >= totalNormalLeftStars) {
      specialEl.classList.remove("star-locked");
      specialEl.classList.add("star-unlocked");
      badgeEl.style.display = "none";
    }
  }

  function buildRightPan() {
    const container = document.getElementById("stars-right");
    if (!container) return;
    container.innerHTML = "";
    rightPanStars.forEach(starItem => {
      const starEl = document.createElement("div");
      starEl.classList.add("interactive-star");
      starEl.innerHTML = "✦";
      starEl.style.top = starItem.top;
      starEl.style.left = starItem.left;
      if (viewedRightStars.has(starItem.id)) starEl.classList.add("clicked");
      starEl.addEventListener("click", () => {
        starModalText.textContent = starItem.text;
        starModal.classList.remove("hidden");
        starEl.classList.add("clicked");
        viewedRightStars.add(starItem.id);
        updateRightSpecialStarState();
      });
      container.appendChild(starEl);
    });

    const specialEl = document.createElement("div");
    specialEl.id = "special-star-right";
    specialEl.classList.add("interactive-star", "star-locked");
    specialEl.style.top = rightPanSpecialStar.top;
    specialEl.style.left = rightPanSpecialStar.left;
    specialEl.innerHTML = `✦ <span class="star-badge" id="special-badge-right">0/${totalNormalRightStars}</span>`;
    specialEl.addEventListener("click", () => {
      if (viewedRightStars.size < totalNormalRightStars) {
        starModalText.textContent = `Regarde d'abord les ${totalNormalRightStars - viewedRightStars.size} autre(s) étoile(s) de ce ciel pour débloquer celle-ci... ✨`;
        starModal.classList.remove("hidden");
      } else {
        starModalText.textContent = rightPanSpecialStar.text;
        starModal.classList.remove("hidden");
        specialEl.classList.add("clicked");
      }
    });
    container.appendChild(specialEl);
    updateRightSpecialStarState();
  }

  function updateRightSpecialStarState() {
    const specialEl = document.getElementById("special-star-right");
    const badgeEl = document.getElementById("special-badge-right");
    if (!specialEl || !badgeEl) return;
    const count = viewedRightStars.size;
    badgeEl.textContent = `${count}/${totalNormalRightStars}`;
    if (count >= totalNormalRightStars) {
      specialEl.classList.remove("star-locked");
      specialEl.classList.add("star-unlocked");
      badgeEl.style.display = "none";
    }
  }

  function buildBottomPan() {
    const container = document.getElementById("stars-bottom");
    if (!container) return;
    container.innerHTML = "";
    bottomPanStars.forEach(starItem => {
      const starEl = document.createElement("div");
      starEl.classList.add("interactive-star");
      starEl.innerHTML = "✦";
      starEl.style.top = starItem.top;
      starEl.style.left = starItem.left;
      if (viewedBottomStars.has(starItem.id)) starEl.classList.add("clicked");
      starEl.addEventListener("click", () => {
        starModalText.textContent = starItem.text;
        starModal.classList.remove("hidden");
        starEl.classList.add("clicked");
        viewedBottomStars.add(starItem.id);
        updateBottomSpecialStarState();
      });
      container.appendChild(starEl);
    });

    const specialEl = document.createElement("div");
    specialEl.id = "special-star-bottom";
    specialEl.classList.add("interactive-star", "star-locked");
    specialEl.style.top = bottomPanSpecialStar.top;
    specialEl.style.left = bottomPanSpecialStar.left;
    specialEl.innerHTML = `✦ <span class="star-badge" id="special-badge-bottom">0/${totalNormalBottomStars}</span>`;
    specialEl.addEventListener("click", () => {
      if (viewedBottomStars.size < totalNormalBottomStars) {
        starModalText.textContent = `Regarde d'abord les ${totalNormalBottomStars - viewedBottomStars.size} autre(s) étoile(s) de ce ciel pour débloquer celle-ci... ✨`;
        starModal.classList.remove("hidden");
      } else {
        starModalText.textContent = bottomPanSpecialStar.text;
        starModal.classList.remove("hidden");
        specialEl.classList.add("clicked");
      }
    });
    container.appendChild(specialEl);
    updateBottomSpecialStarState();
  }

  function updateBottomSpecialStarState() {
    const specialEl = document.getElementById("special-star-bottom");
    const badgeEl = document.getElementById("special-badge-bottom");
    if (!specialEl || !badgeEl) return;
    const count = viewedBottomStars.size;
    badgeEl.textContent = `${count}/${totalNormalBottomStars}`;
    if (count >= totalNormalBottomStars) {
      specialEl.classList.remove("star-locked");
      specialEl.classList.add("star-unlocked");
      badgeEl.style.display = "none";
    }
  }

  // Génération initiale de TOUTES les étoiles pour s'assurer qu'elles existent dès le départ
  buildCenterPan();
  buildLeftPan();
  buildRightPan();
  buildBottomPan();

  closeModalBtn.addEventListener("click", () => starModal.classList.add("hidden"));
  starModal.addEventListener("click", (e) => {
    if (e.target === starModal) starModal.classList.add("hidden");
  });

  // 3. NAVIGATION MULTI-PANS
  const skyWorld = document.getElementById("sky-world");
  const navLeft = document.getElementById("nav-left");
  const navRight = document.getElementById("nav-right");
  const navBottom = document.getElementById("nav-bottom");
  const navTop = document.getElementById("nav-top");

  const navLeftIcon = document.getElementById("nav-left-icon");
  const navLeftText = document.getElementById("nav-left-text");
  const navRightIcon = document.getElementById("nav-right-icon");
  const navRightText = document.getElementById("nav-right-text");

  let currentPan = "center";

  function updateNavigationUI(newPan) {
    currentPan = newPan;
    skyWorld.className = `sky-world pos-${newPan}`;

    [navLeft, navRight, navBottom, navTop].forEach(btn => btn.classList.add("hidden-arrow"));

    if (currentPan === "center") {
      moon.classList.remove("hidden-moon");
      navLeftIcon.textContent = "‹";
      navLeftText.textContent = "À l'ouest";
      navLeft.classList.remove("hidden-arrow");

      navRightIcon.textContent = "›";
      navRightText.textContent = "À l'est";
      navRight.classList.remove("hidden-arrow");

      navBottom.classList.remove("hidden-arrow");
    } else {
      moon.classList.add("hidden-moon");
      if (currentPan === "left") {
        navRightIcon.textContent = "›";
        navRightText.textContent = "Au centre";
        navRight.classList.remove("hidden-arrow");
      } else if (currentPan === "right") {
        navLeftIcon.textContent = "‹";
        navLeftText.textContent = "Au centre";
        navLeft.classList.remove("hidden-arrow");
      } else if (currentPan === "bottom") {
        navTop.classList.remove("hidden-arrow");
      }
    }
  }

  navLeft.addEventListener("click", () => {
    if (currentPan === "center") updateNavigationUI("left");
    else if (currentPan === "right") updateNavigationUI("center");
  });

  navRight.addEventListener("click", () => {
    if (currentPan === "center") updateNavigationUI("right");
    else if (currentPan === "left") updateNavigationUI("center");
  });

  navBottom.addEventListener("click", () => {
    if (currentPan === "center") updateNavigationUI("bottom");
  });

  navTop.addEventListener("click", () => {
    if (currentPan === "bottom") updateNavigationUI("center");
  });

  const btnRevealSky = document.getElementById("btn-reveal-sky");
  const introOverlay = document.getElementById("intro-overlay");
  const skyContainer = document.getElementById("interactive-sky");

  btnRevealSky.addEventListener("click", () => {
    introOverlay.classList.add("hidden");
    skyContainer.classList.remove("hidden");
    updateNavigationUI("center");
  });

  // 4. CLIC SUR LA LUNE : TEXTE D'ASTROPHYSIQUE PUIS LANCEMENT FUSÉE
  const moon = document.getElementById("moon");
  const rocketOverlay = document.getElementById("rocket-overlay");
  const btnLaunchRocket = document.getElementById("btn-launch-rocket");
  const spaceRocketEl = document.getElementById("space-rocket");
  const storyContainer = document.getElementById("story-container");

  // Clic Lune -> Affiche l'overlay et tape le texte d'astrophysique
  moon.addEventListener("click", async () => {
    skyContainer.classList.add("hidden");
    rocketOverlay.classList.remove("hidden");

    await typeCharacterByCharacter("astro-text", astroText);
    await new Promise(resolve => setTimeout(resolve, 300));

    btnLaunchRocket.classList.add("visible");
  });

// Clic Bouton -> Big Bang -> Voyage Spatial -> passage aux cartes
  btnLaunchRocket.addEventListener("click", async () => {
    btnLaunchRocket.classList.remove("visible");
    document.getElementById("astro-text").style.opacity = "0";

    // Masque immédiatement l'overlay du texte d'astrophysique
    rocketOverlay.classList.add("hidden");

    // Lancement direct de l'explosion du Big Bang puis du voyage spatial
    await runBigBang();
    await runSpaceJourney();

    storyContainer.classList.remove("hidden");
    showChapter("chap1", 0);
  });

  // 4.5. BIG BANG - TRANSITION VERS LE VOYAGE SPATIAL
  function runBigBang() {
    return new Promise((resolve) => {
      const bigbangOverlay = document.getElementById("bigbang-overlay");
      const particlesContainer = document.getElementById("bigbang-particles");
      if (!bigbangOverlay || !particlesContainer) return resolve();

      particlesContainer.innerHTML = "";
      const particleCount = 45;
      for (let i = 0; i < particleCount; i++) {
        const p = document.createElement("div");
        p.classList.add("bigbang-particle");
        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 50;
        p.style.setProperty("--dx", `${Math.cos(angle) * distance}vmax`);
        p.style.setProperty("--dy", `${Math.sin(angle) * distance}vmax`);
        p.style.setProperty("--delay", `${Math.random() * 0.2}s`);
        const size = Math.random() * 3 + 1.5;
        p.style.width = `${size}px`;
        p.style.height = `${size}px`;
        particlesContainer.appendChild(p);
      }

      bigbangOverlay.classList.remove("hidden", "fading");
      // Force reflow avant d'ajouter la classe d'animation
      void bigbangOverlay.offsetWidth;
      bigbangOverlay.classList.add("exploding");

      setTimeout(() => {
        bigbangOverlay.classList.add("fading");
        setTimeout(() => {
          bigbangOverlay.classList.add("hidden");
          bigbangOverlay.classList.remove("exploding", "fading");
          resolve();
        }, 700);
      }, 1700);
    });
  }

  // 4.6. VOYAGE SPATIAL : ANIMATION DE LA FUSÉE LE LONG D'UN TRAJET SVG
  function flyAlongPathSegment(pathEl, rocketEl, tStart, tEnd, duration) {
    return new Promise((resolve) => {
      if (!pathEl || !rocketEl) return resolve();
      const pathLength = pathEl.getTotalLength();
      const startTime = performance.now();

      function frame(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const t = tStart + (tEnd - tStart) * progress;
        const dist = Math.max(0, Math.min(t * pathLength, pathLength));
        const point = pathEl.getPointAtLength(dist);
        const aheadDist = Math.max(0, Math.min(dist + 2, pathLength));
        const point2 = pathEl.getPointAtLength(aheadDist);

        rocketEl.style.left = `${(point.x / 1000) * 100}%`;
        rocketEl.style.top = `${(point.y / 600) * 100}%`;

        const angle = Math.atan2(point2.y - point.y, point2.x - point.x) * (180 / Math.PI);
        rocketEl.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        if (progress < 1) {
          requestAnimationFrame(frame);
        } else {
          resolve();
        }
      }

      requestAnimationFrame(frame);
    });
  }

  function showWormholeText(text) {
    return new Promise((resolve) => {
      const overlay = document.getElementById("wormhole-text-overlay");
      const textEl = document.getElementById("wormhole-text");
      const btn = document.getElementById("wormhole-continue-btn");
      if (!overlay || !textEl || !btn) return resolve();

      textEl.textContent = text;
      overlay.classList.remove("hidden");
      requestAnimationFrame(() => overlay.classList.add("visible"));

      function onClick() {
        overlay.classList.remove("visible");
        btn.removeEventListener("click", onClick);
        setTimeout(() => {
          overlay.classList.add("hidden");
          resolve();
        }, 500);
      }
      btn.addEventListener("click", onClick);
    });
  }

  function showSunText(text, displayDuration) {
    return new Promise((resolve) => {
      const overlay = document.getElementById("sun-text-overlay");
      const textEl = document.getElementById("sun-text");
      if (!overlay || !textEl) return resolve();

      textEl.textContent = text;
      overlay.classList.remove("hidden");
      requestAnimationFrame(() => overlay.classList.add("visible"));

      setTimeout(() => {
        overlay.classList.remove("visible");
        setTimeout(() => {
          overlay.classList.add("hidden");
          resolve();
        }, 800);
      }, displayDuration);
    });
  }

  function switchJourneyScene(fromId, toId) {
    const fromEl = document.getElementById(fromId);
    const toEl = document.getElementById(toId);
    if (fromEl) fromEl.classList.remove("active");
    if (toEl) toEl.classList.add("active");
  }

// --- POPUP D'INTRODUCTION AU TROU DE VER ---
function showWormholeIntro(introText, buttonText) {
  return new Promise((resolve) => {
    const wormholeOverlay = document.getElementById("wormhole-text-overlay");
    const wormholeText = document.getElementById("wormhole-text");
    const wormholeBtn = document.getElementById("wormhole-continue-btn");

    if (!wormholeOverlay || !wormholeText || !wormholeBtn) {
      resolve();
      return;
    }

    // Mise à jour des textes
    wormholeText.textContent = introText;
    wormholeBtn.textContent = buttonText;

    // Affichage fluide de l'overlay
    wormholeOverlay.classList.remove("hidden");
    requestAnimationFrame(() => {
      wormholeOverlay.classList.add("visible");
    });

    // Gestion du clic
    function onClick() {
      wormholeOverlay.classList.remove("visible");
      wormholeBtn.removeEventListener("click", onClick);
      setTimeout(() => {
        wormholeOverlay.classList.add("hidden");
        resolve(); // Débloque le script pour ouvrir le livre
      }, 600);
    }

    wormholeBtn.addEventListener("click", onClick);
  });
}

function openBookModal(title, pagesArray, isLastBook = false) {
  return new Promise((resolve) => {
    const modal = document.getElementById("book-modal");
    const titleEl = document.getElementById("book-title");
    const contentEl = document.getElementById("book-page-content");
    const pageIndicator = document.getElementById("book-page-indicator");
    const prevBtn = document.getElementById("book-prev-btn");
    const nextBtn = document.getElementById("book-next-btn");
    const closeBtn = document.getElementById("book-close-btn");

    let currentPage = 0;
    const totalPages = pagesArray.length;

    function updatePage(animationClass = "") {
      if (animationClass) {
        contentEl.classList.add(animationClass);
        setTimeout(() => {
          contentEl.textContent = pagesArray[currentPage];
          pageIndicator.textContent = `Page ${currentPage + 1} / ${totalPages}`;
          contentEl.classList.remove(animationClass);
        }, 200);
      } else {
        contentEl.textContent = pagesArray[currentPage];
        pageIndicator.textContent = `Page ${currentPage + 1} / ${totalPages}`;
      }

      prevBtn.disabled = currentPage === 0;
      nextBtn.innerHTML = (currentPage === totalPages - 1) ? "&#10003;" : "&#10095;";
    }

    function onNext() {
      if (currentPage < totalPages - 1) {
        currentPage++;
        updatePage("flip-next");
      } else {
        closeBook();
      }
    }

    function onPrev() {
      if (currentPage > 0) {
        currentPage--;
        updatePage("flip-prev");
      }
    }

    function closeBook() {
      modal.classList.remove("visible");

      nextBtn.removeEventListener("click", onNext);
      prevBtn.removeEventListener("click", onPrev);
      closeBtn.removeEventListener("click", closeBook);

      setTimeout(() => {
        modal.classList.add("hidden");
        // Si c'est le dernier livre, on lance la scène cinématique finale !
        if (isLastBook) {
          triggerFinalCinematicScene();
}
        resolve();
      }, 500);
    }

    titleEl.textContent = title;
    updatePage();

    nextBtn.addEventListener("click", onNext);
    prevBtn.addEventListener("click", onPrev);
    closeBtn.addEventListener("click", closeBook);

    modal.classList.remove("hidden");
    requestAnimationFrame(() => {
      modal.classList.add("visible");
    });
  });
}

async function runSpaceJourney() {
    const journeyEl = document.getElementById("space-journey");
    if (!journeyEl) return;

    journeyEl.classList.remove("hidden", "fading");

    // SCÈNE 1 : PREMIER TRAJET VERS LE 1er TROU DE VER
    const path1 = document.getElementById("path-1");
    const rocket1 = document.getElementById("rocket-1");
    await flyAlongPathSegment(path1, rocket1, 0, 1, 9000); 

    // 1. POPUP D'EXPLICATION DU TROU DE VER
    await showWormholeIntro(
      "Un trou de ver... C'est une sorte de pliure dans l'espace-temps qui permet de relier deux points très éloignés quasi instantanément. Sans ce raccourci, notre voyage à travers le cosmos serait bien trop long ! Mais tant que nous y sommes, profitons de ce saut temporel pour replonger dans un chapitre précieux de notre histoire...",
      "Découvrons le début ✨"
    );

// 2. OUVERTURE DU LIVRE - PARTIE 1
await openBookModal(
  "Partie 1 : Notre Rencontre",
  [
    // PAGE 1
    "Tout a commencé fin novembre 2025 sur les réseaux sociaux. C'était le point de départ de l'une des plus belles aventures de ma vie, même si je ne le savais pas encore.\n\nOn a commencé à discuter de plus en plus, et jour après jour, nos discussions fluides et quotidiennes ont tissé une complicité évidente, un espace de douceur où les mots doux et les « je t'aime » se sont installés naturellement.\n\nLe 19 décembre, pour mes 18 ans, j'ai veillé pour la toute première fois de ma vie jusqu'à minuit rien que pour toi. Tu m'avais demandé de rester un peu, et recevoir ton message d'anniversaire dès les premières minutes du jour a été une surprise d'un bonheur inimaginable. Moi qui n'avais jamais accordé d'importance à cette date, je me suis endormi ce soir-là avec un sourire immense, simplement heureux de ta présence dans ma vie.",

    // PAGE 2
    "Jamais je n'avais eu de message d'anniversaire dès minuit, et jamais je n'avais veillé aux côtés d'une personne aussi exceptionnelle que toi. À aucun moment je n'avais soupçonné que ton intention était celle-là, si bien que la surprise fut phénoménale. Ce message, je l'ai profondèment aimé.\n\nÉtudiant en prépa MPSI, j'étais persuadé que l'amour ne m'intéressait pas et que j'étais bien dans mon célibat. Pourtant, ton arrivée a bouleversé toutes mes certitudes. Mon cœur te désirait comme il n'avait jamais désiré quiconque. J'ai su qu'avec toi j'avais envie de construire quelque chose de grand, quelque chose de magnifique.",

    // PAGE 3
    "Pourtant, tu portais les blessures d'une relation de trois ans avec un ex toxique qui t'avait lâchement abandonnée en apprenant notre rapprochement.\n\nMalgré le fait que cela t'affectait profondément, j'ai fait de mon mieux pour t'écouter et te comprendre, tant et si bien que je te faisais ma déclaration officielle le 25 décembre. Tu as dit oui, devenant ma toute première vraie copine — celle que je voulais comme femme, amie, confidente, complice et compagne, en bref celle avec qui je voulais avancer.\n\nÀ tes côtés, j'ai appris à apprécier les appels, moi qui pourtant les tenais en horreur.",

    // PAGE 4
    "Malheureusement, la violence de ta rupture et tes luttes t'ont menée vers de lourdes épreuves, jusqu'à cette hospitalisation au début du mois de janvier. Je me souviens de ton retour de Strasbourg, quand tu as dû te rendre aux urgences et que je voulais veiller pour attendre le verdict. Mais les résultats étaient prévus très tard et j'étais exténué. Je me suis laissé convaincre d'aller me coucher le cœur lourd, ne sachant pas si tu serais hospitalisée à mon réveil.\n\nJe me suis réveillé sur des messages m'annonçant ton hospitalisation. J'étais abattu et tellement triste pour toi. Cependant, ce n'était pas la fin.",

    // PAGE 5
    "Seulement 10 minutes d'appel par jour nous étaient autorisées, mais elles comptaient bien plus pour moi que tout le reste de la journée. J'attendais chaque appel avec une impatience folle, touché quand tu me rappelais une deuxième fois juste pour le plaisir de m'entendre. Dépasser la limite m'inquiétait par peur que tu te fasses disputer, mais la joie d'être avec toi l'emportait bien vite.\n\nSavoir que tu me choisissais m'a fait me sentir désiré comme jamais, et voir tes progrès me remplissait de fierté.\n\nPuis, le mardi 20 janvier 2026, la lettre est arrivée. Malgré la douleur de la rupture puis de la distance, tu as gardé toute ta place dans mon cœur. Et finalement, le destin a choisi de nous lier à nouveau... mais continuons notre trajet."
  ]
);

    switchJourneyScene("scene-1", "scene-2");

    // SCÈNE 2 : SECOND TRAJET VERS LE 2e TROU DE VER
    const path2 = document.getElementById("path-2");
    const rocket2 = document.getElementById("rocket-2");
    await flyAlongPathSegment(path2, rocket2, 0, 1, 9000);

// OUVERTURE DU LIVRE - PARTIE 2
await openBookModal(
  "Partie 2 : Le Renouvellement",
  [
    // PAGE 1
    "Après des mois de silence et de doute, le destin a fini par nous lié à nouveau. C'était le 14 mars 2026, lorsque, au cours d'une discussion tu m'as fait ce vocal, la voix tremblante, pour me dire que tu pensais trop à moi et que tu voulais qu'on réessaie. Qu'est-ce que j'étais heureux !\n\nSans hésiter, j'ai accepté, car c'est toujours toi que mon cœur désirait. Je me suis alors lancé dans une organisation minutieuse pour notre première vraie rencontre. Étant en pleine année de prépa MPSI, le défi était de taille. Le samedi 28 mars fut la date choisie. N'ayant trouvé aucun bus direct pour Oissel, j'ai dû ruser, réserver un BlaBlaCar et planifier chaque minute. Le jour J, j'ai quitté mon DS quinze minutes plus tôt pour retrouver le BlaBlaCar, le cœur battant à tout rompre. J'ai bien cru qu'il allait me poser un lapin car j'ai du attendre une bonne demi-heure avant son arrivée, de quoi bien augmenter mon stress qui était déjà très poussé.",

    // PAGE 2
    "Quand je suis arrivé à Rouen, après un petit moment de recherche, je t'ai enfin aperçue au loin, assise sur un banc de dos. Je t'ai rejoint, et ce fut la première fois que mes yeux ont pu regarder dans ton joli regard, la première fois que je me perdais vraiment dans la beauté d'une femme.\n\nTu m'as emmené découvrir le Gros-Horloge et la cathédrale, puis nous avons flâné avec l'idée d'aller à la patinoire, promesse qu'on s'était faîte après les JO, car tu étais fan du patinage artistique. Malheureusement, elle était exceptionnellement fermée, mais cela importait peu, et on a continué à marcher, direction l'encre du cœur. Là bas j'ai pu t'admirais en pleine contemplation des livres, mais j'étais surtout inquiet à l'idée que tu puisses choisir Campus Driver, que je devais t'offrir à la fin du date. Après cela je t'ai emmené voir un bar à chats, mais comme il n'a pas retenu notre attention, on a continué notre marche.",

    // PAGE 3
    "Ne sachant plus très bien où aller, je t'ai proposé le Musée des Beaux-Arts. J'ai alors vu dans tes yeux que l'idée t'enchantait, tout ton visage s'illuminant de joie, et tu peux pas savoir comment mon cœur s'est activé à ce moment là.\n\nÀ l'intérieur, nous avons partagé un moment suspendu : tu t'asseyais régulièrement en espérant que je vienne me blottir contre toi et que la glace du premier contact physique se brise. Mais tu étais ma toute première copine et mon tout premier date, et comme tu m'avais dit ne pas trop aimer qu'on te touche, j'osais à peine t'effleurer, tournant en rond autour de toi, partagé entre l'envie folle de t'approcher et la timidité maladroite.",

    // PAGE 4
    "Le soir tombant, nous sommes allés nous asseoir sur un banc dans le parc en face du musée, car mon bus n'allait pas tarder. Tu m'as rendu la batterie externe que je t'avais prêtée dans le musée, et en me penchant pour la ranger dans mon sac, je t'ai sentie te coucher contre mon dos. Je t'ai alors demandé comment j'allais me relever.\n\nAmusée, tu as fait semblant d'être vexée en t'éloignant un peu, avant que je ne passe mon bras autour de tes épaules. Nous nous sommes serrés dans les bras, blottis l'un contre l'autre. J'avais le sourire jusqu'aux oreilles, savourant ce bonheur simple pendant que tu étais là, appuyée contre moi. C'est un moment inoubliable que j'ai vécu, et les mots me manquent pour décrire à quel point cela m'a marqué. Puis je t'ai offert le porte-clé et le livre que j'avais préparés pour toi, puis nous avons dû prendre le chemin de l'arrêt de bus, marchant main dans la main.",

    // PAGE 5
    "À l'arrêt, la machine m'a escroqué en encaissant mon argent sans me délivrer de ticket, m'obligeant à frauder. Alors que tu étais assise sur le banc et moi debout devant, ton regard s'est posé sur ma coque de téléphone où tu y as découvert ma carte étudiante avec une photo de l'année précédente en terminale, et je me souviens d'à quel point tu étais surprise de voir à quel point j'avais changé.\n\nQuand mon bus est enfin arrivé, nous avons échangé un dernier câlin serré avant mon départ, ignorant que c'était la dernière fois que nos yeux se croiseraient en vrai. En rentrant chez moi, je savais pourtant que je venais de vivre l'un des jours les plus mémorables et magiques de mon existence.",

    // PAGE 6
    "Malheureusement, la suite a pris un tournant douloureux. Nous devions nous revoir le dimanche suivant pour une journée entière, mais la veille au soir à 22h, tu as tout annulé.\n\nPetit à petit, j'ai compris la terrible vérité : tu avais perdu tes sentiments et t'étais rapprochée d'un autre gars. J'étais détruit, en colère, mais j'ai fini par te pardonner, car j'ai compris pourquoi tu avais agis comme ça. Ce n'était pas facile pour toi et c'était probablement pour le mieux.\n\nPour apaiser les choses, me protéger de mes propres sentiments et te laisser en paix avec ton nouveau compagnon, j'ai choisi de m'éloigner. Je ne voulais notamment pas que mes sentiments entrent en jeu dans nos discussions, risquant des embrouilles. C'est ainsi que nos échanges se sont éteints, refermant provisoirement ce chapitre, jusqu'à ce que le silence s'installe durablement entre nous, bien avant ce fameux coup de fil du mois de juillet."
  ]
);

    switchJourneyScene("scene-2", "scene-3");

    // SCÈNE 3 : APPROCHE DE LA TERRE ET PASSAGE PRÈS DU SOLEIL
    const path3 = document.getElementById("path-3");
    const rocket3 = document.getElementById("rocket-3");
    const sunT = 0.45;
    await flyAlongPathSegment(path3, rocket3, 0, sunT, 5000);
  
    await showSunText(
      "En passant si près du Soleil, une évidence me traverse : aussi ardent et lumineux soit-il, il ne t'arrivera jamais à la cheville, Nana. Ta chaleur et ta lumière à toi n'ont pas d'égal.",
      10000
    );
    
    await flyAlongPathSegment(path3, rocket3, sunT, 1, 5000);


// FIN DU VOYAGE SPATIAL -> ARRIVÉE SUR TERRE
journeyEl.classList.add("fading");
await new Promise(resolve => setTimeout(resolve, 900));
journeyEl.classList.add("hidden");
journeyEl.classList.remove("fading");

// OUVERTURE DU DERNIER LIVRE SUR TERRE
await openBookModal(
  "Partie 3 : Retrouvailles & Nouveau Départ",
  [
    // PAGE 1
    "Puis est arrivé ce fameux mois de juillet 2026. Après des mois d'un silence qui semblait définitif, un coup de fil inattendu a tout fait basculer. Je venais de partir en vacances, après une rude année de MPSI, croyant qu'on était voué à s'éloigner de plus en plus jusqu'à se perdre de vu, mais persuadé au fond de moi que le destin nous réunirait à nouveau.\n\nRéentendre ta voix, pouvoir te reparler comme avant, ça m'a fait un bien fou. Malgré les blessures du passé, la complicité était toujours là, intacte, comme si on avait jamais arrêté de parler, comme si on ne s'était jamais éloigné.",

    // PAGE 2
    "Bien qu'au départ c'était pour des questions sur le prépa, on a vite divergé et nous avons pris le temps de parler.\n\nCe n'était plus les deux adolescents timides qu'on a connu à Rouen, ou le garçon perdu désireux de bien faire que j'étais en décembre, on était bien plus proche et bien plus à l'aise, presque prêt à forger quelque chose de plus fort. Malheureusement, on a du faire face de nouveau à des épreuves rudes qui ont ébranlé de nouveau notre relation. Mais après tout ce qu'on a traversé, je suis persuadé qu'on peut s'en relever.",

    // PAGE 3
    "Aujourd'hui, nous voilà réunis au terme de ce voyage à travers les étoiles. A partir de maintenant ce sera moins bien écrit car moins bien travaillé. Cela fait très longtemps que je travaille sur l'idée d'un site web pour toi (même si je ne vais pas acheter de domaine et qu'il ne restera pas en ligne). Y a eu pleins d'essais différents, tous avec des objectifs différents, mais tous dans le but d'être romantique, de transmettre mon amour pour toi.\n\nCe projet ne fait pas exception, mais il reste mon travail le plus complet et le plus important. L'idée était non seulement de transmettre mon ressenti au début, mais aussi de faire un petit retour sur notre histoire, mais de mon point de vu, même si tu pourras jamais suffisament comprendre l'importance que tu as pour moi.",

    // PAGE 4
    "Mais puisque c'est mon plus gros projet, j'étais empli de doutes du début à la fin, me demandant si tu allais aimer ce que je t'avais fait. Je voulais la perfection, j'ai travaillé d'arrache-pied, supprimant parfois des centaines de ligne de code, voir tout mes fichiers. Finalement, je n'aurais pas atteint la perfection et j'ai du tirer une croix sur pas mal de choses que je voulais ajouter, car je n'y arrivais pas ou alors ça bloquait le reste du code.\n\nPar exemple, pour les livres je voulais rajouter des sortes de marque page sur le côté de certaines pages, qui ouvraient des photos quand on cliquait dessus. Comment te dire que ce fut une catastrophe. Impossible d'implémenter ça comme je veux, j'ai tout supprimé hier soir, mais j'ai aussi supprimé des trucs que j'aurais pas du, bloquant le bon déroulement du site (les livres ne s'ouvraient plus ou n'affichaient plus rien par exemple).",

    // PAGE 5
    "J'ai aussi fait n'importe quoi, en reprenant un ancien code car le début me plaisait. Mais le problème c'est que une fois qu'on cliquait sur la lune au début, la suite de l'histoire était catastrophique, y avait des essais de devinette ou d'interaction complétement nul, et c'était moche, donc j'ai tout changé sans retirer tout ça du code, mais juste en rajoutant ce que je voulais à la suite du clic sur la lune, et au final après le dernier livre, on revenait sur l'histoire d'avant, et j'ai eu un mal fou à retirer tout ça, car je devais modifier 3 fichier pour un total de plus de 2000 lignes de codes dans 3 languages différents, et pas loin de 100 000 caractères. Autrement dit, hier soir à 23h30, j'étais en stress complet car j'arrivais pas à retirer les appels à l'ancienne histoire, j'ai supprimé des bouts de l'histoire actuelle, mais tout est bien qui finit bien. ",
    
    // PAGE 6
    "Au moment où j'écris ces lignes, on est malheureusement déjà le 12, et je suis encore incertain de la fin. Dois-je mettre le message de fin maintenant ou après ce qui suit ? C'est une question compliquée, car il y a des bons arguments dans les 2 sens. En attendant de trouver la solution, je vais juste te dire ce qui suit, mais sâche que je l'ai écrit quand tu me disais que toi et moi on était fait pour être ensemble, donc c'est à prendre avec des pincettes. Carrèment je vais lui dédier une page entière, donc ça vient après petite princesse.",

    // PAGE 7
    "Je voulais qu'on prenne un moment pour poser les choses calmement. Si on regarde en arrière, notre histoire n'a clairement pas suivi un long fleuve tranquille. On a eu des débuts chaotiques, un départ compliqué et douloureux, percuté par des épreuves de santé qui sont venues tout bousculer bien trop tôt.\nMais avec le recul, je réalise une chose : ce n'est pas parce qu'un départ est difficile, ou qu'on s'y est pris à deux reprises, que l'histoire est vouée à l'échec. Au contraire, on a dû apprendre à nager en eaux troubles dès nos premiers pas. On a traversé des tempêtes que d'autres couples ne voient qu'après des années, ce qui nous a forcé à grandir dans l'urgence, à nous voir dans nos retranchements, mais aussi dans notre résilience.\nC'est pour ça qu'aujourd'hui, je vois les choses différemment. Ce passé tumultueux, ce n'est pas un poids qui nous condamne, c'est un bagage. On se connaît mieux, on sait ce qui fait mal, et surtout, on a prouvé qu'on était capables de tenir bon quand tout s'effondrait.\nReprendre notre histoire maintenant, ce n'est pas raviver les erreurs du passé. C'est s'offrir le départ qu'on n'a pas pu avoir au tout début : un départ apaisé, conscient, avec des fondations forgées dans l'épreuve. C'est peut-être ça, notre vraie chance.",

    // PAGE 8
    "Voilà ça me tenait à cœur de te partager cela, même si c'est un peu long. En tout cas j'espère que dans tout ce que j'ai dit tu n'as rien pris mal, ce n'était pas l'objectif. Je me suis constamment efforcé d'éviter de te causer du tord, car c'était pas le but. Ce que je veux dire, c'est que à aucun moment je ne te reproche quoi que ce soit, même si parfois la façon dont sont dîtes les choses peut le laisser penser. Ce sont des choses que je devais partager et j'ai essayé d'adapter ma façon de le dire pour pas que tu te fasses la mauvaise idée. En tout cas, peu importe ce qu'on a traversé, je ne t'en veux pas du tout du tout. Je n'ai pas de raison de pouvoir t'en vouloir.",

    // PAGE 9
    "Ces lignes sont rajoutés le 12, je viens de me souvenir que je voulais parler de ça, et j'ai pas envie le mettre avant pour pas bouleversé les lignes, et comme ça c'est presque comme un journal dans lequel j'ajoute ma pensée sans pour autant effacer le passé.\n\nComme je l'ai déjà dit, j'ai eu d'autres esquisses de site avant, que j'ai jamais pu te partager, comme par exemple un arbre avec des feuilles, et quand tu cliques sur une feuille elle tombe et se dirige en virevoltant vers l'écran pour qu'on y voit un petit message mignon pour toi. J'avais toute sorte de site comme ça, que j'essayais puis abandonné en cours de route. Et c'est en retrouvant quelques fichiers sur mon pc que j'ai eu l'idée initiale de ce que je voulais faire, même si ça a mal fini.",

    // PAGE 10
    "A la base, je voulais avoir un site en ligne que j'actualisais tout les jours ou toutes les demi-journées, et à chaque fois que je le faisais apparaissait un de mes projets. Cette journée où je te parlais d'aller voir ailleurs, loin, trouver un endroit paisible, c'est cette journée là où j'ai voulu lancer le projet, et ce que je disais c'était comme une bande-annonce. A travers mes projets on aurait fait un long voyage, dans des endroits paisibles, jusqu'à la belle journée du 12 où il y aurait eu le plus gros projet. Malheureusement je me suis surestimé. Si tu te souviens bien je mettais du temps à répondre sur cette journée. C'est parce que je parcourais tout les vestiges de code que j'avais pour voir si je pouvais en tirer quelque chose, et je me rendais petit à petit compte que j'étais dans l'impossibilité de finaliser tout les projets pour en avoir un par jour jusqu'au 12.",

    // PAGE 11
    "Mais le problème c'est que j'avais passé tellement de temps sur ces sites que je pouvais pas juste tout abandonner. Je voulais vraiment te faire une surprise et là j'ai complétement merdé, j'ai du continué à faire genre en attendant de trouver ce que je pouvais dire pour rectifier le tir sans griller la surprise. J'ai cru qu'en disant que je regardais un film tu allais passer à autre chose, mais je me doutais pas que tu souffrais en fait. Donc j'ai fait comme j'ai pu pour rectifier le problème, j'ai quand même pu voir que mon comportement était néfaste et le changer donc là dessus au moins ça été bénéfique, même si devoir me taire quand je vois des personnes te faire du mal ou se jouer de toi ou te mettre en danger ça me met hors de moi, mais je dois respecter tes décisions.",

    // PAGE 12
    "Aujourd'hui tu as enfin la vérité. J'ai hésité à la mettre mais je me dois d'être honnête avec toi, tu mérites de le savoir. J'espère que tu m'en voudras pas trop pour ça. En tout cas je suis profondément désolé Anna, c'est pas du tout comme ça que j'imaginais le truc. Mais bon j'espère quand même que mon truc t'auras un peu plus, j'y ai mis mon cœur, même si c'est pas à la hauteur de la grandeur de ta personne. Enfin pour conclure, je te laisse fermer le livre pour te dire..."
  ],
  true
);
  }

// ==========================================
// SCÈNE FINALE : CIEL ÉTOILÉ -> COUCHER DE SOLEIL
// ==========================================

function triggerFinalCinematicScene() {
  const overlay = document.getElementById('final-scene-overlay');
  const world = document.getElementById('final-world');
  const btnDescend = document.getElementById('btn-descend-scene');
  
  if (!overlay) return;
  
  overlay.classList.remove('hidden');
  initFinalSkyCanvas();

  const tempText = "Nous voilà au terme de ce voyage. Merci infiniment d'avoir accepté de retraverser cette aventure avec moi... Je sais combien elle a pu remuer de choses en toi.\n\nMais il est peut-être temps de trouver le calme, et pour ça rien de mieux qu'un petit coucher de soleil.\n\nJ'ai toujours aimé les couchers de soleil, alors laisse moi te partager celui-ci.\n\nEnfin, trêve de blabla, il est temps de remettre les pieds sur Terre, et d'aller de l'avant.";

  typewriterFinalText(tempText, () => {
    if (btnDescend) {
      btnDescend.classList.remove('hidden', 'hidden-btn');
      btnDescend.classList.add('visible', 'visible-btn');
    }
  });

  // Action lors du clic sur "CONTINUER LE VOYAGE"
  if (btnDescend) {
    btnDescend.onclick = () => {
      btnDescend.classList.add('hidden-btn');

      // 1. Descente douce de la caméra vers le paysage coucher de soleil
      world.style.transform = 'translateY(-100vh)';

      // 2. Générer les lucioles dorées dans le coucher de soleil
      createSunsetFireflies();

      // 3. Faire apparaître la carte finale romantique après la descente
      setTimeout(() => {
        const finalCard = document.getElementById('sunset-final-card');
        if (finalCard) {
          finalCard.classList.remove('hidden-card');
          finalCard.classList.add('visible-card');
        }
      }, 2000);
    };
  }
}

// Effet de frappe caractère par caractère pour le texte nocturne
function typewriterFinalText(text, onComplete) {
  const container = document.getElementById('final-typewriter-text');
  if (!container) return;
  
  container.textContent = "";
  container.classList.add('typing-cursor');
  let index = 0;
  
  const timer = setInterval(() => {
    if (index < text.length) {
      container.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(timer);
      container.classList.remove('typing-cursor');
      if (onComplete) onComplete();
    }
  }, 40);
}

// Animation du canvas étoilé de la première partie
function initFinalSkyCanvas() {
  const canvas = document.getElementById('final-stars-canvas');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const stars = [];
  const colors = ['#ffffff', '#ffe9c4', '#d4fbff'];
  
  for (let i = 0; i < 220; i++) {
    stars.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.3,
      alpha: Math.random(),
      maxAlpha: 0.3 + Math.random() * 0.7,
      speed: 0.005 + Math.random() * 0.015,
      color: colors[Math.floor(Math.random() * colors.length)]
    });
  }

  const shootingStars = [];

  function createShootingStar() {
    shootingStars.push({
      x: Math.random() * (width * 0.9),
      y: Math.random() * (height * 0.4),
      length: 140 + Math.random() * 90,
      speed: 4 + Math.random() * 3,
      angle: Math.PI / 4,
      alpha: 1
    });
  }

  setInterval(() => {
    if (Math.random() > 0.2) {
      createShootingStar();
    }
  }, 1200);

  function animate() {
    ctx.clearRect(0, 0, width, height);

    stars.forEach(s => {
      s.alpha += s.speed;
      if (s.alpha > s.maxAlpha || s.alpha < 0.1) s.speed = -s.speed;
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(0, s.alpha);
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    ctx.globalAlpha = 1;
    for (let i = shootingStars.length - 1; i >= 0; i--) {
      const st = shootingStars[i];
      const endX = st.x - st.length * Math.cos(st.angle);
      const endY = st.y - st.length * Math.sin(st.angle);

      const gradient = ctx.createLinearGradient(st.x, st.y, endX, endY);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${st.alpha})`);
      gradient.addColorStop(0.3, `rgba(246, 207, 135, ${st.alpha * 0.8})`);
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2.5;
      ctx.lineCap = 'round';
      ctx.beginPath();
      ctx.moveTo(st.x, st.y);
      ctx.lineTo(endX, endY);
      ctx.stroke();

      st.x += st.speed * Math.cos(st.angle);
      st.y += st.speed * Math.sin(st.angle);
      st.alpha -= 0.006;

      if (st.alpha <= 0 || st.x > width || st.y > height) {
        shootingStars.splice(i, 1);
      }
    }

    requestAnimationFrame(animate);
  }

  animate();
}

// Génération dynamique de lucioles lumineuses pour la scène du Coucher de Soleil
function createSunsetFireflies() {
  const container = document.getElementById("sunset-fireflies");
  if (!container) return;
  container.innerHTML = "";

  const fireflyCount = 25;
  for (let i = 0; i < fireflyCount; i++) {
    const ff = document.createElement("div");
    ff.classList.add("sunset-firefly");
    ff.style.left = `${Math.random() * 100}%`;
    ff.style.top = `${40 + Math.random() * 50}%`;
    ff.style.animationDelay = `${Math.random() * 4}s`;
    ff.style.animationDuration = `${3 + Math.random() * 4}s`;
    container.appendChild(ff);
  }
}
});