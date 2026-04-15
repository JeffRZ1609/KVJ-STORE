document.addEventListener('DOMContentLoaded', () => {
   const contac = document.getElementById('contac') ;
   contac.addEventListener('submit', (event) => {

    event.preventDefault();

    const nombres = document.getElementById('nombres').value;
    const apellidos = document.getElementById('apellidos').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;
    const tel = document.getElementById('tel').value;

    console.log ('nombre:', nombres ) ;
    console.log ('apellido:', apellidos ) ;
    console.log ('direccion:', direccion ) ;
    console.log ('correo:', correo)
    console.log ('telefono', tel)

   })
    
}
)