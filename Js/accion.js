/**
     * Catálogo de constancias DC-3 (2022–2026) categorizadas para filtrado interactivo
     * y consulta detallada en modal.
     */
    const dc3Records = [
      {
        id: 'riesgo-electrico',
        title: 'Entrenamiento en el Manejo del Riesgo Eléctrico',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Prevención de contactos eléctricos, desenergización segura y control de peligros en instalaciones y equipos.',
        summary: 'Capacitación enfocada en la identificación de riesgos eléctricos, distancia de seguridad, uso de equipo dieléctrico y protocolos de actuación preventiva.'
      },
      {
        id: 'trabajo-alturas',
        title: 'Trabajo en Alturas',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Operaciones elevadas, revisión de sistemas anticaídas, puntos de anclaje y evaluación previa del entorno.',
        summary: 'Control de riesgos en actividades en altura mediante inspección de arneses, líneas de vida, análisis de condiciones y medidas de prevención.'
      },
      {
        id: 'escaleras-cuerdas-nudos',
        title: 'Manejo de Escaleras, Cuerdas y Nudos',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Selección, inspección y uso seguro de escaleras portátiles, cabuyería y amarres técnicos.',
        summary: 'Aplicación práctica de ángulos de apoyo, sujeción, inspección previa de elementos y nudos funcionales para maniobras seguras.'
      },
      {
        id: 'primeros-auxilios-alto-riesgo',
        title: 'Primeros Auxilios con Enfoque a Trabajos de Alto Riesgo',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Respuesta inicial ante emergencias médicas, estabilización primaria y activación de cadena de auxilio.',
        summary: 'Protocolos de atención inmediata orientados a escenarios de alto riesgo industrial y operativo hasta la llegada de servicios médicos.'
      },
      {
        id: 'loto-bloqueo',
        title: 'Técnica LOTO / Gestión de Bloqueo y Etiquetado',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Aislamiento y bloqueo de energías peligrosas (eléctrica, mecánica, neumática, hidráulica o térmica).',
        summary: 'Procedimiento sistemático de candadeo, etiquetado y verificación de cero energía previo a mantenimiento o intervención.'
      },
      {
        id: 'espacios-confinados',
        title: 'Espacios Confinados y Verificador de Gas',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Monitoreo atmosférico, ventilación, permisos de entrada y vigilancia continua en espacios confinados.',
        summary: 'Evaluación de atmósferas peligrosas, lectura de detectores de gas y controles preventivos para ingreso seguro.'
      },
      {
        id: 'trabajos-caliente-incendios',
        title: 'Trabajos en Caliente, Corte y Prevención Contra Incendios',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Control de chispas, fuentes de ignición, vigilancia firewatch y uso de extintores/sistemas contra incendio.',
        summary: 'Medidas de prevención y contención de conatos durante soldadura, corte o tareas térmicas en áreas operativas.'
      },
      {
        id: 'ast-epp-maquinaria',
        title: 'AST, Uso de EPP, Maquinaria y Formación de Supervisor de Seguridad',
        category: 'seguridad',
        categoryLabel: 'Seguridad y Alto Riesgo',
        period: '2022–2026',
        scope: 'Análisis Seguro del Trabajo (AST), selección de EPP, operación segura de maquinaria y supervisión preventiva.',
        summary: 'Integración de constancias DC-3 en análisis de riesgos por tarea, resguardo de maquinaria, uso correcto de EPP y liderazgo en seguridad.'
      },
      {
        id: 'iso-9001',
        title: 'Auditor Interno de ISO 9001:2015',
        category: 'iso',
        categoryLabel: 'Normas ISO y Auditoría',
        period: '2022–2026',
        scope: 'Sistemas de Gestión de la Calidad, enfoque a procesos, satisfacción del cliente y mejora continua.',
        summary: 'Evaluación interna del cumplimiento de requisitos ISO 9001:2015, detección de no conformidades y seguimiento de acciones correctivas.'
      },
      {
        id: 'iso-14001',
        title: 'Auditor Interno de ISO 14001:2015',
        category: 'iso',
        categoryLabel: 'Normas ISO y Auditoría',
        period: '2022–2026',
        scope: 'Sistemas de Gestión Ambiental, aspectos e impactos ambientales y cumplimiento legal aplicable.',
        summary: 'Revisión sistemática del desempeño ambiental, control operacional y prevención de contaminación bajo ISO 14001:2015.'
      },
      {
        id: 'iso-19011',
        title: 'Auditor Interno de ISO 19011:2018',
        category: 'iso',
        categoryLabel: 'Normas ISO y Auditoría',
        period: '2022–2026',
        scope: 'Directrices para la auditoría de sistemas de gestión, planeación, muestreo, entrevistas y reportes.',
        summary: 'Metodología objetiva e imparcial para planificar, ejecutar y documentar auditorías internas de sistemas de gestión.'
      },
      {
        id: 'iso-22000',
        title: 'Auditor Interno de ISO 22000:2018',
        category: 'iso',
        categoryLabel: 'Normas ISO y Auditoría',
        period: '2022–2026',
        scope: 'Sistemas de Gestión de la Inocuidad de los Alimentos, control de peligros y trazabilidad.',
        summary: 'Verificación de controles preventivos y requisitos de inocuidad alimentaria a lo largo de la cadena de valor.'
      },
      {
        id: 'iso-31000',
        title: 'Auditor Interno de ISO 31000:2018',
        category: 'iso',
        categoryLabel: 'Normas ISO y Auditoría',
        period: '2022–2026',
        scope: 'Gestión del riesgo, identificación, análisis, valoración y tratamiento de riesgos organizacionales.',
        summary: 'Aplicación de principios y marcos de referencia para gestionar la incertidumbre y fortalecer la toma de decisiones.'
      },
      {
        id: 'iso-45001',
        title: 'Auditor Interno de ISO 45001:2018',
        category: 'iso',
        categoryLabel: 'Normas ISO y Auditoría',
        period: '2022–2026',
        scope: 'Sistemas de Gestión de la Seguridad y Salud en el Trabajo (SST), eliminación de peligros y consulta.',
        summary: 'Auditoría de controles de SST orientados a prevenir lesiones y deterioro de la salud laboral en entornos productivos.'
      },
      {
        id: 'ptar-caracteristicas-etapas',
        title: 'Inspector y Manejo de PTAR, Etapas y Características del Agua Residual',
        category: 'ambiente',
        categoryLabel: 'Medio Ambiente y PTAR',
        period: '2022–2026',
        scope: 'Parámetros físicos, químicos y microbiológicos del agua residual, procesos de tratamiento e inspección de PTAR.',
        summary: 'Comprensión integral de etapas de tratamiento, operación y supervisión de Plantas de Tratamiento de Aguas Residuales.'
      },
      {
        id: 'nom-001-002-003-004',
        title: 'Interpretación de NOM-001-SEMARNAT-2021, NOM-002-ECOL-1996, NOM-003-ECOL-1997 y NOM-004-SEMARNAT-2002',
        category: 'ambiente',
        categoryLabel: 'Medio Ambiente y PTAR',
        period: '2022–2026',
        scope: 'Límites permisibles y lineamientos ambientales para descargas de aguas residuales, alcantarillado, reúso y lodos/biosólidos.',
        summary: 'Interpretación normativa aplicable al cumplimiento ambiental en descargas, tratamiento, reúso de aguas tratadas y manejo de lodos.'
      }
    ];

    /**
     * Renderiza las tarjetas de constancias DC-3 según el filtro seleccionado.
     */
    function renderDc3(filter = 'all') {
      const grid = document.getElementById('dc3-grid');
      if (!grid) return;

      const filtered = filter === 'all'
        ? dc3Records
        : dc3Records.filter((item) => item.category === filter);

      grid.innerHTML = filtered.map((item) => `
        <article
          data-dc3-id="${item.id}"
          class="group cursor-pointer rounded-2xl border border-slate-400/20 bg-[#111c33]/90 p-5 transition hover:-translate-y-0.5 hover:border-sky-400/50 hover:bg-[#162440]/90 shadow-card flex flex-col justify-between space-y-4 print-break-avoid"
        >
          <div class="space-y-2.5">
            <div class="flex items-center justify-between gap-2">
              <span class="rounded-full bg-sky-500/15 border border-sky-400/25 px-2.5 py-0.5 text-[11px] font-bold text-sky-300">
                ${item.categoryLabel}
              </span>
              <span class="text-[11px] font-semibold text-slate-400">${item.period}</span>
            </div>
            <h3 class="text-sm sm:text-base font-bold text-white group-hover:text-sky-300 transition leading-snug">
              ${item.title}
            </h3>
            <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">
              ${item.summary}
            </p>
          </div>
          <div class="flex items-center justify-between border-t border-slate-400/10 pt-3 text-[11px] font-semibold text-sky-400">
            <span>DC-3 · Ver detalle</span>
            <span class="transition-transform group-hover:translate-x-1">→</span>
          </div>
        </article>
      `).join('');
    }

    /**
     * Actualiza los contadores en los botones de filtro DC-3.
     */
    function updateDc3Counts() {
      const allEl = document.getElementById('count-all');
      const segEl = document.getElementById('count-seguridad');
      const isoEl = document.getElementById('count-iso');
      const ambEl = document.getElementById('count-ambiente');

      if (allEl) allEl.textContent = dc3Records.length;
      if (segEl) segEl.textContent = dc3Records.filter((i) => i.category === 'seguridad').length;
      if (isoEl) isoEl.textContent = dc3Records.filter((i) => i.category === 'iso').length;
      if (ambEl) ambEl.textContent = dc3Records.filter((i) => i.category === 'ambiente').length;
    }

    /**
     * Abre el modal con la información completa de una constancia DC-3.
     */
    function openDc3Modal(id) {
      const record = dc3Records.find((item) => item.id === id);
      if (!record) return;

      document.getElementById('modal-category').textContent = record.categoryLabel;
      document.getElementById('modal-title').textContent = record.title;
      document.getElementById('modal-summary').textContent = record.summary;
      document.getElementById('modal-period').textContent = record.period;
      document.getElementById('modal-scope').textContent = record.scope;

      const modal = document.getElementById('detail-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    /**
     * Cierra el modal de constancias DC-3.
     */
    function closeDc3Modal() {
      const modal = document.getElementById('detail-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
    }

    /**
     * Cambia entre pestañas de la presentación docente.
     */
    function switchDocenteTab(tab) {
      const panelBienvenida = document.getElementById('docente-panel-bienvenida');
      const panelTemario = document.getElementById('docente-panel-temario');
      const btnBienvenida = document.getElementById('tab-bienvenida');
      const btnTemario = document.getElementById('tab-temario');

      if (tab === 'bienvenida') {
        panelBienvenida.classList.remove('hidden');
        panelTemario.classList.add('hidden');
        btnBienvenida.className = 'rounded-lg bg-sky-500 px-2.5 py-1 text-[11px] font-bold text-[#070b12]';
        btnTemario.className = 'rounded-lg border border-slate-400/25 bg-[#111c33] px-2.5 py-1 text-[11px] font-semibold text-slate-200 hover:text-white';
      } else {
        panelBienvenida.classList.add('hidden');
        panelTemario.classList.remove('hidden');
        btnTemario.className = 'rounded-lg bg-sky-500 px-2.5 py-1 text-[11px] font-bold text-[#070b12]';
        btnBienvenida.className = 'rounded-lg border border-slate-400/25 bg-[#111c33] px-2.5 py-1 text-[11px] font-semibold text-slate-200 hover:text-white';
      }
    }

    /**
     * Muestra u oculta el reproductor de bienvenida del colegio.
     */
    function toggleVideoBox() {
      const box = document.getElementById('video-player-container');
      const label = document.getElementById('video-toggle-label');
      const isHidden = box.classList.contains('hidden');
      box.classList.toggle('hidden');
      label.textContent = isHidden ? 'Ocultar' : 'Mostrar';
    }

    /**
     * Copia un dato de contacto al portapapeles con notificación visual no intrusiva.
     */
    function copyContact(text, feedback) {
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).catch(() => fallbackCopy(text));
        } else {
          fallbackCopy(text);
        }
      } catch (e) {
        fallbackCopy(text);
      }
      showToast(feedback);
    }

    function fallbackCopy(text) {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      try {
        document.execCommand('copy');
      } catch (err) {
        // Ignorado si está restringido por el entorno
      }
      document.body.removeChild(textarea);
    }

    function showToast(msg) {
      const toast = document.getElementById('toast-banner');
      const msgEl = document.getElementById('toast-message');
      if (!toast || !msgEl) return;
      msgEl.textContent = msg;
      toast.classList.remove('hidden');
      clearTimeout(window.__toastTimer);
      window.__toastTimer = setTimeout(() => {
        toast.classList.add('hidden');
      }, 2600);
    }

    document.addEventListener('DOMContentLoaded', () => {
      updateDc3Counts();
      renderDc3('all');

      document.addEventListener('click', (event) => {
        const target = event.target instanceof Element
          ? event.target.closest('[data-action], [data-copy], [data-docente-tab], [data-dc3-id]')
          : null;
        if (!target) return;

        if (target.dataset.action === 'print') {
          window.print();
        } else if (target.dataset.action === 'toggle-video') {
          toggleVideoBox();
        } else if (target.dataset.action === 'close-modal') {
          closeDc3Modal();
        } else if (target.dataset.copy) {
          copyContact(target.dataset.copy, target.dataset.feedback);
        } else if (target.dataset.docenteTab) {
          switchDocenteTab(target.dataset.docenteTab);
        } else if (target.dataset.dc3Id) {
          openDc3Modal(target.dataset.dc3Id);
        }
      });

      // Listeners de filtros DC-3
      document.querySelectorAll('.dc3-filter-btn').forEach((btn) => {
        btn.addEventListener('click', () => {
          const filter = btn.getAttribute('data-dc3-filter');
          document.querySelectorAll('.dc3-filter-btn').forEach((b) => {
            b.className = 'dc3-filter-btn rounded-xl border border-slate-400/25 bg-[#111c33] px-3.5 py-2 text-xs font-semibold text-slate-200 hover:border-sky-400/50 hover:text-white transition';
          });
          btn.className = 'dc3-filter-btn rounded-xl bg-sky-500 px-3.5 py-2 text-xs font-bold text-[#070b12] transition';
          renderDc3(filter);
        });
      });

      // Menú móvil
      const menuBtn = document.getElementById('menu-toggle-btn');
      const mobileMenu = document.getElementById('mobile-menu');
      const iconOpen = document.getElementById('menu-icon-open');
      const iconClose = document.getElementById('menu-icon-close');

      if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
          const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
          menuBtn.setAttribute('aria-expanded', String(!expanded));
          mobileMenu.classList.toggle('hidden');
          iconOpen.classList.toggle('hidden');
          iconClose.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach((link) => {
          link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            menuBtn.setAttribute('aria-expanded', 'false');
            iconOpen.classList.remove('hidden');
            iconClose.classList.add('hidden');
          });
        });
      }

      // Cerrar modal al hacer clic fuera o presionar Escape
      const modal = document.getElementById('detail-modal');
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeDc3Modal();
        });
      }
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeDc3Modal();
      });

      // Animaciones reveal al hacer scroll
      const revealEls = document.querySelectorAll('.reveal');
      if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.08 }
        );
        revealEls.forEach((el) => observer.observe(el));
      } else {
        revealEls.forEach((el) => el.classList.add('is-visible'));
      }
    });
