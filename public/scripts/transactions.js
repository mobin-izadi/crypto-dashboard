// filter
const filterBtn = document.getElementById('filter-btn')
const filterWrapper = document.querySelector('.filter-wrapper')




// functions
function filterWrapperShowHandler() {
    filterWrapper.classList.toggle('hidden')
}



// events
filterBtn.addEventListener('click', filterWrapperShowHandler)
document.addEventListener('click', (event) => {
    if (!filterWrapper.contains(event.target) && !filterBtn.contains(event.target)) {
        filterWrapper.classList.add('hidden')
    }

})