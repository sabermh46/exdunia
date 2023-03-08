
const sheet = new CSSStyleSheet();
        sheet.replace(`
        .action_button {
            box-sizing: border-box;
            background: #ffffffa1;
            color: white;
            height: 40px;
            width: 40px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            padding: 2px;
            gap: 2px;
            border-radius: 5px;
            cursor: pointer;
            position: relative;
            z-index: 999;
        }
        
        .action_button.active {
            background: transparent;
        }
        
        .action_button .small {
            background-position: center !important;
            background-size: cover !important;
            border-radius: 3px;
        }
        .action_button .small {
            height: 17px;
            width: 17px;
            z-index: 3;
            opacity: 1;
            visibility: visible;
            transition: 0.3s ease;
        }
        .action_button.active .small {
            opacity: 0;
            visibility: hidden;
        }
        .action_button .expandable {
            position: absolute;
            background: rgb(255 255 255 / 90%);
            height: 0px;
            width: 0px;
            border-radius: 50%;
            z-index: -11;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: 0.6s ease;
        }
        .action_button.active .expandable {
            height: 400px;
            width: 400px;
        }
        .action_button .bigger{
            height: 100%;
            width: 100%;
            position: absolute;
            left: 0;
            top: 0;
            z-index: 2;
            opacity: 0;
            transition: 0.6s ease;
        }
        .action_button.active .bigger {
            opacity: 1;
        }
        .action_button .bigger a.item {
            height: 100%;
            width: 100%;
            position: absolute;
            background-size: cover !important;
            border-radius: 4px;
            left: 0;
            top: 0;
            transform-origin: center center;
            cursor: pointer;
            transition: 0.6s ease;
            z-index: 1;
        }
        .action_button .bigger a.item:hover {
            box-shadow: 3px 5px 7px rgba(0,0,0,0.5);
        }
        
        .action_button .cross {
            height: calc(100% - 4px);
            width: calc(100% - 4px);
            position: absolute;
            z-index: 9;
            opacity: 0;
            visibility: hidden;
            transition: 0.5s ease;
        }
        .action_button.active .cross {
            opacity: 1;
            visibility: visible;
        }
        .action_button .cross::before, .action_button .cross::after {
            content: '';
            height: 3px;
            width: 5px;
            background: black;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 200px;
            transition: 0.5s;
            transform-origin: 50% 50%;
        }
        .action_button .cross::before {
            transform: translate(-50%, -50%);
        }
        .action_button .cross::after {
            transform: translate(-50%, -50%);
        }
        .action_button.active .cross::before, .action_button.active .cross::after {
            width: 34px;
        }
        .action_button.active .cross::before {
            transform: translate(-50%, -50%) rotate(-225deg);
        }
        .action_button.active .cross::after {
            transform: translate(-50%, -50%) rotate(225deg);
        }
    `)

const template = document.createElement("template")


var iconLinks = [
    {
        icon: 'icons/bet365.png',
        link: 'https://wa.me/8801892773001'
    },
    {
        icon: 'icons/betway.png',
        link: 'https://wa.me/8801892773001'
    },
    {
        icon: 'icons/lc.png',
        link: 'https://wa.me/8801892773001'
    },
    {
        icon: 'icons/velki.png',
        link: 'https://wa.me/8801892773001'
    }
]


var dialDiv = ``
for(var i=0; i<iconLinks.length;i++){
    dialDiv += `<div class="small"></div>`
}

template.innerHTML = `
<div class="action_button">
        ${dialDiv}
        <div class="cross"></div>
        <div class="expandable"></div>
</div>
`

class ActionButton extends HTMLElement {
    constructor() {
        super();
        this.isClicked = false
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }


    connectedCallback() {

        this.shadow.adoptedStyleSheets = [sheet]

        console.log('Custom square element added to page.');

        this.shadowRoot.querySelector(".action_button").addEventListener("click", ()=>{
            this.isClicked = !this.isClicked;
            console.log(this.isClicked);



            var biggerItems = this.shadowRoot.querySelectorAll('.action_button .bigger a');
            var angle = 120 / iconLinks.length

            this.isClicked 
            ? biggerItems.forEach((item, i)=>{
                item.style.transform = `rotate(${80 + angle*i }deg) translateX(150px) rotate(${360 - (80 + angle*i) }deg)`
            }) 
            : biggerItems.forEach((item, i)=>{
                item.style.transform = `rotate(0deg) translateX(0px) rotate(0deg)`
            }) 

            this.shadowRoot.querySelector(".action_button").classList.toggle("active");
    
        });
        this.shadowRoot.querySelectorAll(".action_button div.small").forEach((e, i)=>{
            e.style.background = `url(${iconLinks[i].icon})`
        })
        
        
        var div = document.createElement('div')
        div.classList.add('bigger')
        for(var i=0; i<iconLinks.length; i++){
            var a = document.createElement('a')
            a.href = iconLinks[i].link
            a.classList.add('item')
            a.style.background = `url(${iconLinks[i].icon})`
            div.appendChild(a)
        }
        this.shadowRoot.querySelector('.action_button').appendChild(div)
        
    }

}

export default ActionButton