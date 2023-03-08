

const sheet = new CSSStyleSheet();
        sheet.replace(`
        .opening {
            height: 200px;
            width: 300px;
            background: white;
            margin: 0 auto;
            border-radius: 16px;
            background: #f2b910b8;
            top: 60px;
            left: 50%;
            transform: translateX(-50%);
            position: fixed;
            transform-origin: 50% 0;
            transition: 0.1s;
            padding: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
        .opening .sub_head {
            font-family: 'Inder', cursive;
            text-align: center;
            font-size: 18px;
            font-weight: 800;
            letter-spacing: 3px;
        }
        .opening .head {
            font-family: 'Oswald', cursive;
            text-align: center;
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 4px;
        }
        .opening .super {
            font-family: 'Inder', sans-serif;
            text-align: center;
            width: max-content;
            margin: 5px auto;
            padding: 5px 12px;
            background: var(--primary-red);
            color: var(--primary-gold);
            font-size: 16px;
            font-weight: 800;
            border-radius: 50px;
        }
        .opening .whatsapp {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            gap: 5px;
            font-size: 30px;
            font-family: 'Oswald', sans-serif;
            text-decoration: none;
            color: white;
            text-shadow: 0px 1px 3px rgba(0, 0, 0, 0.47);
        }
        .opening .whatsapp img {
            width: 50px;

        }
    `)

const template = document.createElement("template")
template.innerHTML = `
    <div class="opening">
    <div class="sub_head">
        World Of
    </div>
    <div class="head">
        Exchange Dunia
    </div>
    <div class="super">
        Super 9999
    </div>
    <a href="https://wa.me/8801892773001" target="_blank" class="whatsapp">
        <img src="./icons/wa.png" alt="">
        <span class="text">+88 01892 773001</span>
    </a>
    </div>
`

class OpenLand extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    remove = (elem)=> {
        elem.style.opacity = 0;
    }
    make = (y, elem)=> {
        elem.style.opacity = 1;
        elem.style.transform = `translateX(-50%) scale(${1 - ((1/335)*y)})`
    }


    connectedCallback() {

        this.shadow.adoptedStyleSheets = [sheet]

        var opening = this.shadowRoot.querySelector('.opening')
        var h = opening.getBoundingClientRect();
        var height = h.height
 

        window.addEventListener('scroll', ()=>{
                var y = window.scrollY
                y <= height*1.5 ? this.make(y, opening) : this.remove(opening);
        })
        
    }

}

export default OpenLand