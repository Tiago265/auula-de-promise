// Promises
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min)
}

function esperaAi(msg, tempo){
return new Promise((resolve, reject) => {
    setTimeout(() =>{
    if(typeof msg !== 'string'){
        reject('CAI NO ERRO');
        return;
    }
    
        resolve(msg.toUpperCase() + '- Passei na promise');
        return;
        }, tempo);
    });
} 

function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.resolve('Página em cache')
    }else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => console.log(e))
// Promise.all Promise.race Promise.resolve Promise.reject
// const promises = [
  
//     esperaAi(1000, rand(1, 5)),
//     esperaAi('Primeira promise', rand(1, 5)),
//     esperaAi('Segunda promise', rand(1, 5)),
//     esperaAi('Terceira promise', rand(1, 5)),
//     // esperaAi(1000,1000),
// ]; 

// Promise.race(promises)
//  .then(function(valor){
//     console.log(valor);
// })
//  .catch(function(erro){
//     console.log(erro);
// })

// esperaAi('conexão com o BD', rand(1, 3))
//     .then(resposta => {
//         console.log(resposta);
//         return esperaAi('frase 2', rand(1, 3))
//     })
//     .then(resposta => {
//        console.log(resposta);
//        return esperaAi(234, rand('1, 3'))
//     })
//     .then(resposta => {
//         console.log(resposta);
//     }).then(() => {
//         console.log('Exibe os dados na tela.');
//     })
//     .catch(e => {
//         console.log('ERRO', e);
//     });

//     console.log('Isso aqui será exibido antes de qualquer promisse.')
