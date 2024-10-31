//public var
const blurEffect = document.querySelector('.blur')

// theme handler
const themeHandlerButtons = document.querySelectorAll('.theme-mode')
const modal = document.querySelector('.modal')
const modalClosesBtn = document.querySelectorAll('.modal__close-btn')
const modalAgreeBtn = document.querySelector('.modal__agree-btn')
// mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const sidebarWrapper = document.querySelector('.sidebar')




// +++++++++++++++++++++++++++++++++++function++++++++++++++++++++++++++
// theme handler
function themeModeHandler(event) {
    let mode = event.target.dataset.mode
    if (mode === 'light') {
        document.documentElement.classList.remove('dark')
        localStorage.setItem('dark', false)
    } else {
        document.documentElement.classList.add('dark')
        localStorage.setItem('dark', true)
    }
}
// modal show control
function modalShowControl() {
    localStorage.setItem('showModal', false)
}
// mobile menu
function showMobileMenu() {
    sidebarWrapper.classList.remove('hidden')
    blurEffect.classList.remove('hidden')
}
function hiddenMobileMenu() {
    sidebarWrapper.classList.add('hidden')
    blurEffect.classList.add('hidden')
}
// +++++++++++++++++++++++++++++++++++event++++++++++++++++++++++++++

// theme handler
themeHandlerButtons.forEach(button => {
    button.addEventListener('click', themeModeHandler)
})
// load
window.addEventListener('load', () => {
    // dark mode
    let darkMode = localStorage.getItem('dark') == 'true' ? true : false
    let prefersUserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    let showModal = localStorage.getItem('showModal') == 'false' ? true : false
    if (showModal) {
        prefersUserTheme = false
    }
    if (prefersUserTheme) {
        modal.classList.remove('hidden')
    } else {
        modal.classList.add('hidden')
    }
    if (darkMode) {
        document.documentElement.classList.add('dark')
        modal.classList.add('hidden')
    } else {
        document.documentElement.classList.remove('dark')
    }


})

// modal close
modalClosesBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modalShowControl()
        modal.classList.add('hidden')
    })
})
// modal  agree btn
modalAgreeBtn.addEventListener('click', () => {
    modalShowControl()
    modal.classList.add('hidden')
    localStorage.setItem('dark', true)
    document.documentElement.classList.add('dark')
})

// mobile menu
mobileMenuBtn.addEventListener('click', showMobileMenu)
blurEffect.addEventListener('click', hiddenMobileMenu)

