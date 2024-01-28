Frameworks utilizados: React v18, NextJS 14, Tailwind, PrimeReact

El desafío me ayudó a practicar la versión más moderna de Next, ya que me había quedado en el 12 y los nuevos cambios que salieron en la 13 no los había probado aún (el client/server side rendering y la nueva jerarquía de carpetas).
Todos los cambios, al ser un proyecto pequeño, los he realizado directamente en el main/dev.

Funcionalidades adaptadas:
Tabla de reactprime con ordenación, filtro, paginación y datos generados (simula un fetch/promise de un json).
Botón para colapsar y expandir todas las filas
Botón de favoritos
Etiquetas/Tooltip que muestra datos necesarios
Botón de eliminar implementado con el check (como he hecho un mockup, en vez de setear los valores de la tabla previamente, actualizarlos en un useEffect y poder interactuar y eliminarlos. Decidí solo imprimir el mensaje de elementos eliminados)
Barra de búsqueda con filtros y cabecera de la tabla con propiedad sticky
Submenú por cada elemento de la fila, me hubiera gustado.
Esquema de colores especial para el proyecto (se puede ver en Tailwind.config.js) con nivel AAA y AA. 
Se realizaron pruebas de accesibilidad visual con motion blur, grayscale, la extensión "Let's get colorblind", Pericles Text-top-speech (para los lectores de pantalla) y Google Lighthouse.

Puntos a mejorar
Se pudo modularizar más el componente de la tabla para una potencial reutilización de componentes
