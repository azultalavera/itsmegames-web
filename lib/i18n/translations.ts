import type { Language, Translations } from './types';

export const translations: Record<Language, Translations> = {
  en: {
    navbar: {
      home: 'Home',
      games: 'Games',
      story: 'Story',
      team: 'Team',
      sponsors: 'Partners',
    },
    hero: {
      titleLine1: 'FROM PLAYERS',
      titleLine2Pre: 'TO ',
      titleLine2Highlight: 'CREATORS',
      description:
        'Crafting worlds that inspire. We transform our love for gaming into unique interactive experiences.',
      badge: 'Córdoba, Argentina • Indie Studio',
      explore: 'Explore',
    },
    games: {
      badge: 'Idea Lab',
      titlePre: 'Games in ',
      titleHighlight: 'Development',
      subtitle:
        'Explore the projects taking shape at the core of ItsMeGames. Where code meets raw creativity.',
      statusLabel: 'STATUS',
      compiling: 'Compiling...',
      clickToEnter: 'CLICK TO ENTER',
      clickToView: 'CLICK HERE TO VIEW',
      layer8: {
        title: 'LAYER 8',
        status: 'IN DEVELOPMENT',
        description:
          'A Twin-Stick RogueLite where you must purge the system from an unknown cyber threat.',
        tags: ['Action', 'RogueLite', 'Cyberpunk'],
      },
    },
    about: {
      title: 'Our Evolution',
      subtitle: 'The journey from a weekend hobby to a creative game studio.',
      milestones: [
        {
          year: '2020',
          title: 'The Beginning',
          description:
            'It all began during the pandemic. A shared passion, a streaming channel to connect with fellow gamers.',
        },
        {
          year: '2021',
          title: 'Community & Streaming',
          description:
            'The itsmegames_ Twitch channel became a vibrant hub. Bonding with our audience sparked the vision to go further.',
        },
        {
          year: '2026+',
          title: 'Studio Evolution',
          description:
            'We realized our ultimate passion is building. We evolved into an indie game studio, ready to make our mark on the industry.',
        },
      ],
    },
    team: {
      title: 'The Family',
      subtitle: 'The passionate minds behind the magic.',
      viewInfo: 'View Info',
      members: {
        Brunito: {
          name: 'Brunito',
          role: 'Founder & Game Director',
          description:
            'The mastermind behind it all. Passionate gamer and relentless adventure seeker.',
        },
        Maxi: {
          name: 'Maxi',
          role: 'Legal & Community Manager',
          description:
            'Protects our legal flank and keeps the community enthusiasm thriving.',
        },
        Azul: {
          name: 'Azul',
          role: 'UX Lead & Game Developer',
          description:
            'Interface architect. Blending complex system logic with stunning visual aesthetics.',
        },
        Fran: {
          name: 'Fran',
          role: 'Tech Lead',
          description:
            'The code architect. Leading engineering to push performance to the next level.',
        },
        Lucas: {
          name: 'Lucas',
          role: 'Lead Artist',
          description:
            'Gamer at heart. Illustrates with pure passion; loves playing, experimenting, and having fun.',
        },
        Nico: {
          name: 'Nico',
          role: 'Sound Design',
          description: 'Tech geek, Techno producer, DJ and Developer. I am IronMan.',
        },
      },
    },
    sponsors: {
      badge: 'Partnerships',
      titlePre: 'Strategic ',
      titleHighlight: 'Partners',
      subtitle:
        'Teaming up with forward-thinking institutions and leaders to push the boundaries of digital entertainment.',
      viewInfo: 'Partner Info',
      partners: {
        'UTN FRC': {
          name: 'UTN FRC',
          tier: 'Academic Partner',
          description:
            'National Technological University - Córdoba Regional Faculty. Fostering technological innovation and professional training.',
        },
        'Lanas Córdoba': {
          name: 'Lanas Córdoba',
          tier: 'Strategic Partner',
          description:
            'Benchmark leader in the textile industry. Actively collaborating in the growth of projects with strong local impact.',
        },
      },
    },
    footer: {
      founderRole: 'FOUNDER',
      emailLabel: 'EMAIL:',
      telLabel: 'TEL:',
    },
    layer8: {
      hero: {
        alert: '[ALERT: MANUAL REBOOT REQUIRED]',
        tagline: '"THE SYSTEM IS ROTTEN. YOU ARE THE PURGE."',
        genre: 'GENRE: TWIN-STICK ROGUELITE / BULLET HEAVEN',
        platform: 'PLATFORM: PC (STEAM)',
        target: 'TARGET: TEEN / YOUNG ADULT',
        releaseDate: 'RELEASE: Q4 2027',
      },
      controlPanel: {
        tabs: {
          concept: 'CONCEPT & LORE',
          upgrades: 'UPGRADES & GLITCHES',
          npcs: 'NPC SYSTEM',
          specs: 'PC SPECS',
        },
        concept: {
          title: 'HIGH CONCEPT & STORY PROTOCOL',
          p1: 'A corporate supercomputer has entered global crisis. You are THE KERNEL KEEPER, a ruthless protocol of absolute last resort. Your mission is not to clean viruses, it is to execute everything that moves. You must descend physically through the 7 Layers of the OSI Model, from Graphical User Interface down to raw Hardware, to force a manual reboot before the system melts down.',
          beginningTitle: 'The Beginning:',
          beginningText:
            'We begin in the physical world. A short cinematic shows a server room at Vanguard Mainframes under red alert. A desperate technician breaks emergency glass and connects the KERNEL Keeper USB drive. The camera zooms deep into CRT monitor pixels and we are transported into the software.',
          progressionTitle: 'Progression and Revelation:',
          progressionText:
            'The player advances cleansing different layers of the OSI Model. Upon reaching the absolute core, the truth is revealed: the massive infection was not an external breach, but direct human negligence by the User/Operator (Layer 8). The player must make a final decision that concludes the run and impacts the meta-game: format and perish or embrace corruption.',
        },
        upgrades: {
          title: 'CORRUPTION SYSTEM (GLITCHES) & CORE UPGRADES',
          description:
            'The game balances permanent meta-progression core upgrades with volatile glitches granting devastating firepower in exchange for severe mechanical or visual penalties.',
          permanentTitle: 'PERMANENT PROGRESSION (CORE)',
          permanentList: [
            { title: 'RAM Expansion:', desc: 'Permanently adds an extra green memory block.' },
            { title: 'Optimal Routing:', desc: 'Passively increases movement speed.' },
            { title: 'Firewall Protocol:', desc: 'Temporary shield absorbing 1 free hit.' },
            { title: 'Active Cooling:', desc: 'Reduces evasive Dash cooldowns.' },
          ],
          glitchesTitle: 'VOLATILE GLITCHES (CORRUPTION)',
          penaltyLabel: 'Penalty:',
          glitchesList: [
            { title: 'Overclock:', desc: 'Extreme fire rate.', penalty: 'Screen flickers.' },
            {
              title: 'Memory Leak:',
              desc: 'Doubled damage.',
              penalty: 'Dash loses invulnerability frames.',
            },
            {
              title: 'Vampire Protocol:',
              desc: 'Healing upon physical Dash.',
              penalty: 'Max health reduced to 3 blocks.',
            },
            {
              title: 'Fragmentation:',
              desc: 'Massive scatter spread.',
              penalty: '-20% movement speed.',
            },
          ],
        },
        npcs: {
          title: 'SYSTEM PARTNERS AND THREATS',
          description:
            'The narrative unfolds through diegetic lore and rapid interactions with OS utilities and assistants that survived the infection.',
          list: [
            {
              name: 'Diag.exe (Diagnostic Assistant)',
              desc: "A clean native file providing reconnaissance and system lore. Diag.exe fears the Keeper's ruthless methods.",
            },
            {
              name: 'Merchant.bat (Digital Peddler)',
              desc: 'A batch processor trafficking code fragments, vending repair patches in exchange for Crypto-Data.',
            },
            {
              name: 'Clip.exe (The Grudgeful Assistant)',
              desc: 'A parody of classic office paperclip assistants, resentful of being archived, presenting logical hurdles and tests.',
              isRed: true,
            },
            {
              name: 'Archive.rar (The Eternal Archive)',
              desc: 'Log and database keeper allowing you to inspect your Run meta-progression history.',
            },
          ],
        },
        specs: {
          title: 'TECHNICAL HARDWARE REQUIREMENTS (PC)',
          minTitle: '[MINIMUM REQUIREMENTS]',
          recTitle: '[RECOMMENDED REQUIREMENTS]',
          minGpu: 'GPU: Integrated Graphics (DX11)',
          minStorage: 'Storage: 2 GB Free',
          recCpu: 'CPU: AMD Ryzen 5 5600GT or similar',
          recGpu: 'GPU: NVIDIA RTX 5060 or similar',
          recStorage: 'Storage: 2 GB Free (SSD)',
        },
      },
      objectives: {
        titlePre: 'AUDIT ',
        titleHighlight: 'OBJECTIVES',
        items: [
          {
            number: '01. FRANTIC COMBAT',
            title: '01. FRANTIC COMBAT',
            desc: 'Survive intense tactical Twin-Stick combat in isometric perspective where every hit consumes memory blocks and mistakes cost real non-regenerative health.',
            isRed: true,
          },
          {
            number: '02. LEARN FROM CORRUPTION',
            title: '02. LEARN FROM CORRUPTION',
            desc: 'Master the Glitch System. Embrace chromatic glitches and severe visual screen distortions in exchange for exponentially expanding your tactical firepower.',
          },
          {
            number: '03. CRT TECH-HORROR AESTHETIC',
            title: '03. CRT TECH-HORROR AESTHETIC',
            desc: 'Immerse yourself in a dark 90s server mainframe atmosphere, flickering green phosphor monitors, and Vanguard Mainframes digital white noise.',
          },
        ],
      },
      osiLayers: {
        titlePre: 'THE CONFLICT: ',
        titleHighlight: 'THE OSI LAYERS',
        mapPrompt: 'OSI MODEL MAP (vertical descent)',
        layers: [
          {
            tag: 'LAYER 7 (APPLICATION) • DIGITAL HEADQUARTERS',
            title: 'THE HYDRA BROWSER',
            highlightText: 'FAT32 Scattergun',
            desc: 'A monstrous, invasive browser. Close one tab (head) and two more sprout automatically. Collect the heavy FAT32 Scattergun shotgun from the system downloads directory.',
            isRed: true,
          },
          {
            tag: 'LAYER 6 (PRESENTATION) • ENCRYPTION MAZES',
            title: 'RSA-PIERCER GUN',
            highlightText: 'RSA Piercer',
            desc: 'A labyrinth of encrypted data. Deploy the RSA Piercer emitter to unleash a sustained energy beam penetrating layered defenses (slows mobility by 40% while charging).',
          },
          {
            tag: 'LAYER 5 (SESSION) • DIAL-UP ACCESS',
            title: '56K DIAL-UP CANNON',
            highlightText: '56k',
            desc: 'Transmission synchronization sector. The 56k cannon fires erratic lag orbs, inflicting massive 2-second stun from packet loss on malicious malware.',
          },
          {
            tag: 'LAYER 4 (TRANSPORT) • FIBER STREAM',
            title: 'THE PACKET WYRM',
            highlightText: 'MTU Launcher',
            desc: 'A colossal optical-fiber serpent gliding beneath packet stacks. Fire the MTU Launcher, heavy artillery rebounding off walls with a concussive shockwave.',
          },
          {
            tag: 'LAYER 1 (PHYSICAL) • THE SILICON CRADLE',
            title: 'KERNEL PANIC',
            highlightText: 'Thermal Flow Cannon',
            desc: 'The boiling silicon core. Confront Kernel Panic, the ultimate anomaly simulating Blue Screens of Death and hardware crashes. Deploy the Thermal Flow Cannon before meltdown.',
            isRed: true,
          },
        ],
      },
      synergies: {
        titlePre: 'CODE SYNERGIES ',
        titleHighlight: '(BUILDS)',
        items: [
          {
            title: 'IGNIS VAMPIRE',
            desc: 'Combine Vampire Protocol with the Dash flame trail. Scorch and siphon health passively from cyan-burned foes while sprinting.',
          },
          {
            title: 'FRACTAL SHOTGUN',
            desc: 'Combine the MAC-Breaker Shotgun with Disk Fragmentation. Drastically boosts pellet spread, filling the entire isometric arena with projectiles.',
          },
          {
            title: 'PHANTOM SNIPER',
            desc: 'Combine the long-range Traceroute Rifle with Dash holographic decoys. Deploy a dummy drawing fire while charging pinpoint long-range sniper shots.',
          },
        ],
      },
      signup: {
        title: 'ACCESS PROTOCOL',
        prompt1:
          'Leave your email to register for the upcoming closed beta and support ongoing development.',
        prompt2: 'Injecting registration protocol into Vanguard Mainframes...',
        namePlaceholder: 'FULL NAME',
        emailPlaceholder: 'USER@SECTOR.COM',
        btnSubmit: 'Send Data',
        btnSuccess: 'Registered',
        msgSuccess: 'ACCESS GRANTED. You have been added to the priority roster.',
        msgError: 'SYSTEM ERROR. Please retry later.',
      },
      contact: {
        title: 'AUDIT CONTACT',
        role: 'Director / Game Design',
        gdd: 'GDD VERSION: 1.0 (Published: May 12, 2026)',
      },
    },
    switch: {
      ariaLabel: 'Language selector',
      enTitle: 'English',
      esTitle: 'Spanish',
    },
    notFound: {
      description:
        'You have gone off the map. The file you are looking for has been deleted or never existed in this sector.',
      respawn: 'Respawn (Back to Home)',
    },
  },
  es: {
    navbar: {
      home: 'Inicio',
      games: 'Juegos',
      story: 'Historia',
      team: 'Equipo',
      sponsors: 'Socios',
    },
    hero: {
      titleLine1: 'FROM PLAYERS',
      titleLine2Pre: 'TO ',
      titleLine2Highlight: 'CREATORS',
      description:
        'Creando mundos que inspiran. Transformamos nuestra pasión por jugar en experiencias interactivas únicas.',
      badge: 'Córdoba, Argentina • Estudio Indie',
      explore: 'Explorar',
    },
    games: {
      badge: 'Laboratorio de Ideas',
      titlePre: 'Juegos en ',
      titleHighlight: 'Desarrollo',
      subtitle:
        'Explora los proyectos que están tomando forma en el núcleo de ItsMeGames. Donde el código se encuentra con la creatividad pura.',
      statusLabel: 'ESTADO',
      compiling: 'Compilando...',
      clickToEnter: 'CLICK PARA ENTRAR',
      clickToView: 'CLICK AQUÍ PARA VER',
      layer8: {
        title: 'LAYER 8',
        status: 'EN DESARROLLO',
        description:
          'Un Twin-Stick RogueLite donde debes purgar el sistema de una amenaza desconocida.',
        tags: ['Action', 'RogueLite', 'Cyberpunk'],
      },
    },
    about: {
      title: 'Nuestra Evolución',
      subtitle: 'El viaje de un hobby a un estudio creativo.',
      milestones: [
        {
          year: '2020',
          title: 'El Inicio',
          description:
            'Todo comenzó durante la pandemia. Un hobby, un canal de streaming para compartir nuestra pasión por los videojuegos.',
        },
        {
          year: '2021',
          title: 'Comunidad & Streaming',
          description:
            'El canal de Twitch itsmegames_ se convirtió en un punto de encuentro. La conexión con la audiencia nos inspiró a ir más allá.',
        },
        {
          year: '2026+',
          title: 'Evolución a Estudio',
          description:
            'Descubrimos que nuestra verdadera pasión es crear. Nacimos como empresa de desarrollo de videojuegos, listos para dejar nuestra marca en la industria.',
        },
      ],
    },
    team: {
      title: 'La Familia',
      subtitle: 'El equipo detrás de la magia.',
      viewInfo: 'Ver Info',
      members: {
        Brunito: {
          name: 'Brunito',
          role: 'Founder & Game Director',
          description:
            'El cerebro detrás de todo. Fanático de los videojuegos y de vivir nuevas aventuras.',
        },
        Maxi: {
          name: 'Maxi',
          role: 'Legal & Community Manager',
          description:
            'Cuida nuestras espaldas legales y mantiene viva la llama de la comunidad.',
        },
        Azul: {
          name: 'Azul',
          role: 'UX Lead & Game Developer',
          description:
            'Arquitecta de interfaces. Fusiona los requisitos del sistema con un diseño visual impactante.',
        },
        Fran: {
          name: 'Fran',
          role: 'Tech Lead',
          description:
            'El arquitecto del código. Lidera la tecnología para llevar el rendimiento al siguiente nivel.',
        },
        Lucas: {
          name: 'Lucas',
          role: 'Lead Artist',
          description:
            'Fanático de los videojuegos. Dibuja con el corazón; su pasión es jugar y divertirse.',
        },
        Nico: {
          name: 'Nico',
          role: 'Sound Design',
          description: 'Gordo compu, productor Techno, DJ y Developer. I am IronMan.',
        },
      },
    },
    sponsors: {
      badge: 'Alianzas',
      titlePre: 'Socios ',
      titleHighlight: 'Estratégicos',
      subtitle:
        'Colaborando con instituciones y empresas líderes para expandir los límites del entretenimiento digital.',
      viewInfo: 'Info del Socio',
      partners: {
        'UTN FRC': {
          name: 'UTN FRC',
          tier: 'Socio Académico',
          description:
            'Universidad Tecnológica Nacional - Facultad Regional Córdoba. Impulsando la innovación técnica y formación profesional.',
        },
        'Lanas Córdoba': {
          name: 'Lanas Córdoba',
          tier: 'Socio Estratégico',
          description:
            'Referente en la industria textil. Colaborando en el crecimiento de proyectos con impacto local.',
        },
      },
    },
    footer: {
      founderRole: 'FOUNDER',
      emailLabel: 'EMAIL:',
      telLabel: 'TEL:',
    },
    layer8: {
      hero: {
        alert: '[ALERTA: REINICIO MANUAL REQUERIDO]',
        tagline: '"EL SISTEMA ESTÁ PODRIDO. VOS SOS LA PURGA."',
        genre: 'GÉNERO: TWIN-STICK ROGUELITE / BULLET HEAVEN',
        platform: 'PLATAFORMA: PC (STEAM)',
        target: 'TARGET: TEEN / YOUNG ADULT',
        releaseDate: 'FECHA: Q4 2027',
      },
      controlPanel: {
        tabs: {
          concept: 'CONCEPTO Y LORE',
          upgrades: 'MEJORAS Y GLITCHES',
          npcs: 'SISTEMA DE NPCs',
          specs: 'REQUISITOS PC',
        },
        concept: {
          title: 'PROTOCOLO HIGH CONCEPT & HISTORIA',
          p1: 'Una supercomputadora corporativa ha entrado en crisis global. Vos sos THE KERNEL KEEPER, un protocolo de defensa brutal de última instancia. Tu misión no es limpiar virus, es ejecutar todo lo que se mueva. Debes descender físicamente a través de las 7 Capas del Modelo OSI, desde la Interfaz Gráfica hasta el Hardware puro, para forzar un reinicio manual antes de que el sistema se funda.',
          beginningTitle: 'El Comienzo:',
          beginningText:
            'Empezamos en el mundo físico. Una cinemática corta muestra una sala de servidores de Vanguard Mainframes en alerta roja. Un técnico desesperado rompe un cristal de emergencia y conecta el pendrive del KERNEL Keeper. La cámara hace zoom hacia los píxeles del monitor CRT y somos transportados al software.',
          progressionTitle: 'El Progreso y Revelación:',
          progressionText:
            'El jugador avanza limpiando las distintas capas del Modelo OSI. Al llegar al núcleo absoluto, se revela la verdad: la infección masiva no fue un ataque externo, sino una negligencia directa del Usuario/Técnico (La Capa 8). El jugador debe tomar una decisión final que cerrará la run y afectará el meta-juego: formatear y morir o aceptar su corrupción.',
        },
        upgrades: {
          title: 'SISTEMA DE CORRUPCIÓN (GLITCHES) Y MEJORAS DE NÚCLEO',
          description:
            'El juego equilibra mejoras permanentes del núcleo de meta-progreso con glitches temporales que otorgan un poder devastador a cambio de un costo mecánico o visual severo.',
          permanentTitle: 'PROGRESIÓN PERMANENTE (NÚCLEO)',
          permanentList: [
            {
              title: 'Ampliación de RAM:',
              desc: 'Añade un bloque de memoria verde extra permanentemente.',
            },
            {
              title: 'Enrutamiento óptimo:',
              desc: 'Incrementa la velocidad de movimiento de forma pasiva.',
            },
            {
              title: 'Protocolo Firewall:',
              desc: 'Escudo temporal de 1 impacto gratuito.',
            },
            {
              title: 'Refrigeración:',
              desc: 'Reduce tiempos de recarga del Dash evasivo.',
            },
          ],
          glitchesTitle: 'GLITCHES TEMPORALES (CORRUPCIÓN)',
          penaltyLabel: 'Penalización:',
          glitchesList: [
            { title: 'Overclock:', desc: 'Cadencia extrema.', penalty: 'Pantalla parpadea.' },
            {
              title: 'Fuga de Memoria:',
              desc: 'Daño duplicado.',
              penalty: 'Dash sin frames de invulnerabilidad.',
            },
            {
              title: 'Protocolo Vampiro:',
              desc: 'Curación por Dash físico.',
              penalty: 'Vida máxima reducida a 3 bloques.',
            },
            {
              title: 'Fragmentación:',
              desc: 'Dispersión masiva.',
              penalty: '-20% velocidad de movimiento.',
            },
          ],
        },
        npcs: {
          title: 'SOCIOS Y ENEMIGOS DEL SISTEMA',
          description:
            'La historia se cuenta mediante lore diegético e interacciones rápidas con utilidades y asistentes del sistema operativo que sobrevivieron a la infección.',
          list: [
            {
              name: 'Diag.exe (Asistente de Diagnóstico)',
              desc: 'Un archivo nativo y limpio que te provee reconocimiento e información del lore. Diag.exe teme a los métodos implacables del Keeper.',
            },
            {
              name: 'Merchant.bat (Buhonero Digital)',
              desc: 'Un procesador por lotes que trafica con fragmentos de código, vendiendo parches de reparación a cambio de Cripto-Datos.',
            },
            {
              name: 'Clip.exe (El Asistente Rencoroso)',
              desc: 'Una parodia de asistente clásico de oficina, resentido por haber sido archivado, que te pondrá pruebas y trabas lógicas.',
              isRed: true,
            },
            {
              name: 'Archive.rar (El Archivo Eterno)',
              desc: 'Almacenador de logs y bases de datos que te permite revisar el meta-progreso de tus Runs.',
            },
          ],
        },
        specs: {
          title: 'REQUISITOS TÉCNICOS DE HARDWARE (PC)',
          minTitle: '[REQUISITOS MÍNIMOS]',
          recTitle: '[REQUISITOS RECOMENDADOS]',
          minGpu: 'GPU: Gráficos integrados (DX11)',
          minStorage: 'Almacenamiento: 2 GB libres',
          recCpu: 'CPU: AMD Ryzen 5 5600GT o similar',
          recGpu: 'GPU: NVIDIA RTX 5060 o similar',
          recStorage: 'Almacenamiento: 2 GB libres (SSD)',
        },
      },
      objectives: {
        titlePre: 'OBJETIVOS DE ',
        titleHighlight: 'AUDITORÍA',
        items: [
          {
            number: '01. COMBATE FRENÉTICO',
            title: '01. COMBATE FRENÉTICO',
            desc: 'Sobrevive a un combate Twin-Stick táctico e intenso en vista isométrica donde cada impacto consume bloques lógicos de memoria y cada error te cuesta vida real no regenerable.',
            isRed: true,
          },
          {
            number: '02. APRENDE DE LA CORRUPCIÓN',
            title: '02. APRENDE DE LA CORRUPCIÓN',
            desc: 'Domina el Sistema de Glitches. Asume fallos cromáticos y distorsiones visuales severas en tu pantalla a cambio de expandir exponencialmente tu arsenal táctico de fuego.',
          },
          {
            number: '03. ESTÉTICA CRT TECH-HORROR',
            title: '03. ESTÉTICA CRT TECH-HORROR',
            desc: 'Sumérgete en una atmósfera oscura de hardware de servidores noventeros, monitores parpadeantes de fósforo verde y ruido blanco digital de Vanguard Mainframes.',
          },
        ],
      },
      osiLayers: {
        titlePre: 'EL CONFLICTO: ',
        titleHighlight: 'LAS CAPAS OSI',
        mapPrompt: 'MAPA DEL MODELO OSI (V verticale descent)',
        layers: [
          {
            tag: 'CAPA 7 (APLICACIÓN) • JEFATURA DIGITAL',
            title: 'THE HYDRA BROWSER',
            highlightText: 'FAT32 Scattergun',
            desc: 'Un navegador monstruoso e invasivo. Si le cerrás una pestaña (cabeza), abre automáticamente dos más. Aquí consigues la escopeta pesada FAT32 Scattergun en la carpeta de descargas del sistema.',
            isRed: true,
          },
          {
            tag: 'CAPA 6 (PRESENTACIÓN) • LABERINTOS DE ENCRIPTACIÓN',
            title: 'RSA-PIERCER GUN',
            highlightText: 'Perforador RSA',
            desc: 'Lugar de laberintos de encriptación de datos. Utiliza el emisor Perforador RSA para proyectar un haz de energía continua capaz de atravesar múltiples protecciones enemigas (reduce tu movilidad en un 40% durante la carga).',
          },
          {
            tag: 'CAPA 5 (SESIÓN) • ACCESO DIAL-UP',
            title: 'CAÑÓN DIAL-UP 56K',
            highlightText: '56k',
            desc: 'Zona de sincronización de transmisiones. El cañón de 56k dispara orbes de datos con inestabilidad de lag. El proyectil fluctúa erráticamente y genera un efecto de Stun masivo por "pérdida de paquetes" durante 2 segundos en el malware.',
          },
          {
            tag: 'CAPA 4 (TRANSPORTE) • FLUJO DE FIBRA',
            title: 'THE PACKET WYRM',
            highlightText: 'Lanzador MTU',
            desc: 'Un gusano gigante de fibra óptica que "nada" debajo de la pila de paquetes. Aquí disparas el Lanzador MTU, artillería pesada que rebota en los muros y genera una onda de choque devastadora que altera tu propia posición.',
          },
          {
            tag: 'CAPA 1 (FÍSICA) • EL HOGAR DE SILICIO',
            title: 'KERNEL PANIC',
            highlightText: 'Cañón de Flujo Térmico',
            desc: 'El núcleo y el hardware ardiendo. Enfrentarás a Kernel Panic, la anomalía final que simula pantallas azules y crasheos reales de hardware en tu interfaz. Debes usar el Cañón de Flujo Térmico para purgarlo antes de que el procesador se funda.',
            isRed: true,
          },
        ],
      },
      synergies: {
        titlePre: 'SINERGIAS DE ',
        titleHighlight: 'CÓDIGO (BUILDS)',
        items: [
          {
            title: 'VAMPIRO ÍGNEO',
            desc: 'Combina el Protocolo Vampiro con el rastro de fuego del Dash. Al quemar y herir a tus enemigos con fuego cian, robas vida de manera pasiva mientras sigues corriendo.',
          },
          {
            title: 'ESCOPETA FRACTAL',
            desc: 'Combina la Escopeta Rompe-MAC con el glitch de Fragmentación de Disco. Aumenta drásticamente la dispersión de perdigones cubriendo toda la pantalla isométrica de proyectiles.',
          },
          {
            title: 'FRANCOTIRADOR FANTASMA',
            desc: 'Combina el Rifle Traceroute de largo alcance con el señuelo holográfico del Dash. Deja un clon señuelo atrayendo disparos mientras cargas tu disparo perfecto a distancia.',
          },
        ],
      },
      signup: {
        title: 'PROTOCOLO DE ACCESO',
        prompt1:
          'Dejanos tu mail para registrarte en la próxima beta cerrada y darnos soporte durante el desarrollo.',
        prompt2: 'Inyectando protocolo de registro en Vanguard Mainframes...',
        namePlaceholder: 'NOMBRE COMPLETO',
        emailPlaceholder: 'USUARIO@SECTOR.COM',
        btnSubmit: 'Enviar Datos',
        btnSuccess: 'Registrado',
        msgSuccess: 'ACCESO CONCEDIDO. Has sido incluido en la lista de interesados.',
        msgError: 'ERROR DE SISTEMA. Inténtalo de nuevo más tarde.',
      },
      contact: {
        title: 'CONTACTO DE AUDITORÍA',
        role: 'Director / Game Design',
        gdd: 'VERSIÓN GDD: 1.0 (Publicado: 12 Mayo 2026)',
      },
    },
    switch: {
      ariaLabel: 'Selector de idioma',
      enTitle: 'Inglés',
      esTitle: 'Español',
    },
    notFound: {
      description:
        'Te has salido del mapa. El archivo que buscas ha sido eliminado o nunca existió en este sector.',
      respawn: 'Respawn (Volver al Inicio)',
    },
  },
};
