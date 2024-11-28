// filter
const filterBtn = document.getElementById('filter-btn')
const filterWrapper = document.querySelector('.filter-wrapper')
const filterDayBtns = document.querySelectorAll('.filter__btn')




// functions

// open && close filter Wrapper
function filterWrapperShowHandler() {
    filterWrapper.classList.toggle('hidden')
}
// change filter day
function filterDauHandler(mainBtn) {
    filterDayBtns.forEach(btn => {
        btn.classList.remove('text-purple-500')
        btn.classList.remove('bg-purple-200')
    })

    mainBtn.classList.add('text-purple-500')
    mainBtn.classList.add('bg-purple-200')
}



// events
// open && close filter Wrapper
filterBtn.addEventListener('click', filterWrapperShowHandler)
document.addEventListener('click', (event) => {
    if (!filterWrapper.contains(event.target) && !filterBtn.contains(event.target)) {
        filterWrapper.classList.add('hidden')
    }

})
// change filter day
filterDayBtns.forEach(btn => {
    btn.addEventListener('click', (event) => filterDauHandler(event.target))
})
