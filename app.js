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
    categoria: "Salida",
    ingles: "Whenever you’re ready, you can get on board.",
    fonetica: "Uenéver yor rédi, yu ken guet on bórd.",
    espanol: "Cuando quieran, pueden subir."
  },
  {
    categoria: "Destino",
    ingles: "What hotel are you going to?",
    fonetica: "Uat joutél ar yu góuin tu?",
    espanol: "¿A qué hotel van?"
  },
  {
    categoria: "Durante el viaje",
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
    categoria: "Cortesía",
    ingles: "Take your time, there’s no rush.",
    fonetica: "Téik yor táim, ders nóu rash.",
    espanol: "Tómense su tiempo, no hay prisa."
  }
];

function hablar(texto) {
  window.speechSynthesis.cancel();

  const voz = new SpeechSynthesisUtterance(texto);
  voz.lang = "en-GB";
  voz.rate = 0.85;

  window.speechSynthesis.speak(voz);
}

function mostrarFrases() {
  const contenedor = document.getElementById("frases");

  frases.forEach((frase) => {
    const tarjeta = document.createElement("section");
    tarjeta.className = "frase";

    tarjeta.innerHTML = `
      <p class="frase-ingles">${frase.ingles}</p>
      <p class="frase-fonetica">${frase.fonetica}</p>
      <p class="frase-espanol">${frase.espanol}</p>
      <button class="boton-voz">🔊 Escuchar</button>
    `;

    tarjeta.querySelector(".boton-voz").addEventListener("click", () => {
      hablar(frase.ingles);
    });

    contenedor.appendChild(tarjeta);
  });
}

mostrarFrases();
