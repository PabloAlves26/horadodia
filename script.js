function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    //var hora =1; //Corrigir bug da madrugada. Adicionar
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12) {
        //BOM DIA!
        img.src = 'img/manha.jpg';
        document.body.style.background ='#e2cd9f';
    } else if (hora >= 12 && hora < 18){
        //BOA TARDE!
        img.src = 'img/tarde.jpg';
        document.body.style.background ='#b9846f';
    } else {
        //BOA NOITE!
        img.src = 'img/noite.jpg';
        body.style.background ='#515154';
    }

}