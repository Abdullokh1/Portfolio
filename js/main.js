

// HEADER START 

let elopenBurger = document.getElementById('burgerBtn');

let elhideContent = document.getElementById('hideList');

let elxicon = document.getElementById('header__burger__icon');

elopenBurger.addEventListener('click', function(){
  elhideContent.classList.toggle('show');
})

let count = 0;

elopenBurger.addEventListener('click', function(){
  if (count == 0){
    elxicon.className='bx bx-x';
    count = 1;
  }
  else{
    elxicon.className = 'bx bx-menu';
    count = 0;
  }
})

// HEADER END 

// HERO START 

let elsettingbtn = document.getElementById('settingBtn');

let elsettincontent = document.getElementById('settingContent');

let elfirstcolor = document.getElementById('btnFirst');

let elsecondcolor = document.getElementById('btnsecond');

let elthirdcolor = document.getElementById('btnthird');

let elfourthcolor = document.getElementById('btnfourth');

let elfifthcolor = document.getElementById('btnfifth');

let elsixthcolor = document.getElementById('btnsixth');

let elseventhcolor = document.getElementById('btnseventh');

let eleightcolor = document.getElementById('btneight');

let elninecolor = document.getElementById('btnnine');

let eltencolor = document.getElementById('btnten');

let elelevencolor = document.getElementById('btneleven');

let eltwelvecolor = document.getElementById('btntwelve');




elsettingbtn.addEventListener('click', function(){
  elsettincontent.classList.toggle('display');
})
elsettingbtn.addEventListener('click', function(){
  elsettingbtn.classList.toggle('float');
})

elfirstcolor.addEventListener('click', function(){
 document.body.classList.add('first-btn');
})

elsecondcolor.addEventListener('click', function(){
  document.body.classList.add('second-btn');
 })

 elthirdcolor.addEventListener('click', function(){
  document.body.classList.add('third-btn');
 })

 elfourthcolor.addEventListener('click', function(){
  document.body.classList.add('fourth-btn');
 })

 elfifthcolor.addEventListener('click', function(){
  document.body.classList.add('fifth-btn');
 })

 elsixthcolor.addEventListener('click', function(){
  document.body.classList.add('sixth-btn');
 })

 elseventhcolor.addEventListener('click', function(){
  document.body.classList.add('seventh-btn');
 })

 eleightcolor.addEventListener('click', function(){
  document.body.classList.add('eight-btn');
 })

 elninecolor.addEventListener('click', function(){
  document.body.classList.add('nine-btn');
 })

 eltencolor.addEventListener('click', function(){
  document.body.classList.add('ten-btn');
 })

 elelevencolor.addEventListener('click', function(){
  document.body.classList.add('eleven-btn');
 })

 eltwelvecolor.addEventListener('click', function(){
  document.body.classList.add('twelve-btn');
 })



// SCROLL PART 

window.addEventListener('scroll', function(){
  let header = this.document.querySelector('header');
  let windowPosition = window.scrollY > 0;
  header.classList.toggle('scrolling-active',windowPosition);
})

// SCROLL END 

ScrollReveal().reveal('.about', { delay: 400 });
ScrollReveal().reveal('.skills', { delay: 400 });
ScrollReveal().reveal('.portfolio', { delay: 400 });
ScrollReveal().reveal('.service', { delay: 400 });
ScrollReveal().reveal('.resume', { delay: 400 });
ScrollReveal().reveal('.blog', { delay: 400 });
ScrollReveal().reveal('.contact', { delay: 400 });
ScrollReveal().reveal('.footer', { delay: 400 });


