const vaanDetail ='Vivendo nas favelas de Rabanastre, Vaan mantém um ar de esperança mesmo sob o domínio opressivo do império. Mas ele anseia por mais: uma vida sem fronteiras ou autoridade. Ele sonha em se tornar um pirata do céu, livre para ir aonde quiser. Por destino ou coincidência seu caminho cruza com o de Balthier e Fran que o arrastam em uma rebelião contra o império.' ;
const franDetail = 'Uma guerreira Viera, Fran sente-se tão à vontade com uma espada quanto com as próprias mãos. Sua proficiência com uma lâmina é igualada apenas por sua habilidade com uma chave inglesa, já que ela também lida com a manutenção do dirigível de Balthier, o Strahl. A vida útil da viera é muito maior do que a dos humes, e muitos segredos estão escondidos em sua longa história. No entanto, a divisão de raça não faz nada para diminuir o vínculo de confiança entre ela e Balthier.';
const ashDetail = 'Filha única do rei Raminas e a única herdeira do trono de Dalmasca, acredita-se que Ashe esteja morta após a invasão. Ela conhece Vaan e os outros nas circunstâncias mais improváveis. Ashe sabe muito bem que não tem poder para corrigir os erros cometidos contra ela e seu reino, mas não se permite admitir a derrota.';
const balthierDetail ='Ele se descreveria como um ladrão nobre, roubando apenas daqueles que o merecem. Ele vai aonde quer, sem jurar fidelidade a ninguém. Enquanto vagava pelos céus de Ivalice com Fran, sua parceira Viera, ele ainda arranja tempo para encantar as mulheres com sua língua prateada e consertar os erros - sorrindo o tempo todo.' ;
const bashDetail = 'Um capitão da Ordem dos Cavaleiros de Dalmasca, Basch alcançou renome como um herói galante e corajoso, creditado com inúmeras vitórias no campo de batalha. Ele é um homem de justiça e não tolera a injustiça. Ao contrário dos outros capitães, que são escolhidos na aristocracia, Basch é de sangue comum e goza do amor do povo, até que inexplicavelmente assassina o rei na véspera da assinatura de um tratado com Archadia. Ele é levado acorrentado. O que poderia levar um homem tão leal a matar seu próprio suserano?';
const peneloDetail = "Como Vaan, Penelo chama Rabanastre de casa. Ela cuida de Vaan, tentando evitar que ele se meta em muitos problemas. Embora ela tenha perdido sua família na guerra com o império, Penelo está sempre alegre, abrindo caminho fazendo pequenos serviços dentro e fora da cidade. Ela gosta do lado mais leve da vida, mas Penelo conhece bem a batalha. Enquanto ela permanece inexperiente em uma verdadeira luta, seus irmãos, que pertenciam à Ordem, ensinaram-lhe os fundamentos do combate. Penelo acredita que na perseverança há esperança.";

const vaanTag = document.querySelector('.vaanTag');
const franTag = document.querySelector('.franTag');
const balthierTag = document.querySelector('.balthierTag');
const bashtag = document.querySelector('.bashTag');
const ashTag = document.querySelector('.ashTag');
const penTag = document.querySelector('.penTag');

const imagem = document.getElementById('imgP');
const nome = document.querySelector('.personagem-nome');
const detail = document.querySelector('.descricaoP');

vaanTag.addEventListener('click', ()=>{
    imagem.src='./src/imagens/vaan.png';
    detail.textContent = vaanDetail; 
    nome.textContent='Vaan';
});

franTag.addEventListener('click', ()=>{
    imagem.src='./src/imagens/fran.png';
    detail.textContent = franDetail; 
    nome.textContent='Fran';
});

balthierTag.addEventListener('click', ()=>{
    imagem.src='./src/imagens/balthier.png';
    detail.textContent = balthierDetail;
    nome.textContent='Balthier';
});

bashtag.addEventListener('click', ()=>{
    imagem.src='./src/imagens/bash.png';
    detail.textContent = bashDetail; 
    nome.textContent='Bash';
});

penTag.addEventListener('click', ()=>{
    imagem.src='./src/imagens/penelo.png';
    detail.textContent = peneloDetail; 
    nome.textContent='Penelo';
});

ashTag.addEventListener('click', ()=>{
    imagem.src='./src/imagens/ashe.png';
    detail.textContent = ashDetail; 
    nome.textContent='Ash';
});