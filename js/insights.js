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
    "titulo_es": "Las organizaciones despliegan la IA",
    "titulo2_es": "sin definir cómo se integra en el trabajo de sus equipos.",
    "titulo_en": "Organizations are rolling out AI",
    "titulo2_en": "without defining how it fits into their teams’ work.",
    "resumen_es": "Deloitte, Bain y PwC estudian tres industrias distintas. Leídos en conjunto, muestran que los equipos usan poco la IA cuando la empresa no define cómo encaja en su trabajo.",
    "resumen_en": "Deloitte, Bain and PwC study three different industries. Read together, they show that teams make little use of AI when the company does not define how it fits into their work.",
    "bajada_es": "Deloitte, Bain y PwC analizan la adopción de la IA en tres industrias. Por caminos distintos, llegan a la misma conclusión: las empresas amplían el acceso a la IA, pero no definen para qué tareas usarla, qué se espera de cada persona ni qué pasa con su puesto. El resultado es un uso limitado a lo que se exige y, donde se anticipan recortes, temor.",
    "bajada_en": "Deloitte, Bain and PwC analyze AI adoption in three industries. By different paths, they reach the same conclusion: companies are expanding access to AI, but do not define which tasks to use it for, what is expected of each person or what happens to their job. The result is use limited to what is required and, where cuts are expected, fear.",
    "tesis_es": "El freno de la IA no está en la disposición de las personas, sino en que la empresa no define cómo se usa en cada puesto ni qué pasa con el trabajo de quien la usa.",
    "tesis_en": "What holds AI back is not people’s willingness, but the fact that companies do not define how it is used in each job or what happens to the work of those who use it.",
    "portada": [
      {
        "id": "h-2026-10-deloitte-consumo-ia",
        "industria": "consumo_masivo",
        "dato_es": "19%",
        "dato_en": "19%",
        "texto_es": "de los colaboradores de consumo masivo usa la IA solo cuando se le exige, según sus líderes",
        "texto_en": "of consumer goods employees use AI only when required, according to their leaders"
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "industria": "servicios_financieros",
        "dato_es": "43%",
        "dato_en": "43%",
        "texto_es": "de los ejecutivos de servicios financieros ve que sus equipos usan la IA solo cuando se les exige",
        "texto_en": "of financial services executives see their teams use AI only when required"
      }
    ],
    "coinciden_titulo_es": "Lo que se repite en tres industrias",
    "coinciden_titulo_en": "What repeats across three industries",
    "coinciden_intro_es": "En industrias distintas, los tres estudios describen las mismas cinco etapas: las empresas dan acceso a la IA, pero no cambian los puestos ni explican qué cambia en cada rol; los equipos responden con temor y la usan solo cuando se les exige.",
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
        "titulo_es": "El trabajo no se rediseña al ritmo de la IA",
        "titulo_en": "Work is not being redesigned at the pace of AI",
        "lados": [
          {
            "id": "h-2026-10-bain-life-sciences",
            "industria": "life_sciences",
            "dato_es": "20%",
            "dato_en": "20%",
            "texto_es": "de las empresas que ya usan la IA en toda su operación convirtió su visión sobre el trabajo en decisiones para toda la organización",
            "texto_en": "of companies already using AI across their operations have turned their vision of work into organization-wide decisions",
            "v": 20
          },
          {
            "id": "h-2026-10-pwc-fs-ia",
            "industria": "servicios_financieros",
            "dato_es": "≈ 2 de 10",
            "dato_en": "≈ 2 in 10",
            "texto_es": "Firmas que calcularon el impacto de la IA y analizaron cómo rediseñar sus procesos: la mitad del 42% que hizo ese cálculo",
            "texto_en": "Firms that estimated AI's impact and analyzed how to redesign their processes: half of the 42% that made that estimate",
            "v": 21
          }
        ],
        "lectura_es": "En salud y farmacéutica, incluso las empresas que ya usan la IA en toda su operación tienen pendiente convertir su visión en decisiones sobre el trabajo. En servicios financieros, las firmas calculan cuánto personal podrían reducir, pero solo la mitad de las que hicieron ese cálculo analizó cómo se reorganizarán sus procesos.\n\nEn ambos sectores, el impacto de la IA se mide antes de definir cómo se trabajará. Deloitte encuentra el mismo pendiente en consumo masivo, donde 82% de las empresas no ha rediseñado sus puestos.",
        "lectura_en": "In pharmaceuticals and health, even companies already using AI across their operations have yet to turn their vision into decisions about work. In financial services, firms estimate how much staff they could cut, but only half of those that made that estimate have analyzed how their processes will be reorganized.\n\nIn both sectors, AI's impact is measured before defining how work will be done. Deloitte finds the same gap in consumer goods, where 82% of companies have not redesigned their jobs.",
        "nota_es": "Bain mide solo a las empresas más avanzadas de su sector; PwC, al total de firmas encuestadas. Que incluso las más avanzadas se ubiquen en ese nivel refuerza la coincidencia.",
        "nota_en": "Bain measures only the most advanced companies in its sector; PwC, all firms surveyed. That even the most advanced sit at that level reinforces the agreement.",
        "tarjeta_es": "El trabajo no se rediseña al ritmo de la IA",
        "tarjeta_en": "Work is not being redesigned at the pace of AI",
        "resumen_es": "En dos industrias, cerca de 2 de cada 10 empresas pasó del plan al rediseño del trabajo.",
        "resumen_en": "In two industries, about 2 in 10 companies have moved from planning to redesigning work.",
        "eje_es": "Empresas que ya convirtieron su plan en rediseño del trabajo",
        "eje_en": "Companies that have already turned their plan into work redesign",
        "sub_es": "En dos industrias, cerca de 2 de cada 10 empresas pasó del plan al rediseño del trabajo",
        "sub_en": "In two industries, about 2 in 10 companies have moved from planning to redesigning work"
      }
    ],
    "difieren_intro_es": "Al comparar los estudios aparecen diferencias que ninguno muestra por separado.",
    "difieren_intro_en": "Comparing the studies reveals differences that none of them shows on its own.",
    "difieren": [
      {
        "titulo_es": "Donde se anticipan recortes, el uso de la IA se limita a lo que se exige",
        "titulo_en": "Where cuts are expected, AI use is limited to what is required",
        "lados": [
          {
            "id": "h-2026-10-deloitte-consumo-ia",
            "industria": "consumo_masivo",
            "dato_es": "19%",
            "dato_en": "19%",
            "texto_es": "de los colaboradores no técnicos usa la IA solo cuando se le exige, según sus líderes. Otro 69% está entusiasmado o abierto a explorarla.",
            "texto_en": "of non-technical employees use AI only when required, according to their leaders. Another 69% are enthusiastic or open to exploring it.",
            "v": 19
          },
          {
            "id": "h-2026-10-pwc-fs-cambio",
            "industria": "servicios_financieros",
            "dato_es": "43%",
            "dato_en": "43%",
            "texto_es": "de los ejecutivos observa que sus equipos usan la IA solo cuando se les exige. 8 de cada 10 prevé una plantilla al menos 20% menor en cinco años.",
            "texto_en": "of executives see their teams use AI only when required. 8 in 10 expect a workforce at least 20% smaller within five years.",
            "v": 43
          }
        ],
        "lectura_es": "En consumo masivo, los líderes describen equipos mayoritariamente dispuestos y un uso por obligación minoritario. En servicios financieros el contexto es otro: el sector ya proyecta una reducción de personal de gran escala, y 44% de sus ejecutivos observa temor entre los colaboradores.\n\nCuando la organización anticipa recortes y no explica qué trabajo permanece, el uso se reduce al mínimo exigido.",
        "lectura_en": "In consumer goods, leaders describe teams that are mostly willing and a minority using AI out of obligation. In financial services the context is different: the sector already projects a large-scale workforce reduction, and 44% of its executives see fear among employees.\n\nWhen the organization anticipates cuts and does not explain what work remains, use falls to the required minimum.",
        "nota_es": "Las cifras no se miden de la misma forma: Deloitte estima la proporción de colaboradores; PwC, la proporción de ejecutivos que observa esa conducta en sus equipos. La comparación indica una diferencia de clima entre sectores, no una proporción exacta.",
        "nota_en": "The figures are not measured the same way: Deloitte estimates the share of employees; PwC, the share of executives who see that behavior in their teams. The comparison points to a difference in climate between sectors, not an exact proportion.",
        "tarjeta_es": "Donde se anticipan recortes, el uso de la IA se limita a lo que se exige",
        "tarjeta_en": "Where cuts are expected, AI use is limited to what is required",
        "resumen_es": "El uso por obligación es minoritario en consumo masivo y mucho más frecuente en servicios financieros.",
        "resumen_en": "Use out of obligation is a minority in consumer goods and far more common in financial services.",
        "sub_es": "La disposición de las personas responde menos a la herramienta que a lo que la IA significa para su empleo.",
        "sub_en": "People's willingness responds less to the tool than to what AI means for their jobs.",
        "eje_es": "Uso de la IA solo cuando se exige",
        "eje_en": "AI used only when required"
      },
      {
        "titulo_es": "Explicar cómo cambia un rol requiere haberlo redefinido antes",
        "titulo_en": "Explaining how a role changes requires having redefined it first",
        "lados": [
          {
            "id": "h-2026-10-bain-life-sciences",
            "industria": "life_sciences",
            "dato_es": "80%",
            "dato_en": "80%",
            "texto_es": "de las empresas que usan la IA en toda su operación explica a sus equipos cómo cambiarán sus roles, frente a 7% de las que recién la exploran",
            "texto_en": "of companies using AI across their operations explain to their teams how their roles will change, compared with 7% of those just exploring it",
            "v": 80
          },
          {
            "id": "h-2026-10-deloitte-consumo-ia",
            "industria": "consumo_masivo",
            "dato_es": "82%",
            "dato_en": "82%",
            "texto_es": "de las empresas no ha rediseñado sus puestos en torno a la IA; la respuesta más frecuente es capacitar a los colaboradores (54%)",
            "texto_en": "of companies have not redesigned their jobs around AI; the most common response is training employees (54%)",
            "v": 82
          }
        ],
        "lectura_es": "En salud y farmacéutica, explicar a los equipos cómo cambiarán sus roles es lo que más distingue a las empresas que usan la IA en toda su operación. En consumo masivo, la mayoría todavía no llega a ese punto: no rediseñó los puestos y concentra su esfuerzo en capacitar.\n\nPara explicar a un equipo cómo cambia su rol, la empresa primero tiene que decidir qué tareas asumirá la IA y cuáles seguirán a cargo de las personas.",
        "lectura_en": "In pharmaceuticals and health, explaining to teams how their roles will change is what most distinguishes companies using AI across their operations. In consumer goods, most have not yet reached that point: they have not redesigned jobs and focus their efforts on training.\n\nTo explain to a team how its role changes, the company must first decide which tasks AI will take on and which will remain with people.",
        "nota_es": "Bain describe a las empresas más avanzadas de su sector; Deloitte, al conjunto de la industria de consumo masivo.",
        "nota_en": "Bain describes the most advanced companies in its sector; Deloitte, the consumer goods industry as a whole.",
        "tarjeta_es": "Explicar cómo cambia un rol requiere haberlo redefinido antes",
        "tarjeta_en": "Explaining how a role changes requires having redefined it first",
        "resumen_es": "Las empresas más avanzadas explican el cambio de rol; la mayoría todavía no rediseñó los puestos.",
        "resumen_en": "The most advanced companies explain role changes; most have not yet redesigned jobs.",
        "sub_es": "La capacitación enseña a usar la herramienta, pero no dice qué cambia en cada puesto.",
        "sub_en": "Training teaches how to use the tool, but does not say what changes in each job.",
        "eje_es": "Explicación del rol frente a rediseño del puesto",
        "eje_en": "Explaining the role versus redesigning the job"
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
    "titulo_es": "La IA se decide en la dirección.",
    "titulo2_es": "Su efecto en los equipos todavía no entra en esa agenda.",
    "titulo_en": "AI is decided at the top.",
    "titulo2_en": "Its effect on teams has not yet made it onto that agenda.",
    "resumen_es": "Deloitte, Accenture, BCG y McKinsey miran la IA desde el directorio, la alta dirección y los equipos. Leídos en conjunto, muestran que la organización avanza con la tecnología antes de definir qué cambia para las personas que la usan.",
    "resumen_en": "Deloitte, Accenture, BCG and McKinsey look at AI from the board, senior leadership and teams. Read together, they show that organizations move ahead with the technology before defining what changes for the people who use it.",
    "bajada_es": "Cuatro estudios recientes analizan la IA desde distintos niveles de la organización. Coinciden en que pocas empresas tienen una estrategia sobre su efecto en las personas o rediseñan sus procesos. Al mismo tiempo, los equipos reportan más ritmo, más carga y poca claridad, mientras el directorio dedica poca atención a su bienestar.",
    "bajada_en": "Four recent studies analyze AI from different levels of the organization. They agree that few companies have a strategy for its effect on people or are redesigning their processes. At the same time, teams report a faster pace, a heavier load and little clarity, while boards give little attention to their well-being.",
    "tesis_es": "Las organizaciones deciden e invierten en IA desde la dirección, pero la experiencia de quienes la usan cada día, con más ritmo, más carga y poca claridad, todavía no forma parte de la agenda que la gobierna.",
    "tesis_en": "Organizations decide on and invest in AI from the top, but the experience of those who use it every day, with a faster pace, a heavier load and little clarity, is not yet part of the agenda that governs it.",
    "portada": [
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "industria": null,
        "etiqueta_es": "Mandos medios y colaboradores",
        "etiqueta_en": "Middle managers and employees",
        "dato_es": "47%",
        "dato_en": "47%",
        "texto_es": "de los mandos medios y colaboradores que usan IA reporta efectos negativos, como estrés o más carga",
        "texto_en": "of middle managers and employees who use AI report negative effects, such as stress or a heavier workload"
      },
      {
        "id": "h-2026-11-deloitte-directorios-ia",
        "industria": null,
        "etiqueta_es": "Directorios",
        "etiqueta_en": "Boards",
        "dato_es": "9%",
        "dato_en": "9%",
        "texto_es": "de los directores y altos ejecutivos dice que el bienestar de los empleados es el tema principal cuando su directorio habla de tecnología y personas; 42% dice la productividad",
        "texto_en": "of directors and senior executives say employee well-being is the main topic when their board discusses technology and people; 42% say productivity"
      }
    ],
    "coinciden_titulo_es": "Lo que se repite en cuatro estudios",
    "coinciden_titulo_en": "What repeats across four studies",
    "coinciden_intro_es": "Desde distintos niveles de la organización, los cuatro estudios describen las mismas cinco etapas: no hay estrategia sobre las personas, los procesos no se rediseñan, la comunicación no llega con claridad, la exigencia sube y la experiencia se vuelve más difícil en la base.",
    "coinciden_intro_en": "From different levels of the organization, the four studies describe the same five stages: there is no people strategy, processes are not redesigned, communication does not land clearly, demands rise and the experience becomes harder at the base.",
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
        "texto_es": "de los encuestados indica que la dirección comunica con claridad sobre la IA. Entre los empleados de primera línea, solo 36% se siente preparado para usarla.",
        "texto_en": "of respondents say leadership communicates clearly about AI. Among frontline employees, only 36% feel prepared to use it."
      },
      {
        "id": "h-2026-11-accenture-pulso-cambio",
        "dato": "50%",
        "titulo_es": "Sube la exigencia",
        "titulo_en": "Demands rise",
        "texto_es": "de los empleados señala que la IA elevó la velocidad esperada del trabajo y la necesidad de revisar lo que produce.",
        "texto_en": "of employees say AI has raised the expected pace of work and the need to review what it produces."
      },
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "dato": "47% vs. 31%",
        "titulo_es": "La experiencia se divide",
        "titulo_en": "The experience splits",
        "texto_es": "47% de los mandos medios y colaboradores que usan IA reporta al menos un efecto negativo, frente a 31% de los ejecutivos y gerentes sénior.",
        "texto_en": "47% of middle managers and individual contributors who use AI report at least one negative effect, compared with 31% of executives and senior managers."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "Pocas organizaciones definieron qué cambia en el trabajo",
        "titulo_en": "Few organizations have defined what changes in work",
        "lados": [
          {
            "id": "h-2026-11-deloitte-directorios-ia",
            "industria": null,
            "etiqueta_es": "Directorios",
            "etiqueta_en": "Boards",
            "dato_es": "16%",
            "dato_en": "16%",
            "texto_es": "de los miembros de directorios y altos ejecutivos dice que su organización tiene una estrategia establecida sobre el impacto de la tecnología en su fuerza laboral",
            "texto_en": "of board members and senior executives say their organization has an established strategy for technology's impact on its workforce",
            "v": 16
          },
          {
            "id": "h-2026-11-accenture-pulso-cambio",
            "industria": null,
            "etiqueta_es": "Alta dirección",
            "etiqueta_en": "C-suite",
            "dato_es": "15%",
            "dato_en": "15%",
            "texto_es": "de los líderes de alta dirección rediseña sus procesos de punta a punta",
            "texto_en": "of C-suite leaders are redesigning their processes end to end",
            "v": 15
          }
        ],
        "lectura_es": "Desde el directorio, Deloitte encuentra que la estrategia sobre el efecto de la tecnología en las personas existe en una minoría de organizaciones; otro 51% todavía la está desarrollando. Desde la alta dirección, Accenture encuentra una proporción casi idéntica de líderes que rediseña sus procesos de punta a punta.\n\nLeídos juntos, los dos estudios describen el mismo punto de partida: la IA ya está en marcha, pero en más de 8 de cada 10 organizaciones todavía no se decidió cómo cambia el trabajo ni qué se espera de las personas.",
        "lectura_en": "From the board, Deloitte finds that a strategy for technology's effect on people exists in a minority of organizations; another 51% are still developing one. From the C-suite, Accenture finds an almost identical share of leaders redesigning their processes end to end.\n\nRead together, the two studies describe the same starting point: AI is already under way, but in more than 8 in 10 organizations it has not yet been decided how work changes or what is expected of people.",
        "nota_es": "Deloitte mide la proporción de organizaciones con una estrategia establecida, según sus directores y altos ejecutivos; Accenture, la proporción de líderes de alta dirección que rediseña procesos. Son medidas distintas de un mismo avance pendiente, no la misma cifra.",
        "nota_en": "Deloitte measures the share of organizations with an established strategy, according to their directors and senior executives; Accenture, the share of C-suite leaders redesigning processes. They are different measures of the same pending step, not the same figure.",
        "tarjeta_es": "Pocas organizaciones definieron qué cambia en el trabajo",
        "tarjeta_en": "Few organizations have defined what changes in work",
        "resumen_es": "Desde el directorio y desde la alta dirección, menos de 2 de cada 10 pasó de la tecnología a la definición del trabajo.",
        "resumen_en": "From the board and from the C-suite, fewer than 2 in 10 have moved from technology to defining work.",
        "eje_es": "Organizaciones o líderes que ya definieron cómo cambia el trabajo",
        "eje_en": "Organizations or leaders that have already defined how work changes",
        "sub_es": "Menos de 2 de cada 10 pasó de la tecnología a la definición del trabajo",
        "sub_en": "Fewer than 2 in 10 have moved from technology to defining work"
      }
    ],
    "difieren_intro_es": "Al comparar los estudios aparecen diferencias que ninguno muestra por separado.",
    "difieren_intro_en": "Comparing the studies reveals differences that none of them shows on its own.",
    "difieren": [
      {
        "titulo_es": "El costo para las personas casi no llega al directorio",
        "titulo_en": "The cost to people barely reaches the board",
        "lados": [
          {
            "id": "h-2026-11-mckinsey-estado-ia",
            "industria": null,
            "etiqueta_es": "Mandos medios y colaboradores",
            "etiqueta_en": "Middle managers and employees",
            "dato_es": "47%",
            "dato_en": "47%",
            "texto_es": "de los mandos medios y colaboradores que usan IA reporta al menos un efecto negativo, frente a 31% de los ejecutivos y gerentes sénior",
            "texto_en": "of middle managers and individual contributors who use AI report at least one negative effect, compared with 31% of executives and senior managers",
            "v": 47
          },
          {
            "id": "h-2026-11-deloitte-directorios-ia",
            "industria": null,
            "etiqueta_es": "Directorios",
            "etiqueta_en": "Boards",
            "dato_es": "9%",
            "dato_en": "9%",
            "texto_es": "de las conversaciones del directorio sobre tecnología y fuerza laboral se centra en el bienestar de los empleados, frente a 42% en la productividad",
            "texto_en": "of board conversations about technology and the workforce focus on employee well-being, compared with 42% on productivity",
            "v": 9
          }
        ],
        "lectura_es": "En los equipos, McKinsey encuentra que casi la mitad de los mandos medios y colaboradores que usan IA ya reporta efectos negativos, 16 puntos más que entre los ejecutivos. En el directorio, Deloitte encuentra que la conversación sobre tecnología y personas se concentra en la productividad y casi no aborda el bienestar ni la confianza de los empleados (6%).\n\nLa diferencia indica que los efectos de la IA se sienten con más fuerza en los niveles que ejecutan el trabajo, mientras el órgano que supervisa la transformación los discute poco.",
        "lectura_en": "Within teams, McKinsey finds that almost half of middle managers and individual contributors who use AI already report negative effects, 16 points more than among executives. On the board, Deloitte finds that the conversation about technology and people centers on productivity and barely addresses employee well-being or trust (6%).\n\nThe difference indicates that AI's effects are felt most strongly at the levels that carry out the work, while the body that oversees the transformation rarely discusses them.",
        "nota_es": "Las cifras no miden lo mismo: McKinsey mide la proporción de personas que reporta un efecto negativo; Deloitte, el peso de cada tema en las conversaciones del directorio. La comparación muestra una distancia de atención entre niveles, no una relación directa entre ambos datos.",
        "nota_en": "The figures do not measure the same thing: McKinsey measures the share of people reporting a negative effect; Deloitte, the weight of each topic in board conversations. The comparison shows a gap in attention between levels, not a direct relationship between the two figures.",
        "tarjeta_es": "El costo para las personas casi no llega al directorio",
        "tarjeta_en": "The cost to people barely reaches the board",
        "resumen_es": "Los efectos negativos de la IA crecen en la base, mientras el bienestar ocupa un lugar menor en la agenda del directorio.",
        "resumen_en": "AI's negative effects grow at the base, while well-being holds a minor place on the board agenda.",
        "sub_es": "Los efectos de la IA se sienten más en quienes ejecutan el trabajo que en quienes lo supervisan.",
        "sub_en": "AI's effects are felt more by those who carry out the work than by those who oversee it.",
        "eje_es": "Efectos negativos en los equipos frente a atención del directorio al bienestar",
        "eje_en": "Negative effects on teams versus board attention to well-being"
      },
      {
        "titulo_es": "La productividad sube junto con la carga",
        "titulo_en": "Productivity rises along with the load",
        "lados": [
          {
            "id": "h-2026-11-accenture-pulso-cambio",
            "industria": null,
            "etiqueta_es": "Empleados",
            "etiqueta_en": "Employees",
            "dato_es": "82%",
            "dato_en": "82%",
            "texto_es": "de los empleados afirma que la IA aumentó su productividad; al mismo tiempo, 50% señala que elevó la velocidad esperada y la revisión del trabajo",
            "texto_en": "of employees say AI has increased their productivity; at the same time, 50% say it has raised the expected pace and the review of work",
            "v": 82
          },
          {
            "id": "h-2026-11-bcg-ia-trabajo",
            "industria": null,
            "etiqueta_es": "Usuarios frecuentes",
            "etiqueta_en": "Frequent users",
            "dato_es": "41%",
            "dato_en": "41%",
            "texto_es": "de los usuarios frecuentes de IA reporta una mayor carga mental asociada a su uso; 66% recibe poca o ninguna orientación sobre cómo usar el tiempo que ahorra",
            "texto_en": "of frequent AI users report a heavier mental load associated with its use; 66% receive little or no guidance on how to use the time they save",
            "v": 41
          }
        ],
        "lectura_es": "Accenture muestra que la gran mayoría de los empleados percibe una mejora de productividad con la IA. BCG agrega el otro lado: cuatro de cada diez usuarios frecuentes siente más carga mental, y la mayoría no recibe orientación sobre qué hacer con el tiempo ahorrado.\n\nLa productividad y la carga conviven. Cuando la organización no define cómo se usa el tiempo liberado, la ganancia se traduce en más ritmo y más revisión, no en mejor trabajo.",
        "lectura_en": "Accenture shows that the vast majority of employees perceive a productivity gain from AI. BCG adds the other side: four in ten frequent users feel a heavier mental load, and most receive no guidance on what to do with the time saved.\n\nProductivity and load coexist. When the organization does not define how freed-up time is used, the gain turns into a faster pace and more review, not better work.",
        "nota_es": "Accenture mide a empleados de organizaciones grandes en 21 países; BCG, a usuarios frecuentes de IA en 14 mercados. Ambas cifras provienen de los propios trabajadores, pero de muestras distintas.",
        "nota_en": "Accenture measures employees at large organizations in 21 countries; BCG, frequent AI users in 14 markets. Both figures come from workers themselves, but from different samples.",
        "tarjeta_es": "La productividad sube junto con la carga",
        "tarjeta_en": "Productivity rises along with the load",
        "resumen_es": "La mayoría trabaja más rápido, y una parte importante siente más carga mental.",
        "resumen_en": "Most work faster, and a significant share feel a heavier mental load.",
        "sub_es": "Sin una definición sobre el tiempo ahorrado, la ganancia de productividad se convierte en más exigencia.",
        "sub_en": "Without a decision on the time saved, the productivity gain becomes greater demands.",
        "eje_es": "Productividad percibida frente a carga mental",
        "eje_en": "Perceived productivity versus mental load"
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
        "frase_es": "de los encuestados indica que la dirección comunica con claridad sobre la IA; 74% de los empleados de primera línea ya la usa con regularidad.",
        "frase_en": "of respondents say leadership communicates clearly about AI; 74% of frontline employees already use it regularly."
      },
      {
        "id": "h-2026-11-mckinsey-estado-ia",
        "postura_es": "La IA se vive peor en la base que en la cima.",
        "postura_en": "AI is experienced worse at the base than at the top.",
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
      "¿Cómo se mide la carga de trabajo y el bienestar de quienes usan la IA todos los días?"
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
    "patron_intro_es": "La IA se decide en la dirección, pero el trabajo no se rediseña y la experiencia de los equipos queda fuera de la agenda. Cada paso muestra su dato.",
    "patron_intro_en": "AI is decided at the top, but work is not redesigned and the experience of teams stays off the agenda. Each step shows its data point.",
    "alcance_corto_es": "Un estudio mira desde el directorio (Deloitte, 806 directores y altos ejecutivos) y tres suman la voz de los equipos: Accenture, 3,000 líderes y 3,000 empleados; BCG, 11,749 personas de todos los niveles; McKinsey, 1,719 personas de todos los niveles.",
    "alcance_corto_en": "One study looks from the board (Deloitte, 806 directors and senior executives) and three add the voice of teams: Accenture, 3,000 leaders and 3,000 employees; BCG, 11,749 people at all levels; McKinsey, 1,719 people at all levels.",
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
    "titulo_es": "La confianza en la dirección se debilita.",
    "titulo2_es": "La coherencia entre lo que dice y lo que hace marca la diferencia.",
    "titulo_en": "Trust in leadership is weakening.",
    "titulo2_en": "Consistency between what it says and what it does makes the difference.",
    "resumen_es": "Edelman, Gallup, PwC, Great Place to Work y Korn Ferry escuchan a los empleados. Leídos en conjunto, muestran que la confianza en la dirección cae con los cambios mal vividos y que las organizaciones que la sostienen comparten un rasgo: coherencia y claridad.",
    "resumen_en": "Edelman, Gallup, PwC, Great Place to Work and Korn Ferry listen to employees. Read together, they show that trust in leadership falls when change is poorly experienced and that the organizations that sustain it share one trait: consistency and clarity.",
    "bajada_es": "Cinco estudios recientes miden la relación entre los empleados y su dirección. Coinciden en que cerca de la mitad confía en lo que dice su liderazgo y en que las expectativas sobre el trabajo se vuelven menos claras. Al mismo tiempo, muestran que las empresas con mayor coherencia entre el discurso y la acción conservan la confianza y el compromiso de sus equipos.",
    "bajada_en": "Five recent studies measure the relationship between employees and their leadership. They agree that about half trust what their leaders say and that expectations about work are becoming less clear. At the same time, they show that companies with greater consistency between words and actions keep the trust and commitment of their teams.",
    "tesis_es": "La confianza en la dirección se pierde en la forma de ejecutar y comunicar el cambio, y se sostiene donde lo que la dirección dice coincide con lo que hace.",
    "tesis_en": "Trust in leadership is lost in the way change is executed and communicated, and it holds where what leadership says matches what it does.",
    "portada": [
      {
        "id": "h-2026-10-edelman-confianza",
        "industria": null,
        "etiqueta_es": "Colaboradores de 10 países",
        "etiqueta_en": "Employees in 10 countries",
        "dato_es": "49%",
        "dato_en": "49%",
        "texto_es": "de los colaboradores confía en su CEO después de un cambio que vivió de forma negativa; si fue positivo, 82%",
        "texto_en": "of employees trust their CEO after a change they experienced negatively; if it was positive, 82%"
      },
      {
        "id": "h-2026-11-gptw-latam",
        "industria": null,
        "etiqueta_es": "Mejores empresas de Latinoamérica",
        "etiqueta_en": "Best workplaces in Latin America",
        "dato_es": "Casi 90%",
        "dato_en": "Nearly 90%",
        "texto_es": "de los empleados de las mejores empresas de Latinoamérica ve coherencia entre lo que la dirección dice y hace; en el resto, 52%",
        "texto_en": "of employees at the best workplaces in Latin America see consistency between what leadership says and does; elsewhere, 52%"
      }
    ],
    "coinciden_titulo_es": "Lo que se repite en cinco estudios",
    "coinciden_titulo_en": "What repeats across five studies",
    "coinciden_intro_es": "Desde distintas muestras de empleados, los cinco estudios describen las mismas cinco etapas: el cambio se vuelve permanente, una mala experiencia reduce la confianza, las expectativas se vuelven difusas, la comunicación de la dirección no convence del todo y la dirección y los equipos ven realidades distintas.",
    "coinciden_intro_en": "Across different samples of employees, the five studies describe the same five stages: change becomes constant, a bad experience reduces trust, expectations become blurred, leadership communication is not fully convincing, and leadership and teams see different realities.",
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
        "titulo_es": "La dirección y los equipos ven distinto",
        "titulo_en": "Leadership and teams see things differently",
        "texto_es": "En EE.UU., 85% de los CEO afirma que su organización se preocupa por sus colaboradores, frente a 46% de los colaboradores individuales.",
        "texto_en": "In the U.S., 85% of CEOs say their organization cares about its employees, compared with 46% of individual contributors."
      }
    ],
    "coinciden": [
      {
        "titulo_es": "Cerca de la mitad confía en la palabra de la dirección",
        "titulo_en": "About half trust leadership's word",
        "lados": [
          {
            "id": "h-2026-10-edelman-confianza",
            "industria": null,
            "etiqueta_es": "Tras un cambio mal vivido",
            "etiqueta_en": "After a poorly experienced change",
            "dato_es": "49%",
            "dato_en": "49%",
            "texto_es": "de los colaboradores confía en su CEO después de una transformación negativa",
            "texto_en": "of employees trust their CEO after a negative transformation",
            "v": 49
          },
          {
            "id": "h-2026-11-gptw-latam",
            "industria": null,
            "etiqueta_es": "Empresas típicas de Latinoamérica",
            "etiqueta_en": "Typical companies in Latin America",
            "dato_es": "52%",
            "dato_en": "52%",
            "texto_es": "de los empleados afirma que las acciones de la dirección coinciden con sus palabras",
            "texto_en": "of employees say leadership's actions match its words",
            "v": 52
          }
        ],
        "lectura_es": "Edelman muestra que, después de una transformación vivida de forma negativa, la confianza en el CEO baja a menos de la mitad de los colaboradores. Great Place to Work encuentra un nivel similar en las empresas típicas de Latinoamérica, donde 52% de los empleados ve coherencia entre lo que dice y lo que hace la dirección.\n\nLeídos juntos, los dos estudios ubican la credibilidad del liderazgo en un punto medio frágil: la mitad de los equipos no da por cierta la palabra de su dirección, y cada cambio mal ejecutado la pone a prueba.",
        "lectura_en": "Edelman shows that, after a transformation experienced negatively, trust in the CEO falls to fewer than half of employees. Great Place to Work finds a similar level at typical companies in Latin America, where 52% of employees see consistency between what leadership says and what it does.\n\nRead together, the two studies place leadership credibility at a fragile midpoint: half of teams do not take their leadership's word for granted, and every poorly executed change puts it to the test.",
        "nota_es": "Edelman mide la confianza en el CEO de colaboradores de 10 países que vivieron una transformación negativa; Great Place to Work, la coherencia percibida en empresas típicas de Latinoamérica, con datos de un estudio de marzo de 2024. Son medidas distintas de la credibilidad del liderazgo, no la misma cifra.",
        "nota_en": "Edelman measures trust in the CEO among employees in 10 countries who went through a negative transformation; Great Place to Work, perceived consistency at typical companies in Latin America, using data from a March 2024 study. They are different measures of leadership credibility, not the same figure.",
        "tarjeta_es": "Cerca de la mitad confía en la palabra de la dirección",
        "tarjeta_en": "About half trust leadership's word",
        "resumen_es": "Tras un cambio mal vivido o en una empresa típica, cerca de la mitad de los empleados confía en lo que dice su dirección.",
        "resumen_en": "After a poorly experienced change or at a typical company, about half of employees trust what their leadership says.",
        "eje_es": "Empleados que confían en la palabra de su dirección",
        "eje_en": "Employees who trust their leadership's word",
        "sub_es": "La credibilidad del liderazgo se ubica en un punto medio frágil",
        "sub_en": "Leadership credibility sits at a fragile midpoint"
      }
    ],
    "difieren_intro_es": "Al comparar los estudios aparecen diferencias que ninguno muestra por separado.",
    "difieren_intro_en": "Comparing the studies reveals differences that none of them shows on its own.",
    "difieren": [
      {
        "titulo_es": "La dirección percibe un cuidado que los equipos no sienten",
        "titulo_en": "Leadership perceives a care that teams do not feel",
        "lados": [
          {
            "id": "h-2026-11-kornferry-workforce",
            "industria": null,
            "etiqueta_es": "CEO en EE.UU.",
            "etiqueta_en": "U.S. CEOs",
            "dato_es": "85%",
            "dato_en": "85%",
            "texto_es": "de los CEO en EE.UU. afirma que su organización se preocupa por sus colaboradores",
            "texto_en": "of U.S. CEOs say their organization cares about its employees",
            "v": 85
          },
          {
            "id": "h-2026-11-gallup-compromiso-eeuu",
            "industria": null,
            "etiqueta_es": "Empleados en EE.UU.",
            "etiqueta_en": "U.S. employees",
            "dato_es": "37%",
            "dato_en": "37%",
            "texto_es": "de los empleados en EE.UU. siente que su jefe o alguien en el trabajo se preocupa por él como persona, frente a 47% en marzo de 2020",
            "texto_en": "of U.S. employees feel their manager or someone at work cares about them as a person, compared with 47% in March 2020",
            "v": 37
          }
        ],
        "lectura_es": "Korn Ferry encuentra que la gran mayoría de los CEO en EE.UU. considera que su organización se preocupa por sus colaboradores. Gallup, desde la experiencia de los empleados del mismo país, muestra que poco más de un tercio siente ese cuidado en su día a día, y que la cifra viene bajando desde 2020.\n\nLa diferencia indica que la intención de la dirección no siempre se traduce en la experiencia cotidiana de los equipos, que depende en gran medida de la relación con el jefe directo.",
        "lectura_en": "Korn Ferry finds that the vast majority of U.S. CEOs consider that their organization cares about its employees. Gallup, from the experience of employees in the same country, shows that just over a third feel that care day to day, and that the figure has been falling since 2020.\n\nThe difference indicates that leadership's intention does not always translate into teams' daily experience, which depends largely on the relationship with the direct manager.",
        "nota_es": "Las cifras no miden lo mismo: Korn Ferry pregunta a los CEO si su organización se preocupa por sus colaboradores; Gallup pregunta a los empleados si su jefe o alguien en el trabajo se preocupa por ellos como personas. La comparación muestra una distancia de percepción, no una relación directa.",
        "nota_en": "The figures do not measure the same thing: Korn Ferry asks CEOs whether their organization cares about its employees; Gallup asks employees whether their manager or someone at work cares about them as people. The comparison shows a gap in perception, not a direct relationship.",
        "tarjeta_es": "La dirección percibe un cuidado que los equipos no sienten",
        "tarjeta_en": "Leadership perceives a care that teams do not feel",
        "resumen_es": "La mayoría de los CEO cree que su organización cuida a su gente; poco más de un tercio de los empleados lo siente.",
        "resumen_en": "Most CEOs believe their organization cares for its people; just over a third of employees feel it.",
        "sub_es": "La intención de la dirección no siempre llega a la experiencia diaria de los equipos.",
        "sub_en": "Leadership's intention does not always reach teams' daily experience.",
        "eje_es": "Cuidado percibido por la dirección frente a cuidado sentido por los empleados",
        "eje_en": "Care perceived by leadership versus care felt by employees"
      },
      {
        "titulo_es": "Donde hay coherencia, los equipos se quedan",
        "titulo_en": "Where there is consistency, teams stay",
        "lados": [
          {
            "id": "h-2026-11-gptw-latam",
            "industria": null,
            "etiqueta_es": "Mejores empresas de Latinoamérica",
            "etiqueta_en": "Best workplaces in Latin America",
            "dato_es": "92%",
            "dato_en": "92%",
            "texto_es": "de los empleados de las mejores empresas tiene la intención de quedarse por mucho tiempo, frente a 64% en las empresas típicas de la región",
            "texto_en": "of employees at the best workplaces intend to stay for a long time, compared with 64% at typical companies in the region",
            "v": 92
          },
          {
            "id": "h-2026-11-gallup-compromiso-eeuu",
            "industria": null,
            "etiqueta_es": "Empleados en EE.UU.",
            "etiqueta_en": "U.S. employees",
            "dato_es": "29%",
            "dato_en": "29%",
            "texto_es": "de los empleados en EE.UU. está comprometido con su trabajo, es decir, psicológicamente involucrado con su trabajo y con su organización: la cifra más baja desde 2011",
            "texto_en": "of U.S. employees are engaged, that is, psychologically involved in their work and their organization: the lowest level since 2011",
            "v": 29
          }
        ],
        "lectura_es": "En las mejores empresas para trabajar de Latinoamérica, donde casi 90% de los empleados ve coherencia entre lo que dice y hace la dirección, la gran mayoría quiere quedarse por mucho tiempo. En el conjunto de la fuerza laboral de EE.UU., Gallup registra el nivel de compromiso más bajo en 15 años, junto con una caída en la claridad de expectativas.\n\nLa comparación muestra dos extremos de un mismo vínculo: cuando la dirección es coherente y clara, la confianza se traduce en permanencia; cuando esa base se debilita, también lo hace la relación de las personas con su trabajo.",
        "lectura_en": "At the best workplaces in Latin America, where nearly 90% of employees see consistency between what leadership says and does, the vast majority want to stay for a long time. Across the U.S. workforce as a whole, Gallup records the lowest level of engagement in 15 years, along with a decline in clarity of expectations.\n\nThe comparison shows two ends of the same bond: when leadership is consistent and clear, trust translates into retention; when that foundation weakens, so does people's relationship with their work.",
        "nota_es": "Great Place to Work mide a las 200 empresas reconocidas como las mejores de Latinoamérica; Gallup, a una muestra probabilística de toda la fuerza laboral de EE.UU. Son poblaciones y preguntas distintas: la comparación ilustra un contraste, no prueba una relación de causa y efecto.",
        "nota_en": "Great Place to Work measures the 200 companies recognized as the best in Latin America; Gallup, a probability sample of the entire U.S. workforce. These are different populations and questions: the comparison illustrates a contrast and does not prove cause and effect.",
        "tarjeta_es": "Donde hay coherencia, los equipos se quedan",
        "tarjeta_en": "Where there is consistency, teams stay",
        "resumen_es": "En las culturas de alta confianza, 9 de cada 10 quiere quedarse; en la fuerza laboral de EE.UU., el compromiso está en su mínimo de 15 años.",
        "resumen_en": "In high-trust cultures, 9 in 10 want to stay; in the U.S. workforce, engagement is at a 15-year low.",
        "sub_es": "La coherencia de la dirección sostiene el vínculo de las personas con su organización.",
        "sub_en": "Leadership consistency sustains people's bond with their organization.",
        "eje_es": "Permanencia en culturas de alta confianza frente a compromiso del total",
        "eje_en": "Retention in high-trust cultures versus overall engagement"
      }
    ],
    "dicen": [
      {
        "id": "h-2026-10-edelman-confianza",
        "postura_es": "La forma de ejecutar el cambio define la confianza en el liderazgo.",
        "postura_en": "The way change is executed defines trust in leadership.",
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
        "postura_es": "La coherencia del liderazgo distingue a las culturas de alta confianza.",
        "postura_en": "Leadership consistency sets high-trust cultures apart.",
        "dato_es": "Casi 90% vs. 52%",
        "dato_en": "Nearly 90% vs. 52%",
        "frase_es": "Es la proporción de empleados que ve coherencia entre lo que dice y hace la dirección en las mejores empresas de Latinoamérica y en las empresas típicas de la región.",
        "frase_en": "This is the share of employees who see consistency between what leadership says and does at the best workplaces in Latin America and at typical companies in the region."
      },
      {
        "id": "h-2026-11-kornferry-workforce",
        "postura_es": "La dirección y los equipos ven realidades distintas.",
        "postura_en": "Leadership and teams see different realities.",
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
      "¿Qué distancia existe entre lo que la dirección cree que transmite y lo que los equipos perciben?",
      "¿Qué decisiones recientes de la dirección pueden leerse como coherentes, o no, con lo que comunicó?"
    ],
    "preguntas_en": [
      "How is teams' trust measured after each major transformation?",
      "How clear is each person about what is expected of their work amid ongoing changes?",
      "What distance exists between what leadership believes it conveys and what teams perceive?",
      "Which recent leadership decisions could be read as consistent, or not, with what it communicated?"
    ],
    "lectura_min": 4,
    "patron_titulo_es": "Cinco pasos, cinco estudios",
    "patron_titulo_en": "Five steps, five studies",
    "patron_intro_es": "El cambio es permanente y, cuando se vive mal, la confianza en la dirección cae; las expectativas se vuelven difusas y la dirección y los equipos ven realidades distintas. Cada paso muestra su dato.",
    "patron_intro_en": "Change is constant and, when it is poorly experienced, trust in leadership falls; expectations become blurred and leadership and teams see different realities. Each step shows its data point.",
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
    "titulo_es": "Las empresas rediseñan los roles por la IA.",
    "titulo2_es": "La inversión en las personas que los ocupan todavía no acompaña.",
    "titulo_en": "Companies are redesigning roles because of AI.",
    "titulo2_en": "Investment in the people who fill them has not yet kept pace.",
    "resumen_es": "EY, KPMG, PwC, Gallup y Deloitte miran la IA desde los CEO, los líderes y los trabajadores. Leídos en conjunto, muestran que la IA cambia el contenido de los roles, pero las ganancias de productividad y el apoyo para aprender no vuelven a las personas al mismo ritmo.",
    "resumen_en": "EY, KPMG, PwC, Gallup and Deloitte look at AI from CEOs, leaders and workers. Read together, they show that AI is changing the content of roles, but productivity gains and support for learning are not returning to people at the same pace.",
    "bajada_es": "Cinco estudios recientes analizan el efecto de la IA en el trabajo. Coinciden en que cambia más los roles y las habilidades que el tamaño de las plantillas, y en que cerca de la mitad de los líderes reconoce que la inversión en las personas va detrás. Al mismo tiempo, los trabajadores perciben menos apoyo para aprender y, en parte, más responsabilidades.",
    "bajada_en": "Five recent studies analyze AI's effect on work. They agree that it changes roles and skills more than the size of the workforce, and that about half of leaders acknowledge that investment in people is lagging. At the same time, workers perceive less support for learning and, in part, more responsibilities.",
    "tesis_es": "La IA ya obliga a rediseñar los roles, pero las ganancias que genera se reinvierten poco en desarrollar a las personas que deberán ocuparlos.",
    "tesis_en": "AI is already forcing companies to redesign roles, but the gains it generates are rarely reinvested in developing the people who will fill them.",
    "portada": [
      {
        "id": "h-2026-10-kpmg-ceo-eeuu",
        "industria": null,
        "etiqueta_es": "CEO de EE.UU.",
        "etiqueta_en": "U.S. CEOs",
        "dato_es": "86%",
        "dato_en": "86%",
        "texto_es": "de los CEO de grandes empresas de EE.UU. ya rediseña roles y equipos por la IA",
        "texto_en": "of CEOs of large U.S. companies are already redesigning roles and teams because of AI"
      },
      {
        "id": "h-2026-10-ey-ceo",
        "industria": null,
        "etiqueta_es": "CEO de 21 países",
        "etiqueta_en": "CEOs in 21 countries",
        "dato_es": "15%",
        "dato_en": "15%",
        "texto_es": "de los CEO reinvierte en sus equipos lo que gana en productividad con la IA",
        "texto_en": "of CEOs reinvest in their teams what they gain in productivity from AI"
      }
    ],
    "coinciden_titulo_es": "Lo que se repite en cinco estudios",
    "coinciden_titulo_en": "What repeats across five studies",
    "coinciden_intro_es": "Desde la dirección y desde los trabajadores, los cinco estudios describen las mismas cinco etapas: la IA cambia el contenido del trabajo, los roles se rediseñan, las habilidades no avanzan al mismo ritmo, el apoyo para aprender se percibe menor y el tiempo ahorrado se convierte en más carga.",
    "coinciden_intro_en": "From leadership and from workers, the five studies describe the same five stages: AI changes the content of work, roles are redesigned, skills do not advance at the same pace, support for learning is perceived as lower and time saved turns into more workload.",
    "cadena": [
      {
        "id": "h-2026-10-ey-ceo",
        "dato": "80%",
        "titulo_es": "La IA cambia el contenido del trabajo",
        "titulo_en": "AI changes the content of work",
        "texto_es": "de los CEO considera que en tres años la IA impactará más en los roles, las habilidades y la forma de trabajar que en el tamaño de la plantilla.",
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
        "titulo_es": "La mitad de los líderes reconoce que la inversión en las personas va detrás",
        "titulo_en": "Half of leaders acknowledge that investment in people is lagging",
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
            "texto_es": "de los líderes considera que su organización no invierte lo suficiente en la transformación de su fuerza laboral",
            "texto_en": "of leaders say their organization is not investing enough in workforce transformation",
            "v": 50
          }
        ],
        "lectura_es": "EY encuentra que casi la mitad de los CEO de grandes empresas reconoce que el desarrollo de habilidades no sigue el ritmo de la IA. Deloitte llega a una conclusión muy cercana entre líderes de EE.UU. que ya trabajan con agentes de IA: la mitad considera que su organización no invierte lo suficiente en la transformación de su fuerza laboral.\n\nLeídos juntos, los dos estudios muestran que la propia dirección identifica la brecha: la tecnología avanza más rápido que la preparación de las personas, y la mitad de los líderes lo admite.",
        "lectura_en": "EY finds that almost half of CEOs of large companies acknowledge that skills development is not keeping pace with AI. Deloitte reaches a very similar conclusion among U.S. leaders already working with AI agents: half say their organization is not investing enough in workforce transformation.\n\nRead together, the two studies show that leadership itself identifies the gap: technology is moving faster than people's preparation, and half of leaders admit it.",
        "nota_es": "EY encuesta a 1,200 CEO de 21 países; Deloitte, a 501 líderes de organizaciones de EE.UU. que al menos tienen pilotos con agentes de IA. Las preguntas son distintas, pero ambas miden si la dirección considera suficiente su esfuerzo en las personas.",
        "nota_en": "EY surveys 1,200 CEOs in 21 countries; Deloitte, 501 leaders at U.S. organizations that are at least piloting AI agents. The questions differ, but both measure whether leadership considers its effort on people sufficient.",
        "tarjeta_es": "La mitad de los líderes reconoce que la inversión en las personas va detrás",
        "tarjeta_en": "Half of leaders acknowledge that investment in people is lagging",
        "resumen_es": "En dos estudios distintos, cerca de la mitad de los líderes admite que las habilidades o la inversión en las personas no siguen el ritmo de la IA.",
        "resumen_en": "In two different studies, about half of leaders admit that skills or investment in people are not keeping pace with AI.",
        "eje_es": "Líderes que reconocen un rezago en la inversión en personas",
        "eje_en": "Leaders who acknowledge a lag in investment in people",
        "sub_es": "Cerca de la mitad de los líderes admite que las personas van detrás de la tecnología",
        "sub_en": "About half of leaders admit that people are lagging behind the technology"
      }
    ],
    "difieren_intro_es": "Al comparar los estudios aparecen diferencias que ninguno muestra por separado.",
    "difieren_intro_en": "Comparing the studies reveals differences that none of them shows on its own.",
    "difieren": [
      {
        "titulo_es": "La productividad crece; su retorno a las personas, no",
        "titulo_en": "Productivity grows; its return to people does not",
        "lados": [
          {
            "id": "h-2026-11-gallup-ia-beneficios",
            "industria": null,
            "etiqueta_es": "Trabajadores de EE.UU.",
            "etiqueta_en": "U.S. workers",
            "dato_es": "63%",
            "dato_en": "63%",
            "texto_es": "de los trabajadores de EE.UU. que usan IA trabaja más rápido gracias a ella; 31% recibió más responsabilidades por ese motivo",
            "texto_en": "of U.S. workers who use AI work faster thanks to it; 31% were given more responsibilities as a result",
            "v": 63
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
        "lectura_es": "Gallup muestra que la mayoría de quienes usan IA en EE.UU. trabaja más rápido, y que casi un tercio recibió más responsabilidades a raíz de ello. EY, desde la dirección, encuentra que solo una minoría de los CEO reinvierte esas ganancias de productividad en el desarrollo de sus equipos.\n\nLa diferencia indica que el valor que genera la IA se captura sobre todo como más velocidad y más trabajo, y muy poco como inversión en las capacidades de las personas.",
        "lectura_en": "Gallup shows that most of those who use AI in the U.S. work faster, and that almost a third were given more responsibilities as a result. EY, from leadership's side, finds that only a minority of CEOs reinvest those productivity gains in developing their teams.\n\nThe difference indicates that the value AI generates is captured mainly as more speed and more work, and very little as investment in people's capabilities.",
        "nota_es": "Las cifras no miden lo mismo: Gallup mide la experiencia de trabajadores de EE.UU. que usan IA; EY, la decisión de los CEO sobre el destino de las ganancias de productividad. La comparación muestra una distancia entre el beneficio y su reinversión, no una relación directa.",
        "nota_en": "The figures do not measure the same thing: Gallup measures the experience of U.S. workers who use AI; EY, CEOs' decisions about where productivity gains go. The comparison shows a gap between the benefit and its reinvestment, not a direct relationship.",
        "tarjeta_es": "La productividad crece; su retorno a las personas, no",
        "tarjeta_en": "Productivity grows; its return to people does not",
        "resumen_es": "La mayoría trabaja más rápido con la IA, pero pocos CEO reinvierten esa ganancia en sus equipos.",
        "resumen_en": "Most work faster with AI, but few CEOs reinvest that gain in their teams.",
        "sub_es": "El valor de la IA se captura como velocidad y carga, no como desarrollo.",
        "sub_en": "AI's value is captured as speed and workload, not as development.",
        "eje_es": "Productividad percibida frente a reinversión en los equipos",
        "eje_en": "Perceived productivity versus reinvestment in teams"
      },
      {
        "titulo_es": "Se rediseñan los roles, pero baja el apoyo para aprender",
        "titulo_en": "Roles are redesigned, but support for learning declines",
        "lados": [
          {
            "id": "h-2026-10-kpmg-ceo-eeuu",
            "industria": null,
            "etiqueta_es": "CEO de EE.UU.",
            "etiqueta_en": "U.S. CEOs",
            "dato_es": "86%",
            "dato_en": "86%",
            "texto_es": "de los CEO de grandes empresas de EE.UU. está rediseñando roles, trayectorias y estructuras de equipo por la IA",
            "texto_en": "of CEOs of large U.S. companies are redesigning roles, career paths and team structures because of AI",
            "v": 86
          },
          {
            "id": "h-2026-10-pwc-hopes-fears",
            "industria": null,
            "etiqueta_es": "Trabajadores de 48 países",
            "etiqueta_en": "Workers in 48 countries",
            "dato_es": "51%",
            "dato_en": "51%",
            "texto_es": "de los trabajadores valora positivamente su acceso a recursos de aprendizaje y desarrollo, frente a 59% el año anterior",
            "texto_en": "of workers rate their access to learning and development resources positively, compared with 59% the previous year",
            "v": 51
          }
        ],
        "lectura_es": "KPMG muestra que la gran mayoría de los CEO de grandes empresas de EE.UU. ya está rediseñando roles, trayectorias y equipos por la IA. PwC, desde la experiencia de casi 50,000 trabajadores, registra que la valoración del acceso a recursos de aprendizaje cayó 8 puntos en un año.\n\nLa comparación sugiere que el rediseño de los puestos avanza más rápido que el apoyo que las personas reciben para prepararse para ellos.",
        "lectura_en": "KPMG shows that the vast majority of CEOs of large U.S. companies are already redesigning roles, career paths and teams because of AI. PwC, drawing on the experience of almost 50,000 workers, records that the rating of access to learning resources fell 8 points in one year.\n\nThe comparison suggests that the redesign of jobs is moving faster than the support people receive to prepare for them.",
        "nota_es": "KPMG encuesta a 400 CEO de grandes empresas de EE.UU.; PwC, a 49,364 trabajadores de 48 países. Una cifra mide lo que hace la dirección y la otra lo que perciben los trabajadores, en muestras distintas: la comparación muestra una diferencia de ritmo, no una relación directa.",
        "nota_en": "KPMG surveys 400 CEOs of large U.S. companies; PwC, 49,364 workers in 48 countries. One figure measures what leadership does and the other what workers perceive, in different samples: the comparison shows a difference in pace, not a direct relationship.",
        "tarjeta_es": "Se rediseñan los roles, pero baja el apoyo para aprender",
        "tarjeta_en": "Roles are redesigned, but support for learning declines",
        "resumen_es": "La mayoría de los CEO rediseña roles; la valoración del acceso a aprendizaje entre los trabajadores baja.",
        "resumen_en": "Most CEOs are redesigning roles; workers' rating of access to learning is falling.",
        "sub_es": "El rediseño de los puestos avanza más rápido que la preparación de quienes los ocupan.",
        "sub_en": "Job redesign is moving faster than the preparation of those who fill the jobs.",
        "eje_es": "Rediseño de roles frente a apoyo para aprender",
        "eje_en": "Role redesign versus support for learning"
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
    "alcance_titulo_es": "Tres estudios encuestan a la dirección; dos, a los trabajadores.",
    "alcance_titulo_en": "Three studies survey leadership; two survey workers.",
    "alcance_es": "EY encuestó a 1,200 CEO de 21 países; KPMG, a 400 CEO de grandes empresas de EE.UU.; Deloitte, a 501 líderes de organizaciones de EE.UU.; PwC, a 49,364 trabajadores de 48 países; Gallup, a 15,482 trabajadores de EE.UU. Por eso, el cruce permite comparar lo que la dirección decide con lo que los trabajadores perciben, aunque en muestras distintas.",
    "alcance_en": "EY surveyed 1,200 CEOs in 21 countries; KPMG, 400 CEOs of large U.S. companies; Deloitte, 501 leaders at U.S. organizations; PwC, 49,364 workers in 48 countries; Gallup, 15,482 U.S. workers. As a result, the cross-read makes it possible to compare what leadership decides with what workers perceive, although in different samples.",
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
    "alcance_corto_es": "Tres encuestan a la dirección (EY, 1,200 CEO; KPMG, 400 CEO; Deloitte, 501 líderes) y dos a los trabajadores (PwC, 49,364; Gallup, 15,482).",
    "alcance_corto_en": "Three survey leadership (EY, 1,200 CEOs; KPMG, 400 CEOs; Deloitte, 501 leaders) and two survey workers (PwC, 49,364; Gallup, 15,482).",
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
