

const sheet = new CSSStyleSheet();
        sheet.replace(`
        .menu {
            height: 40px;
            width: 40px;
            border-radius: 5px;
            position: relative;
        }

        .menu .burger {
            height: 100%;
            width: 100%;
            background: #F2BB10;
            border-radius: 5px;
            position: relative;
            cursor: pointer;
            -webkit-tap-highlight-color: transparent;
            overflow: hidden;
        }

        .menu .burger .up,
        .menu .burger .mid,
        .menu .burger .down {
            height: 3px;
            width: 20px;
            background: white;
            position: absolute;
            transform: translateY(-50%);
            border-radius: 5px;
            right: 4px;
            transition: 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .menu .burger .up {
            width: 32px;
            top: 25%;
            background: var(--primary-red);
        }
        .menu .burger .mid {
            width: 15px;
            top: 50%;
            background: var(--primary-red);
        }
        .menu .burger .down {
            width: 24px;
            top: 75%;
            background: black;
        }

        .menu.active .burger .up {
            width: 32px;
            top: 50%;
            left: 50%;
            right: none;
            background: var(--primary-red);
            transform: translate(-50%, -50%) rotate(-45deg);
        }
        .menu.active .burger .mid {
            transform: translate(150%, -50%);
        }
        .menu.active .burger .down {
            width: 32px;
            left: 50%;
            right: none;
            top: 50%;
            background: var(--primary-red);
            transform: translate(-50%, -50%) rotate(45deg);
        }

        .menu .links {
            position: absolute;
            background: var(--primary-gold);
            width: 250px;
            top: calc(100% + 10px);
            right: 0px;
            height: calc(100vh - 90px);
            border-radius: 8px;
            padding: 10px;
            transform: translateX(calc(100% + 10px));
            transition: 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }
        .menu.active .links {
            transform: translateX(0);
        }
        .menu .links .link {
            display: block;
            width: 100%;
            font-size: 18px;
            font-family: 'Poppins', sans-serif;
            text-decoration: none;
            color: var(--primary-red);
            font-weight: 700;
            letter-spacing: 1px;
            text-align: center;
            padding: 7px 0;
            transition: 0.3s ease;
            border-radius: 8px;
        }
        .menu .links .link:hover, .menu .links .link.active {
            background: var(--primary-red);
            color: var(--primary-gold);
        }
    `)

    var pages = [
        {
            page: 'Home',
            link: '/'
        },
        {
            page: 'Proxy',
            link: '/proxy.html'
        },
        {
            page: 'Master',
            link: '/master.html'
        },
        {
            page: 'Offer',
            link: '/offer.html'
        },
        {
            page: 'Quiz Winner',
            link: '/quiz_winner.html'
        },
        {
            page: 'Cricket Penalty',
            link: '/cricket_penalty.html'
        },
        {
            page: 'List',
            link: '/list.html'
        },
        {
            page: 'All Links',
            link: '/all_links.html'
        },
        {
            page: 'News',
            link: '/news.html'
        },
        {
            page: 'eSports',
            link: '/esports.html'
        },
        {
            page: 'Scocial',
            link: '/social.html'
        }
    ]

    var all_links = ``;
    pages.forEach((page, i)=>{
        all_links += `<a href="${page.link}" class="link">${page.page}</a>`;
    })

const template = document.createElement("template")
template.innerHTML = `
        <div class="menu">
            <div class="burger">
                <div class="up"></div>
                <div class="mid"></div>
                <div class="down"></div>
            </div>
            <div class="links">
                ${all_links}
            </div>
        </div>
`

class BurgerMenu extends HTMLElement {
    constructor() {
        super();
        this.shadow = this.attachShadow({ mode: "open"})
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    connectedCallback() {
        this.shadow.adoptedStyleSheets = [sheet]

        var links = this.shadowRoot.querySelectorAll('.links .link')
        
        this.shadowRoot.querySelector('.menu .burger').addEventListener('click', ()=>{
            this.shadowRoot.querySelector('.menu').classList.toggle('active')
        })



        var path = window.location.pathname;
        pages.forEach((page, i)=>{
            if(page.link == path){
                links[i].classList.add('active');
            }
        })

    }


}

export default BurgerMenu