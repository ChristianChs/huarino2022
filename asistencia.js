//Definicion de variables
const url = 'https://apiresthuarino.herokuapp.com/api/base'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalAsistencia = new bootstrap.Modal(document.getElementById('modalAsistencia'))
const formRegistro = document.querySelector('form')
const dni = document.getElementById('dni')
const fecha = document.getElementById('fecha')


let opcion = ''
function validarDNI(){
    if(dni.length!=8){
        alert("El DNI debe tener exactamente 9 carácteres.");
        document.getElementById("dni").value = "";
        document.getElementById("dni").focus();
        return false;}
}
btnCrearAsistencia.addEventListener('click', () => {
    let date = new Date();
    dni.value = ''
    fecha.value = date.toISOString().split('T')[0]
    modalAsistencia.show()
    opcion = 'crear'
})

//funcion mostrar resultadoss

const mostrar = (datos) => {
    datos.forEach(dato => {
        resultados += `<tr>
                            <td>${dato.id}</td>            
                            <td>${dato.nbase}</td>            
                            <td>${dato.ubicacion}</td>            
                            <td>${dato.coordinador}</td>            
                            <td>${dato.celular}</td>     
                      </tr>   
        `
    });
    contenedor.innerHTML = resultados
}

//Procedimiento Mostrar

fetch(url, { method: 'GET', headers: { accept: 'application/json' } })
    .then(response => response.json())
    .then(data => mostrar(data))
    .catch(error => console.log(error))
