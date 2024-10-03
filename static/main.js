

const descobrir = document.getElementById('escolher-deus')
const modal = document.getElementById("dialog")
const btclose = document.getElementById('close')


const form = document.getElementById('form')
let dia = document.getElementById('dia')
let mes = document.getElementById('mes')
let ano = document.getElementById('ano')
let data = 0;
let nomedeus = '';

form.addEventListener("submit", (event) => {
 
    event.preventDefault();
    data = calculaData();
    nomedeus = escolheDeus(data);
    selecionaDeus(nomedeus);
   

})



function calculaData() {

    dia = dia.value.toString().split('');
    mes = mes.value.toString().split('');
    ano = ano.value.toString().split('');
    
    let data = dia;
    data.push(mes, ano)
    
    data = data.flat().map(Number).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
    if (data != 11 && data != 22) {

       data = data.toString().split('');
       data = data.map(Number).reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);
       return data
        
    }else{
       
       return data
    }
    
   
}


function escolheDeus(data) {


    if(data == 1){
   
        nomedeus = 'apollo'
    
      
    }else if(data == 2){

        nomedeus = 'hera'

    }else if(data == 3){

        nomedeus = 'dionisio'
        
    }else if(data == 4){

        nomedeus = 'zeus'
        
    }else if(data == 5){

        nomedeus = 'hermes'
        
    }else if(data == 6){

        nomedeus = 'afrodite'
        
    }else if(data == 7){
        
        nomedeus = 'atena'

    }else if(data == 8){

        nomedeus = 'poseidon'
        
    }else if(data == 9){

        nomedeus = 'hades'
        
    }else if(data == 11){
        nomedeus = 'apollo'

    }else if(data == 22){
        
        nomedeus = 'zeus'
    }

    return nomedeus;

}

enviar.onclick = function () {

    console.log(dia)
}



function voltar() {
    
    window.location.href = 'index.html';

}


descobrir.onclick = function () {

  modal.showModal();

}

btclose.onclick = function (){
    modal.close()
}


function selecionaDeus(deus) {
 
  window.location.href = 'msgDeuses.html?deus='+deus;
        

}

function mostraDeus(deus){

    let deuses = '';

    if (deus == 'atena'){

        deuses = `
            <button class="button-msg">
                Atena
            </button>
            <img class="img-msg" src="/static/img/atena.jpg"/> `

    }
    else if( deus == 'hermes') {
      deuses = `
            <button class="button-msg">
                Hermes
            </button>
            <img class="img-msg" src="/static/img/hermes.jpg"/> `

    }else if( deus == 'afrodite') {
        deuses = `
              <button class="button-msg">
                  Afrodite
              </button>
              <img class="img-msg" src="/static/img/afrodite.jpg"/> `

    }else if( deus == 'apollo') {
        deuses = `
              <button class="button-msg">
                  apollo
              </button>
              <img class="img-msg" src="/static/img/apollo.jpg"/> `

    }else if( deus == 'artemis') {
        deuses = `
              <button class="button-msg">
                  Artemis
              </button>
              <img class="img-msg" src="/static/img/artemis.jpg"/> `

    }else if( deus == 'dionisio') {
        deuses = `
              <button class="button-msg">
                  Dionisio
              </button>
              <img class="img-msg" src="/static/img/dionisio.jpg"/> `

    }else if( deus == 'hades') {
        deuses = `
              <button class="button-msg">
                  Hades
              </button>
              <img class="img-msg" src="/static/img/hades.jpg"/> `

    }else if( deus == 'hera') {
        deuses = `
              <button class="button-msg">
                  Hera
              </button>
              <img class="img-msg" src="/static/img/hera.jpg"/> `

    }else if( deus == 'poseidon') {
        deuses = `
              <button class="button-msg">
                  Poseidon
              </button>
              <img class="img-msg" src="/static/img/poseidon.jpg"/> `

    }else {
        deuses = `
              <button class="button-msg">
                  Zeus
              </button>
              <img class="img-msg" src="/static/img/zeus.jpg"/> `
    }


    document.getElementById('deus').innerHTML = deuses;
 

}


 function pegarParametro(deus) {
            let params = new URLSearchParams(window.location.search);
            return params.get(deus);
  }