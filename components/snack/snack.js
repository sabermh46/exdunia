

const sheet = new CSSStyleSheet();
        sheet.replace(`
        .snack {
            background: white;
            position: absolute;
            width: 90%;
            padding: 10px;
            display: flex;
            font-family: 'Inder', sans-serif;
            overflow: hidden;
            border-radius: 16px;
            left: 50%;
            transform: translateX(-50%);
            top: -100px;
            border: 1px solid red;
            transition: 1s ease;
            opacity: 0;
        }
        .snack.in {
            top: 100px;
            opacity: 1;
        }

        .snack .title {
            flex: 1;
        }
        .snack .close {
            border-left: 1px solid red;
            width: 30px;
            font-family: 'Poppins', sans-serif;
        }
        .snack > div {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    `)

const template = document.createElement("template")
template.innerHTML = `
    <div class="snack">
    <div class="title">
    </div>
    <div class="close">
        X
    </div>
    </div>
`

class Snack extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }


    
    static get observedAttributes() {
        return ['title'];
    }

    connectedCallback() {

        this.shadow.adoptedStyleSheets = [sheet]

        var title = this.getAttribute('title')
        this.shadowRoot.querySelector('.snack .title').textContent = title

        var snack = this.shadowRoot.querySelector('.snack')

        snack.classList.add('in')

        var clos = this.shadowRoot.querySelector('.snack .close')

        setTimeout(() => {
            snack.classList.remove('in')
        }, 5000);

        clos.addEventListener('click', ()=>{
            snack.classList.remove('in')
        })
        
    }

}

export default Snack