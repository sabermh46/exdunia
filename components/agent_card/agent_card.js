

const sheet = new CSSStyleSheet();
        sheet.replace(`
        a.agent_card {
            display: flex;

            background: rgba(255, 255, 255, 0.33);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(6.2px);
            -webkit-backdrop-filter: blur(6.2px);
            border: 1px solid rgba(255, 255, 255, 0.55);

            color: white;
            font-family: 'Poppins', sans-serif;
            text-decoration: none;
            padding: 15px 10px;
            border-radius: 12px;
            -webkit-tap-highlight-color: transparent;
            transition: 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        a.agent_card:hover {
            background: rgba(255, 255, 255, 0.50);
        }
        
        a.agent_card .icon, a.agent_card .arro {
            flex: 1;
        }
        a.agent_card .text {
            flex: 5;
            font-size: 20px;
            font-weight: normal;
            text-shadow: 1px 2px 3px rgba(0,0,0,0.5);
        }
        a.agent_card .arro, a.agent_card .text {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        a.agent_card .arro div {
            width: 35px;
            height: 35px;
            border-radius: 100px;
            background: rgb(230, 230, 230);
            position: relative;
        }
        a.agent_card .arro div::before, a.agent_card .arro div::after{
            content: '';
            width: 15px;
            height: 3px;
            position: absolute;
            background: gray;
            left: 55%;
            border-radius: 50px;
        }
        
        a.agent_card .arro div::before {
            top: 11px;
            transform: translate(-50%, 0) rotate(45deg);
        }
        
        a.agent_card .arro div::after{
            top: 20px;
            transform: translate(-50%, 0) rotate(-45deg);
        }
        a.agent_card .tooltip {
            position: absolute;
            background: rgba(0, 0, 0, 0.1);
            border-radius: 0 0 6px 6px;
            top: 0;
            left: -4px;
            color: white;
            font-size: 10px;
            padding: 0px 10px 2px 10px;
            font-weight: 400;
            letter-spacing: 1px;
        }
    `)

const template = document.createElement("template")
template.innerHTML = `
    <a href="" class="agent_card">
        <div class="text"></div>
        <div class="arro"><div></div></div>
        <span class="tooltip"></span>
    </a>
`

class AgentCard extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }


    
    static get observedAttributes() {
        return ['link', 'text', 'type'];
    }

    connectedCallback() {

        this.shadow.adoptedStyleSheets = [sheet]

        var card = this.shadowRoot.querySelector('a.agent_card')
        var title = this.shadowRoot.querySelector('a.agent_card .text')
        var type = this.shadowRoot.querySelector('a.agent_card .tooltip')

        var wa_num = this.getAttribute('link')
        var text = this.getAttribute('text')
        var agent_type = this.getAttribute('type')

        card.href = `https://wa.me/${wa_num}`
        title.textContent = text
        type.textContent = agent_type

        if(agent_type == 'Master Agent'){
            card.classList.add('master')
        }

        
    }

}

export default AgentCard