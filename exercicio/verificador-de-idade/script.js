function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-homem-2.png')
            } else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'imagens/ homem-jovem-2.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem-adulto-2.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/homem-idoso-2.png')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade <= 10) {
                // Criança
                img.setAttribute('src', 'imagens/bebe-mulher-2.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/mulher-jovem-2.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/mulher-adulta-2.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/mulher-idosa-2.png')
            }
        }
        res.computedStyleMap.texalign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}