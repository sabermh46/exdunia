
const sheet = new CSSStyleSheet();
        sheet.replace(`
        a {
            text-decoration: none;
            background: var(--primary-gold);
            color: black;
            font-weight: 600;
            padding: 10px 20px;
            border-radius: 8px;
            display: inline-block;
        }
    `)

const template = document.createElement("template")
template.innerHTML = `<a></a>`

class MyBtn extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ['text', 'link'];
    }


    connectedCallback() {

        this.shadow.adoptedStyleSheets = [sheet]
        var text = this.getAttribute('text')
        var link = this.getAttribute('link')
        this.shadowRoot.querySelector('a').textContent = text
        this.shadowRoot.querySelector('a').href = link
        
        
    }

}

export default MyBtn