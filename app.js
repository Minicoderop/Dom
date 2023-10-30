var yusuf = document.querySelector('h1')
console.log(yusuf);


let james =document.getElementById('head')
console.log(james);

let fareeda = document.getElementsByClassName('big head')
console.log(fareeda);

let Ayomide = document.querySelectorAll('h1')
console.log(Ayomide);

let Godwin = document.getElementsByTagName('h1')
console.log(Godwin);

let yusufBtn = document.getElementById('btn')
console.log(yusufBtn);


let yusufBtnAttribute = yusufBtn.getAttribute('class')
console.log(yusufBtnAttribute);

let fareedaBtn = document.getElementById('fareeda')
fareedaBtn.setAttribute('class','economics')
console.log(fareedaBtn);

let ayomideBtn =document.getElementById('ayomide')
ayomideBtn.removeAttribute('class')


let jamesParagraph = document.getElementById('intro')
jamesParagraph.style.color='purple'
jamesParagraph.style.fontSize='40px'
jamesParagraph.style.textDecoration ='underline'
jamesParagraph.style.fontweight= 'bold'
jamesParagraph.style.texAlign ='center'


// create a new heading element

let newHead = document.createElement('h1')



// creating a text node

let newText = document.createTextNode('I am the invinsible h1')

// adding the text node to the newly created heading
newHead.appendChild(newText)


// adding the newlyn created document into the DOM
let newDiv =document.getElementById('main')
document.body.appendChild(newHead, newDiv)

// GETTING INNER HTML
let FareedaContent = document.getElementById('main2').innerHTML
console.log(FareedaContent);

// SETING INNER HTML
let godwinContent = documet.getElementById('main2')
godwinContent.innerHTML = '<h2> Godwin is a perfect deveoper <h2>'




