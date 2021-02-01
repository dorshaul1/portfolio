'use strict'

var gProtfolios = []

var sokoban = createProtfolio("Threads", "Threads", "Illustration", "lorem ipsum lorem ipsum lorem ipsum", "projs/sokoban", 1448693940000,"img/portfolio/01-thumbnail.jpg" ,["Matrixes", "keyboard events"])
gProtfolios.push(sokoban)

// console.log('gProtfolios:', gProtfolios)
function createProtfolio(id, name, title, desc, url, publishdAt,imgUrl = null, labels) {

    var protfolio = {
        id: id,
        name: name,
        title: title,
        desc: desc,
        url: url,
        publishedAt: publishdAt,
        imgUrl: imgUrl,
        labels: labels,
    }

    return protfolio
}

function getProtfolios(){
    return gProtfolios
}