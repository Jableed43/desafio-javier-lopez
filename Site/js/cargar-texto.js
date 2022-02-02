// Textarea
const txt1 = document.querySelector(".txt-1")


// Botones
document.querySelector(".btn-1").addEventListener('click', loadText1);

function loadText1(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', '../home.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(datos.texto);
            let res = document.querySelector(".json-text");
            txt1.innerHTML = '';

            for(let item of datos){
                txt1.innerHTML += `${item.texto}`
            }

        }
    }
}

