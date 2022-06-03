export const load = (() => {
    
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
        const mainContainer = document.createElement('div')
        mainContainer.classList.add('main-container')
        mainDiv.appendChild(mainContainer)

        showHome()
    }

    const showHome = () => {
        const mainContainer = document.querySelector('.main-container')

        /* title */
        const mainContainerTitle = document.createElement('h1')
        mainContainerTitle.classList.add('main-container-title')
        mainContainerTitle.innerHTML = 'Beary\'s Breakfast Bar'
        mainContainer.appendChild(mainContainerTitle)

        /* description box */
        const sectionContainerDescription = document.createElement('div')
        sectionContainerDescription.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerDescription)

        const descriptionText = document.createElement('p')
        descriptionText.classList.add('section-text')
        descriptionText.innerHTML = "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again."
        sectionContainerDescription.appendChild(descriptionText)

        /* hours box */
        const sectionContainerHours = document.createElement('div')
        sectionContainerHours.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerHours)

        const hoursTitle = document.createElement('h3')
        hoursTitle.classList.add('section-title')
        hoursTitle.innerHTML = 'Hours'
        sectionContainerHours.appendChild(hoursTitle)

        const hoursText = document.createElement('p')
        hoursText.classList.add('section-text')
        hoursText.innerHTML = 'Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm'
        sectionContainerHours.appendChild(hoursText)

        /* location box */
        const sectionContainerLocation = document.createElement('div')
        sectionContainerLocation.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerLocation)

        const locationTitle = document.createElement('h3')
        locationTitle.classList.add('section-title')
        locationTitle.innerHTML = 'Location'
        sectionContainerLocation.appendChild(locationTitle)

        const locationText = document.createElement('p')
        locationText.classList.add('section-text')
        locationText.innerHTML = '123 Forest Drive, Forestville, Maine'
        sectionContainerLocation.appendChild(locationText)
    }

    const showMenu = () => {}
    const showContact = () => {}

    const wipeContent = () => {
        const container = document.querySelector('.main-container')
        let child = container.lastElementChild
        while (child) {
            container.removeChild(child)
            child = container.lastElementChild
        }
        console.log('Removed content children')
    }

    return { 
        loadWelcome, 
        showHome, showMenu, showContact, 
        wipeContent 
    }
})()
