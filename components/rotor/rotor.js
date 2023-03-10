

const sheet = new CSSStyleSheet();
        sheet.replace(`
        div.rotor {
            position: fixed !important;
            height: 300px;
            width: 300px;
            background: url(rotor.png);
            background-size: cover;
            opacity: 0.6;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            overflow: auto;
            z-index:-1;
        }
    `)

const template = document.createElement("template")
template.innerHTML = `<div class="rotor"></div>`

class Rotor extends HTMLElement {
    constructor() {
        super();
        this.isClicked = false
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    rotateTheRotor = (a, y)=>{
        a.style.transform = `translate(-50%, -50%) rotate(${y*0.7}deg)`
    }


    connectedCallback() {

        this.shadow.adoptedStyleSheets = [sheet]

        var rotor = this.shadowRoot.querySelector('div.rotor')
        window.onscroll = ()=> {
            var y = window.scrollY
            this.rotateTheRotor(rotor, y)
        }
        
    }

}

export default Rotor