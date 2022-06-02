export const pageLoad = (() => {
    
    const contentDiv = document.querySelector('#content');

    const loadWelcome = () => {
        /* header & main containers */
        const headerDiv = document.createElement('header')
        const mainDiv   = document.createElement('main')

        contentDiv.appendChild(headerDiv)
        contentDiv.appendChild(mainDiv)

        /* header content */
        const headerBtnsContainer = document.createElement('ul')
        headerBtnsContainer.classList.add('header-btns-container')
        headerDiv.appendChild(headerBtnsContainer)

        const btnHome = document.createElement('button')
        btnHome.classList.add('btn-header', 'btn-home')
        btnHome.innerHTML = 'Home'
        headerBtnsContainer.appendChild(btnHome)
        const btnMenu = document.createElement('button')
        btnMenu.classList.add('btn-header', 'btn-menu')
        btnMenu.innerHTML = 'Menu'
        headerBtnsContainer.appendChild(btnMenu)
        const btnContact = document.createElement('button')
        btnContact.classList.add('btn-header', 'btn-contact')
        btnContact.innerHTML = 'Contact'
        headerBtnsContainer.appendChild(btnContact)

        /* main content */
    }

    return { loadWelcome }
})()