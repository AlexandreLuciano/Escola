// Seleciona o botão na página usando o ID
const botao = document.getElementById('botao-cor');

// Função que gera uma cor hexadecimal aleatória
function gerarCorAleatoria() {
    const caracteres = '0123456789ABCDEF';
    let cor = '#';
    
    // Um código hexadecimal tem sempre 6 caracteres
    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * 16);
        cor += caracteres[indiceAleatorio];
    }
    
    return cor;
}

// Adiciona o evento de clique ao botão
botao.addEventListener('click', function() {
    const novaCor = gerarCorAleatoria();
    
    // Aplica a nova cor ao fundo do body
    document.body.style.backgroundColor = novaCor;
});