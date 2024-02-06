import { useState, React} from 'react';
import "../../public/css/header.css";
import "../../public/css/AllMenu.css";

const  Header = () => {
  const [Menu_class, setMenuClass] = useState("menu-bar unclick")
  const [User_class, setUserClass] = useState("user unclick")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [isUserClicked, setIsUserClicked] = useState(false)

  const updateMenu = () => {
    if(!isMenuClicked) {
       document.getElementById("menu-navigator").classList.add("hide")
       setMenuClass("menu-bar click")
       setUserClass("user off")
       setIsUserClicked(false)
    }
    else {
     document.getElementById("menu-navigator").classList.remove("hide")
     setMenuClass("menu-bar unclick")
    }
    setIsMenuClicked(!isMenuClicked)
}

const updateUser = () => {
  if(!isUserClicked) {
     document.getElementById("user-navigator").classList.add("hide")
     setUserClass("user on")
     setMenuClass("menu-bar unclick")
     setIsMenuClicked(false)
  }
  else {
   document.getElementById("user-navigator").classList.remove("hide")
   setUserClass("user off")
  }
  setIsUserClicked(!isUserClicked)
}

  return (
    <>
        <section className="AllHeader">
            <div className="header">
            <a className={User_class} onClick={updateUser}>
            <svg width="43.000000" height="47.349998" viewBox="0 0 43 47.35" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <ellipse id="circle" cx="21.500000" cy="10.600006" rx="8.666666" ry="8.600000" fill="#000000" fill-opacity="0"/>
                <ellipse id="circle" cx="21.500000" cy="10.600006" rx="8.666666" ry="8.600000" stroke-opacity="1.000000" stroke-width="4.000000" stroke-linejoin="round"/>
                <path id="path" d="M41 45.35C41 34.6633 32.2695 26 21.5 26C10.7305 26 2 34.6633 2 45.35L41 45.35Z" fill="#000000" fill-opacity="0" fill-rule="evenodd"/>
                <path id="path" d="M21.5 26C10.7305 26 2 34.6633 2 45.35L41 45.35C41 34.6633 32.2695 26 21.5 26Z" stroke-opacity="1.000000" stroke-width="4.000000" stroke-linejoin="round"/>
            </svg>

            </a>
            <button className="logotype">
                <a href="/">
                    <span>c</span>
                    <span>o</span>
                    <span>m</span>
                    <span>p</span>
                    <span>l</span>
                    <span>e</span>
                    <span>x</span>
                  </a>
            </button>
            <a className={Menu_class} onClick={updateMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </a>
            </div>
            <div id='menu-navigator'  className={isMenuClicked ? "menu-navigator" : "menu-navigator hide"} >
              <a href="" className="nav-link fw8 wc mont">Главная</a>
              <a href="" className="nav-link fw8 wc mont">Тарифы</a>
              <a href="" className="nav-link fw8 wc mont">Новости</a>
              <a href="" className="nav-link fw8 wc mont">Инструменты</a>
              <a href="" className="nav-link fw8 wc mont">Калькулятор доходности</a>
            </div>
            <div id='user-navigator'  className={isUserClicked ? "user-navigator" : "user-navigator hide"}>
              <a href="" className="nav-link fw8 wc mont">Name</a>

            </div>
        </section>
    </>
  );
}

export default Header