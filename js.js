let J = document.querySelector(`#menu`)
console.log(J)


let N = document.querySelector(`.active`)
console.log(N)


let h1 = document.querySelectorAll('h1')
console.log(h1)


let P = document.querySelectorAll('p')
console.log(P)


let bild = document.querySelectorAll('img')
bild.forEach(bill => {

    console.log(bill)
    bill.alt='Billedet er underlagt copyright'

});


let ov = document.querySelector('h1')
ov.innerText = 'Overskriften er udskiftet'


let he = document.querySelectorAll('h1')
he.forEach(ye => {

    ye.classList.add('title')

});


let ls = document.querySelectorAll('li')
console.log(ls)


let pl = document.querySelector(`#playground`)

let ul = document.createElement('ul')
document.querySelector('#playground').appendChild(ul)

let items = [' ',' ',' ']
items.forEach(item => {
    let li = document.createElement('li')
    ul.appendChild(li)
    li.innerHTML += item
})


let allImg = document.querySelectorAll('img')

//  laver en array
//img1 henter allimg index 0

img1 = allImg[0].src

//img1 henter allimg index 1 

img2 = allImg[1].src

// sige at img 0 index den src skal der skrive vad det stå i index 1

allImg[0].src = img2
allImg[1].src = img1


document.getElementById('deleteme').remove()
document.getElementById('deletemetoo').remove()
