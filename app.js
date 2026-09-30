const frases = [
  {
    categoria: "Recepción",
    ingles: "Hello, welcome to Gran Canaria! I’m Fernando, your driver. I hope you have a wonderful holiday.",
    fonetica: "Jelóu, uélcom tu Gran Canaria! Aim Fernando, yor dráiver. Ai jóup yu jav a uánderful jólidei.",
    espanol: "Hola, bienvenidos a Gran Canaria. Soy Fernando, su conductor. Espero que tengan unas vacaciones maravillosas."
  },
  {
    categoria: "Equipaje",
    ingles: "Please leave your luggage here. I’ll take care of it.",
    fonetica: "Plíis líiv yor láguich jíar. Ail téik kér ov it.",
    espanol: "Dejen aquí el equipaje. Yo me encargo."
  },
  {
    categoria: "Equipaje",
    ingles: "Let me take your luggage.",
    fonetica: "Let mí téik yor láguich.",
    espanol: "Déjeme llevar su equipaje."
  },
  {
    categoria: "Subida y seguridad",
    ingles: "Whenever you’re ready, you can get on board.",
    fonetica: "Uenéver yor rédi, yu ken guet on bórd.",
    espanol: "Cuando quieran, pueden subir."
  },
  {
    categoria: "Destino y recogida",
    ingles: "What hotel are you going to?",
    fonetica: "Uat joutél ar yu góuin tu?",
    espanol: "¿A qué hotel van?"
  },
  {
    categoria: "Comodidad",
    ingles: "Is the temperature okay for you?",
    fonetica: "Is de témpricher oukéi for yu?",
    espanol: "¿La temperatura está bien para ustedes?"
  },
  {
    categoria: "Durante el viaje",
    ingles: "If you need anything, just let me know.",
    fonetica: "If yu níid énizing, yast let mí nóu.",
    espanol: "Si necesitan algo, díganmelo."
  },
  {
    categoria: "Hotel",
    ingles: "Here we are. This is your hotel.",
    fonetica: "Jíar ui ar. Dis is yor joutél.",
    espanol: "Ya hemos llegado. Este es su hotel."
  },
  {
    categoria: "Hotel",
    ingles: "Please check that you haven’t forgotten anything.",
    fonetica: "Plíis chek dat yu jávent forgóten énizing.",
    espanol: "Comprueben que no se hayan olvidado de nada."
  },
  {
    categoria: "Despedida",
    ingles: "Enjoy your holiday and have a wonderful time in Gran Canaria!",
    fonetica: "Enyói yor jólidei and jav a uánderful táim in Gran Canaria!",
    espanol: "Disfruten de sus vacaciones y pásenlo muy bien en Gran Canaria."
  },
  {
    categoria: "Aeropuerto",
    ingles: "Good morning! I’m Fernando, your driver to the airport.",
    fonetica: "Gud mórnin! Aim Fernando, yor dráiver tu di érport.",
    espanol: "Buenos días. Soy Fernando, su conductor al aeropuerto."
  },
  {
    categoria: "Aeropuerto",
    ingles: "Whenever you’re ready, we can leave.",
    fonetica: "Uenéver yor rédi, ui ken líiv.",
    espanol: "Cuando estén listos, podemos salir."
  },
  {
    categoria: "Aeropuerto",
    ingles: "Is everyone here?",
    fonetica: "Is évriuan jíar?",
    espanol: "¿Estamos todos?"
  },
  {
    categoria: "Aeropuerto",
    ingles: "I hope you had a wonderful holiday.",
    fonetica: "Ai jóup yu jad a uánderful jólidei.",
    espanol: "Espero que hayan tenido unas vacaciones maravillosas."
  },
  {
    categoria: "Aeropuerto",
    ingles: "Here we are. I’ll get your luggage for you.",
    fonetica: "Jíar ui ar. Ail guet yor láguich for yu.",
    espanol: "Ya hemos llegado. Yo les saco el equipaje."
  },
  {
    categoria: "Despedida",
    ingles: "It was a pleasure driving you. Have a safe flight and a good trip back home!",
    fonetica: "It uos a pléshur dráivin yu. Jav a séif fláit and a gud trip bak jóum!",
    espanol: "Ha sido un placer llevarles. Que tengan un buen vuelo y un buen viaje de regreso a casa."
  },
  {
    categoria: "Cortesía y comunicación",
    ingles: "Take your time, there’s no rush.",
    fonetica: "Téik yor táim, ders nóu rash.",
    espanol: "Tómense su tiempo, no hay prisa."
  }
];
frases.push(...nuevasFrases);
const temas = ['Recepción', 'Destino y recogida', 'Equipaje', 'Subida y seguridad',
  'Durante el viaje', 'Comodidad', 'Hotel', 'Aeropuerto', 'Despedida', 'Cortesía y comunicación'];
const selector = document.getElementById('tema');
const buscador = document.getElementById('buscar');
const estadoVoz = document.getElementById('estado-voz');
const sintetizador = window.speechSynthesis;
let vozInglesa;
// Mantener la referencia evita que algunos navegadores interrumpan la locución.
let locucion;
temas.forEach(tema => {
  const opcion = document.createElement('option');
  opcion.value = tema;
  opcion.textContent = tema + ' (' + frases.filter(f => f.categoria === tema).length + ')';
  selector.appendChild(opcion);
});

function cargarVoces() {
  if (!sintetizador || !window.SpeechSynthesisUtterance) {
    estadoVoz.textContent = 'Este navegador no permite reproducir voz. Prueba con Chrome en tu móvil.';
    return;
  }
  const voces = sintetizador.getVoices();
  // Preferir inglés británico local para poder usarlo sin conexión.
  vozInglesa = voces.find(v => v.lang === 'en-GB' && v.localService)
    || voces.find(v => v.lang === 'en-GB')
    || voces.find(v => /^en[-_]/i.test(v.lang) && v.localService)
    || voces.find(v => /^en[-_]/i.test(v.lang));
  estadoVoz.textContent = vozInglesa
    ? 'Voz: ' + vozInglesa.name + '. ' + (vozInglesa.localService ? 'Disponible en el dispositivo.' : 'Puede necesitar conexión.')
    : 'Voz inglesa del dispositivo. Si no se oye, instala una voz inglesa en los ajustes de texto a voz.';
}
function hablar(texto, lenta = false) {
  if (!sintetizador || !window.SpeechSynthesisUtterance) return;
  sintetizador.cancel();
  cargarVoces();
  locucion = new SpeechSynthesisUtterance(texto);
  locucion.lang = vozInglesa ? vozInglesa.lang : 'en-GB';
  if (vozInglesa) locucion.voice = vozInglesa;
  locucion.rate = lenta ? 0.65 : 0.85;
  locucion.onerror = event => {
    if (!['canceled', 'interrupted'].includes(event.error)) {
      estadoVoz.textContent = 'No se pudo reproducir. Comprueba el volumen y la voz inglesa del dispositivo.';
    }
  };
  sintetizador.speak(locucion);
}
// Buscar en ambos idiomas sin distinguir mayúsculas ni tildes.
function normalizar(texto) {
  return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}
function mostrarFrases() {
  const contenedor = document.getElementById('frases');
  const consulta = normalizar(buscador.value.trim());
  const visibles = frases.filter(f => (!selector.value || f.categoria === selector.value)
    && normalizar(f.ingles + ' ' + f.espanol + ' ' + f.categoria).includes(consulta));
  contenedor.replaceChildren();
  document.getElementById('resultado').textContent = visibles.length + ' de ' + frases.length + ' frases';
  temas.forEach(tema => {
    const grupo = visibles.filter(f => f.categoria === tema);
    if (!grupo.length) return;
    const seccion = document.createElement('section');
    seccion.className = 'tema';
    const titulo = document.createElement('h2');
    titulo.textContent = tema + ' · ' + grupo.length;
    seccion.appendChild(titulo);
    grupo.forEach(frase => {
      const tarjeta = document.createElement('article');
      tarjeta.className = 'frase';
      [['ingles', 'en-GB'], ['fonetica', 'es'], ['espanol', 'es']].forEach(([campo, idioma]) => {
        const texto = document.createElement('p');
        texto.className = 'frase-' + campo;
        texto.lang = idioma;
        texto.textContent = frase[campo];
        tarjeta.appendChild(texto);
      });
      const controles = document.createElement('div');
      controles.className = 'controles-voz';
      [false, true].forEach(lenta => {
        const boton = document.createElement('button');
        boton.type = 'button';
        boton.className = 'boton-voz';
        boton.textContent = lenta ? '🐢 Más despacio' : '🔊 Escuchar';
        boton.setAttribute('aria-label', (lenta ? 'Escuchar despacio: ' : 'Escuchar: ') + frase.ingles);
        boton.disabled = !sintetizador || !window.SpeechSynthesisUtterance;
        boton.addEventListener('click', () => hablar(frase.ingles, lenta));
        controles.appendChild(boton);
      });
      tarjeta.appendChild(controles);
      seccion.appendChild(tarjeta);
    });
    contenedor.appendChild(seccion);
  });
  if (!visibles.length) {
    const mensaje = document.createElement('p');
    mensaje.textContent = 'No hay frases que coincidan. Prueba otro tema o palabra.';
    contenedor.appendChild(mensaje);
  }
}
selector.addEventListener('change', mostrarFrases);
buscador.addEventListener('input', mostrarFrases);
document.getElementById('detener').addEventListener('click', () => sintetizador?.cancel());
if (sintetizador) sintetizador.addEventListener('voiceschanged', cargarVoces);
cargarVoces();
mostrarFrases();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js').catch(() => {
      document.getElementById('estado-app').textContent = 'No se pudo activar el acceso sin conexión. Recarga con conexión.';
    });
  });
  // Actualizar la PWA instalada una sola vez cuando cambia su versión.
  let recargando = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (recargando) return;
    recargando = true;
    window.location.reload();
  });
}
