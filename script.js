import ActionButton from "./components/action_button/action_button.js"
import BurgerMenu from "./components/burger_menu/burger_menu.js"
import NavBar from "./components/navbar/navbar.js"
import OpenLand from "./components/opening/opening.js"
import Rotor from "./components/rotor/rotor.js"



if(window.localStorage.getItem('a_link') == null) {
    window.localStorage.setItem('a_link', 'Home')
}

window.addEventListener('beforeunload', function (e) {
    window.localStorage.setItem('a_link', 'Home')
});

console.log(window.localStorage.getItem('a_link'));


customElements.define("action-button", ActionButton)
customElements.define("burger-menu", BurgerMenu)
customElements.define("nav-bar", NavBar)
customElements.define("ro-tor", Rotor)
customElements.define("open-land", OpenLand)