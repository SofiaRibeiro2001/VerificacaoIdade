function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebeM.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovemM.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultoM.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosoM.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebeF.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/jovemF.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/adultaF.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/idosoF.png')
            }
        }
        img.style.width = '200px'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // faz aparecer a imagem
    }
}

