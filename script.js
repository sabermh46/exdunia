import ActionButton from "./components/action_button/action_button.js"
import BurgerMenu from "./components/burger_menu/burger_menu.js"
import MyBtn from "./components/myBtn/my_btn.js"
import NavBar from "./components/navbar/navbar.js"
import OpenLand from "./components/opening/opening.js"
import Rotor from "./components/rotor/rotor.js"



customElements.define("action-button", ActionButton)
customElements.define("burger-menu", BurgerMenu)
customElements.define("nav-bar", NavBar)
customElements.define("ro-tor", Rotor)
customElements.define("open-land", OpenLand)
customElements.define("my-btn", MyBtn)


if(window.localStorage.getItem('a_link') == null) {
    window.localStorage.setItem('a_link', 'home')
}