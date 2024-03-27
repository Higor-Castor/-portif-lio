//apresentação front end
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

var a = document.querySelector('body')
addEventListener('DOMContentLoaded', apresentar)
function apresentar (){
    var front = document.querySelector('#espaco')
    
}



// Menu hamburgue
var menu = document.querySelector('.menu-itens');
var menu_ico = document.querySelector('.menu-icon')
menu_ico.addEventListener('click', hamburgue)
function hamburgue() {
    if (menu.style.display === "flex") {
        menu.style.display = "none";
      } else {
        menu.style.display = "flex";
      }
}


  
  // Ouvinte de evento para o redimensionamento da janela
  window.addEventListener("resize", function(event) {
    if (window.innerWidth > 769) {
      menu.style.display = "flex";
    }
    if (window.innerWidth <= 768) {
      menu.style.display = "none";
    }
  });



  const distanciaParaAparecerTopo = 100; // Defina a quantidade de pixels a partir do topo da janela para que os elementos comecem a aparecer
  const distanciaParaAparecerFundo = 200; // Defina a quantidade de pixels a partir do final da janela para que os elementos comecem a aparecer
  
  function verificarElementosVisiveis() {
      const elementos = document.querySelectorAll('.conteudo');
      
      elementos.forEach(function(elemento) {
          const posicaoElementoTopo = elemento.getBoundingClientRect().top;
          const posicaoElementoFundo = elemento.getBoundingClientRect().bottom;
          const posicaoViewportTopo = window.innerHeight - distanciaParaAparecerTopo;
          const posicaoViewportFundo = window.innerHeight - distanciaParaAparecerFundo;
          
          if (posicaoElementoTopo < posicaoViewportFundo && posicaoElementoFundo > distanciaParaAparecerTopo) {
              elemento.classList.add('aparecer');
          } else {
              elemento.classList.remove('aparecer');
          }
      });
  }

  window.addEventListener('scroll', verificarElementosVisiveis);
  window.addEventListener('load', verificarElementosVisiveis);