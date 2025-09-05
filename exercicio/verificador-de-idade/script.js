function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora =  data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <= 3) {
        // BOM DIA!
        img.src = 'imagens/bebe-homem-2.png'
        document.body.style.background = '#233444'
    } else if (hora >= 4 && hora <= 6) {
        // BOA TARDE!
        img.src = 'imagens/bebe-mulher-2.png'
        document.body.style.background = '#A68A7F'
    } else if (hora >= 7 && hora <= 9) {
        img.src = 'imagens/homen-jovem-2.png'
        document.body.style.background = '#733D1F'
    } else if (hora >= 10 && hora <= 12){
        img.src = 'imagens/mulher-jovem-2.png'
        document.body.style.background = '#73574C'
    }  else if (hora >= 13 && hora <= 15){
        img.src = 'imagens/homem-adulto-2.png'
        document.body.style.background = '#9B573C'
    }  else if (hora >= 16 && hora <= 18){
        img.src = 'imagens/mulher-adulta-2.png'
        document.body.style.background = '#E1AF92'
    }  else if (hora >= 19 && hora <= 21){
        img.src = 'imagens/homem-idoso-2.png'
        document.body.style.background = '#B05E57'
    } else {
        // BOA NOITE!
        img.src = 'imagens/mulher-idosa-2.png'
        document.body.style.background = '#B67D5D'
    }
}