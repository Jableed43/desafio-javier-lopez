document.querySelector(".json-text").addEventListener('click', loadText);

function loadText(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'home.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(datos.texto);
            let res = document.querySelector(".json-text");
            res.innerHTML = '';

            for(let item of datos){
                res.innerHTML += `${item.texto}`
            }

        }
    }
}