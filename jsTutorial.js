FUNCIONES




DOM MANIPULATION PARA UN OBJETO:

document.querySelector('.clase').atributo = atributoCambio;

Tipo de atributos: 
.textContent
.value
.length
.style (cambios de CSS)

DOM MANIPULATION OBJETOS MULTIPLES:

document.querySelectorAll('.clase').atributo =  atributo cambio; 
WIP

MANIPULACION DE CSS

Manipulacion de Atributo de Clases:
clase.classList.atributoDeClase('cambio');
Tipo de Atributo de Clase:
Add 
Remove

Manipulacion de Estilo de Clase:
clase.style.atributo = 'cambio;'





EVENT LISTENER (SOLO EL PRIMERO EN SU NOMBRE)

document.querySelector('.atributo').addEventListener ('accion a triggerear evento', function () {
    bloque de codigo a ejecutar post trigger;
}
);


EVENT LISTENER PARA MULTIPLES ELEMENTOS CON MISMA CLASE:

const claseMultiple = document.querySelector('.clase');
for (let i = 0, i < claseMultiple.length, i++)
claseMultiple[i].addEventListener('click',)