const arrNav = Array.from(document.querySelectorAll('.slider_nav')) 
const mapBtnOval = Array.from(document.querySelectorAll('.oval_img')) 
const information = Array.from(document.querySelectorAll('.search_info'))
const arrPaddingSection = Array.from(document.querySelectorAll('.section_padding'))
const cardsViewBtn = Array.from(document.querySelectorAll('.direction'))
const smoothLinks = document.querySelectorAll('a[href^="#"]')

const btnLeft = document.querySelector('.btn__left')
const btnRight = document.querySelector('.btn__right')
const mainSlider = document.querySelector('.main_slider') 
const btnTravelLeft = document.querySelector('.travel_btn_left')
const btnTravelRight = document.querySelector('.travel_btn_right')
const travelSlider = document.querySelector('.travel_slide')
const navBtnSurf = document.querySelector('.surf_img_nav')
const scrollDownBtn = document.querySelector('.btn__down')
const searchBtn = document.querySelector('.img__search')
const searchInfo = document.querySelector('.search_information')
const inputFocus = document.querySelector('.search_input')
const delBtn = document.querySelector('.delete_info')
const inputInfo = document.querySelector('.search_input')
const subBtn = document.querySelector('.sub_info')
const plusNight = document.querySelector('.plus_night')
const minNight = document.querySelector('.min_night')
const plusGuest = document.querySelector('.plus_guests')
const minGuest = document.querySelector('.min_guests')
const burgerIcon = document.querySelector('.burger_btn')
const header = document.querySelector('header')
const sectionSliderTop = document.querySelector('.section__slider')


const sleepBtnLeft = document.querySelector('.sleep_btn_left')
const sleepBtnRight = document.querySelector('.sleep_btn_right')
const sleepSlider = document.querySelector('.sleep_slider')


let countMainSlide = 0 
let countTravelSlide = 0
let countSleepSlyde = 0

// фУНКЦИЯ СКРОЛЛА ДЛЯ СЛАЙДЕРОВ(УНИВЕРСАЛЬНАЯ)

const sliderScroll = (count, countainer) => { 
    const widthSlide = countainer.children[count].clientWidth 
    countainer.scroll({top:0, left: widthSlide * count, behavior : 'smooth'}) 
    countMainSlide = count 
    colorNav(count, arrNav)
}
let sliderCards = Array.from(document.querySelectorAll('.main_slider_card'))

setInterval(() => {
    countMainSlide < mainSlider.children.length - 1 ? ++countMainSlide : countMainSlide = 0
    sliderScroll(countMainSlide, mainSlider)
}, 6000)

btnLeft.addEventListener('click', () => { 
    countMainSlide > 0 ? countMainSlide-- : countMainSlide 
    sliderScroll(countMainSlide, mainSlider)
})

btnRight.addEventListener('click', () => { 
    countMainSlide < mainSlider.children.length ? ++countMainSlide : countMainSlide 
    sliderScroll(countMainSlide, mainSlider)
})

btnTravelLeft.addEventListener('click', () => {
    countTravelSlide > 0 ? countTravelSlide-- : countTravelSlide 
    sliderScroll(countTravelSlide, travelSlider)
})

btnTravelRight.addEventListener('click', () => { 
    countTravelSlide < travelSlider.children.length - 1 ? ++countTravelSlide : countTravelSlide 
    sliderScroll(countTravelSlide, travelSlider)
})

sleepBtnLeft.addEventListener('click', () => {
    countSleepSlyde> 0 ? countSleepSlyde-- : countSleepSlyde
    sliderScroll(countSleepSlyde, sleepSlider)
})

sleepBtnRight.addEventListener('click', () => { 
    countSleepSlyde < sleepSlider.children.length - 1 ? ++countSleepSlyde : countSleepSlyde
    sliderScroll(countSleepSlyde, sleepSlider)
})

// ФУНКЦИЯ ДЛЯ РАБОТЫ НАВИГАЦИИ СЛАЙДЕРА
const colorNav = (index, arrNav) => { // создаем функцию для замены цвета нижнего слайдера, индекс, массив
    arrNav.map(item => {
        item.querySelector('.slider__number').classList.remove('active_text') // удаление класса с цветом у текста цифры
        item.querySelector('.slider__paragraph').classList.remove('active_text') // удаление класса с цветом у текста параграфа
        item.querySelector('.line__slider').classList.remove('active_div') // удаление класса с цветом у линии
    })
    arrNav[index].querySelector('.slider__number').classList.add('active_text') // добавление класса с цветом у текста цифры
    arrNav[index].querySelector('.slider__paragraph').classList.add('active_text') // добавление класса с цветом у текста параграфа
    arrNav[index].querySelector('.line__slider').classList.add('active_div') // добавление класса с цветом у линии
}

arrNav.map((item, index, arr) => item.addEventListener('click', () =>{ // соотношение картинок скролла и нижнего слайдера
    colorNav(index, arrNav) 
    sliderScroll(index, mainSlider)
}))

// ОТОБРАЖЕНИЕ КОНТЕНТА НА КАРТЕ НА КАРТЕ ПРИ НАВЕДЕНИИ
mapBtnOval.map(item => item.addEventListener('mouseover', () => { 
    item.previousElementSibling.classList.add('content__none')
}))

mapBtnOval.map(item => item.addEventListener('mouseout', () => { 
    item.previousElementSibling.classList.remove('content__none')
}))

// переходы в навигации шапки
for(let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', (e) => {
        e.preventDefault()
        const id = smoothLink.getAttribute('href')

        document.querySelector(id).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

// подсчет стоимости в слайдах
const day = new Date().getDate()
const month = new Date().getMonth() + 1
const year = new Date().getFullYear()

document.getElementById('day').innerHTML = day < 10 ? '0' + day : day 
document.getElementById('month').innerHTML = month < 10 ? '0'+ month : month
document.getElementById('year').innerHTML = year

class Countries {
        countN = 1;
        countP = 1;
        countG = 1;
        nightsCount = Array.from(document.querySelectorAll('.nights'))
        guestsCount = Array.from(document.querySelectorAll('.guests'))
        priceCamp = Array.from(document.querySelectorAll('.price_count'))
    constructor(priceForNigth, priceForGuest, SalesPercent) {
        this.priceForNigth = priceForNigth;
        this.priceForGuest = priceForGuest;
        this.SalesPercent = SalesPercent;
    }
}

const objAusralia = new Countries(17.45, 10, 2)
const objUsa = new Countries(20, 10, 2)
const objPhill = new Countries(30.42, 10, 2)
const objFrance = new Countries(35.94, 10, 2)
const arrPricesForCity = [objAusralia, objUsa, objPhill, objFrance]
const arrBtnMinNights = Array.from(document.querySelectorAll('.min_night'))
const arrBtnPlusNights = Array.from(document.querySelectorAll('.plus_night'))
const arrBtnMinGuests = Array.from(document.querySelectorAll('.min_guests'))
const arrBtnPlusGuests = Array.from(document.querySelectorAll('.plus_guests'))

const calculate = (obj, index) =>  {
    const priceForNigth =  obj.countN * obj.priceForNigth
    const priceForGuest = obj.countG * obj.priceForGuest
    const SalesPercent = obj.countG * obj.priceForGuest
    const result = priceForGuest - priceForGuest / 100 * SalesPercent
    obj.countP = result + priceForNigth
    obj.priceCamp[index].innerHTML = "$ " + obj.countP.toFixed(1) + " USD"
}

arrBtnMinNights.map((item,index) => item.addEventListener('click', () => {
    const obj  = arrPricesForCity[index]
    obj.countN > 1 ? --obj.countN : obj.countN = 1 
    obj.nightsCount[index].innerHTML = obj.countN + " nights"
    calculate(obj, index)
}))

arrBtnPlusNights.map((item,index) => item.addEventListener('click', () => {
    const obj  = arrPricesForCity[index]
    ++obj.countN
    obj.nightsCount[index].innerHTML= obj.countN + " nights"
    calculate(obj, index)
}))

arrBtnMinGuests.map((item,index) => item.addEventListener('click', () => {
    const obj = arrPricesForCity[index]
    obj.countG > 1 ? --obj.countG : obj.countG = 1
    obj.guestsCount[index].innerHTML = obj.countG + " guests"
    calculate(obj, index)
}))

arrBtnPlusGuests.map((item,index) => item.addEventListener('click', () => {
    const obj = arrPricesForCity[index]
    ++obj.countG
    obj.guestsCount[index].innerHTML = obj.countG + " guests"
    calculate(obj, index)
}))

// поисковик
searchBtn.addEventListener('click', () => {
    searchInfo.classList.remove('none_info')
    inputFocus.focus()
})

delBtn.addEventListener('click', () => {
    searchInfo.classList.add('none_info')
})

let searchCards = []
let countSearchCards = 0

searchFunction = (text) => {
    information.map((element) => {
        if(element.innerText.toLowerCase().includes(text.toLowerCase())) {
            console.log(element)
            element.classList.add('animation_search')
        } else {
            element.classList.remove('animation_search')
        }
    })

    searchCards = information.filter(item => item.innerText.toLowerCase().includes(text.toLowerCase()))
 }

inputInfo.addEventListener('input', (e) => {
    e.preventDefault()
    inputInfo.value.length > 3 ? 
    searchFunction(inputInfo.value) : information.map(item => item.classList.remove('animation_search'))
    countSearchCards = 0
})
// ПЕРЕЪОД ПОИСКОВИКА
subBtn.addEventListener('click', () => {
    searchCards[countSearchCards].scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
    console.log(searchCards, countSearchCards)
    countSearchCards < searchCards.length - 1 ? ++countSearchCards : countSearchCards = 0
})

//  БУРГЕР МЕНЮ
burgerIcon.addEventListener('click', (e) => {
    header.classList.toggle('header--active')
    burgerIcon.classList.toggle('burger_btn--active')
    arrPaddingSection.map(item => item.classList.toggle('padding-none'))
    sectionSliderTop.classList.toggle('section__slider--active')
})




