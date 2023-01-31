// 1° pegar o botão do documento html
//pegar o video trailer do documento
const botao = document.querySelector('.botao-trailer');
const modal = document.querySelector('.modal');
const video = document.querySelector('.trailer');
console.log(video);
// 2° mudar as propriedades de visibilidade e opacidade do video trailer

botao.addEventListener('click', function(){
    modal.style.display='block';
});

const fechar = document.querySelector('.fechar');

fechar.addEventListener('click', function(){
    modal.style.display = 'none'
} )