
const sheet = new CSSStyleSheet();
        sheet.replace(`      
        .navigation {
            box-sizing: border-box;
            width: 100%;
            height: 60px;
            position: fixed;
            top: 0;
            left: 0;
            padding: 10px;
            display: flex;
            justify-content: space-between;
            z-index: 99;
        }
        .navigation .brand {
            height: 40px;
            background: var(--primary-gold);
            color: black;
            width: max-content;
            padding: 0 10px;
            display: flex;
            font-size: 18px;
            letter-spacing: 0.5px;
            font-family: 'Poppins', sans-serif;
            justify-content: center;
            align-items: center;
            border-radius: 6px;
            font-weight: 700;
        }

        .navigation .actions {
            height: 100%;
            display: flex;
            gap: 10px;
        }
    `)

const template = document.createElement("template")
template.innerHTML = `
    <div class="navigation">
        <div class="brand">
            Exchange Dunia
        </div>
        <div class="actions">
            <action-button></action-button>
            <burger-menu></burger-menu>
        </div>
    </div>
`

class NavBar extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }


    connectedCallback() {        
        this.shadow.adoptedStyleSheets = [sheet]
    }

}

export default NavBar