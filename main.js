const btnConsultar = document.getElementById('btn-consultar') //as HTMLButtonElement;

btnConsultar.addEventListener('click', ()=>{
    fetch('http://localhost:3000/usuarios'
    , {
        mode: 'no-cors',
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify()}
    )
        .then(data => console.log(data))
        .catch(err => console.log(err))
});