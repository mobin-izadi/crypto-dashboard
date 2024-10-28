// theme handler
const themeHandlerButtons = document.querySelectorAll('.theme-mode')


// +++++++++++++++++++++++++++++++++++function++++++++++++++++++++++++++
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
// +++++++++++++++++++++++++++++++++++event++++++++++++++++++++++++++

// theme handler
themeHandlerButtons.forEach(button => {
    button.addEventListener('click', themeModeHandler)
})

window.addEventListener('load', () => {
    let darkMode = localStorage.getItem('dark') == 'true' ? true : false
    let prefersUserTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

    if (darkMode || prefersUserTheme) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }


})