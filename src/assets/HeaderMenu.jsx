import { useState, React} from 'react';
import "../../public/css/header.css";
import "../../public/css/AllMenu.css";

const  Header = () => {
  const [Menu_class, setMenuClass] = useState("menu-bar unclick")
  const [User_class, setUserClass] = useState("user unclick")
  const [isMenuClicked, setIsMenuClicked] = useState(false)
  const [isUserClicked, setIsUserClicked] = useState(false)

  const [MenuMobil_class, setMenuMobilClass] = useState("menuMobilNavigate hideMobil")
  const [UserMobil_class, setUserMobilClass] = useState("userMobilNavigate hideMobil")
  const [isMenuMobilClicked, setIsMenuMobilClicked] = useState(false)
  const [isUserMobilClicked, setIsUserMobilClicked] = useState(false)

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

const updateMenuMobil = () => {
  if(!isMenuMobilClicked) {
     setMenuMobilClass("menuMobilNavigate")
     setUserMobilClass("userMobilNavigate hideMobil")
  }
  else {
   setMenuMobilClass("menuMobilNavigate hideMobil")
  }
  setIsMenuMobilClicked(!isMenuMobilClicked)
}

const updateUserMobil = () => {
  if(!isUserMobilClicked) {
     setUserMobilClass("userMobilNavigate")
     setMenuMobilClass("menuMobilNavigate hideMobil")
  }
  else {
   setUserMobilClass("userMobilNavigate hideMobil")
  }
  setIsUserMobilClicked(!isUserMobilClicked)
}

  return (
    <>
        <section className="AllHeader w1920">
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
              <a href="" className="nav-link fw8 bc mont">Главная</a>
              <a href="" className="nav-link fw8 bc mont">Тарифы</a>
              <a href="" className="nav-link fw8 bc mont">Новости</a>
              <a href="" className="nav-link fw8 bc mont">Инструменты</a>
              <a href="" className="nav-link fw8 bc mont">Калькулятор доходности</a>
            </div>
            <div id='user-navigator'  className={isUserClicked ? "user-navigator" : "user-navigator hide"}>
              <a href="" className="nav-link fw8 bc mont">Name</a>

            </div>
        </section>
        <section className="AllHeaderMenuMobil">
          <div className="logotypeMobil">
            <a href="/" className="logoText mont">
              complex
            </a>
          </div>
          <div className="menuDown">
          <div className="menuUser buttonMenuDown">
            <a onClick={updateUserMobil} className="userMobil">
            <svg viewBox="0 0 29 32.236" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs/>
              <ellipse id="circle" cx="14.500000" cy="7.300003" rx="5.777778" ry="5.800002" fill="#FFFFFF" fill-opacity="0"/>
              <ellipse id="circle" cx="14.500000" cy="7.300003" rx="5.777778" ry="5.800002" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round"/>
              <path id="path" d="M27.5 30.736C27.5 23.5287 21.6797 17.686 14.5 17.686C7.32031 17.686 1.5 23.5287 1.5 30.736L27.5 30.736Z" fill="#FFFFFF" fill-opacity="0" fill-rule="evenodd"/>
              <path id="path" d="M14.5 17.686C7.32031 17.686 1.5 23.5287 1.5 30.736L27.5 30.736C27.5 23.5287 21.6797 17.686 14.5 17.686Z" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round"/>
            </svg>
            <p className="mont downText">Профиль</p> 
            </a>
          </div>
          <div className="menuMain buttonMenuDown">
            <a href="/" className="mainDown wc stop-copy">
            <svg  viewBox="0 0 27 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
              <defs/>
              <path id="path" d="M1.5 10.8333L1.5 29.5L25.5 29.5L25.5 10.8333L13.5 1.5L1.5 10.8333Z" fill="#FFFFFF" fill-opacity="0" fill-rule="nonzero"/>
              <path id="path" d="M1.5 29.5L25.5 29.5L25.5 10.8333L13.5 1.5L1.5 10.8333L1.5 29.5Z" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round"/>
              <path id="path" d="M9.5 19.3889L9.5 29.5L17.5 29.5L17.5 19.3889L9.5 19.3889Z" fill="#FFFFFF" fill-opacity="0" fill-rule="nonzero"/>
              <path id="path" d="M9.5 29.5L17.5 29.5L17.5 19.3889L9.5 19.3889L9.5 29.5Z" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linejoin="round"/>
              <path id="path" d="M1.52002 30.98L1.5 31C0.659912 31 0 30.34 0 29.5C0 28.66 0.659912 28 1.5 28L1.52002 28.02L1.52002 30.98ZM25.48 28.02L25.5 28C26.3401 28 27 28.66 27 29.5C27 30.34 26.3401 31 25.5 31L25.48 30.98L25.48 28.02Z" fill="#FFFFFF" fill-opacity="0" fill-rule="nonzero"/>
              <path id="path" d="M1.5 29.5L25.5 29.5" stroke-opacity="1.000000" stroke-width="3.000000" stroke-linecap="round"/>
            </svg>
              <p className='mont downText'>Главная</p>
            </a>
          </div>
          <div className="menuBars buttonMenuDown">
            <a onClick={updateMenuMobil} className="barsDown">
            <svg  viewBox="0 0 32 24.3333" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <defs/>
                <path id="Vector 1" d="M0 1.5L32 1.5"  stroke-opacity="1.000000" stroke-width="3.000000"/>
                <path id="Vector 2" d="M0 12.1667L32 12.1667"  stroke-opacity="1.000000" stroke-width="3.000000"/>
                <path id="Vector 3" d="M0 22.8333L32 22.8333"  stroke-opacity="1.000000" stroke-width="3.000000"/>
              </svg>
              <p className="mont downText">Меню</p> 
            </a>
          </div>
          </div>
          <section className={MenuMobil_class} id='menuMobil'>
              <button className="cancel">x</button>
              <div className="linksMobilNavigate">
                <a href="/" className="linkMobil mont bc">Главная</a>
                <a href="/" className="linkMobil mont bc">Тарифы</a>
                <a href="/" className="linkMobil mont bc">Новости</a>
                <a href="/" className="linkMobil mont bc">Инструменты</a>
              </div>
          </section>
          <section className={UserMobil_class} id='userMobil'>
              <h2>Name</h2>
          </section>
        </section>
    </>
  );
}

export default Header