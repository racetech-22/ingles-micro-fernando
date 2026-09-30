# Inglés Micro — Fernando

PWA de inglés práctico para traslados de pasajeros en microbús en Gran Canaria.

## Versión 2

45 frases organizadas en 10 temas, con inglés, traducción española, fonética aproximada y botones de voz normal y lenta. Incluye búsqueda en ambos idiomas y botón para detener la voz.

Las 17 frases originales se conservan en `app.js`; las 28 nuevas están en `frases.js`. Cada entrada tiene `categoria`, `ingles`, `fonetica` y `espanol`. La voz utiliza el texto inglés completo mediante el lector del dispositivo, preferentemente en inglés británico.

## Uso

Abrir la PWA con conexión la primera vez. El service worker guarda los archivos para leer las frases sin conexión. La reproducción de voz sin conexión requiere una voz inglesa local instalada en el dispositivo; no hay archivos MP3 integrados.

La fonética es una ayuda aproximada para hispanohablantes, no una transcripción IPA. Los tiempos de trayecto de ejemplo deben ajustarse al servicio real.

Para probar localmente: `python -m http.server 8000` y abrir `http://localhost:8000`.

## Comprobación de esta versión

Sintaxis JavaScript, integridad de las 45 entradas, categorías, filtros, búsqueda sin tildes, texto y velocidades enviados al lector, y comportamiento del caché comprobados con simulaciones locales. La reproducción audible y el diseño final deben comprobarse en el móvil.
