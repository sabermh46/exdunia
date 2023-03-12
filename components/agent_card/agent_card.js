

const sheet = new CSSStyleSheet();
        sheet.replace(`
        a.agent_card {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            background: rgba(255, 255, 255, 0.33);
            -webkit-box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
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
            -webkit-transition: 0.3s ease;
            -o-transition: 0.3s ease;
            transition: 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        a.agent_card:hover {
            border: 1px solid var(--primary-gold);
        }
        
        a.agent_card .icon, a.agent_card .arro {
            -webkit-box-flex: 1;
                -ms-flex: 1;
                    flex: 1;
        }
        a.agent_card .text {
            -webkit-box-flex: 5;
                -ms-flex: 5;
                    flex: 5;
            font-size: 20px;
            font-weight: normal;
            text-shadow: 1px 2px 3px rgba(0,0,0,0.5);
            -webkit-transition: 0.3s ease;
            -o-transition: 0.3s ease;
            transition: 0.3s ease;
        }
        a.agent_card:hover .text {
            color: var(--primary-gold);
            letter-spacing: 1px
        }

        a.agent_card .arro, a.agent_card .text {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-pack: center;
                -ms-flex-pack: center;
                    justify-content: center;
            -webkit-box-align: center;
                -ms-flex-align: center;
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
            -webkit-transition: 0.3s ease;
            -o-transition: 0.3s ease;
            transition: 0.3s ease;
        }
        a.agent_card:hover .arro div, a.agent_card:hover .arro div{
            background: var(--primary-gold);
        }
        
        a.agent_card .arro div::before {
            top: 11px;
            -webkit-transform: translate(-50%, 0) rotate(45deg);
                -ms-transform: translate(-50%, 0) rotate(45deg);
                    transform: translate(-50%, 0) rotate(45deg);
        }
        
        a.agent_card .arro div::after{
            top: 20px;
            -webkit-transform: translate(-50%, 0) rotate(-45deg);
                -ms-transform: translate(-50%, 0) rotate(-45deg);
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
            -webkit-transition: 0.3s ease;
            -o-transition: 0.3s ease;
            transition: 0.3s ease;
        }
        a.agent_card:hover .tooltip {
            color: var(--primary-gold);
            background: rgba(0, 0, 0, 0.3);
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