import { userTransactions } from './data.js'
// filter status
const filterStatusBtn = document.getElementById('filter-btn')
const filterStatusWrapper = document.querySelector('.filter-wrapper')
const statusFilterBtns = document.querySelectorAll('.filter__status')
// filter days
const filterDayBtns = document.querySelectorAll('.filter__btn')
const currentDate = new Date();
// search param
let searchParam = new URLSearchParams(window.location.search)
// table transactions
let userData = userTransactions
const tableBody = document.querySelector('.table__body')


// ------------------------------------funcs
// filter status
function filterWrapperShowHandler() {
    filterStatusWrapper.classList.toggle('hidden')
    // close filter Wrapper
    document.addEventListener('click', (event) => {
        if (!filterStatusWrapper.contains(event.target) && !filterStatusBtn.contains(event.target)) {
            filterStatusWrapper.classList.add('hidden')
        }

    })
}
// set status filter
function statusFilterHandler(input) {
    if (input.dataset.status == 'Paid') {
        searchParam.set('paid', input.checked)
    } else if (input.dataset.status == 'not-paid') {
        searchParam.set('notPaid', input.checked)
    } else {
        searchParam.set('in-progress', input.checked)
    }
    window.history.pushState({}, '', `${window.location.pathname}?${searchParam}`)
    createTransactionsTable()
}
// create transaction table
function createTransactionsTable() {
    let date = searchParam.get('date')
    let paid = searchParam.get('paid') == 'true' ? true : false
    let inProgress = searchParam.get('in-progress') == 'true' ? true : false
    let notPaid = searchParam.get('notPaid') == 'true' ? true : false
    let mainData = null
    if (date && date != 'all') {
        mainData = filterDay(date)
    } else {
        mainData = userData
    }
    if (paid || inProgress || notPaid) {
        mainData = mainData.filter(user => {
            return paid && user.status == "Paid" || inProgress && user.status == "in-progress" || notPaid && user.status == "not-paid"
        })
    }
    createTable(mainData)
}
// filter data
function filterData(time) {
    let date = null
    let filterUser = userData.filter(user => {
        date = new Date(user.date).getTime()
        if (date > time) {
            return user
        }
    })
    return filterUser
}
// filter day
function filterDay(date) {
    let now = currentDate.getTime()
    switch (date) {
        case '1week':
            return filterData(now - 604800000)
        case '1month':
            return filterData(now - 2630000000)
        case '6month':
            return filterData(now - 15552000000)
        case '1year':
            return filterData(now - 31536000000)
        default:
            break;
    }

}

// create table transactions
function createTable(data) {
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
// filter days
function filterDayHandler(btn) {
    // remove active style
    filterDayBtns.forEach(btn => {
        btn.classList.remove('text-purple-500')
        btn.classList.remove('bg-purple-200')
    })
    // add active style
    btn.classList.add('text-purple-500')
    btn.classList.add('bg-purple-200')
    // add search param
    let dayFilter = btn.dataset.day
    switch (dayFilter) {
        case 'all':
            searchParam.set('date', 'all')
            break;
        case '1week':
            searchParam.set('date', '1week')
            break;
        case '1month':
            searchParam.set('date', '1month')
            break;
        case '6month':
            searchParam.set('date', '6month')
            break;
        case '1year':
            searchParam.set('date', '1year')
            break;
        default:
            break;
    }
    window.history.pushState({}, '', `${window.location.pathname}?${searchParam}`)
    createTransactionsTable()
}

function checkBtnsActive() {
    let date = searchParam.get('date')
    let paid = searchParam.get('paid') == 'true' ? true : false
    let inProgress = searchParam.get('in-progress') == 'true' ? true : false
    let notPaid = searchParam.get('notPaid') == 'true' ? true : false

    if (date) {
        filterDayBtns.forEach(btn => {
            btn.classList.remove('text-purple-500')
            btn.classList.remove('bg-purple-200')
            if (btn.dataset.day == date) {
                btn.classList.add('text-purple-500')
                btn.classList.add('bg-purple-200')
            }
        })
    }

    paid && (statusFilterBtns[0].checked = true)
    inProgress && (statusFilterBtns[1].checked = true)
    notPaid && (statusFilterBtns[2].checked = true)
}





// ----------------------------------events
// filter status
filterStatusBtn.addEventListener('click', filterWrapperShowHandler)
statusFilterBtns.forEach(input => input.addEventListener('change', event => statusFilterHandler(event.target)))
// filter days
filterDayBtns.forEach(btn => {
    btn.addEventListener('click', (event) => filterDayHandler(event.target))
})
// window
window.addEventListener('load', () => {
    checkBtnsActive()
    createTransactionsTable()
})
