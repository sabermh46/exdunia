import ActionButton from "./components/action_button/action_button.js"
import BurgerMenu from "./components/burger_menu/burger_menu.js"
import MyBtn from "./components/myBtn/my_btn.js"
import NavBar from "./components/navbar/navbar.js"
import OpenLand from "./components/opening/opening.js"
import Rotor from "./components/rotor/rotor.js"
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, addDoc, collection, doc, getDocs } from 'https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js'
import Snack from "./components/snack/snack.js"
import AgentCard from "./components/agent_card/agent_card.js"

const firebaseConfig = {
    apiKey: "AIzaSyC0BigqDXq_tmwAWqtGi0FrccEmGpPa6X4",
    authDomain: "exdunia-dd776.firebaseapp.com",
    projectId: "exdunia-dd776",
    storageBucket: "exdunia-dd776.appspot.com",
    messagingSenderId: "558839466920",
    appId: "1:558839466920:web:c72cbc5af509e793abab9d"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore();


customElements.define("sna-ck", Snack)
customElements.define("action-button", ActionButton)
customElements.define("burger-menu", BurgerMenu)
customElements.define("nav-bar", NavBar)
customElements.define("ro-tor", Rotor)
customElements.define("open-land", OpenLand)
customElements.define("my-btn", MyBtn)
customElements.define("agent-card", AgentCard)






