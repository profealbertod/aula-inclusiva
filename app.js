const categories=[
{id:"atencion",icon:"◷",name:"Atención y funciones ejecutivas",desc:"Organización, planificación, memoria de trabajo y autorregulación.",items:[
["Fragmentar las tareas","Presenta las actividades en pasos breves y secuenciados. Comprueba la comprensión de cada fase antes de avanzar.", "ESO · Primaria","Organización"],
["Hacer visible el tiempo","Utiliza temporizadores visuales, agendas y avisos anticipados para facilitar la gestión del tiempo.","Todas las etapas","Planificación"],
["Reducir distractores","Acuerda un lugar de trabajo con menos estímulos y ofrece instrucciones breves, también por escrito.","Todas las etapas","Entorno"],
["Comprobar la comprensión","Pide al alumno que explique con sus palabras qué tiene que hacer y cuál será el primer paso.","Todas las etapas","Seguimiento"]]},
{id:"lectura",icon:"▤",name:"Lectura y escritura",desc:"Acceso a textos, comprensión lectora y expresión escrita.",items:[
["Ofrecer textos accesibles","Usa tipografía clara, párrafos breves, buen interlineado y estructura con títulos y palabras clave.","Todas las etapas","Acceso a la información"],
["Anticipar vocabulario","Presenta términos esenciales antes de la lectura con definiciones sencillas y ejemplos contextualizados.","ESO · Primaria","Comprensión"],
["Diversificar la expresión","Permite demostrar lo aprendido mediante texto, audio, exposición oral o apoyos visuales cuando el objetivo lo permita.","Todas las etapas","Expresión"],
["Facilitar guiones de escritura","Ofrece organizadores gráficos, conectores y estructuras modelo para planificar y revisar textos.","ESO · Bachillerato","Andamiaje"]]},
{id:"matematicas",icon:"∑",name:"Matemáticas y razonamiento",desc:"Comprensión de conceptos, resolución de problemas y secuenciación.",items:[
["Representar antes de abstraer","Combina objetos, dibujos, esquemas y símbolos para mostrar distintas representaciones de un concepto.","Primaria · ESO","Representación"],
["Desglosar los problemas","Separa datos, pregunta, operación y comprobación mediante una plantilla estable.","Todas las etapas","Secuenciación"],
["Modelar ejemplos resueltos","Explicita el razonamiento paso a paso y retira gradualmente las ayudas a medida que gana autonomía.","Todas las etapas","Modelado"],
["Permitir apoyos de consulta","Facilita tablas, fórmulas o recordatorios cuando se evalúa el razonamiento y no la memorización de esos datos.","ESO · Bachillerato","Acceso"]]},
{id:"comunicacion",icon:"◌",name:"Comunicación e interacción social",desc:"Comprensión de consignas, participación y relaciones en el aula.",items:[
["Usar lenguaje claro y directo","Evita dobles sentidos en instrucciones importantes y acompaña las consignas orales con apoyos escritos o visuales.","Todas las etapas","Comunicación"],
["Anticipar cambios y actividades","Explica con antelación cambios de rutina, agrupamientos, espacios o dinámicas de participación.","Todas las etapas","Anticipación"],
["Estructurar el trabajo cooperativo","Asigna roles explícitos, turnos y objetivos compartidos para que la participación sea previsible.","Todas las etapas","Participación"],
["Ofrecer distintas vías para participar","Permite intervenir oralmente, por escrito, con herramientas digitales o en pequeño grupo.","Todas las etapas","Participación"]]},
{id:"sensorial",icon:"◉",name:"Acceso sensorial y físico",desc:"Accesibilidad del entorno, materiales y experiencias de aprendizaje.",items:[
["Cuidar la legibilidad visual","Asegura contraste suficiente, tamaño de letra cómodo y materiales sin sobrecarga visual.","Todas las etapas","Accesibilidad"],
["Describir la información visual","Acompaña gráficos e imágenes relevantes con explicaciones textuales y descripciones significativas.","Todas las etapas","Materiales"],
["Facilitar alternativas de acceso","Ofrece materiales digitales compatibles con lector de pantalla, audio o formatos ampliables cuando sea necesario.","Todas las etapas","Acceso"],
["Revisar la accesibilidad del espacio","Mantén recorridos despejados y organiza materiales para que estén al alcance y sean fáciles de localizar.","Todas las etapas","Entorno"]]},
{id:"aprendizaje",icon:"✳",name:"Aprendizaje y ritmo de trabajo",desc:"Acceso al currículo, motivación, práctica y demostración de aprendizajes.",items:[
["Ajustar la cantidad sin perder el objetivo","Prioriza actividades esenciales y reduce repeticiones cuando no aporten información nueva sobre el aprendizaje.","Todas las etapas","Priorización"],
["Ampliar el tiempo cuando proceda","Ajusta los tiempos de trabajo y evaluación según la tarea y las necesidades observadas.","Todas las etapas","Tiempo"],
["Conectar con intereses y fortalezas","Utiliza contextos significativos para proponer actividades y facilitar la implicación.","Todas las etapas","Motivación"],
["Ofrecer distintas formas de demostrar lo aprendido","Diseña opciones de respuesta coherentes con el criterio de evaluación y los objetivos previstos.","Todas las etapas","Evaluación"]]},
{id:"bienestar",icon:"♡",name:"Bienestar emocional y autorregulación",desc:"Seguridad, pertenencia, gestión emocional y participación.",items:[
["Acordar una rutina de apoyo","Define con el alumno señales y pasos sencillos para pedir ayuda o una pausa cuando lo necesite.","Todas las etapas","Autorregulación"],
["Dar retroalimentación específica","Reconoce estrategias, avances y esfuerzo con indicaciones concretas sobre el siguiente paso.","Todas las etapas","Feedback"],
["Crear un clima previsible y seguro","Explicita normas, rutinas y expectativas; aplica acuerdos de forma coherente y respetuosa.","Todas las etapas","Clima de aula"],
["Incorporar pausas planificadas","Alterna periodos de actividad y pausas breves, atendiendo a las necesidades y al contexto del grupo.","Todas las etapas","Bienestar"]]}
];
const grid=document.querySelector("#categories"),detail=document.querySelector("#detail"),strategies=document.querySelector("#strategies"),search=document.querySelector("#search"),stage=document.querySelector("#stage");
let active=null;
function matches(c){const q=search.value.trim().toLocaleLowerCase("es");return c.name.toLocaleLowerCase("es").includes(q)||c.desc.toLocaleLowerCase("es").includes(q)||c.items.some(i=>i.join(" ").toLocaleLowerCase("es").includes(q));}
function render(){const visible=categories.filter(matches);grid.innerHTML=visible.map(c=>`<button class="category-card" type="button" data-id="${c.id}" aria-pressed="${active===c.id}"><span class="category-icon" aria-hidden="true">${c.icon}</span><strong>${c.name}</strong><p>${c.desc}</p><small>${c.items.length} estrategias <span aria-hidden="true">→</span></small></button>`).join("");grid.querySelectorAll("button").forEach(b=>b.addEventListener("click",()=>{active=active===b.dataset.id?null:b.dataset.id;render();renderDetail();}));if(active&&!visible.some(c=>c.id===active))active=null;renderDetail();}
function renderDetail(){const c=categories.find(x=>x.id===active);detail.hidden=!c;if(!c)return;document.querySelector("#detail-title").textContent=c.name;const filtered=c.items.filter(i=>(stage.value==="Todas"||i[2].includes(stage.value)||i[2]==="Todas las etapas")&&(!search.value.trim()||i.join(" ").toLocaleLowerCase("es").includes(search.value.trim().toLocaleLowerCase("es"))));strategies.innerHTML=filtered.length?filtered.map(i=>`<article class="strategy-card"><h3>${i[0]}</h3><p>${i[1]}</p><div class="strategy-meta"><span>${i[2]}</span><span>${i[3]}</span></div></article>`).join(""):'<p>No hay estrategias que coincidan con estos filtros.</p>';detail.scrollIntoView({behavior:"smooth",block:"start"});}
search.addEventListener("input",()=>{active=null;render();});stage.addEventListener("change",()=>{if(active)renderDetail();});document.querySelector("#clear-filter").addEventListener("click",()=>{active=null;search.value="";stage.value="Todas";render();});render();