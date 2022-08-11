//Definicion de variables
const url = 'https://apiresthuarino.herokuapp.com/api/base'
const contenedor = document.querySelector('tbody')
let resultados = ''

const modalBases = new bootstrap.Modal(document.getElementById('modalBases'))
const formRegistro = document.querySelector('form')
const base = document.getElementById('nbase')
const ubicacion = document.getElementById('ubicacion')
const coordinador = document.getElementById('coordinador')
const celular = document.getElementById('celular')

let opcion = ''

btnCrear.addEventListener('click', () => {
    base.value = ''
    ubicacion.value = ''
    coordinador.value = ''
    celular.value = ''
    modalBases.show()
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


//Procedimiento para crear o editar
formRegistro.addEventListener('submit', (e) => {
    const urlpost = 'https://apiresthuarino.herokuapp.com/api/base/reg'
    e.preventDefault()
    var data = {
        base: `${base.value}`,
        ubicacion: `${ubicacion.value}`,
        coordinador: `${coordinador.value}`,
        celular: `${celular.value}`
    };
    if (opcion == 'crear') {
        fetch(urlpost, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // accept: 'application/json' 
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const nuevaBase = []
            nuevaBase.push(data)
            mostrar(nuevaBase)
        })
    }
    modalBases.hide();
    //location.reload();
    
})