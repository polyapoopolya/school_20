
let links = [
    { href: "/", title: "Главная" },
    { href: "/pages/about.html", title: "Информация" },
    { href: "/pages/contacts.html", title: "Контакты" }
]


export const Navigation = `
    <nav id="nav" class="navigation">
        <div id="burger" class="burger"> 
            <span class="line line1"></span>
            <span class="line line2"></span>
            <span class="line line3"></span>
        </div>
        <div id="navList" class="navList">
            <ul>
                ${links
                    .filter(el => el.href !== window.location.pathname)
                    .map(el => `<a href="${el.href}"><li><span class="linkTitle">${el.title}</span></li></a>`)
                    .join(' ')
                }
            </ul>
        </div>
    </nav>
`;
