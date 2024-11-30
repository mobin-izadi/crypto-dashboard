import { userTransactions } from '../scripts/data.js'


// filter
const filterBtn = document.getElementById('filter-btn')
const filterWrapper = document.querySelector('.filter-wrapper')
const filterDayBtns = document.querySelectorAll('.filter__btn')
// table transactions
let userData = null
const tableBody = document.querySelector('.table__body')
const paginationWrapper = document.querySelector('.pagination')
// search param
let searchParam = new URLSearchParams(window.location.search)




//---------------------------------------------------- functions

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
// create table transactions
function createTable(data, start, end) {
    console.log(data);
    console.log(start);
    console.log(end);

    data = data.slice(start, end)
    tableBody.innerHTML = ''
    let newTr = null
    let jalaliDate = null
    let gregorianDate = null
    data.forEach(user => {
        gregorianDate = new Date(user.date)
        jalaliDate = moment(gregorianDate, 'YYYY-MM-DD').locale('fa').format('YYYY/MM/DD');

        newTr = `
        <tr class="*:text-center *:align-middle *:py-4 *:relative *:block md:*:table-cell ">
                        <td class="transaction-table__row" data-label="مشتری">
                            <div class="flex items-center justify-center gap-2">
                                <img src=${user.img}
                                    class="w-11 h-11 object-cover rounded-full overflow-hidden" alt="">
                                <span class="w-28 inline-block">${user.customer}</span>
                            </div>
                        </td>
                        <td class="font-bold text-green-500 transaction-table__row" data-label="پیگیری">
                            ${user.trackingNumber}</td>
                        <td class="text-sm transaction-table__row" data-label="مبلغ">
                            ${user.amount.toLocaleString()} <span class="text-xs font-light">تومان</span>    </td>
                        <td class="text-sm text-zinc-500  transaction-table__row " data-label="تاریخ">
                            ${jalaliDate}</td>
                        <td class="transaction-table__row" data-label="وضعیت">
                           ${user.status == 'Paid' ? ` <span class="text-xs text-green-500 bg-white dark:bg-gray-800 py-1 px-3 rounded-full">پرداخت شده</span>` : ''}
                           ${user.status == 'in-progress' ? ` <span class="text-xs text-yellow-500 bg-white dark:bg-gray-800 py-1 px-3 rounded-full">درحال انجام</span>` : ''}
                           ${user.status == 'not-paid' ? ` <span class="text-xs text-red-500 bg-white dark:bg-gray-800 py-1 px-3 rounded-full">پرداخت نشده</span>` : ''}
                        </td>
                        <td class="transaction-table__row" data-label="عملیات">
                            <button>
                                <svg class="w-5 h-5">
                                    <use href="#dots">

                                    </use>
                                </svg>
                            </button>
                        </td>
                    </tr>
        `
        tableBody.insertAdjacentHTML('beforeend', newTr)

    })
}
// create pagination
function createPagination(data, count) {
    let currentPage = searchParam.get('page')
    let pagination = data.length % count != 0 ? (data.length / count) + 1 : (data.length / count)
    let paginationElem = ``
    for (let index = 0; index < pagination; index++) {
        paginationElem += `<button class="px-2 py-1 rounded-md dark:border-gray-800 border ${currentPage == index + 1 ? `bg-blue-500 text-white` : ''} pagination__btn">${index + 1}</button>`
    }
    paginationWrapper.insertAdjacentHTML('beforeend', paginationElem)
    document.querySelectorAll('.pagination__btn').forEach(btn => {
        btn.addEventListener('click', (event) => PaginationHandler(event.target))
    })
}
// PaginationHandler
function PaginationHandler(btn) {
    console.log(btn);
    // remove active class
    document.querySelectorAll('.pagination__btn').forEach(btn => {
        btn.classList.remove('bg-blue-500')
        btn.classList.remove('text-white')
    })
    // add active style
    btn.classList.add('bg-blue-500')
    btn.classList.add('text-white')

    let numPage = Number(btn.innerHTML)
    searchParam.set('page', numPage)
    window.history.pushState({}, '', `${window.location.pathname}?${searchParam}`)
    let start = 0
    let end = 20
    if (numPage > 1) {
        start = (numPage - 1) * 20
        end = start + 20
    }
    createTable(userData, start, end)


}

function createTransactionsTable(data) {
    let numPage = Number(searchParam.get('page'))
    let start = 0
    let end = 20
    if (numPage > 1) {
        start = (numPage - 1) * 20
        end = start + 20
    } else {
        searchParam.set('page', 1)
    }

    // createTable
    createTable(data, start, end)
    // create pagination
    createPagination(data, 20)
}

function showTransactionsHandler() {

}




//--------------------------------------------------------------- events
// load page
window.addEventListener('load', () => {
    userData = userTransactions
    createTransactionsTable(userData)
})
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
