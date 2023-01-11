const el = document.querySelector(".cabecalho-titulo");
const texto = "Front-end";
const intervalo = 250;


function dinamica(el, texto, intervalo){

    const char = texto.split("").reverse();
     
    const type = setInterval(() => {

        if(!char.length){
            return clearInterval(type);
        }

        const next = char.pop();
         
        el.innerHTML += next;



    }, intervalo)

}

dinamica(el, texto, intervalo)


