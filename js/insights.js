// =====================================================================
// INSIGHTS de Outside-In: "cruces" entre estudios.
// Formato aprobado por Desiree el 6-nov-2026 (v5, manuales/guia-diseno.md §5):
// portada, patrón en cinco pasos (interactivo), cruces de un vistazo,
// pestañas por cruce (texto + gráfico de barras), postura de cada estudio,
// alcance breve, preguntas en franja azul y tabla de fuentes.
// Regla: cada cruce enfrenta datos de estudios DISTINTOS, cada cifra
// lleva su sujeto completo y cada comparación lleva una nota sobre qué
// mide cada estudio. Los insights NO llevan "Mi mirada".
// Cada estudio citado se toma de HALLAZGOS (js/datos.js) por su id.
// =====================================================================

const INSIGHTS = [
  {
    "id": "i-2026-10-ia-roles",
    "numero": "01",
    "publicado": "2026-10-23",
    "tema": "ia_personas",
    "industrias": [
      "consumo_masivo",
      "life_sciences",
      "servicios_financieros"
    ],
    "estudios": [
      "h-2026-10-deloitte-consumo-ia",
      "h-2026-10-bain-life-sciences",
      "h-2026-10-pwc-fs-cambio"
    ],
    "titulo_es": "Las empresas amplían el acceso a la IA,",
    "titulo2_es": "pero pocas explican cómo cambia cada rol.",
    "titulo_en": "Companies are expanding access to AI,",
    "titulo2_en": "but few explain how each role changes.",
    "corto_es": "Cómo cambia cada rol",
    "corto_en": "How each role changes",
    "resumen_es": "Si bien Deloitte, Bain y PwC estudian tres industrias distintas, leídos en conjunto muestran que los equipos usan poco la IA cuando la empresa no define cómo encaja en su trabajo.",
    "resumen_en": "While Deloitte, Bain and PwC study three different industries, read together they show that teams make little use of AI when the company does not define how it fits into their work.",
    "bajada_es": "Deloitte, Bain y PwC analizan la adopción de la IA en tres industrias. Si bien las empresas amplían el acceso a la IA, no definen para qué tareas usarla, qué se espera de cada persona ni qué pasa con su puesto. Como resultado, el uso se limita a lo que se exige y, donde se anticipan recortes, predomina el temor.",
    "bajada_en": "Deloitte, Bain and PwC analyze AI adoption in three industries. While companies are expanding access to AI, they do not define which tasks to use it for, what is expected of each person or what happens to their job. As a result, use is limited to what is required and, where cuts are expected, fear prevails.",
    "tesis_es": "Bain (salud y farmacéutica), PwC (servicios financieros) y Deloitte (consumo masivo) analizan cómo adoptan la IA las empresas de cada industria. **Los tres coinciden en que solo alrededor de 2 de cada 10 empresas convirtieron la IA en decisiones sobre cómo cambia el trabajo**; sin embargo, difieren en la disposición de los equipos a usarla.",
    "tesis_en": "Bain (health and pharmaceuticals), PwC (financial services) and Deloitte (consumer goods) analyze how companies in each industry are adopting AI. **All three agree that only about 2 in 10 companies have turned AI into decisions about how work changes**; however, they differ on teams' willingness to use it.",
    "universo_es": "3 estudios independientes, cada uno con su propia muestra: 2,100 líderes y ejecutivos en conjunto, de salud y farmacéutica, servicios financieros y consumo masivo",
    "universo_en": "3 independent studies, each with its own sample: 2,100 leaders and executives combined, in health and pharmaceuticals, financial services and consumer goods",
    "portada": [
      {
        "id": "h-2026-10-bain-life-sciences",
        "industria": "life_sciences",
        "postura_es": "Pocas empresas explican cómo cambia cada rol",
        "postura_en": "Few companies explain how each role changes",
        "dato_es": "7%",
        "dato_en": "7%",
        "texto_es": "de las empresas de salud y farmacéutica que recién empiezan con la IA explica a sus equipos cómo cambia cada rol",
        "texto_en": "of health and pharmaceutical companies just starting with AI explain to their teams how each role changes"
      },
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "industria": "consumo_masivo",
        "postura_es": "la mayoría no rediseñó los puestos",
        "postura_en": "most have not redesigned jobs",
        "dato_es": "82%",
        "dato_en": "82%",
        "texto_es": "de las empresas de consumo masivo no rediseñó sus puestos en torno a la IA",
        "texto_en": "of consumer goods companies have not redesigned their jobs around AI"
      }
    ],
    "portada_conector_es": "y",
    "portada_conector_en": "and",
    "coinciden_titulo_es": "Lo que se repite en tres industrias",
    "coinciden_titulo_en": "What repeats across three industries",
    "coinciden_intro_es": "En industrias distintas, los tres estudios describen las mismas cinco etapas: las empresas dan acceso a la IA; sin embargo, no cambian los puestos ni explican qué cambia en cada rol, mientras que los equipos responden con temor y la usan solo cuando se les exige.",
    "coinciden_intro_en": "In different industries, the three studies describe the same five stages: companies give access to AI, but do not change jobs or explain what changes in each role; teams respond with fear and use it only when required.",
    "cadena": [
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "dato": "30% → 60%",
        "titulo_es": "El acceso se duplica",
        "titulo_en": "Access doubles",
        "texto_es": "En un año, la proporción de colaboradores de consumo masivo con acceso a herramientas de IA aprobadas pasó de menos de 30% a cerca de 60%.",
        "texto_en": "In one year, the share of consumer goods employees with access to approved AI tools rose from under 30% to about 60%."
      },
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "dato": "82%",
        "titulo_es": "El trabajo sigue igual",
        "titulo_en": "Work stays the same",
        "texto_es": "de las empresas de consumo masivo no ha rediseñado sus puestos en torno a la IA. Su respuesta más frecuente es capacitar (54%).",
        "texto_en": "of consumer goods companies have not redesigned their jobs around AI. Their most common response is training (54%)."
      },
      {
        "id": "h-2026-10-bain-life-sciences",
        "dato": "7%",
        "titulo_es": "La explicación es la excepción",
        "titulo_en": "Explanation is the exception",
        "texto_es": "de las empresas farmacéuticas y de salud que recién exploran la IA explica a sus equipos cómo cambiarán sus roles.",
        "texto_en": "of pharmaceutical and health companies just exploring AI explain to their teams how their roles will change."
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "dato": "44%",
        "titulo_es": "Aparece el temor",
        "titulo_en": "Fear appears",
        "texto_es": "de los ejecutivos de servicios financieros observa que sus colaboradores temen perder el empleo o que la IA cambie su rol.",
        "texto_en": "of financial services executives see their employees fear losing their jobs or having AI change their roles."
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "dato": "43%",
        "titulo_es": "El uso se vuelve obligación",
        "titulo_en": "Use becomes obligation",
        "texto_es": "de esos mismos ejecutivos observa que sus equipos usan la IA solo cuando se les exige.",
        "texto_en": "of those same executives see their teams use AI only when required."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "Solo alrededor de 2 de cada 10 empresas convirtieron la IA en decisiones sobre el trabajo",
        "titulo_en": "Only about 2 in 10 companies have turned AI into decisions about work",
        "lados": [
          {
            "id": "h-2026-10-bain-life-sciences",
            "industria": "life_sciences",
            "dato_es": "20%",
            "dato_en": "20%",
            "texto_es": "de las empresas de salud y farmacéutica que ya usan la IA en toda su operación convirtió su visión sobre el trabajo en decisiones concretas para la organización",
            "texto_en": "of health and pharmaceutical companies already using AI across their operations have turned their vision of work into concrete decisions for the organization",
            "v": 20,
            "etiqueta_es": "Salud y farmacéutica",
            "etiqueta_en": "Health and pharmaceuticals"
          },
          {
            "id": "h-2026-10-pwc-fs-ia",
            "industria": "servicios_financieros",
            "dato_es": "2 de cada 10",
            "dato_en": "2 in 10",
            "texto_es": "firmas de servicios financieros calcularon cuánto personal podrían reducir con la IA y, además, analizaron cómo reorganizar sus procesos (la mitad del 42% que hizo ese cálculo)",
            "texto_en": "financial services firms have estimated how much staff they could cut with AI and have also analyzed how to reorganize their processes (half of the 42% that made that estimate)",
            "v": 21,
            "etiqueta_es": "Servicios financieros",
            "etiqueta_en": "Financial services"
          }
        ],
        "lectura_es": "En el estudio de Bain, solo 20% de las empresas de salud y farmacéutica que ya usan la IA en toda su operación convirtió su visión sobre el trabajo en decisiones concretas. En el de PwC, 42% de las firmas de servicios financieros calculó cuánto personal podría reducir con la IA, pero solo la mitad de ellas analizó cómo reorganizar sus procesos. En el de Deloitte, 82% de las empresas de consumo masivo no rediseñó sus puestos; es decir, solo 18% lo hizo.\n\nSi bien las tres industrias avanzan a ritmos distintos, en todas la proporción de empresas que tradujo la IA en decisiones sobre el trabajo está entre 18% y 21%. PwC muestra dónde se detiene el proceso: las firmas calculan cuánto personal podrían reducir antes de definir cómo se trabajará. Mientras esa decisión no se tome, ningún líder puede explicar a su equipo qué cambia en su puesto.",
        "lectura_en": "In Bain's study, only 20% of health and pharmaceutical companies already using AI across their operations have turned their vision of work into concrete decisions. In PwC's, 42% of financial services firms have estimated how much staff they could cut with AI, but only half of them have analyzed how to reorganize their processes. In Deloitte's, 82% of consumer goods companies have not redesigned their jobs; that is, only 18% have.\n\nWhile the three industries are moving at different speeds, in all of them the share of companies that have turned AI into decisions about work is between 18% and 21%. PwC shows where the process stalls: firms estimate how much staff they could cut before defining how work will be done. Until that decision is made, no leader can explain to their team what changes in their job.",
        "nota_es": "La cifra de Bain corresponde solo a las empresas que ya usan la IA en toda su operación; las de PwC y Deloitte, al total de empresas encuestadas. Que incluso las más avanzadas se ubiquen en ese nivel refuerza la coincidencia.",
        "nota_en": "Bain's figure refers only to companies already using AI across their operations; PwC's and Deloitte's, to all companies surveyed. That even the most advanced sit at that level strengthens the agreement.",
        "tarjeta_es": "Solo alrededor de 2 de cada 10 empresas convirtieron la IA en decisiones sobre el trabajo",
        "tarjeta_en": "Only about 2 in 10 companies have turned AI into decisions about work",
        "resumen_es": "La proporción es similar en las tres industrias, entre 18% y 21%, incluso entre las empresas más avanzadas.",
        "resumen_en": "The share is similar in all three industries, between 18% and 21%, even among the most advanced companies.",
        "eje_es": "Empresas que ya convirtieron la IA en decisiones sobre el trabajo",
        "eje_en": "Companies that have already turned AI into decisions about work",
        "sub_es": "En servicios financieros, las firmas calculan cuánto personal podrían reducir antes de definir cómo cambia cada puesto.",
        "sub_en": "In financial services, firms estimate how much staff they could cut before defining how each job changes."
      }
    ],
    "difieren_intro_es": "Donde los estudios llegan a conclusiones distintas sobre una misma pregunta.",
    "difieren_intro_en": "Where the studies reach different conclusions on the same question.",
    "difieren": [
      {
        "titulo_es": "El uso de la IA por obligación es minoritario en consumo masivo y frecuente en servicios financieros",
        "titulo_en": "Using AI only out of obligation is rare in consumer goods and common in financial services",
        "lados": [
          {
            "id": "h-2026-10-deloitte-consumo-ia",
            "industria": "consumo_masivo",
            "dato_es": "19%",
            "dato_en": "19%",
            "texto_es": "de los colaboradores no técnicos de consumo masivo usa la IA solo cuando se le exige, según sus líderes; otro 69% está entusiasmado o abierto a explorarla",
            "texto_en": "of non-technical consumer goods employees use AI only when required, according to their leaders; another 69% are enthusiastic or open to exploring it",
            "v": 19,
            "etiqueta_es": "Consumo masivo",
            "etiqueta_en": "Consumer goods"
          },
          {
            "id": "h-2026-10-pwc-fs-cambio",
            "industria": "servicios_financieros",
            "dato_es": "43%",
            "dato_en": "43%",
            "texto_es": "de los ejecutivos de servicios financieros observa que sus equipos usan la IA solo cuando se les exige",
            "texto_en": "of financial services executives see their teams use AI only when required",
            "v": 43,
            "etiqueta_es": "Servicios financieros",
            "etiqueta_en": "Financial services"
          }
        ],
        "lectura_es": "En el estudio de Deloitte, los líderes de consumo masivo describen equipos mayoritariamente dispuestos: solo 19% de los colaboradores no técnicos usa la IA únicamente cuando se le exige, y 69% está entusiasmado o abierto a explorarla. En el de PwC, 43% de los ejecutivos de servicios financieros observa ese uso por obligación en sus equipos, y 44% percibe que sus colaboradores temen perder su empleo o que la IA cambie su rol.\n\nLa diferencia coincide con el contexto de cada sector: en servicios financieros, casi 8 de cada 10 ejecutivos esperan reducir su personal al menos 20% en cinco años. Los datos no prueban que una cosa cause la otra, pero sugieren que, donde se anticipan recortes sin explicar qué trabajo permanece, los equipos usan la IA solo cuando se les exige.",
        "lectura_en": "In Deloitte's study, consumer goods leaders describe mostly willing teams: only 19% of non-technical employees use AI only when required, and 69% are enthusiastic or open to exploring it. In PwC's, 43% of financial services executives see that use out of obligation in their teams, and 44% perceive that their employees fear losing their jobs or having their role changed by AI.\n\nThe difference matches each sector's context: in financial services, nearly 8 in 10 executives expect to reduce their staff by at least 20% within five years. The data do not prove that one causes the other, but they suggest that where cuts are expected without explaining which work remains, teams use AI only when required.",
        "nota_es": "Las cifras no se miden de la misma forma: Deloitte estima la proporción de colaboradores; PwC, la proporción de ejecutivos que observa esa conducta en sus equipos. La comparación indica una diferencia de clima entre sectores, no una proporción exacta.",
        "nota_en": "The figures are not measured the same way: Deloitte estimates the share of employees; PwC, the share of executives who see that behavior in their teams. The comparison points to a difference in climate between sectors, not an exact proportion.",
        "tarjeta_es": "El uso de la IA por obligación es minoritario en consumo masivo y frecuente en servicios financieros",
        "tarjeta_en": "Using AI only out of obligation is rare in consumer goods and common in financial services",
        "resumen_es": "Según sus líderes, 19% de los colaboradores de consumo masivo usa la IA solo cuando se le exige, mientras que en servicios financieros 43% de los ejecutivos observa esa conducta en sus equipos.",
        "resumen_en": "According to their leaders, 19% of consumer goods employees use AI only when required, while in financial services 43% of executives see that behavior in their teams.",
        "sub_es": "El uso por obligación es mayor en el sector que ya proyecta recortes de personal.",
        "sub_en": "Use out of obligation is higher in the sector that already expects staff cuts.",
        "eje_es": "Uso de la IA solo cuando se exige",
        "eje_en": "Using AI only when required"
      }
    ],
    "dicen": [
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "postura_es": "Se entrega la herramienta, pero no se rediseña el trabajo.",
        "postura_en": "The tool is delivered, but work is not redesigned.",
        "dato_es": "82%",
        "dato_en": "82%",
        "frase_es": "de las empresas de consumo masivo no ha rediseñado sus puestos en torno a la IA, aunque en un año duplicó el acceso de sus colaboradores.",
        "frase_en": "of consumer goods companies have not redesigned their jobs around AI, even though they doubled employee access in one year."
      },
      {
        "id": "h-2026-10-bain-life-sciences",
        "postura_es": "Explicar cómo cambian los roles permite pasar de las pruebas a toda la operación.",
        "postura_en": "Explaining how roles change allows companies to move from pilots to their entire operation.",
        "dato_es": "80% vs. 7%",
        "dato_en": "80% vs. 7%",
        "frase_es": "80% de las empresas que usan la IA en toda su operación explica cómo cambiarán los roles; entre las que siguen en fase de prueba, 7%.",
        "frase_en": "80% of companies using AI across their operations explain how roles will change; among those still in the testing phase, 7%."
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "postura_es": "Sin claridad sobre cada rol, la IA genera temor y se usa por obligación.",
        "postura_en": "Without clarity on each role, AI creates fear and is used out of obligation.",
        "dato_es": "44%",
        "dato_en": "44%",
        "frase_es": "de los ejecutivos de servicios financieros en EE.UU. observa que sus colaboradores temen perder el empleo o que la IA cambie su rol.",
        "frase_en": "of US financial services executives see their employees fear losing their jobs or having AI change their roles."
      }
    ],
    "alcance_titulo_es": "Los tres estudios encuestan a ejecutivos, no a colaboradores.",
    "alcance_titulo_en": "All three studies survey executives, not employees.",
    "alcance_es": "Deloitte encuestó a 963 líderes de empresas de consumo masivo; Bain, a 133 ejecutivos del sector farmacéutico y de salud; PwC, a 1,004 ejecutivos de servicios financieros de EE.UU. Por eso, lo que estos estudios dicen sobre la disposición, el temor o el uso de los equipos es la percepción de sus líderes, no la voz de los propios colaboradores. Esa voz es la pieza pendiente para completar este cruce.",
    "alcance_en": "Deloitte surveyed 963 leaders at consumer goods companies; Bain, 133 executives in pharmaceuticals and health; PwC, 1,004 US financial services executives. As a result, what these studies say about teams' willingness, fear or use is their leaders' perception, not the voice of employees themselves. That voice is the missing piece to complete this analysis.",
    "mirada_es": null,
    "mirada_en": null,
    "preguntas_es": [
      "¿Qué sabe hoy cada equipo sobre cómo cambiará su trabajo con la IA, más allá del acceso a la herramienta?",
      "¿Qué puestos se han redefinido antes de comunicar la estrategia de IA?",
      "¿Qué se comunica a los equipos cuando la organización ya proyecta una reducción de personal?",
      "¿Cómo se mide la experiencia de los colaboradores con la IA, más allá de la percepción de sus líderes?"
    ],
    "preguntas_en": [
      "What does each team know today about how its work will change with AI, beyond access to the tool?",
      "Which jobs have been redefined before the AI strategy is communicated?",
      "What is communicated to teams when the organization already projects a workforce reduction?",
      "How is employees' experience with AI measured, beyond their leaders' perception?"
    ],
    "lectura_min": 4,
    "patron_titulo_es": "Cinco pasos, tres industrias",
    "patron_titulo_en": "Five steps, three industries",
    "patron_intro_es": "Las empresas dan acceso a la IA, pero no cambian los puestos ni explican qué cambia en cada rol. Selecciona cada paso para ver el dato.",
    "patron_intro_en": "Companies give access to AI, but do not change jobs or explain what changes in each role. Select each step to see the data.",
    "alcance_corto_es": "Los tres encuestan a ejecutivos, no a colaboradores: Deloitte, a 963 líderes; Bain, a 133 ejecutivos; PwC, a 1,004 ejecutivos. Lo que dicen sobre los equipos es la percepción de sus líderes.",
    "alcance_corto_en": "All three survey executives, not employees: Deloitte, 963 leaders; Bain, 133 executives; PwC, 1,004 executives. What they say about teams is their leaders' perception.",
    "muestras": {
      "Deloitte AI Institute": {
        "es": "963 líderes",
        "en": "963 leaders"
      },
      "Bain & Company": {
        "es": "133 ejecutivos",
        "en": "133 executives"
      },
      "PwC": {
        "es": "1,004 ejecutivos",
        "en": "1,004 executives"
      }
    }
  },
  {
    "id": "i-2026-11-ia-direccion-equipos",
    "numero": "02",
    "publicado": "2026-11-16",
    "tema": "ia_personas",
    "industrias": [],
    "estudios": [
      "h-2026-11-deloitte-directorios-ia",
      "h-2026-11-accenture-pulso-cambio",
      "h-2026-11-bcg-ia-trabajo",
      "h-2026-11-mckinsey-estado-ia"
    ],
    "titulo_es": "La IA aumenta la carga de trabajo de los equipos.",
    "titulo2_es": "Ese efecto casi no llega a los directorios.",
    "titulo_en": "AI is increasing teams' workload.",
    "titulo2_en": "That effect barely reaches boards.",
    "corto_es": "La carga de trabajo",
    "corto_en": "Workload",
    "resumen_es": "Deloitte, Accenture, BCG y McKinsey analizan la IA desde el directorio, la alta dirección y los equipos. En conjunto, muestran que la IA eleva el ritmo y la carga de trabajo de los equipos, mientras que los directorios se concentran en la productividad.",
    "resumen_en": "Deloitte, Accenture, BCG and McKinsey analyze AI from the perspective of boards, senior leaders and teams. Together, they show that AI raises teams' pace and workload, while boards focus on productivity.",
    "bajada_es": "Cuatro estudios recientes analizan la IA desde distintos roles de la organización y coinciden en que pocas empresas definieron cómo cambia el trabajo de las personas. Si bien los equipos reportan más ritmo, más revisión y más carga mental, el bienestar ocupa un lugar menor en la agenda de los directorios.",
    "bajada_en": "Four recent studies analyze AI from different roles in the organization and agree that few companies have defined how people's work changes. While teams report a faster pace, more review and a heavier mental load, well-being holds a minor place on board agendas.",
    "tesis_es": "Deloitte, Accenture, BCG y McKinsey analizan la IA desde el directorio, la alta dirección y los equipos. **Deloitte y Accenture coinciden en que menos de 2 de cada 10 organizaciones definieron cómo cambia el trabajo con la tecnología**, mientras que Accenture y McKinsey discrepan sobre el futuro del empleo.",
    "tesis_en": "Deloitte, Accenture, BCG and McKinsey analyze AI from the perspective of boards, senior leadership and teams. **Deloitte and Accenture agree that fewer than 2 in 10 organizations have defined how work changes with technology**, while Accenture and McKinsey disagree about the future of jobs.",
    "universo_es": "4 estudios independientes, cada uno con su propia muestra: uno a directores y altos ejecutivos (806) y tres a líderes y empleados de todos los niveles (más de 19,000 en conjunto)",
    "universo_en": "4 independent studies, each with its own sample: one of directors and senior executives (806) and three of leaders and employees at all levels (more than 19,000 combined)",
    "portada": [
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "industria": null,
        "postura_es": "La IA eleva el ritmo de trabajo de los equipos",
        "postura_en": "AI is raising teams’ pace of work",
        "dato_es": "50%",
        "dato_en": "50%",
        "texto_es": "de los empleados dice que la IA elevó el ritmo esperado de su trabajo y la necesidad de revisar lo que produce",
        "texto_en": "of employees say AI has raised the expected pace of their work and the need to review what it produces"
      },
      {
        "id": "h-2026-11-deloitte-directorios-ia",
        "industria": null,
        "postura_es": "el bienestar casi no llega a los directorios",
        "postura_en": "well-being barely reaches boards",
        "dato_es": "9%",
        "dato_en": "9%",
        "texto_es": "de los directores y altos ejecutivos señala el bienestar de los empleados como el tema más frecuente cuando su directorio trata el efecto de la tecnología en las personas",
        "texto_en": "of directors and senior executives name employee well-being as the most frequent topic when their board discusses technology's effect on people"
      }
    ],
    "portada_conector_es": "pero",
    "portada_conector_en": "but",
    "coinciden_titulo_es": "Lo que se repite en cuatro estudios",
    "coinciden_titulo_en": "What repeats across four studies",
    "coinciden_intro_es": "Desde el directorio, la alta dirección y los equipos, los cuatro estudios describen las mismas cinco etapas: pocas empresas tienen una estrategia sobre el efecto de la IA en las personas, los procesos no se rediseñan, la comunicación sobre la IA no llega con claridad, el ritmo de trabajo sube y la carga se siente más en los equipos.",
    "coinciden_intro_en": "From the board, senior leaders and teams, the four studies describe the same five stages: few companies have a strategy for AI's effect on people, processes are not redesigned, communication about AI does not land clearly, the pace of work rises and the load is felt more by teams.",
    "cadena": [
      {
        "id": "h-2026-11-deloitte-directorios-ia",
        "dato": "16%",
        "titulo_es": "Falta la estrategia sobre las personas",
        "titulo_en": "The people strategy is missing",
        "texto_es": "de los miembros de directorios y altos ejecutivos dice que su organización ya tiene una estrategia establecida sobre el impacto de la tecnología en su fuerza laboral.",
        "texto_en": "of board members and senior executives say their organization already has an established strategy for technology's impact on its workforce."
      },
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "dato": "15%",
        "titulo_es": "El trabajo no se rediseña",
        "titulo_en": "Work is not redesigned",
        "texto_es": "de los líderes de alta dirección rediseña sus procesos de punta a punta mientras la IA se extiende en la organización.",
        "texto_en": "of C-suite leaders are redesigning their processes end to end as AI spreads across the organization."
      },
      {
        "id": "h-2026-11-bcg-ia-trabajo",
        "dato": "33%",
        "titulo_es": "La comunicación no llega con claridad",
        "titulo_en": "Communication does not land clearly",
        "texto_es": "de los encuestados indica que sus líderes comunican con claridad sobre la IA. Entre los empleados de primera línea, solo 36% se siente preparado para usarla.",
        "texto_en": "of respondents say their leaders communicate clearly about AI. Among frontline employees, only 36% feel prepared to use it."
      },
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "dato": "50%",
        "titulo_es": "Sube el ritmo de trabajo",
        "titulo_en": "The pace of work rises",
        "texto_es": "de los empleados señala que la IA elevó la velocidad esperada del trabajo y la necesidad de revisar lo que produce.",
        "texto_en": "of employees say AI has raised the expected pace of work and the need to review what it produces."
      },
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "dato": "47% vs. 31%",
        "titulo_es": "La carga se siente más en los equipos",
        "titulo_en": "The load is felt more by teams",
        "texto_es": "47% de los mandos medios y colaboradores que usan IA reporta al menos un efecto negativo, frente a 31% de los ejecutivos y gerentes sénior.",
        "texto_en": "47% of middle managers and individual contributors who use AI report at least one negative effect, compared with 31% of executives and senior managers."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "Menos de 2 de cada 10 organizaciones definieron cómo cambia el trabajo con la tecnología",
        "titulo_en": "Fewer than 2 in 10 organizations have defined how work changes with technology",
        "lados": [
          {
            "id": "h-2026-11-deloitte-directorios-ia",
            "industria": null,
            "etiqueta_es": "Directorios",
            "etiqueta_en": "Boards",
            "dato_es": "16%",
            "dato_en": "16%",
            "texto_es": "de los directores y altos ejecutivos dice que su organización tiene una estrategia definida sobre el efecto de la tecnología en sus empleados",
            "texto_en": "of directors and senior executives say their organization has a defined strategy on technology's effect on its employees",
            "v": 16
          },
          {
            "id": "h-2026-11-accenture-pulso-cambio",
            "industria": null,
            "etiqueta_es": "Alta dirección",
            "etiqueta_en": "Senior leadership",
            "dato_es": "15%",
            "dato_en": "15%",
            "texto_es": "de los líderes de alta dirección rediseña sus procesos de punta a punta",
            "texto_en": "of senior leaders are redesigning their processes end to end",
            "v": 15
          }
        ],
        "lectura_es": "En el estudio de Deloitte, solo 16% de los directores y altos ejecutivos dice que su organización tiene una estrategia definida sobre el efecto de la tecnología en sus empleados; otro 51% todavía la está desarrollando. En el de Accenture, 15% de los líderes de alta dirección rediseña sus procesos de punta a punta.\n\nDesde dos niveles distintos, los estudios llegan a una proporción casi idéntica: en más de 8 de cada 10 casos, todavía no se decidió cómo cambia el trabajo. Mientras tanto, el cambio ya ocurre en los equipos: según Accenture, la mitad de los empleados trabaja a un ritmo mayor y revisa más lo que produce la IA, y según BCG, 41% de quienes la usan con frecuencia reporta una mayor carga mental.",
        "lectura_en": "In Deloitte's study, only 16% of directors and senior executives say their organization has a defined strategy on technology's effect on its employees; another 51% are still developing one. In Accenture's, 15% of senior leaders are redesigning their processes end to end.\n\nFrom two different levels, the studies arrive at an almost identical share: in more than 8 in 10 cases, it has not yet been decided how work changes. Meanwhile, the change is already happening in teams: according to Accenture, half of employees work at a faster pace and review more of what AI produces, and according to BCG, 41% of frequent users report a heavier mental load.",
        "nota_es": "Deloitte mide la proporción de organizaciones con una estrategia definida, según sus directores y altos ejecutivos; Accenture, la proporción de líderes de alta dirección que rediseña procesos. Son medidas distintas de un mismo avance pendiente, no la misma cifra.",
        "nota_en": "Deloitte measures the share of organizations with a defined strategy, according to their directors and senior executives; Accenture, the share of senior leaders redesigning processes. They are different measures of the same pending progress, not the same figure.",
        "tarjeta_es": "Menos de 2 de cada 10 organizaciones definieron cómo cambia el trabajo con la tecnología",
        "tarjeta_en": "Fewer than 2 in 10 organizations have defined how work changes with technology",
        "resumen_es": "Los directores y los líderes de alta dirección dan cifras casi idénticas: 16% y 15%.",
        "resumen_en": "Directors and senior leaders give almost identical figures: 16% and 15%.",
        "eje_es": "Avance en la definición de cómo cambia el trabajo",
        "eje_en": "Progress in defining how work changes",
        "sub_es": "Desde el directorio y desde la alta dirección, el rediseño del trabajo sigue pendiente.",
        "sub_en": "From the board and from senior leadership, the redesign of work is still pending."
      }
    ],
    "difieren_intro_es": "Donde los estudios llegan a conclusiones distintas sobre una misma pregunta.",
    "difieren_intro_en": "Where the studies reach different conclusions on the same question.",
    "difieren": [
      {
        "titulo_es": "Los empleados se sienten más seguros en su puesto, pero más personas esperan recortes en su organización",
        "titulo_en": "Employees feel more secure in their jobs, but more people expect cuts in their organization",
        "lados": [
          {
            "id": "h-2026-11-accenture-pulso-cambio",
            "industria": null,
            "etiqueta_es": "Empleados",
            "etiqueta_en": "Employees",
            "dato_es": "66%",
            "dato_en": "66%",
            "texto_es": "de los empleados se siente seguro en su puesto, frente a 48% en la medición de enero",
            "texto_en": "of employees feel secure in their jobs, up from 48% in the January survey",
            "v": 66
          },
          {
            "id": "h-2026-11-mckinsey-estado-ia",
            "industria": null,
            "etiqueta_es": "Personas de todos los niveles",
            "etiqueta_en": "People at all levels",
            "dato_es": "39%",
            "dato_en": "39%",
            "texto_es": "de las personas encuestadas espera que la IA reduzca el número de empleados de su organización el próximo año, frente a 32% en la edición anterior",
            "texto_en": "of respondents expect AI to reduce their organization's number of employees next year, up from 32% in the previous edition",
            "v": 39
          }
        ],
        "lectura_es": "En el estudio de Accenture, 66% de los empleados se siente seguro en su puesto, 18 puntos más que en la medición de enero. En el de McKinsey, la proporción de personas que espera que la IA reduzca el número de empleados de su organización el próximo año sube de 32% a 39%.\n\nSi bien los empleados se sienten hoy más seguros, la expectativa de recortes crece en el mismo período. Una cifra mide el presente y la otra, el próximo año, por lo que ambas pueden ser ciertas a la vez. Sin embargo, si los recortes previstos se concretan, esa seguridad puede no sostenerse.",
        "lectura_en": "In Accenture's study, 66% of employees feel secure in their jobs, 18 points more than in the January survey. In McKinsey's, the share of people who expect AI to reduce their organization's number of employees next year rises from 32% to 39%.\n\nWhile employees feel more secure today, expectations of cuts are growing over the same period. One figure measures the present and the other next year, so both can be true at once. However, if the expected cuts materialize, that security may not last.",
        "nota_es": "Accenture pregunta a empleados por su seguridad en el puesto hoy; McKinsey pregunta a personas de todos los niveles qué esperan para su organización el próximo año. Ambas miden la percepción sobre el empleo frente a la IA, una en el presente y otra como expectativa.",
        "nota_en": "Accenture asks employees about their job security today; McKinsey asks people at all levels what they expect for their organization next year. Both measure perceptions of jobs in the face of AI, one in the present and the other as an expectation.",
        "tarjeta_es": "Los empleados se sienten más seguros en su puesto, pero más personas esperan recortes en su organización",
        "tarjeta_en": "Employees feel more secure in their jobs, but more people expect cuts in their organization",
        "resumen_es": "Accenture registra 18 puntos más de seguridad laboral que en enero, mientras que McKinsey registra 7 puntos más de expectativa de recortes.",
        "resumen_en": "Accenture records 18 more points of job security than in January, while McKinsey records 7 more points of expected cuts.",
        "sub_es": "La tranquilidad que hoy sienten los empleados puede no resistir los recortes que ya se anticipan.",
        "sub_en": "The reassurance employees feel today may not withstand the cuts already expected.",
        "eje_es": "Percepción sobre el empleo frente a la IA",
        "eje_en": "Perceptions of jobs in the face of AI"
      }
    ],
    "dicen": [
      {
        "id": "h-2026-11-deloitte-directorios-ia",
        "postura_es": "La IA entra al directorio antes que su efecto en las personas.",
        "postura_en": "AI reaches the board before its effect on people does.",
        "dato_es": "16%",
        "dato_en": "16%",
        "frase_es": "de las organizaciones tiene una estrategia establecida sobre el impacto de la tecnología en su fuerza laboral, según sus directores y altos ejecutivos.",
        "frase_en": "of organizations have an established strategy for technology's impact on their workforce, according to their directors and senior executives."
      },
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "postura_es": "La IA se extiende sin rediseñar los procesos.",
        "postura_en": "AI spreads without processes being redesigned.",
        "dato_es": "15%",
        "dato_en": "15%",
        "frase_es": "de los líderes de alta dirección rediseña sus procesos de punta a punta, mientras 50% de los empleados percibe más velocidad y más revisión del trabajo.",
        "frase_en": "of C-suite leaders are redesigning their processes end to end, while 50% of employees perceive a faster pace and more review of work."
      },
      {
        "id": "h-2026-11-bcg-ia-trabajo",
        "postura_es": "Los equipos usan la IA sin formación suficiente ni comunicación clara.",
        "postura_en": "Teams use AI without enough training or clear communication.",
        "dato_es": "33%",
        "dato_en": "33%",
        "frase_es": "de los encuestados indica que sus líderes comunican con claridad sobre la IA; 74% de los empleados de primera línea ya la usa con regularidad.",
        "frase_en": "of respondents say their leaders communicate clearly about AI; 74% of frontline employees already use it regularly."
      },
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "postura_es": "Los efectos negativos de la IA se sienten más en los equipos que en la alta dirección.",
        "postura_en": "AI's negative effects are felt more by teams than by senior leaders.",
        "dato_es": "47% vs. 31%",
        "dato_en": "47% vs. 31%",
        "frase_es": "47% de los mandos medios y colaboradores que usan IA reporta un efecto negativo, frente a 31% de los ejecutivos y gerentes sénior.",
        "frase_en": "47% of middle managers and individual contributors who use AI report a negative effect, compared with 31% of executives and senior managers."
      }
    ],
    "alcance_titulo_es": "Un estudio mira desde el directorio; tres suman la voz de los equipos.",
    "alcance_titulo_en": "One study looks from the board; three add the voice of teams.",
    "alcance_es": "Deloitte encuestó a 806 miembros de directorios y altos ejecutivos de 53 países; Accenture, a 3,000 líderes de alta dirección y 3,000 empleados de 21 países; BCG, a 11,749 líderes, mandos medios y empleados de primera línea de 14 mercados; McKinsey, a 1,719 personas de todos los niveles de 97 países. A diferencia del cruce anterior, aquí la experiencia de los equipos se mide con su propia voz y no solo con la percepción de sus líderes.",
    "alcance_en": "Deloitte surveyed 806 board members and senior executives in 53 countries; Accenture, 3,000 C-suite leaders and 3,000 employees in 21 countries; BCG, 11,749 leaders, middle managers and frontline employees in 14 markets; McKinsey, 1,719 people at all levels in 97 countries. Unlike the previous cross-read, the experience of teams here is measured in their own voice, not only through their leaders' perception.",
    "mirada_es": null,
    "mirada_en": null,
    "preguntas_es": [
      "¿Qué información recibe el directorio sobre la experiencia de los equipos que ya usan IA, más allá de la productividad?",
      "¿Qué decisiones se tomaron sobre cómo usar el tiempo que la IA libera en cada equipo?",
      "¿Qué saben los mandos medios sobre cómo cambia su rol y el de sus equipos?",
      "¿Cómo se miden la carga de trabajo y el bienestar de quienes usan la IA todos los días?"
    ],
    "preguntas_en": [
      "What information does the board receive about the experience of teams already using AI, beyond productivity?",
      "What decisions have been made about how to use the time AI frees up in each team?",
      "What do middle managers know about how their role and their teams' roles are changing?",
      "How are the workload and well-being of those who use AI every day measured?"
    ],
    "lectura_min": 4,
    "patron_titulo_es": "Cinco pasos, cuatro estudios",
    "patron_titulo_en": "Five steps, four studies",
    "patron_intro_es": "Pocas empresas definieron cómo cambia el trabajo con la IA; el ritmo sube y la carga se siente más en los equipos que en la alta dirección. Cada paso muestra su dato.",
    "patron_intro_en": "Few companies have defined how work changes with AI; the pace rises and the load is felt more by teams than by senior leaders. Each step shows its data point.",
    "alcance_corto_es": "Un estudio encuesta a directores y altos ejecutivos (Deloitte, 806) y tres incluyen a empleados: Accenture, 3,000 líderes y 3,000 empleados; BCG, 11,749 personas de todos los niveles; McKinsey, 1,719 personas de todos los niveles.",
    "alcance_corto_en": "One study surveys directors and senior executives (Deloitte, 806) and three include employees: Accenture, 3,000 leaders and 3,000 employees; BCG, 11,749 people at all levels; McKinsey, 1,719 people at all levels.",
    "muestras": {
      "Deloitte": {
        "es": "806 directores y altos ejecutivos",
        "en": "806 directors and senior executives"
      },
      "Accenture": {
        "es": "3,000 líderes y 3,000 empleados",
        "en": "3,000 leaders and 3,000 employees"
      },
      "BCG": {
        "es": "11,749 personas",
        "en": "11,749 people"
      },
      "McKinsey & Company": {
        "es": "1,719 personas",
        "en": "1,719 people"
      }
    }
  },
  {
    "id": "i-2026-11-liderazgo-confianza-coherencia",
    "numero": "03",
    "publicado": "2026-11-16",
    "tema": "liderazgo_cultura",
    "industrias": [],
    "estudios": [
      "h-2026-10-edelman-confianza",
      "h-2026-11-gallup-compromiso-eeuu",
      "h-2026-11-pwc-confianza-ceo",
      "h-2026-11-gptw-latam",
      "h-2026-11-kornferry-workforce"
    ],
    "titulo_es": "Los CEO consideran que sus empresas cuidan a sus colaboradores.",
    "titulo2_es": "La mayoría de los empleados no lo percibe así.",
    "titulo_en": "CEOs believe their companies care for their people.",
    "titulo2_en": "Most employees do not see it that way.",
    "corto_es": "El cuidado de los colaboradores",
    "corto_en": "Caring for employees",
    "resumen_es": "Edelman, Gallup, PwC, Great Place to Work y Korn Ferry miden la confianza de los empleados en sus líderes. En conjunto, muestran una distancia entre lo que los CEO creen transmitir y lo que los empleados perciben. Sin embargo, la confianza se sostiene donde los líderes actúan de acuerdo con lo que dicen.",
    "resumen_en": "Edelman, Gallup, PwC, Great Place to Work and Korn Ferry measure employees' trust in their leaders. Together, they show a gap between what CEOs believe they convey and what employees perceive. However, trust holds where leaders act in line with what they say.",
    "bajada_es": "Cinco estudios recientes miden la relación entre los empleados y sus líderes. Coinciden en que cerca de la mitad confía en lo que comunican sus líderes, mientras que las expectativas sobre el trabajo son cada vez menos claras. Sin embargo, las empresas donde los líderes actúan de acuerdo con lo que dicen conservan la confianza y el compromiso de sus equipos.",
    "bajada_en": "Five recent studies measure the relationship between employees and their leaders. They agree that about half trust what their leaders communicate, while expectations about work are becoming less clear. However, companies where leaders act in line with what they say keep the trust and commitment of their teams.",
    "tesis_es": "Cinco estudios (Edelman, Gallup, PwC, Great Place to Work y Korn Ferry) miden la relación entre los empleados y sus líderes, y dos de ellos coinciden en que **la credibilidad de los líderes no está ganada**. En las empresas típicas de Latinoamérica, solo la mitad de los empleados ve coherencia entre lo que dicen y hacen sus líderes, mientras que, entre quienes vivieron mal un cambio, la confianza en el CEO es de 49%.",
    "tesis_en": "Five studies (Edelman, Gallup, PwC, Great Place to Work and Korn Ferry) measure the relationship between employees and their leaders, and two of them agree that **leaders' credibility is not a given**. In typical companies in Latin America, only half of employees see consistency between what their leaders say and do, while among those who experienced a change badly, trust in the CEO is 49%.",
    "universo_es": "5 estudios independientes, cada uno con su propia muestra: de 128 empleados (PwC) a más de 2.4 millones (Great Place to Work)",
    "universo_en": "5 independent studies, each with its own sample: from 128 employees (PwC) to more than 2.4 million (Great Place to Work)",
    "portada": [
      {
        "id": "h-2026-11-kornferry-workforce",
        "industria": null,
        "postura_es": "Los CEO creen que su empresa cuida a su gente",
        "postura_en": "CEOs believe their company cares for its people",
        "dato_es": "85%",
        "dato_en": "85%",
        "texto_es": "de los CEO de EE.UU. afirma que su empresa se preocupa por sus colaboradores",
        "texto_en": "of U.S. CEOs say their company cares about its employees"
      },
      {
        "id": "h-2026-11-gallup-compromiso-eeuu",
        "industria": null,
        "postura_es": "la mayoría de los empleados no lo siente así",
        "postura_en": "most employees do not feel that way",
        "dato_es": "37%",
        "dato_en": "37%",
        "texto_es": "de los empleados de EE.UU. siente que su jefe o alguien en el trabajo se preocupa por él como persona",
        "texto_en": "of U.S. employees feel that their manager or someone at work cares about them as a person"
      }
    ],
    "portada_conector_es": "si bien",
    "portada_conector_en": "while",
    "coinciden_titulo_es": "Lo que se repite en cinco estudios",
    "coinciden_titulo_en": "What repeats across five studies",
    "coinciden_intro_es": "Desde distintas muestras de empleados, los cinco estudios describen las mismas cinco etapas: el cambio se vuelve permanente, una mala experiencia reduce la confianza en el CEO, las expectativas se vuelven difusas, la comunicación de resultados no convence del todo, y los CEO y los empleados ven realidades distintas.",
    "coinciden_intro_en": "Across different samples of employees, the five studies describe the same five stages: change becomes constant, a bad experience reduces trust in the CEO, expectations become blurred, communication about results is not fully convincing, and CEOs and employees see different realities.",
    "cadena": [
      {
        "id": "h-2026-10-edelman-confianza",
        "dato": "76%",
        "titulo_es": "El cambio es permanente",
        "titulo_en": "Change is constant",
        "texto_es": "de los colaboradores vivió al menos una transformación importante en los últimos 12 meses, y 42% vivió tres o más.",
        "texto_en": "of employees went through at least one major transformation in the past 12 months, and 42% went through three or more."
      },
      {
        "id": "h-2026-10-edelman-confianza",
        "dato": "82% → 49%",
        "titulo_es": "Un cambio mal vivido cuesta confianza",
        "titulo_en": "A poorly experienced change costs trust",
        "texto_es": "Es la caída de la confianza de los colaboradores en su CEO cuando una transformación se vive de forma negativa.",
        "texto_en": "This is the drop in employees' trust in their CEO when a transformation is experienced negatively."
      },
      {
        "id": "h-2026-11-gallup-compromiso-eeuu",
        "dato": "46%",
        "titulo_es": "Las expectativas se vuelven difusas",
        "titulo_en": "Expectations become blurred",
        "texto_es": "de los empleados en EE.UU. sabe qué se espera de su trabajo, frente a 61% en 2015.",
        "texto_en": "of U.S. employees know what is expected of them at work, compared with 61% in 2015."
      },
      {
        "id": "h-2026-11-pwc-confianza-ceo",
        "dato": "39%",
        "titulo_es": "La comunicación de resultados no convence del todo",
        "titulo_en": "Communication about results is not fully convincing",
        "texto_es": "de los empleados de grandes empresas de EE.UU. confía por completo o casi por completo en lo que su CEO informa sobre los resultados.",
        "texto_en": "of employees at large U.S. companies completely or nearly completely trust what their CEO reports on results."
      },
      {
        "id": "h-2026-11-kornferry-workforce",
        "dato": "85% vs. 46%",
        "titulo_es": "Los CEO y los empleados ven distinto",
        "titulo_en": "CEOs and employees see things differently",
        "texto_es": "En EE.UU., 85% de los CEO afirma que su organización se preocupa por sus colaboradores, frente a 46% de los colaboradores individuales.",
        "texto_en": "In the U.S., 85% of CEOs say their organization cares about its employees, compared with 46% of individual contributors."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "Solo la mitad de los empleados cree en la palabra de sus líderes",
        "titulo_en": "Only half of employees believe their leaders' word",
        "lados": [
          {
            "id": "h-2026-10-edelman-confianza",
            "industria": null,
            "etiqueta_es": "Tras un cambio mal vivido",
            "etiqueta_en": "After a poorly experienced change",
            "dato_es": "49%",
            "dato_en": "49%",
            "texto_es": "de los colaboradores que vivieron una transformación de forma negativa confía en su CEO, frente a 82% entre quienes la vivieron de forma positiva",
            "texto_en": "of employees who experienced a transformation negatively trust their CEO, compared with 82% among those who experienced it positively",
            "v": 49
          },
          {
            "id": "h-2026-11-gptw-latam",
            "industria": null,
            "etiqueta_es": "Empresas típicas de Latinoamérica",
            "etiqueta_en": "Typical companies in Latin America",
            "dato_es": "52%",
            "dato_en": "52%",
            "texto_es": "de los empleados de empresas típicas de Latinoamérica afirma que las acciones de sus líderes coinciden con sus palabras",
            "texto_en": "of employees at typical companies in Latin America say their leaders' actions match their words",
            "v": 52
          }
        ],
        "lectura_es": "En el estudio de Great Place to Work, 52% de los empleados de empresas típicas de Latinoamérica afirma que las acciones de sus líderes coinciden con lo que dicen. En el de Edelman, la confianza en el CEO es de 49% entre los colaboradores que vivieron una transformación de forma negativa, frente a 82% entre quienes la vivieron de forma positiva.\n\nPor caminos distintos, los dos estudios muestran que la credibilidad de los líderes no está ganada: Great Place to Work la sitúa en la mitad de los empleados, mientras que Edelman muestra que baja cuando un cambio se vive mal. Para una empresa en transformación, cada cambio pone en juego esa credibilidad.",
        "lectura_en": "In Great Place to Work's study, 52% of employees at typical companies in Latin America say their leaders' actions match what they say. In Edelman's, trust in the CEO is 49% among employees who experienced a transformation negatively, compared with 82% among those who experienced it positively.\n\nBy different paths, the two studies show that leaders' credibility is not a given: Great Place to Work puts it at half of employees, while Edelman shows that it falls when a change goes badly. For a company in transformation, every change puts that credibility at stake.",
        "nota_es": "Edelman mide cuánto confían en su CEO los colaboradores de 10 países que vivieron una transformación de forma negativa; Great Place to Work, la coherencia que perciben los empleados de empresas típicas de Latinoamérica, con datos de marzo de 2024. Son medidas distintas de la credibilidad de los líderes, no la misma cifra.",
        "nota_en": "Edelman measures how much employees in 10 countries who experienced a transformation negatively trust their CEO; Great Place to Work, the consistency perceived by employees at typical companies in Latin America, with data from March 2024. They are different measures of leaders' credibility, not the same figure.",
        "tarjeta_es": "Solo la mitad de los empleados cree en la palabra de sus líderes",
        "tarjeta_en": "Only half of employees believe their leaders' word",
        "resumen_es": "Entre quienes vivieron mal una transformación, la confianza en el CEO es de 49%, frente a 82% entre quienes la vivieron bien.",
        "resumen_en": "Among those who experienced a transformation badly, trust in the CEO is 49%, compared with 82% among those who experienced it well.",
        "eje_es": "Empleados que confían en la palabra de sus líderes",
        "eje_en": "Employees who trust their leaders' word",
        "sub_es": "La forma en que se vive cada cambio define cuánto se cree en los líderes.",
        "sub_en": "How each change is experienced shapes how much leaders are believed."
      }
    ],
    "difieren_intro_es": "Donde los estudios llegan a conclusiones distintas sobre una misma pregunta.",
    "difieren_intro_en": "Where the studies reach different conclusions on the same question.",
    "difieren": [],
    "dicen": [
      {
        "id": "h-2026-10-edelman-confianza",
        "postura_es": "La forma de ejecutar el cambio define la confianza en el CEO.",
        "postura_en": "The way change is executed defines trust in the CEO.",
        "dato_es": "82% → 49%",
        "dato_en": "82% → 49%",
        "frase_es": "Es la caída de la confianza en el CEO tras una transformación negativa; en el jefe directo, baja de 85% a 60%.",
        "frase_en": "This is the drop in trust in the CEO after a negative transformation; in the direct manager, it falls from 85% to 60%."
      },
      {
        "id": "h-2026-11-gallup-compromiso-eeuu",
        "postura_es": "Sin claridad ni cuidado, el compromiso cae.",
        "postura_en": "Without clarity or care, engagement falls.",
        "dato_es": "29%",
        "dato_en": "29%",
        "frase_es": "de los empleados en EE.UU. está comprometido con su trabajo, el nivel más bajo desde 2011; solo 46% sabe qué se espera de él.",
        "frase_en": "of U.S. employees are engaged, the lowest level since 2011; only 46% know what is expected of them."
      },
      {
        "id": "h-2026-11-pwc-confianza-ceo",
        "postura_es": "La credibilidad del CEO se juega en cómo comunica los resultados.",
        "postura_en": "CEO credibility depends on how results are communicated.",
        "dato_es": "39%",
        "dato_en": "39%",
        "frase_es": "de los empleados de grandes empresas de EE.UU. confía plenamente en lo que su CEO informa sobre los resultados.",
        "frase_en": "of employees at large U.S. companies fully trust what their CEO reports on results."
      },
      {
        "id": "h-2026-11-gptw-latam",
        "postura_es": "La coherencia de los líderes distingue a las culturas de alta confianza.",
        "postura_en": "Leaders' consistency sets high-trust cultures apart.",
        "dato_es": "Casi 90% vs. 52%",
        "dato_en": "Nearly 90% vs. 52%",
        "frase_es": "Es la proporción de empleados que ve coherencia entre lo que dicen y hacen sus líderes, en las mejores empresas de Latinoamérica y en las empresas típicas de la región.",
        "frase_en": "This is the share of employees who see consistency between what their leaders say and do, at the best workplaces in Latin America and at typical companies in the region."
      },
      {
        "id": "h-2026-11-kornferry-workforce",
        "postura_es": "Los CEO y los empleados ven realidades distintas.",
        "postura_en": "CEOs and employees see different realities.",
        "dato_es": "85% vs. 46%",
        "dato_en": "85% vs. 46%",
        "frase_es": "En EE.UU., 85% de los CEO afirma que su organización se preocupa por sus colaboradores, frente a 46% de los colaboradores individuales.",
        "frase_en": "In the U.S., 85% of CEOs say their organization cares about its employees, compared with 46% of individual contributors."
      }
    ],
    "alcance_titulo_es": "Los cinco estudios escuchan a los empleados; Korn Ferry suma la mirada de los CEO.",
    "alcance_titulo_en": "All five studies listen to employees; Korn Ferry adds the view of CEOs.",
    "alcance_es": "Edelman encuestó a 10,018 colaboradores de 10 países; Gallup, a 21,648 adultos de EE.UU.; PwC, a 552 empleados de EE.UU., con resultados de los 128 que trabajan en empresas de 10,000 o más; Great Place to Work, a más de 2.4 millones de empleados de Latinoamérica; Korn Ferry, a más de 16,000 profesionales de todos los roles en 11 mercados. La muestra de PwC es acotada y la comparación de Great Place to Work con las empresas típicas proviene de un estudio de marzo de 2024.",
    "alcance_en": "Edelman surveyed 10,018 employees in 10 countries; Gallup, 21,648 U.S. adults; PwC, 552 U.S. employees, with results from the 128 who work at companies with 10,000 or more; Great Place to Work, more than 2.4 million employees in Latin America; Korn Ferry, more than 16,000 professionals in all roles across 11 markets. PwC's sample is limited, and Great Place to Work's comparison with typical companies comes from a March 2024 study.",
    "mirada_es": null,
    "mirada_en": null,
    "preguntas_es": [
      "¿Cómo se mide la confianza de los equipos después de cada transformación importante?",
      "¿Qué tan claro tiene cada persona lo que se espera de su trabajo en medio de los cambios en curso?",
      "¿Qué distancia existe entre lo que los CEO creen transmitir y lo que los empleados perciben?",
      "¿Qué decisiones recientes de los líderes pueden leerse como coherentes, o no, con lo que comunicaron?"
    ],
    "preguntas_en": [
      "How is teams' trust measured after each major transformation?",
      "How clear is each person about what is expected of their work amid ongoing changes?",
      "What distance exists between what CEOs believe they convey and what employees perceive?",
      "Which recent decisions by leaders could be read as consistent, or not, with what they communicated?"
    ],
    "lectura_min": 4,
    "patron_titulo_es": "Cinco pasos, cinco estudios",
    "patron_titulo_en": "Five steps, five studies",
    "patron_intro_es": "El cambio es permanente y, cuando se vive mal, la confianza en el CEO cae; las expectativas se vuelven difusas, y los CEO y los empleados ven realidades distintas. Cada paso muestra su dato.",
    "patron_intro_en": "Change is constant and, when it is poorly experienced, trust in the CEO falls; expectations become blurred, and CEOs and employees see different realities. Each step shows its data point.",
    "alcance_corto_es": "Los cinco escuchan a los empleados: Edelman, 10,018 en 10 países; Gallup, 21,648 en EE.UU.; PwC, 128 de grandes empresas de EE.UU.; Great Place to Work, más de 2.4 millones en Latinoamérica; Korn Ferry, más de 16,000 profesionales, incluidos CEO.",
    "alcance_corto_en": "All five listen to employees: Edelman, 10,018 in 10 countries; Gallup, 21,648 in the U.S.; PwC, 128 at large U.S. companies; Great Place to Work, more than 2.4 million in Latin America; Korn Ferry, more than 16,000 professionals, including CEOs.",
    "muestras": {
      "Edelman": {
        "es": "10,018 colaboradores",
        "en": "10,018 employees"
      },
      "Gallup": {
        "es": "21,648 adultos",
        "en": "21,648 adults"
      },
      "PwC": {
        "es": "128 empleados (de 552)",
        "en": "128 employees (of 552)"
      },
      "Great Place to Work": {
        "es": "Más de 2.4 millones de empleados",
        "en": "More than 2.4 million employees"
      },
      "Korn Ferry": {
        "es": "Más de 16,000 profesionales",
        "en": "More than 16,000 professionals"
      }
    }
  },
  {
    "id": "i-2026-11-ia-roles-inversion-personas",
    "numero": "04",
    "publicado": "2026-11-16",
    "tema": "ia_personas",
    "industrias": [],
    "estudios": [
      "h-2026-10-ey-ceo",
      "h-2026-10-kpmg-ceo-eeuu",
      "h-2026-10-pwc-hopes-fears",
      "h-2026-11-gallup-ia-beneficios",
      "h-2026-11-deloitte-agentes-ia"
    ],
    "titulo_es": "Los puestos de trabajo se rediseñan por la IA.",
    "titulo2_es": "La preparación en habilidades no avanza al mismo ritmo.",
    "titulo_en": "Jobs are being redesigned for AI.",
    "titulo2_en": "Skills preparation is not keeping pace.",
    "corto_es": "Puestos y habilidades",
    "corto_en": "Jobs and skills",
    "resumen_es": "EY, KPMG, PwC, Gallup y Deloitte analizan el efecto de la IA en el trabajo desde los CEO, los líderes y los trabajadores. En conjunto, muestran que las empresas rediseñan los puestos, pero invierten poco en preparar a las personas que los ocupan.",
    "resumen_en": "EY, KPMG, PwC, Gallup and Deloitte analyze AI's effect on work from the perspective of CEOs, leaders and workers. Together, they show that companies are redesigning jobs but investing little in preparing the people who fill them.",
    "bajada_es": "Cinco estudios recientes coinciden en que la IA cambia sobre todo el contenido de los puestos, más que el número de empleados. Cerca de la mitad de los CEO y líderes reconoce que la preparación de las personas va detrás de la tecnología, mientras que los trabajadores perciben menos apoyo para aprender y, en parte, más responsabilidades.",
    "bajada_en": "Five recent studies agree that AI mainly changes the content of jobs rather than the number of employees. About half of CEOs and leaders acknowledge that people's preparation lags behind the technology, while workers perceive less support for learning and, in part, more responsibilities.",
    "tesis_es": "EY, KPMG y Deloitte encuestan a CEO y líderes, y PwC y Gallup, a trabajadores, sobre cómo la IA cambia el trabajo. **EY y Deloitte coinciden en que cerca de la mitad de los líderes reconoce que su empresa no prepara a las personas al ritmo de la IA**, mientras que KPMG y EY discrepan sobre cuánto invierten los CEO en formar a sus equipos.",
    "tesis_en": "EY, KPMG and Deloitte survey CEOs and leaders, and PwC and Gallup survey workers, about how AI is changing work. **EY and Deloitte agree that about half of leaders acknowledge their company is not preparing people at the pace of AI**, while KPMG and EY disagree on how much CEOs invest in developing their teams.",
    "universo_es": "5 estudios independientes, cada uno con su propia muestra: tres a CEO y líderes (2,101 en conjunto) y dos a trabajadores (64,846 en conjunto)",
    "universo_en": "5 independent studies, each with its own sample: three of CEOs and leaders (2,101 combined) and two of workers (64,846 combined)",
    "portada": [
      {
        "id": "h-2026-10-kpmg-ceo-eeuu",
        "industria": null,
        "postura_es": "Los puestos ya se están rediseñando",
        "postura_en": "Jobs are already being redesigned",
        "dato_es": "86%",
        "dato_en": "86%",
        "texto_es": "de los CEO de grandes empresas de EE.UU. rediseña roles por la IA",
        "texto_en": "of CEOs of large U.S. companies are redesigning roles because of AI"
      },
      {
        "id": "h-2026-10-ey-ceo",
        "industria": null,
        "postura_es": "las habilidades no avanzan al mismo ritmo",
        "postura_en": "skills are not advancing at the same pace",
        "dato_es": "47%",
        "dato_en": "47%",
        "texto_es": "de los CEO de 21 países admite que su empresa no desarrolla habilidades al ritmo de la IA",
        "texto_en": "of CEOs in 21 countries admit their company is not developing skills at the pace of AI"
      }
    ],
    "portada_conector_es": "pero",
    "portada_conector_en": "but",
    "coinciden_titulo_es": "Lo que se repite en cinco estudios",
    "coinciden_titulo_en": "What repeats across five studies",
    "coinciden_intro_es": "Desde los CEO y desde los trabajadores, los cinco estudios describen las mismas cinco etapas: la IA cambia el contenido de los puestos, las empresas los rediseñan, las habilidades no avanzan al mismo ritmo, el apoyo para aprender disminuye y el tiempo ahorrado se convierte en más carga.",
    "coinciden_intro_en": "From CEOs and from workers, the five studies describe the same five stages: AI changes the content of jobs, companies redesign them, skills do not advance at the same pace, support for learning declines and time saved turns into more workload.",
    "cadena": [
      {
        "id": "h-2026-10-ey-ceo",
        "dato": "80%",
        "titulo_es": "La IA cambia el contenido del trabajo",
        "titulo_en": "AI changes the content of work",
        "texto_es": "de los CEO considera que en tres años la IA impactará más en los roles, las habilidades y la forma de trabajar que en el número de empleados.",
        "texto_en": "of CEOs believe that within three years AI will affect roles, skills and ways of working more than headcount."
      },
      {
        "id": "h-2026-10-kpmg-ceo-eeuu",
        "dato": "86%",
        "titulo_es": "El rediseño de roles ya empezó",
        "titulo_en": "Role redesign has already begun",
        "texto_es": "de los CEO de grandes empresas de EE.UU. está rediseñando roles, trayectorias profesionales y estructuras de equipo para la colaboración entre personas e IA.",
        "texto_en": "of CEOs of large U.S. companies are redesigning roles, career paths and team structures for collaboration between people and AI."
      },
      {
        "id": "h-2026-10-ey-ceo",
        "dato": "47%",
        "titulo_es": "Las habilidades van detrás",
        "titulo_en": "Skills lag behind",
        "texto_es": "de los CEO reconoce que su organización no desarrolla habilidades al ritmo de la innovación en IA.",
        "texto_en": "of CEOs acknowledge that their organization is not developing skills at the pace of AI innovation."
      },
      {
        "id": "h-2026-10-pwc-hopes-fears",
        "dato": "59% → 51%",
        "titulo_es": "El apoyo para aprender se percibe menor",
        "titulo_en": "Support for learning is perceived as lower",
        "texto_es": "Es la caída en la valoración que hacen los trabajadores de su acceso a recursos de aprendizaje y desarrollo, en un año en que 64% ya usó IA en su trabajo.",
        "texto_en": "This is the decline in workers' rating of their access to learning and development resources, in a year when 64% already used AI at work."
      },
      {
        "id": "h-2026-11-gallup-ia-beneficios",
        "dato": "31%",
        "titulo_es": "El tiempo ahorrado se convierte en más carga",
        "titulo_en": "Time saved turns into more workload",
        "texto_es": "de los trabajadores de EE.UU. que usan IA afirma que su empleador le pidió más responsabilidades a raíz de ella.",
        "texto_en": "of U.S. workers who use AI say their employer asked them to take on more responsibilities because of it."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "Cerca de la mitad de los líderes reconoce que su empresa no prepara a las personas al ritmo de la IA",
        "titulo_en": "About half of leaders acknowledge their company is not preparing people at the pace of AI",
        "lados": [
          {
            "id": "h-2026-10-ey-ceo",
            "industria": null,
            "etiqueta_es": "CEO de 21 países",
            "etiqueta_en": "CEOs in 21 countries",
            "dato_es": "47%",
            "dato_en": "47%",
            "texto_es": "de los CEO reconoce que su organización no desarrolla habilidades al ritmo de la innovación en IA",
            "texto_en": "of CEOs acknowledge that their organization is not developing skills at the pace of AI innovation",
            "v": 47
          },
          {
            "id": "h-2026-11-deloitte-agentes-ia",
            "industria": null,
            "etiqueta_es": "Líderes de EE.UU.",
            "etiqueta_en": "U.S. leaders",
            "dato_es": "La mitad",
            "dato_en": "Half",
            "texto_es": "de los líderes de empresas de EE.UU. que ya prueban agentes de IA considera que su organización no invierte lo suficiente en preparar a su fuerza laboral",
            "texto_en": "of leaders at U.S. companies already testing AI agents say their organization is not investing enough in preparing its workforce",
            "v": 50
          }
        ],
        "lectura_es": "En el estudio de EY, 47% de los CEO de grandes empresas de 21 países reconoce que su organización no desarrolla habilidades al ritmo de la IA. En el de Deloitte, la mitad de los líderes de empresas de EE.UU. que ya prueban agentes de IA (sistemas que ejecutan tareas por sí solos) considera que su organización no invierte lo suficiente en preparar a su fuerza laboral. Del lado de los trabajadores, PwC registra que la valoración del acceso a recursos de aprendizaje bajó de 59% a 51% en un año.\n\nQue el rezago lo reconozcan quienes deciden dónde se invierte es significativo: no es un reclamo de los equipos, sino un pendiente que asumen los propios CEO y líderes. La pregunta deja de ser si existe el rezago y pasa a ser qué impide corregirlo.",
        "lectura_en": "In EY's study, 47% of CEOs of large companies in 21 countries acknowledge that their organization is not developing skills at the pace of AI. In Deloitte's, half of the leaders at U.S. companies already testing AI agents (systems that carry out tasks on their own) say their organization is not investing enough in preparing its workforce. On the workers' side, PwC records that the rating of access to learning resources fell from 59% to 51% in one year.\n\nThat the lag is acknowledged by those who decide where to invest is significant: it is not a complaint from teams, but a pending task that CEOs and leaders themselves accept. The question is no longer whether the lag exists, but what prevents it from being corrected.",
        "nota_es": "EY encuesta a 1,200 CEO de 21 países; Deloitte, a 501 líderes de empresas de EE.UU. que al menos prueban agentes de IA. Las preguntas no son idénticas (una habla de habilidades y la otra de inversión en la fuerza laboral), pero ambas miden si los líderes consideran suficiente lo que hacen para preparar a las personas.",
        "nota_en": "EY surveys 1,200 CEOs in 21 countries; Deloitte, 501 leaders at U.S. companies that are at least testing AI agents. The questions are not identical (one is about skills and the other about investment in the workforce), but both measure whether leaders consider what they do to prepare people sufficient.",
        "tarjeta_es": "Cerca de la mitad de los líderes reconoce que su empresa no prepara a las personas al ritmo de la IA",
        "tarjeta_en": "About half of leaders acknowledge their company is not preparing people at the pace of AI",
        "resumen_es": "Así lo afirma 47% de los CEO encuestados por EY y la mitad de los líderes encuestados por Deloitte.",
        "resumen_en": "So say 47% of the CEOs surveyed by EY and half of the leaders surveyed by Deloitte.",
        "eje_es": "Líderes que reconocen que su empresa no prepara a las personas al ritmo de la IA",
        "eje_en": "Leaders who acknowledge their company is not preparing people at the pace of AI",
        "sub_es": "Los trabajadores lo confirman: perciben menos apoyo para aprender que hace un año.",
        "sub_en": "Workers confirm it: they perceive less support for learning than a year ago."
      }
    ],
    "difieren_intro_es": "Donde los estudios llegan a conclusiones distintas sobre una misma pregunta.",
    "difieren_intro_en": "Where the studies reach different conclusions on the same question.",
    "difieren": [
      {
        "titulo_es": "Los CEO priorizan reentrenar a su talento, pero pocos reinvierten en sus equipos lo que ganan con la IA",
        "titulo_en": "CEOs prioritize reskilling their talent, but few reinvest in their teams what they gain from AI",
        "lados": [
          {
            "id": "h-2026-10-kpmg-ceo-eeuu",
            "industria": null,
            "etiqueta_es": "CEO de EE.UU.",
            "etiqueta_en": "U.S. CEOs",
            "dato_es": "83%",
            "dato_en": "83%",
            "texto_es": "de los CEO de grandes empresas de EE.UU. se enfoca en retener y reentrenar a su talento de alto potencial",
            "texto_en": "of CEOs of large U.S. companies focus on retaining and reskilling their high-potential talent",
            "v": 83
          },
          {
            "id": "h-2026-10-ey-ceo",
            "industria": null,
            "etiqueta_es": "CEO de 21 países",
            "etiqueta_en": "CEOs in 21 countries",
            "dato_es": "15%",
            "dato_en": "15%",
            "texto_es": "de los CEO afirma que las ganancias de productividad de la IA se reinvierten en el desarrollo de sus equipos",
            "texto_en": "of CEOs say AI productivity gains are reinvested in developing their teams",
            "v": 15
          }
        ],
        "lectura_es": "En el estudio de KPMG, 83% de los CEO de grandes empresas de EE.UU. afirma que se enfoca en retener y reentrenar a su talento de alto potencial. En el de EY, que encuesta a CEO de 21 países, solo 15% dice que las ganancias de productividad que deja la IA se reinvierten en desarrollar a sus equipos.\n\nLos dos estudios preguntan a CEO y obtienen respuestas que no encajan: la formación es prioridad como enfoque, pero rara vez como destino de los recursos. Para los equipos, la señal que cuenta es la segunda, ya que muestra adónde va el dinero.",
        "lectura_en": "In KPMG's study, 83% of CEOs of large U.S. companies say they focus on retaining and reskilling their high-potential talent. In EY's, which surveys CEOs in 21 countries, only 15% say the productivity gains AI delivers are reinvested in developing their teams.\n\nThe two studies ask CEOs and get answers that do not fit together: training is a priority as a focus, but rarely as a destination for resources. For teams, the signal that counts is the second, since it shows where the money goes.",
        "nota_es": "Ambos encuestan a CEO: KPMG, a 400 de grandes empresas de EE.UU.; EY, a 1,200 de 21 países. KPMG mide en qué se enfocan y se refiere solo al talento de alto potencial; EY mide adónde van las ganancias de productividad de la IA y se refiere a los equipos en general.",
        "nota_en": "Both survey CEOs: KPMG, 400 at large U.S. companies; EY, 1,200 in 21 countries. KPMG measures what they focus on and refers only to high-potential talent; EY measures where AI productivity gains go and refers to teams in general.",
        "tarjeta_es": "Los CEO priorizan reentrenar a su talento, pero pocos reinvierten en sus equipos lo que ganan con la IA",
        "tarjeta_en": "CEOs prioritize reskilling their talent, but few reinvest in their teams what they gain from AI",
        "resumen_es": "83% de los CEO de EE.UU. se enfoca en reentrenar a su talento clave (KPMG), pero solo 15% de los CEO de 21 países reinvierte en sus equipos las ganancias de la IA (EY).",
        "resumen_en": "83% of U.S. CEOs focus on reskilling their key talent (KPMG), but only 15% of CEOs in 21 countries reinvest AI gains in their teams (EY).",
        "sub_es": "La formación aparece como prioridad, pero no como destino de lo que la IA deja.",
        "sub_en": "Training appears as a priority, but not as the destination of what AI delivers.",
        "eje_es": "El desarrollo de las personas según los CEO",
        "eje_en": "People development according to CEOs"
      }
    ],
    "dicen": [
      {
        "id": "h-2026-10-ey-ceo",
        "postura_es": "Las ganancias de la IA casi no vuelven a las personas.",
        "postura_en": "AI gains barely return to people.",
        "dato_es": "15%",
        "dato_en": "15%",
        "frase_es": "de los CEO reinvierte en el desarrollo de sus equipos las ganancias de productividad de la IA, aunque 80% cree que la IA cambiará sobre todo los roles y las habilidades.",
        "frase_en": "of CEOs reinvest AI productivity gains in developing their teams, although 80% believe AI will mainly change roles and skills."
      },
      {
        "id": "h-2026-10-kpmg-ceo-eeuu",
        "postura_es": "La IA ya obliga a rediseñar la organización del trabajo.",
        "postura_en": "AI is already forcing a redesign of how work is organized.",
        "dato_es": "86%",
        "dato_en": "86%",
        "frase_es": "de los CEO de grandes empresas de EE.UU. está rediseñando roles; la brecha de habilidades (60%) encabeza sus desafíos de talento.",
        "frase_en": "of CEOs of large U.S. companies are redesigning roles; the skills gap (60%) tops their talent challenges."
      },
      {
        "id": "h-2026-10-pwc-hopes-fears",
        "postura_es": "Los trabajadores usan más la IA y perciben menos apoyo para aprender.",
        "postura_en": "Workers use AI more and perceive less support for learning.",
        "dato_es": "59% → 51%",
        "dato_en": "59% → 51%",
        "frase_es": "Es la caída en la valoración del acceso a recursos de aprendizaje, mientras 64% de los trabajadores ya usó IA en su trabajo.",
        "frase_en": "This is the decline in the rating of access to learning resources, while 64% of workers have already used AI at work."
      },
      {
        "id": "h-2026-11-gallup-ia-beneficios",
        "postura_es": "El tiempo que ahorra la IA puede convertirse en más carga.",
        "postura_en": "The time AI saves can turn into more workload.",
        "dato_es": "31%",
        "dato_en": "31%",
        "frase_es": "de los trabajadores de EE.UU. que usan IA recibió más responsabilidades a raíz de ella; entre los de 18 a 24 años, 38%.",
        "frase_en": "of U.S. workers who use AI were given more responsibilities because of it; among those aged 18 to 24, 38%."
      },
      {
        "id": "h-2026-11-deloitte-agentes-ia",
        "postura_es": "Se anticipa un cambio profundo en el empleo sin la inversión suficiente en las personas.",
        "postura_en": "Deep job change is anticipated without sufficient investment in people.",
        "dato_es": "72%",
        "dato_en": "72%",
        "frase_es": "de los líderes de EE.UU. espera cambios profundos en el empleo por los agentes de IA en dos a tres años, y la mitad considera que no invierte lo suficiente en su fuerza laboral.",
        "frase_en": "of U.S. leaders expect deep job changes from AI agents within two to three years, and half say they are not investing enough in their workforce."
      }
    ],
    "alcance_titulo_es": "Tres estudios encuestan a CEO y líderes; dos, a los trabajadores.",
    "alcance_titulo_en": "Three studies survey CEOs and leaders; two survey workers.",
    "alcance_es": "EY encuestó a 1,200 CEO de 21 países; KPMG, a 400 CEO de grandes empresas de EE.UU.; Deloitte, a 501 líderes de organizaciones de EE.UU.; PwC, a 49,364 trabajadores de 48 países; Gallup, a 15,482 trabajadores de EE.UU. Por eso, el cruce permite comparar lo que deciden los CEO y líderes con lo que perciben los trabajadores, aunque en muestras distintas.",
    "alcance_en": "EY surveyed 1,200 CEOs in 21 countries; KPMG, 400 CEOs of large U.S. companies; Deloitte, 501 leaders at U.S. organizations; PwC, 49,364 workers in 48 countries; Gallup, 15,482 U.S. workers. As a result, the cross-read makes it possible to compare what CEOs and leaders decide with what workers perceive, although in different samples.",
    "mirada_es": null,
    "mirada_en": null,
    "preguntas_es": [
      "¿Qué parte de las ganancias de productividad de la IA se destina a desarrollar a los equipos?",
      "¿Qué roles se están rediseñando y qué formación acompaña a cada uno?",
      "¿Cómo se decide qué hacer con el tiempo que la IA ahorra, para que no se convierta solo en más carga?"
    ],
    "preguntas_en": [
      "What share of AI productivity gains goes to developing teams?",
      "Which roles are being redesigned, and what training accompanies each one?",
      "How is it decided what to do with the time AI saves, so that it does not simply become more workload?"
    ],
    "lectura_min": 4,
    "patron_titulo_es": "Cinco pasos, cinco estudios",
    "patron_titulo_en": "Five steps, five studies",
    "patron_intro_es": "La IA cambia el contenido del trabajo y los roles se rediseñan, pero las habilidades y el apoyo para aprender van detrás, y el tiempo ahorrado se convierte en más carga. Cada paso muestra su dato.",
    "patron_intro_en": "AI changes the content of work and roles are being redesigned, but skills and support for learning lag behind, and time saved turns into more workload. Each step shows its data point.",
    "alcance_corto_es": "Tres encuestan a CEO y líderes (EY, 1,200 CEO; KPMG, 400 CEO; Deloitte, 501 líderes) y dos a trabajadores (PwC, 49,364; Gallup, 15,482).",
    "alcance_corto_en": "Three survey CEOs and leaders (EY, 1,200 CEOs; KPMG, 400 CEOs; Deloitte, 501 leaders) and two survey workers (PwC, 49,364; Gallup, 15,482).",
    "muestras": {
      "EY-Parthenon": {
        "es": "1,200 CEO",
        "en": "1,200 CEOs"
      },
      "KPMG": {
        "es": "400 CEO",
        "en": "400 CEOs"
      },
      "PwC": {
        "es": "49,364 trabajadores",
        "en": "49,364 workers"
      },
      "Gallup": {
        "es": "15,482 trabajadores",
        "en": "15,482 workers"
      },
      "Deloitte": {
        "es": "501 líderes",
        "en": "501 leaders"
      }
    }
  }
];
