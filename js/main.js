'use strict'

var gProtfolios = []

var sokoban = createProtfolio("mine-sweaper", "Mine sweaper", "Mine sweaper game", "lorem ipsum lorem ipsum lorem ipsum","game", "projs/sokoban", "24/1/21", "img/portfolio/mine-sweaper.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(sokoban)

var sokoban2 = createProtfolio("book-shop", "Book shop", "book shop application", "lorem ipsum lorem ipsum lorem ipsum","shop", "https://dorshaul1.github.io/book-shop/", "1/2/2021", "img/portfolio/book-shop.jpg", ["Matrixes", "keyboard events"])
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