// asset
const assetShowBtn = document.querySelector('.asset__show-btn')
const assetHiddenBtn = document.querySelector('.asset__hid-btn')
const assetToman = document.querySelector('.asset__t')
const assetDollar = document.querySelector('.asset__d')
let asset = 3_500_000
let assetConvertToDollar = asset / 60_000

//********************************************************* functions
function assetShowHandler() {
    assetToman.innerHTML = asset.toLocaleString()
    assetDollar.innerHTML = assetConvertToDollar.toFixed(2).toLocaleString()
    assetShowBtn.classList.toggle('hidden')
    assetHiddenBtn.classList.toggle('hidden')
}
function assetHiddenHandler() {
    assetToman.innerHTML = asset.toString().replace(/[0-9]/g, "*");
    assetDollar.innerHTML = assetConvertToDollar.toFixed(2).replace(/[0-9]/g, "*")
    assetShowBtn.classList.toggle('hidden')
    assetHiddenBtn.classList.toggle('hidden')
}

// *********************************************************events
assetShowBtn.addEventListener('click', assetShowHandler)
assetHiddenBtn.addEventListener('click', assetHiddenHandler)