const element = document.querySelector(".main")

function container() {
  element.innerHTML = `
  <div class="main__container">
    <footer class="main__footer">
      <li class="main__footer__link"><a href="#">название1</a></li>
      <li class="main__footer__link"><a href="#">название2</a></li>
      <li class="main__footer__link"><a href="#">название3</a></li>
      <li class="main__footer__link"><a href="#">название4</a></li>
      <li class="main__footer__link"><a href="#">очень длинное название5</a></li>
      <li class="main__footer__link"><a href="#">очень очень длинное название6</a></li>
      <li class="main__footer__link"><a href="#">длинное название7</a></li>
      <li class="main__footer__link"><a href="#">длинное название8</a></li>
    </footer>
  </div>
  <div class="main__right-container">
    <aside class="main__aside">
      <div class="main__aside__upperblock"></div>
      <div class="main__aside__container">
        <div class="main__aside__icon">
          <img src="./heart.jpg" alt="heart" class="main__aside__ui-icon"/>
        </div>
        <div class="main__aside__condition">
            <span class="main__aside__condition__header">Lorem ipsum</span>
            <p class="main__aside__condition__text">Mauris vel nisi ac orci  placerat semper. Aenean  sapien massa.</p>
        </div>
        <div class="main__aside__performance">
            <p class="main__aside__performance__text">Lorem Ipsum?</p>
            <button type="button" class="main__aside__performance__button" onclick="secondScreen()">Нaчать</button>
        </div>
      </div>
    </aside>
  </div>
  `
}
container()

function secondScreen() {
  element.innerHTML = `
  <div class="main1__container">
    <div class="main1__container_bubling"></div>
    <footer class="main1__footer">
      <li class="main1__footer__link"><a href="#">название1</a></li>
      <li class="main1__footer__link"><a href="#">название2</a></li>
      <li class="main1__footer__link"><a href="#">название3</a></li>
      <li class="main1__footer__link"><a href="#">название4</a></li>
      <li class="main1__footer__link"><a href="#">очень&nbspдлинное&nbspназвание5</a></li>
      <li class="main1__footer__link"><a href="#">очень&nbspочень&nbspдлинное&nbspназвание6</a></li>
      <li class="main1__footer__link"><a href="#">длинное&nbspназвание7</a></li>
      <li class="main1__footer__link"><a href="#">длинное&nbspназвание8</a></li>
    </footer>
  </div>
  <div class="main1__right-container">
    <aside class="main1__aside">
      <div class="main1__aside__upperblock"></div>
      <div class="main1__aside__container">
        <div class="main1__aside__icon">
          <img src="./heart-orange.jpg" alt="heart" class="main1__aside__ui-icon"/>
        </div>
        <div class="main1__aside__condition">
          <p class="main1__aside__condition__header">
            Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Integer a urna sit amet
          </p>
        </div>
        <div class="main1__aside__performance">
          <button class="ui-button ui-widget ui-corner-all button1" id="main1__aside__performance__button" onclick="addButton1()">Вариант А</button>
          <button class="ui-button ui-widget ui-corner-all button2" id="main1__aside__performance__button" onclick="addButton2()">Вариант Б</button>
          <button class="ui-button ui-widget ui-corner-all button3" id="main1__aside__performance__button" onclick="addButton3()">Вариант В</button>
          <div class="main1__aside__performance__button_bubling"></div>
        </div>
      </div>
    </aside>
  </div>
  `
}

function addButton() {
  document.querySelector(".main1__aside__performance__button_bubling").innerHTML = `
    <button class="main1__aside__performance__button" onclick="thirdScreen()">продолжить</button>
  `;

  document.querySelector(".main1__aside").style = "box-shadow: none;"
}

function addButton1() {
  addButton()
  document.querySelector(".main1__container_bubling").innerHTML = `
  <div class="main1__bubling">
    <div class="main1__bubling__container">
      <p class="main1__bubling__header">40%</p>
      <p class="main1__bubling__text">людей обращают внимание на A</p>
    </div>
  </div>
`;

  document.querySelector(".button1").style = "color: #ffffff; background-color: rgb(252, 137, 80);"
  document.querySelector(".button2").removeAttribute("style")
  document.querySelector(".button3").removeAttribute("style")
}

function addButton2() {
  addButton();
  document.querySelector(".main1__container_bubling").innerHTML = `
  <div class="main1__bubling">
    <div class="main1__bubling__container">
      <p class="main1__bubling__header">30%</p>
      <p class="main1__bubling__text">людей обращают внимание на Б</p>
    </div>
  </div>
`;

  document.querySelector(".button1").removeAttribute("style")
  document.querySelector(".button2").style = "color: #ffffff; background-color: rgb(252, 137, 80);"
  document.querySelector(".button3").removeAttribute("style")
}

function addButton3() {
  addButton();
  document.querySelector(".main1__container_bubling").innerHTML = `
  <div class="main1__bubling">
    <div class="main1__bubling__container">
      <p class="main1__bubling__header">30%</p>
      <p class="main1__bubling__text">людей обращают внимание на В</p>
    </div>
  </div>
`;

  document.querySelector(".button1").removeAttribute("style")
  document.querySelector(".button2").removeAttribute("style")
  document.querySelector(".button3").style = "color: #ffffff; background-color: rgb(252, 137, 80);"
}

function thirdScreen() {
  element.innerHTML = `
  <div class="main2__container">
    <div class="main2__container_bubling"></div>
    <footer class="main2__footer">
      <li class="main2__footer__link"><a href="#">название1</a></li>
      <li class="main2__footer__link"><a href="#">название2</a></li>
      <li class="main2__footer__link"><a href="#">название3</a></li>
      <li class="main2__footer__link"><a href="#">название4</a></li>
      <li class="main2__footer__link"><a href="#">очень&nbspдлинное&nbspназвание5</a></li>
      <li class="main2__footer__link"><a href="#">очень&nbspочень&nbspдлинное&nbspназвание6</a></li>
      <li class="main2__footer__link"><a href="#">длинное&nbspназвание7</a></li>
      <li class="main2__footer__link"><a href="#">длинное&nbspназвание8</a></li>
    </footer>
  </div>
  <div class="main2__right-container">
    <aside class="main2__aside">
      <div class="main2__aside__upperblock"></div>
      <div class="main2__aside__container">
        <div class="main2__aside__icon">
          <img src="./heart-yellow.jpg" alt="heart" class="main2__aside__ui-icon"/>
        </div>
        <div class="main2__aside__condition">
          <p class="main2__aside__condition__header">Укажите свой пол:</p>
        </div>
        <div class="main2__aside__performance">
          <button 
            class="ui-button ui-widget ui-corner-all button1" 
            id="main2__aside__performance__button" 
            onclick="selectMan()"
          >
            <img src="./black-man.jpg" alt="man" class="main2__aside__performance__button_person black-man"/>
            <img src="./white-man.png" alt="man" class="main2__aside__performance__button_person white-man" style="display: none;"/>
            Вариант А
          </button>
          <button 
            class="ui-button ui-widget ui-corner-all button2" 
            id="main2__aside__performance__button" 
            onclick="selectWoman()"
          >
            <img src="./black-woman.jpg" alt="woman" class="main2__aside__performance__button_person black-woman"/>
            <img src="./white-woman.png" alt="woman" class="main2__aside__performance__button_person white-woman" style="display: none;"/>
            Вариант Б
          </button>          
          <div class="main2__aside__performance__button_bubling"></div>
        </div>
      </div>
    </aside>
  </div>
  `;
}

function selectSex() {
  document.querySelector(".main2__aside__performance__button_bubling").innerHTML = `
    <button class="main2__aside__performance__button" onclick="fourthScreen()">продолжить</button>
  `;

  document.querySelector(".main2__aside").style = "box-shadow: none;"
}

function selectMan() {
  selectSex();
  document.querySelector(".main2__container_bubling").innerHTML = `
  <div class="main2__bubling">
    <div class="main2__bubling__container">
      <p class="main2__bubling__header">52,4%</p>
      <p class="main2__bubling__text">пользователей — Вариант А</p>
    </div>
  </div>
`;
  document.querySelector(".black-man").style = "display: none;"
  document.querySelector(".white-man").style = "display: inline-block;"
  document.querySelector(".black-woman").style = "display: inline-block;"
  document.querySelector(".white-woman").style = "display: none;"
  document.querySelector(".button1").style = "color: #ffffff; background-color: rgb(252, 193, 80);"
  document.querySelector(".button2").removeAttribute("style")
}

function selectWoman() {
  selectSex();
  document.querySelector(".main2__container_bubling").innerHTML = `
  <div class="main2__bubling">
    <div class="main2__bubling__container">
      <p class="main2__bubling__header">47,6%</p>
      <p class="main2__bubling__text">пользователей — Вариант Б</p>
    </div>
  </div>
`;
  document.querySelector(".black-man").style = "display: inline-block; margin-right: 1.5vw"
  document.querySelector(".white-man").style = "display: none; margin-right: 1.5vw"
  document.querySelector(".black-woman").style = "display: none; margin-right: 1.5vw"
  document.querySelector(".white-woman").style = "display: inline-block; margin-right: 1.5vw"
  document.querySelector(".button1").removeAttribute("style")
  document.querySelector(".button2").style = "color: #ffffff; background-color: rgb(252, 193, 80);"
}

function fourthScreen() {
  element.innerHTML = `
  <div class="main3__container">
    <div class="main3__container_bubling"></div>
    <footer class="main3__footer">
      <li class="main3__footer__link"><a href="#">название1</a></li>
      <li class="main3__footer__link"><a href="#">название2</a></li>
      <li class="main3__footer__link"><a href="#">название3</a></li>
      <li class="main3__footer__link"><a href="#">название4</a></li>
      <li class="main3__footer__link"><a href="#">очень&nbspдлинное&nbspназвание5</a></li>
      <li class="main3__footer__link"><a href="#">очень&nbspочень&nbspдлинное&nbspназвание6</a></li>
      <li class="main3__footer__link"><a href="#">длинное&nbspназвание7</a></li>
      <li class="main3__footer__link"><a href="#">длинное&nbspназвание8</a></li>
    </footer>
  </div>
  <div class="main3__right-container">
    <aside class="main3__aside">
      <div class="main3__aside__upperblock"></div>
      <div class="main3__aside__container">
        <div class="main3__aside__icon">
          <img src="./heart-blue.jpg" alt="heart" class="main3__aside__ui-icon"/>
        </div>
        <div class="main3__aside__condition">
          <p class="main3__aside__condition__header">Lorem ipsum dolor sit amet,  consectetur adipiscing elit,  sed </p>
        </div>
        <div class="main3__aside__performance">

          <form action="#" class="main3__aside__performance__form">
            <p class="main3__aside__performance__text">Я ищу:</p>
            <div class="main3__aside__performance__buttons">
              <button type="button"
                class="ui-button ui-widget ui-corner-all button1"
                id="main3__aside__performance__button" 
                onclick="selectPerson1()"
                onfocus="removeError()"
                style="color: #ffffff; background-color: rgb(29, 167, 192);" 
              >
                <img src="./black-man.jpg" alt="man" class="main3__aside__performance__button_person black-man" style="display: none;"/>
                <img src="./white-man.png" alt="man" class="main3__aside__performance__button_person white-man"/>
                Вариант 1                  
              </button>
             
              <button type="button"
                class="ui-button ui-widget ui-corner-all button2" 
                id="main3__aside__performance__button" 
                onclick="selectPerson2()"
                value="Вариант 2"
                onfocus="removeError()"
              >
                <img src="./black-woman.jpg" alt="woman" class="main3__aside__performance__button_person black-woman"/>
                <img src="./white-woman.png" alt="woman" class="main3__aside__performance__button_person white-woman" style="display: none;"/>    
                Вариант 2
              </button>

            </div>  

            <p class="main3__aside__performance__text">Ваше имя:</p> 
            <input type="text" value="" name="name" class="main3__aside__performance__input input1" onfocus="removeError()" onchange="showButton()"/> 

            <p class="main3__aside__performance__text">Email:</p> 
            <input type="email" value="" name="email" class="main3__aside__performance__input input2" onfocus="removeError()" onchange="showButton()"/> 

            <p class="main3__aside__performance__text">Придумайте пароль:</p> 
            <input type="password" value="" name="password" class="main3__aside__performance__input input3" onfocus="removeError()" onchange="showButton()"/> 

            <div class="main3__aside__performance__checkbox">
              <p class="main3__aside__performance__text main3__aside__performance__checkbox__text text">
                Регистрируясь, вы подтверждаете,
                что вам уже исполнилось  18 лет и вы ознакомились с условиями пользования сайтом</p> 
              <input type="checkbox" value="" name="password" class="checkbox" onfocus="removeError()" onchange="showButton()"/> 
            </div>

            <div class="main3__aside__performance__button_bubling">
              <button type="button" class="main3__aside__performance__button" onclick="validation()">продолжить</button>
            </div>
          </form>
          
        </div>
      </div>
    </aside>
  </div>
  `;
}

function selectPerson1() {
  document.querySelector(".black-man").style = "display: none"
  document.querySelector(".white-man").style = "display: inline-block"
  document.querySelector(".black-woman").style = "display: inline-block"
  document.querySelector(".white-woman").style = "display: none"
  document.querySelector(".button1").style = "color: #ffffff; background-color: rgb(29, 167, 192);"
  document.querySelector(".button2").removeAttribute("style")
}

function selectPerson2() {
  document.querySelector(".black-man").style = "display: inline-block"
  document.querySelector(".white-man").style = "display: none"
  document.querySelector(".black-woman").style = "display: none"
  document.querySelector(".white-woman").style = "display: inline-block"
  document.querySelector(".button1").removeAttribute("style")
  document.querySelector(".button2").style = "color: #ffffff; background-color: rgb(29, 167, 192);"
}


function removeError() {
  const buttonMale = document.querySelector(".button1")
  const buttonFemale = document.querySelector(".button2")
  const text = document.querySelector(".text")
  const input1 = document.querySelector(".input1")
  const input2 = document.querySelector(".input2")
  const input3 = document.querySelector(".input3")
  const checkbox = document.querySelector(".checkbox")

  input1.classList.remove("error")
  if (input1.value === "Введите свое имя") {
    input1.value = ''
  } else {
    input1.value
  }
  input2.classList.remove("error")
  if (input2.value === "Неверный формат email") {
    input2.value = ''
  } else {
    input2.value
  }
  input3.classList.remove("error")
  if (input3.value === "Придумайте новый пароль") {
    input3.value = ''
    input3.type = "password"
  } else {
    input3.value
  }
  text.removeAttribute("style")
} 

function validation() {
  const buttonMale = document.querySelector(".button1")
  const buttonFemale = document.querySelector(".button2")
  const text = document.querySelector(".text")
  const input1 = document.querySelector(".input1")
  const input2 = document.querySelector(".input2")
  const input3 = document.querySelector(".input3")
  const checkbox = document.querySelector(".checkbox")

  let name = /^[a-zA-Z\-]+$/

  if (!name.test(String(input1.value).toLowerCase())) {
    input1.classList.toggle("error")
    input1.value = 'Введите свое имя'
  } 

  let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!email.test(String(input2.value).toLowerCase())) {
    input2.classList.toggle("error")
    input2.value = 'Неверный формат email'
  } 

  let pass = /^[a-z0-9]{6,15}$/

  if (!pass.test(String(input3.value).toLowerCase())) {
    input3.classList.toggle("error")
    input3.type = "text"
    input3.value = 'Придумайте новый пароль'    
  } 

  if (!checkbox.checked) {
    text.style = "color: rgb(255, 0, 0);"
  } 
}

function showButton() {
  const input1 = document.querySelector(".input1")
  const input2 = document.querySelector(".input2")
  const input3 = document.querySelector(".input3")
  const checkbox = document.querySelector(".checkbox")
  const button = document.querySelector(".main3__aside__performance__button")
  let name = /^[a-zA-Z\-]+$/
  let email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  let pass = /^[a-z0-9]{6,15}$/


  if (input1.value !== "Введите свое имя" && name.test(String(input1.value).toLowerCase()) 
    && input2.value !== "Неверный формат email" && email.test(String(input2.value).toLowerCase())
    && input3.value !== "Придумайте новый пароль" && pass.test(String(input3.value).toLowerCase())
    && checkbox.checked
  ) {
    button.classList.toggle("active-button")
  } else {
    button.classList.remove("active-button")
  }
} 