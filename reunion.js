//Definicion de variables
const url = 'https://apiresthuarino.herokuapp.com/api/reunion'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalReunion = new bootstrap.Modal(document.getElementById('modalReunion'))
const formRegistro = document.querySelector('form')
const asunto = document.getElementById('asunto')
const fecha = document.getElementById('fecha')


let opcion = ''

btnCrearReunion.addEventListener('click', () => {
    let date = new Date();
    asunto.value = ''
    fecha.value = date.toISOString().split('T')[0]
    modalReunion.show()
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
    .catch(error => console.log("as"+error))
