function criptografar(texto) {
    let textoCriptografado = texto.replaceAll('e', 'enter');
    textoCriptografado = textoCriptografado.replaceAll('i', 'imes');
    textoCriptografado = textoCriptografado.replaceAll('a', 'ai');
    textoCriptografado = textoCriptografado.replaceAll('o', 'ober');
    textoCriptografado = textoCriptografado.replaceAll('u', 'ufat');

    return textoCriptografado;
}


function descriptografar(textoCriptografado) {
    let textoDescriptografado = textoCriptografado.replaceAll('enter', 'e');
    textoDescriptografado = textoDescriptografado.replaceAll('imes', 'i');
    textoDescriptografado = textoDescriptografado.replaceAll('ai', 'a');
    textoDescriptografado = textoDescriptografado.replaceAll('ober', 'o');
    textoDescriptografado = textoDescriptografado.replaceAll('ufat', 'u');

    return textoDescriptografado;
}

document.querySelector('.rodape__criptografar').addEventListener('click', function() {
    const texto = document.querySelector('#texto').value;
    const textoCriptografado = criptografar(texto);
    document.querySelector('.apresentacao__conteudo__caixa-direita__texto').innerText = textoCriptografado || 'Nenhuma mensagem';
});

document.querySelector('.rodape__descriptografar').addEventListener('click', function() {
    const texto = document.querySelector('#texto').value;
    const textoDescriptografado = descriptografar(texto);
    document.querySelector('.apresentacao__conteudo__caixa-direita__texto').innerText = textoDescriptografado || 'Nenhuma mensagem';
});

document.querySelector('.rodape__copiar').addEventListener('click', function() {
    const textoParaCopiar = document.querySelector('.apresentacao__conteudo__caixa-direita__texto').innerText;
    navigator.clipboard.writeText(textoParaCopiar).then(function() {
        alert('Texto copiado para a área de transferência!');
    });
});
