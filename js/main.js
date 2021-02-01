'use strict'

var gProtfolios = []

var mineSweaper = createProtfolio("mine-sweaper", "Mine sweaper", "Mine sweaper game", "lorem ipsum lorem ipsum lorem ipsum","game", "https://dorshaul1.github.io/sprint1-Mine-Sweeper/", "24/1/21", "img/portfolio/mine-sweaper.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(mineSweaper)

var bookShop = createProtfolio("book-shop", "Book shop", "book shop application", "lorem ipsum lorem ipsum lorem ipsum","shop", "https://dorshaul1.github.io/book-shop/", "30/1/2021", "img/portfolio/book-shop.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(bookShop)

var pacman = createProtfolio("pacman", "Pacman", "Pacman game", "lorem ipsum lorem ipsum lorem ipsum","game", "https://dorshaul1.github.io/pacman/", "18/1/2021", "img/portfolio/pacman.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(pacman)

var touchNumbers = createProtfolio("touch-numbers", "Touch The Numbers", "Touch The Numbers game", "lorem ipsum lorem ipsum lorem ipsum","game", "https://dorshaul1.github.io/Touch-The-Numbers/", "15/1/2021", "img/portfolio/touch-numbers.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(touchNumbers)

var toDo = createProtfolio("to-do", "To do", "To do application", "lorem ipsum lorem ipsum lorem ipsum","To do", "https://dorshaul1.github.io/To-do/", "27/1/2021", "img/portfolio/to-do.jpg", ["Matrixes", "keyboard events"])
gProtfolios.push(toDo)


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