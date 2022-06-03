/* images */
import HoneyTea from '../images/honey-tea.jpeg'
import BearyTea from '../images/beary-tea.jpg'
import Toast from '../images/toast.jpg'
import Fruit from '../images/fruit.jpg'
import Pancakes from '../images/pancakes.jpg'
import Veggie from '../images/veggie.jpg'
import Mama from '../images/mama.jpg'
import Papa from '../images/papa.jpg'
import Baby from '../images/baby.jpeg'


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

    const showMenu = () => {
        const mainContainer = document.querySelector('.main-container')

        /* title */
        const mainContainerTitle = document.createElement('h1')
        mainContainerTitle.classList.add('main-container-title')
        mainContainerTitle.innerHTML = 'Menu'
        mainContainer.appendChild(mainContainerTitle)

        /* subtitle */
        const subtitleBeverages = document.createElement('h2')
        subtitleBeverages.classList.add('main-container-subtitle')
        subtitleBeverages.innerHTML = 'Beverages'
        mainContainer.appendChild(subtitleBeverages)

        /* honey tea box */
        const sectionContainerHoney = document.createElement('div')
        sectionContainerHoney.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerHoney)

        const honeyTitle = document.createElement('h3')
        honeyTitle.classList.add('section-title')
        honeyTitle.innerHTML = 'Honey tea'
        sectionContainerHoney.appendChild(honeyTitle)

        const honeyText = document.createElement('p')
        honeyText.classList.add('section-text')
        honeyText.innerHTML = "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!"
        sectionContainerHoney.appendChild(honeyText)

        const honeyImage = document.createElement('img')
        honeyImage.classList.add('section-image')
        honeyImage.src = HoneyTea
        sectionContainerHoney.appendChild(honeyImage)

        /* beary tea box */
        const sectionContainerBeary = document.createElement('div')
        sectionContainerBeary.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerBeary)

        const bearyTitle = document.createElement('h3')
        bearyTitle.classList.add('section-title')
        bearyTitle.innerHTML = 'Beary tea'
        sectionContainerBeary.appendChild(bearyTitle)

        const bearyText = document.createElement('p')
        bearyText.classList.add('section-text')
        bearyText.innerHTML = "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request."
        sectionContainerBeary.appendChild(bearyText)

        const bearyImage = document.createElement('img')
        bearyImage.classList.add('section-image')
        bearyImage.src = BearyTea
        sectionContainerBeary.appendChild(bearyImage)

        /* subtitle */
        const subtitleSides = document.createElement('h2')
        subtitleSides.classList.add('main-container-subtitle')
        subtitleSides.innerHTML = 'Sides'
        mainContainer.appendChild(subtitleSides)

        /* toast box */
        const sectionContainerToast = document.createElement('div')
        sectionContainerToast.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerToast)

        const toastTitle = document.createElement('h3')
        toastTitle.classList.add('section-title')
        toastTitle.innerHTML = 'Toast and Jam'
        sectionContainerToast.appendChild(toastTitle)

        const toastText = document.createElement('p')
        toastText.classList.add('section-text')
        toastText.innerHTML = "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam."
        sectionContainerToast.appendChild(toastText)

        const toastImage = document.createElement('img')
        toastImage.classList.add('section-image')
        toastImage.src = Toast
        sectionContainerToast.appendChild(toastImage)

        /* fruit box */
        const sectionContainerFruit = document.createElement('div')
        sectionContainerFruit.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerFruit)

        const fruitTitle = document.createElement('h3')
        fruitTitle.classList.add('section-title')
        fruitTitle.innerHTML = 'Fresh Fruit'
        sectionContainerFruit.appendChild(fruitTitle)

        const fruitText = document.createElement('p')
        fruitText.classList.add('section-text')
        fruitText.innerHTML = "A small bowl of fresh fruit, whatever we find at the market for the day."
        sectionContainerFruit.appendChild(fruitText)

        const fruitImage = document.createElement('img')
        fruitImage.classList.add('section-image')
        fruitImage.src = Fruit
        sectionContainerFruit.appendChild(fruitImage)

        /* subtitle */
        const subtitleMain = document.createElement('h2')
        subtitleMain.classList.add('main-container-subtitle')
        subtitleMain.innerHTML = 'Main Dishes'
        mainContainer.appendChild(subtitleMain)

        /* pancakes box */
        const sectionContainerPancakes = document.createElement('div')
        sectionContainerPancakes.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerPancakes)

        const pancakesTitle = document.createElement('h3')
        pancakesTitle.classList.add('section-title')
        pancakesTitle.innerHTML = 'Pancakes'
        sectionContainerPancakes.appendChild(pancakesTitle)

        const pancakesText = document.createElement('p')
        pancakesText.classList.add('section-text')
        pancakesText.innerHTML = "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup."
        sectionContainerPancakes.appendChild(pancakesText)

        const pancakesImage = document.createElement('img')
        pancakesImage.classList.add('section-image')
        pancakesImage.src = Pancakes
        sectionContainerPancakes.appendChild(pancakesImage)

        /* pancakes box */
        const sectionContainerVeggie = document.createElement('div')
        sectionContainerVeggie.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerVeggie)

        const veggieTitle = document.createElement('h3')
        veggieTitle.classList.add('section-title')
        veggieTitle.innerHTML = 'Beary Veggie Sandwich'
        sectionContainerVeggie.appendChild(veggieTitle)

        const veggieText = document.createElement('p')
        veggieText.classList.add('section-text')
        veggieText.innerHTML = "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up."
        sectionContainerVeggie.appendChild(veggieText)

        const veggieImage = document.createElement('img')
        veggieImage.classList.add('section-image')
        veggieImage.src = Veggie
        sectionContainerVeggie.appendChild(veggieImage)
    }

    const showContact = () => {
        const mainContainer = document.querySelector('.main-container')

        /* title */
        const mainContainerTitle = document.createElement('h1')
        mainContainerTitle.classList.add('main-container-title')
        mainContainerTitle.innerHTML = 'Contact us'
        mainContainer.appendChild(mainContainerTitle)

        /* mama box */
        const sectionContainerMama = document.createElement('div')
        sectionContainerMama.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerMama)

        const mamaTitle = document.createElement('h3')
        mamaTitle.classList.add('section-title')
        mamaTitle.innerHTML = 'Mama Bear'
        sectionContainerMama.appendChild(mamaTitle)

        const mamaText = document.createElement('p')
        mamaText.classList.add('section-text')
        mamaText.innerHTML = "Chef<br>555-555-5554<br>totallyRealEmail@notFake.com"
        sectionContainerMama.appendChild(mamaText)

        const mamaImage = document.createElement('img')
        mamaImage.classList.add('section-image')
        mamaImage.src = Mama
        sectionContainerMama.appendChild(mamaImage)

        /* papa box */
        const sectionContainerPapa = document.createElement('div')
        sectionContainerPapa.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerPapa)

        const papaTitle = document.createElement('h3')
        papaTitle.classList.add('section-title')
        papaTitle.innerHTML = 'Papa Bear'
        sectionContainerPapa.appendChild(papaTitle)

        const papaText = document.createElement('p')
        papaText.classList.add('section-text')
        papaText.innerHTML = "Manager<br>555-555-5555<br>perfectlyRealEmail@notFake.com"
        sectionContainerPapa.appendChild(papaText)

        const papaImage = document.createElement('img')
        papaImage.classList.add('section-image')
        papaImage.src = Papa
        sectionContainerPapa.appendChild(papaImage)

        /* baby box */
        const sectionContainerBaby = document.createElement('div')
        sectionContainerBaby.classList.add('main-container-section')
        mainContainer.appendChild(sectionContainerBaby)

        const babyTitle = document.createElement('h3')
        babyTitle.classList.add('section-title')
        babyTitle.innerHTML = 'Baby Bear'
        sectionContainerBaby.appendChild(babyTitle)

        const babyText = document.createElement('p')
        babyText.classList.add('section-text')
        babyText.innerHTML = "Waiter<br>555-555-5556<br>totallyRealEmail@notFake.com"
        sectionContainerBaby.appendChild(babyText)

        const babyImage = document.createElement('img')
        babyImage.classList.add('section-image')
        babyImage.src = Baby
        sectionContainerBaby.appendChild(babyImage)
    }

    const wipeContent = () => {
        const container = document.querySelector('.main-container')
        let child = container.lastElementChild
        while (child) {
            container.removeChild(child)
            child = container.lastElementChild
        }
    }

    return { 
        loadWelcome, 
        showHome, showMenu, showContact, 
        wipeContent 
    }
})()
