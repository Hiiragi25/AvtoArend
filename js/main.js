AOS.init();
const nav = document.querySelector('nav');
const navLink = document.querySelectorAll('.nav__link');
const header = document.querySelector('.header');
const logo = document.querySelector('.header__logo');
const logoSecond = document.querySelector('.header__logo_second');
const menuButton = document.querySelector('.bx-menu');


let textCheak = /[0-9]/g;
const searchButton = document.querySelector('.serch__button');
const serchCityInput = document.querySelector("input[name='city']");
 


const getTop =()=> window.pageYOffset || document.documentElement.scrollTop;

/***************** HEADER *****************/
const Header = {

  Second(header,link,logo,newLogo,menuButton){
    header.classList.add('header--active');
    logo.classList.add('header__logo--active');
    nav.classList.remove('nav--defauld');
    nav.classList.add('nav--second');
    newLogo.classList.remove('header__logo_second--active');
	    link.forEach( function(item) {
	    	 item.classList.add('nav__link--active');

         item.addEventListener('click',()=>{
            nav.classList.remove('nav--active');
            menuButton.classList.add('bx-menu');
            menuButton.classList.remove('bx-x');

         })
	    }); 
  },
  Defauld(header,link,logo,newLogo,menuButton){
    header.classList.remove('header--active');
    nav.classList.add('nav--defauld');
    nav.classList.remove('nav--second');
    logo.classList.remove('header__logo--active');
    newLogo.classList.add('header__logo_second--active');
     link.forEach( function(item) {
    	 item.classList.remove('nav__link--active');

    	 item.addEventListener('click',()=>{
            nav.classList.remove('nav--active');
            menuButton.classList.add('bx-menu');
            menuButton.classList.remove('bx-x');

         })
    }); 
  }

}
window.addEventListener('scroll',CheackScroll);

function CheackScroll() {
  getTop() > 200 ? Header.Second(header,navLink,logo,logoSecond,menuButton) : Header.Defauld(header,navLink,logo,logoSecond,menuButton);
}

 menuButton.addEventListener('click',()=>{
 	menuButton.classList.add('bx-x');
    nav.classList.toggle('nav--active');
 })
  




/***************** MODAL *****************/
const modalForm = document.querySelector('.modal');
const modalFormOpen = document.querySelector('.authorization__user');
const modalFormClose = document.querySelector('.modal__closed');

const authorizationButton = document.querySelector('.authorization__btn');
const authorizationConteiner = document.querySelector('.modal__form_authorization');

const registrationConteiner = document.querySelector('.modal__form_registration');
const registrationButton = document.querySelector('.registration__btn');


modalFormOpen.addEventListener('click', ()=>{
    modalForm.classList.add('modal--open');
})

modalFormClose.addEventListener('click',()=>{
   modalForm.classList.remove('modal--open');
});



authorizationButton.addEventListener('click',()=>{
   authorizationConteiner.classList.add('modal__form_authorization--active');
   registrationConteiner.classList.remove('modal__form_registration--active');
   
})
registrationButton.addEventListener('click',()=>{
   authorizationConteiner.classList.remove('modal__form_authorization--active');
   registrationConteiner.classList.add('modal__form_registration--active');
})

/***************** CONTACTS *****************/

const contactsContener = document.querySelector('.contact__conteiner');
const contactsOpenButton = document.querySelector('.contact__icons-open');
const contactsCloseButton = document.querySelector('.contact__icons-close');
const contactAboutButton = document.querySelector('.about__button'); 

contactsOpenButton.addEventListener('click',()=>{
   contactsContener.classList.add('contact__conteiner--open');
});
contactsCloseButton.addEventListener('click', ()=>{
   contactsContener.classList.remove('contact__conteiner--open');
});
contactAboutButton.addEventListener('click', ()=>{
  contactsContener.classList.add('contact__conteiner--open');
});

/**************** MORE SHOW **********************/

let count = 3;
let startHidden = 3;
const moreButton = document.querySelector('.serves__more');
const cartItem = document.querySelectorAll('.serves__block').length;
const cartList = Array.from(document.querySelector('.serves__conteiner').children);
const MoreView = {

          Hidden(startItem,cartItems,cartList){
                 const hiddenItem  = cartList.slice(startItem,cartItems);
                 hiddenItem.forEach(function(item) {
                    item.classList.add('serves__block--none');
                });
              },
          Show(temp,cartList,cartItems,button){
         
              count+=temp;

              const visiItems = cartList.slice(0,count);
            visiItems.forEach( function(items) {
                  items.classList.add('serves__block--active');  
                 
                 })
                },

          MoreButton(count,cartItems,button){
                 if(count>cartItems) {
                      button.classList.add('serves__block--none');
            }
          }
}


moreButton.addEventListener('click',()=>{

    MoreView.Show(count,cartList,cartItem,moreButton);
    MoreView.MoreButton(count,cartItem,moreButton);

});

MoreView.Hidden(startHidden,cartItem,cartList);







/****************  QUESTIONS **********************/
Accordion();

function Accordion(){
 
 const accordionItem = document.querySelectorAll(".accordion__item");
 
  accordionItem.forEach((item,index)=>{
     
     item.addEventListener('click',()=>{

         item.classList.toggle('accordion__item--opend');
         item.classList.contains('accordion__item--opend') ?  AccordionOpen(item) :  AccordionClose(item);
         AccordionCloseAll(accordionItem,index);
     })
    

  })
}
function AccordionOpen(item){
      let answer = item.querySelector(".accordion__content");
      answer.style.height=`${answer.scrollHeight}px`;
      item.querySelector('.accordion__trigger').classList.add('accordion__trigger--opend');
      item.querySelector("i").classList.replace("bx-plus","bx-minus");
}
function AccordionClose(item){
      let answer = item.querySelector(".accordion__content");
      answer.style.height=`0px`;
      item.querySelector('.accordion__trigger').classList.remove('accordion__trigger--opend');
      item.querySelector("i").classList.replace("bx-minus","bx-plus");
}
function AccordionCloseAll(accordionItem,index){
    accordionItem.forEach(function(itemCurrent, indexCurrent) {
       if(index != indexCurrent){
          itemCurrent.classList.remove("accordion__item--opend");
          let answerCurrent = itemCurrent.querySelector(".accordion__content");
          answerCurrent.style.height  = '0px';
          itemCurrent.querySelector('.accordion__trigger').classList.remove('accordion__trigger--opend');
          itemCurrent.querySelector("i").classList.replace("bx-minus","bx-plus");

       }
    });
}

/****************  NEWSLETTER **********************/

const letterButton = document.querySelector('.newsletter__btn');
const letterConteiner = document.querySelector('.newsletter__box');
const letterMessegesConteiner = document.querySelector('.newsletter__messeges');

letterButton.addEventListener('click',(e)=>{
    e.preventDefault();
    letterConteiner.classList.add('newsletter__box--hidden');


    let letterMesseges = `    

          <i class="bx bx-check-square"></i>
         <p>Спасибо, что  оформили подписку на уведомления</p>


   `;
   letterMessegesConteiner.classList.add('newsletter__messeges--show');
   letterMessegesConteiner.insertAdjacentHTML('beforeend', letterMesseges);


})


/****************  SLIDER **********************/

const swiperSL2 = new Swiper('.swiper', {
  spaceBetween: 20,
  slidesPerView: 1,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    
   992: {
        slidesPerView: 3,
   },
    697: {
        slidesPerView: 2,
   }

  }

});



/****************  ADVERTISEMENT **********************/

window.addEventListener('scroll',AdvertisementShow);



function AdvertisementShow(){

  const advertisement = document.querySelector('.advertisement');
  const advertisementClose = document.querySelector('.advertisement__close')
    if(getTop() > 500  && !advertisement.hasAttribute('data-show')){

         
         advertisement.setAttribute('data-show','')
         advertisement.classList.add('advertisement--show');

         advertisement.addEventListener('click',()=>{
            advertisement.classList.remove('advertisement--show');
         })
   }
}


/****************  VALIDATION **********************/

const authorizationButtons = document.querySelector("input[name='authorization']");
const registrationButtons = document.querySelector("input[name='registration']");
const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;





searchButton.addEventListener('click',(e)=>{
   e.preventDefault();
   ValidationSerch();
});
authorizationButtons.addEventListener('click',(e)=>{
   e.preventDefault();
  ValidationAuthorization();

})
registrationButtons.addEventListener('click',(e)=>{

 
      e.preventDefault();
      ValidationRegistration()

})



function ValidationSerch(){

  const serchCity = document.querySelector("input[name='city']").value.trim();
  const serchArendStart = document.querySelector("input[name='arend-start']").value.trim();
  const serchArendEnd = document.querySelector("input[name='arend-end']").value.trim();

 let ParamsSerch = {

    'city': serchCity,
    'dataStart': serchArendStart,
    'dataEnd' : serchArendEnd,
    'type' : 'serch'
 }

}

function ValidationAuthorization(){

   const login = document.querySelector("input[name='login']").value.trim();
   const password = document.querySelector("input[name='password']").value.trim();
  
   ValidationLoginAuthorization(login);
   ValidationPasswordAuthorization(password)

   if(ValidationLoginAuthorization(login)==true && ValidationPasswordAuthorization(password)==true ){
       Authorization(login,password);
   }

}

function  ValidationRegistration(){


  const login = document.querySelector("input[name='login-req']").value.trim();
  const password = document.querySelector("input[name='password-req']").value.trim();
  const email = document.querySelector("input[name='email-req']").value.trim();

  ValidationLogin(login);
  ValidationPassword(password);
  ValidationEmail(email);

  if(ValidationLogin(login)==true && ValidationPassword(password)==true && ValidationEmail(email)==true ){
    
      Registration(login,password,email);
    
    
  }

}

function isEmailValid(value) {
  return EMAIL_REGEXP.test(value);
}
function ValidationLogin(Login){

 const errorLoginConteiner = document.querySelector('.form__item_erorr--login-req');

    if (Login === '') {
       ValidationError(errorLoginConteiner,"Заполните поле");
       
     
    }
    else if (Login.length < 3) {
      
          ValidationError(errorLoginConteiner,"Должно быть не мения 3 символов");
        
    }
    else {
       ValidationError(errorLoginConteiner,"");
       return true;
    }
 } 
 function ValidationEmail(Email){

    const errorEmailConteiner = document.querySelector('.form__item_erorr--email-req');

      if (Email === '') {
         ValidationError(errorEmailConteiner,"Заполните поле");
         
       
      }
      else if (Email.length < 3) {
        
            ValidationError(errorEmailConteiner,"Должно быть не мения 3 символов");

          
      }
      else if(isEmailValid(Email)){
         ValidationError(errorEmailConteiner,"");
         return true;
      }
      else {
        ValidationError(errorEmailConteiner,"Введена не корректная почта");
      }
    
}
function ValidationLoginAuthorization(Login){

  const errorLoginConteiner = document.querySelector('.form__item_erorr--login');

    if (Login === '') {
       ValidationError(errorLoginConteiner,"Заполните поле");
       
     
    }
    else if (Login.length < 3) {
      
          ValidationError(errorLoginConteiner,"Должно быть не мения 3 символов");
        
    }
    else {
       ValidationError(errorLoginConteiner,"");
       return true;
    }
}  

function ValidationPasswordAuthorization(Password){

  const errorPasswordConteiner = document.querySelector('.form__item_erorr--password');


    if (Password === '') {
       ValidationError(errorPasswordConteiner,"Заполните поле");
       
     
    }
    else if (Password.length < 3) {
      
          ValidationError(errorPasswordConteiner,"Должно быть не мения 3 символов");
        
    }
    else {
       ValidationError(errorPasswordConteiner,"");
       return true;
    }
}
function ValidationPassword(Password){

  const errorPasswordConteiner = document.querySelector('.form__item_erorr--password-req');

    if (Password === '') {
       ValidationError(errorPasswordConteiner,"Заполните поле");
       
     
    }
    else if (Password.length < 3) {
      
          ValidationError(errorPasswordConteiner,"Должно быть не мения 3 символов");
        
    }
    else {
       ValidationError(errorPasswordConteiner,"");
       return true;
    }
}

function ValidationError(errorConteiner,errorText){
  
  errorConteiner.textContent = errorText;
}

function Registration(Login,Email,Password){

    
    let User = {
           'login': Login,
           'email' : Email,
           'password': Password,
           'type' : 'registration'
     }

    
    modalForm.classList.remove('modal--open');

}
function Authorization(Login,Password){
   
    let User = {
           'login': Login,
           'password': Password,
           'type' : 'authorization'
     }
      modalForm.classList.remove('modal--open');

    }

















