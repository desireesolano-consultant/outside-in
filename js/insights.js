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
        "texto_es": "de los colaboradores no técnicos usa la IA solo cuando se le exige, según sus líderes",
        "texto_en": "of non-technical employees use AI only when required, according to their leaders"
      },
      {
        "id": "h-2026-10-pwc-fs-cambio",
        "industria": "servicios_financieros",
        "dato_es": "43%",
        "dato_en": "43%",
        "texto_es": "de los ejecutivos observa que sus equipos usan la IA solo cuando se les exige",
        "texto_en": "of executives see their teams use AI only when required"
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
  }
];
