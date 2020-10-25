// JavaScript Document

var footerFirst = document.querySelector('footer section:first-of-type button')

console.log(footerFirst)

function toonFooter() {
    document.body.classList.toggle('toonFooter');
  }

  footerFirst.addEventListener('click', toonFooter)





var footerSecond = document.querySelector('footer section:nth-of-type(2) button')

console.log(footerSecond)

function toonFooter2() {
    document.body.classList.toggle('toonFooter2');
}

  footerSecond.addEventListener('click', toonFooter2)





var footerThird = document.querySelector('footer section:nth-of-type(3) button')

console.log(footerThird)

function toonFooter3() {
    document.body.classList.toggle('toonFooter3');
  }

  footerThird.addEventListener('click', toonFooter3)






  var footerFour = document.querySelector('footer section:nth-of-type(4) button')

  console.log(footerFour)

  function toonFooter4() {
      document.body.classList.toggle('toonFooter4');
    }

    footerFour.addEventListener('click', toonFooter4)




  var button = document.querySelector("header button");

  console.log(button)

  function toggleMenu() {
  document.body.classList.toggle("toonMenu");
}

  button.addEventListener("click", toggleMenu);



  var hearts = document.querySelectorAll('article > button');
  var hartjeNummer = document.querySelector('header > ul li a > span');


  console.log(hearts)

  var counter = 0;

  hearts.forEach(heart => {
    heart.addEventListener('click', (event) => {
      event.target.classList.toggle('Voegtoe')
      counter++
      hartjeNummer.textContent = counter;
    })

  });
