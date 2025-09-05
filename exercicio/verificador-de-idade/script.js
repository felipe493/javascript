function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 3) {
        // BOM DIA!
        img.src = 'imagens/bebe-homem-2.png'
        document.body.style.background = '#FBEDC4'
    } else if (hora >= 4 && hora <= 6) {
        // BOA TARDE!
        img.src = 'imagens/bebe-mulher-2.png'
        document.body.style.background = '#fc590195'
    } else if (hora >= 7 && hora <= 9) {
        img.src = 'imagens/homen-jovem-2.png'
    } else if (hora >= 10 && hora <= 12){
        img.src = 'imagens/mulher-jovem-2.png'
    }  else if (hora >= 13 && hora <= 15){
        img.src = 'imagens/homem-adulto-2.png'
    }  else if (hora >= 16 && hora <= 18){
        img.src = 'imagens/mulher-adulta-2.png'
    }  else if (hora >= 19 && hora <= 21){
        img.src = 'imagens/homem-idoso-2.png'
    } else {
        // BOA NOITE!
        img.src = 'imagens/mulher-idosa-2.png'
        document.body.style.background = '#515154'
    }
}