// Botones
document.querySelector(".btn-1").addEventListener('click', loadText1);
document.querySelector(".btn-2").addEventListener('click', loadText2);
document.querySelector(".btn-3").addEventListener('click', loadText3);
document.querySelector(".btn-4").addEventListener('click', loadText4);
document.querySelector(".btn-5").addEventListener('click', loadText5);

// Textarea
const txt1 = document.querySelector(".txt-1")
const txt2 = document.querySelector(".txt-2")
const txt3 = document.querySelector(".txt-3")
const txt4 = document.querySelector(".txt-4")
const txt5 = document.querySelector(".txt-5")


function loadText1(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'home.json', true);

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

function loadText2(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'home.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(datos.texto);
            let res = document.querySelector(".json-text");
            txt2.innerHTML = '';

            for(let item of datos){
                txt2.innerHTML += `${item.texto}`
            }

        }
    }
}

function loadText3(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'home.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(datos.texto);
            let res = document.querySelector(".json-text");
            txt3.innerHTML = '';

            for(let item of datos){
                txt3.innerHTML += `${item.texto}`
            }

        }
    }
}

function loadText4(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'home.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(datos.texto);
            let res = document.querySelector(".json-text");
            txt4.innerHTML = '';

            for(let item of datos){
                txt4.innerHTML += `${item.texto}`
            }

        }
    }
}

function loadText5(){
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'home.json', true);

    xhttp.send();

    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){
            let datos = JSON.parse(this.responseText)
            console.log(datos.texto);
            let res = document.querySelector(".json-text");
            txt5.innerHTML = '';

            for(let item of datos){
                txt5.innerHTML += `${item.texto}`
            }

        }
    }
}

