'use strict'

var gProtfolios = []

var sokoban = createProtfolio("Threads", "Threads", "Illustration", "lorem ipsum lorem ipsum lorem ipsum","game", "projs/sokoban", 1448693940000, "img/portfolio/01-thumbnail.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(sokoban)

var sokoban2 = createProtfolio("Threads2", "Threads2", "Illustration", "lorem ipsum lorem ipsum lorem ipsum","game", "projs/sokoban", 1448693940000, "img/portfolio/01-thumbnail.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(sokoban2)

// console.log('gProtfolios:', gProtfolios)
function createProtfolio(id, name, title, desc, category, url, publishdAt, imgUrl = null, labels) {

    var protfolio = {
        id: id,
        name: name,
        title: title,
        desc: desc,
        category: category,
        url: url,
        publishedAt: publishdAt,
        imgUrl: imgUrl,
        labels: labels,
    }

    return protfolio
}

function getProtfolios() {
    return gProtfolios
}