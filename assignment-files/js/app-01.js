var menu = document.querySelectorAll('.menu li')
var membership = document.querySelector('.membership')
var programs = document.querySelector('.programs')
var screenings = document.querySelector('.screenings')
var press = document.querySelector('.press')

var mostrarSeccion = function () {
  var boton = this
  var clase = boton.className
  // boton.className += " rojo"


  // boton.className.replace(" rojo", "");



  if (clase === 'progr') {
    programs.style.display = 'block'
    membership.style.display = 'none'
    screenings.style.display = 'none'
    press.style.display = 'none'




  }else if (clase === 'scree') {
    screenings.style.display = 'block'
    programs.style.display = 'none'
    membership.style.display = 'none'
    press.style.display = 'none'


  }else if (clase === 'pres') {
    screenings.style.display = 'none'
    programs.style.display = 'none'
    membership.style.display = 'none'
    press.style.display = 'block'


  }else if (clase === 'mem') {
    screenings.style.display = 'none'
    programs.style.display = 'none'
    membership.style.display = 'block'
    press.style.display = 'none'

  }


}
for (var i = 0; i < menu.length; i++) {
  var menuLi = menu[i]

  menuLi.addEventListener('click',mostrarSeccion)
}
