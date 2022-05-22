FUNCIONES




DOM MANIPULATION PARA UN OBJETO:

document.querySelector('.clase').atributo = atributoCambio;

Tipo de atributos: 
.textContent
.value
.length
.style (cambios de CSS)

DOM MANIPULATION OBJETOS MULTIPLES:

//LLAMAR AL OBJETO
const objetoMultiple = document.querySelectorAll('.clase'); 

for (let i = 0; i < objetoMultiple.length; i++) {
  objetoMultiple[i].addEventListener('click', function () {
    Codigo a Ejecutar
  });

MANIPULACION DE CSS
//PRIMERO SIEMPRE LLAMAR CLASE CON DOM
Manipulacion de Atributo de Clases:
clase.classList.atributoDeClase('cambio');
Tipo de Atributo de Clase:
Add 
Remove
Contains (este esta bueno para chequear si tiene alguna clase)

Manipulacion de Estilo de Clase:
clase.style.atributo = 'cambio;'





EVENT LISTENER (SOLO EL PRIMERO EN SU NOMBRE)

document.querySelector('.atributo').addEventListener ('accion a triggerear evento', function () { //se puede invocar la funcion directo sin poner codigo abajo
    bloque de codigo a ejecutar post trigger;
}
);


EVENT LISTENER PARA MULTIPLES ELEMENTOS CON MISMA CLASE:

const claseMultiple = document.querySelector('.clase');
for (let i = 0, i < claseMultiple.length, i++)
claseMultiple[i].addEventListener('click',)
    
    EVENT LISTENER DE UN TECLADO

document.addEventListener('keydown', function (e) { //aparte de Keydown hay otros tipos, e se pasa porque se crea un objeto con el cual se puede evaluar condiciones

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
