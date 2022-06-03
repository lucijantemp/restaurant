import { load } from "./load.js"

export const events = (() => {

    /* menu bar button events */    
    const init = () => {
        /* select menu btns */
        const btnHome = document.querySelector('.btn-home')
        const btnMenu = document.querySelector('.btn-menu')
        const btnContact = document.querySelector('.btn-contact')

        /* add event listeners */
        btnHome.addEventListener('click', () => {
            load.wipeContent()
            load.showHome()
        })
        btnMenu.addEventListener('click', () => {
            load.wipeContent()
            load.showMenu()
        })
        btnContact.addEventListener('click', () => {
            load.wipeContent()
            load.showContact()
        })
    }

    return { init }
})()