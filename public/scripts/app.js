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
// main chart
(function mainChart() {
    // داده‌های قیمت بیت‌کوین به صورت دستی
    let time = new Date().getTime()
    const bitcoinData = [
        [time - (23 * 60 * 60 * 1000), 34000], // 23 ساعت پیش
        [time - (22 * 60 * 60 * 1000), 34200],
        [time - (21 * 60 * 60 * 1000), 33500],
        [time - (20 * 60 * 60 * 1000), 33700],
        [time - (19 * 60 * 60 * 1000), 33900],
        [time - (18 * 60 * 60 * 1000), 33850],
        [time - (17 * 60 * 60 * 1000), 33600],
        [time - (16 * 60 * 60 * 1000), 34100],
        [time - (15 * 60 * 60 * 1000), 34400],
        [time - (14 * 60 * 60 * 1000), 33950],
        [time - (13 * 60 * 60 * 1000), 33700],
        [time - (12 * 60 * 60 * 1000), 33300],
        [time - (11 * 60 * 60 * 1000), 33400],
        [time - (10 * 60 * 60 * 1000), 33150],
        [time - (9 * 60 * 60 * 1000), 33000],
        [time - (8 * 60 * 60 * 1000), 33650],
        [time - (7 * 60 * 60 * 1000), 33900],
        [time - (6 * 60 * 60 * 1000), 33750],
        [time - (5 * 60 * 60 * 1000), 33500],
        [time - (4 * 60 * 60 * 1000), 33250],
        [time - (3 * 60 * 60 * 1000), 33100],
        [time - (2 * 60 * 60 * 1000), 33350],
        [time - (1 * 60 * 60 * 1000), 33500],
        [time, 33700] // اکنون
    ];
    // تنظیمات نمودار با استفاده از داده‌های دستی قیمت بیت‌کوین
    let options = {

        series: [{
            name: 'بیت کوین',
            data: bitcoinData  // داده‌ها از آرایه دستی استفاده می‌کنند
        }],
        chart: {
            type: 'area',
            height: '100%', // تنظیم ارتفاع به 100%
            width: '100%', // تنظیم عرض به 100%
            zoom: {
                autoScaleYaxis: true
            }
        },
        dataLabels: {
            enabled: false
        },
        markers: {
            size: 0,
            style: 'hollow',
        },
        xaxis: {
            type: 'datetime',
            tickAmount: 24,  // برای نمایش 24 تیک، هر تیک نشان دهنده یک ساعت است
        },
        tooltip: {
            x: {
                format: 'dd MMM yyyy HH:mm'  // فرمت نمایش زمان در tooltip
            }
        },
        fill: {
            type: 'solid',
            colors: ['rgba(58, 111, 248, 0.5)'],
        },
    };
    let chart = new ApexCharts(document.querySelector("#chart-area"), options);
    chart.render();

    let resetCssClasses = function (activeEl) {
        let els = document.querySelectorAll('.chart__btn');
        Array.prototype.forEach.call(els, function (el) {
            el.classList.remove('bg-blue-500');
        });

        activeEl.target.classList.add('bg-blue-500');
    };

    // 1 Hour
    document.querySelector('#one_hour').addEventListener('click', function (e) {
        resetCssClasses(e);
        chart.zoomX(
            new Date(Date.now() - 1 * 60 * 60 * 1000).getTime(), // 1 hour ago
            Date.now() // now
        );
    });

    // 3 Hours
    document.querySelector('#three_hours').addEventListener('click', function (e) {
        resetCssClasses(e);
        chart.zoomX(
            new Date(Date.now() - 3 * 60 * 60 * 1000).getTime(), // 3 hours ago
            Date.now() // now
        );
    });

    // 1 Day
    document.querySelector('#one_day').addEventListener('click', function (e) {
        resetCssClasses(e);
        chart.zoomX(
            new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).getTime(), // 1 day ago
            Date.now() // now
        );
    });

    // 1 Week
    document.querySelector('#one_week').addEventListener('click', function (e) {
        resetCssClasses(e);
        chart.zoomX(
            new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).getTime(), // 1 week ago
            Date.now() // now
        );
    });

    // 1 Month
    document.querySelector('#one_month').addEventListener('click', function (e) {
        resetCssClasses(e);
        chart.zoomX(
            new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).getTime(), // 1 month ago
            Date.now() // now
        );
    });
})();
// create coins charts
(function coinsCharts() {
    let optionsBtc = {
        series: [{
            name: "BTC",
            data: [10, 15, 8, 12, 18, 14, 20] // مقادیر نمونه
        }],
        chart: {
            type: 'line',
            width: '60%',
            toolbar: {
                show: false // این خط تمام آیکون‌های ابزار (زوم، ریست و غیره) را پنهان می‌کند
            }
        },
        stroke: {
            width: 2,
            curve: 'straight'
        },
        xaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور افقی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور افقی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور افقی
            }
        },
        yaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور عمودی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور عمودی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور عمودی
            }
        },
        grid: {
            show: false // پنهان کردن خطوط شبکه
        }
    };
    let optionsLtc = {
        series: [{
            name: "LTC",
            data: [10, 15, 8, 12, 18, 14, 20] // مقادیر نمونه
        }],
        chart: {
            type: 'line',
            width: '60%',
            toolbar: {
                show: false // این خط تمام آیکون‌های ابزار (زوم، ریست و غیره) را پنهان می‌کند
            }
        },
        colors: ['#64CFF9'],
        stroke: {
            width: 2,
            curve: 'straight'
        },
        xaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور افقی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور افقی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور افقی
            }
        },
        yaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور عمودی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور عمودی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور عمودی
            }
        },
        grid: {
            show: false // پنهان کردن خطوط شبکه
        }
    };
    let optionsEth = {
        series: [{
            name: "ETH",
            data: [10, 15, 8, 12, 18, 14, 20] // مقادیر نمونه
        }],
        chart: {
            type: 'line',
            width: '60%',
            toolbar: {
                show: false // این خط تمام آیکون‌های ابزار (زوم، ریست و غیره) را پنهان می‌کند
            }
        },
        colors: ['#3A6FF8'],
        stroke: {
            width: 2,
            curve: 'straight'
        },
        xaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور افقی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور افقی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور افقی
            }
        },
        yaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور عمودی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور عمودی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور عمودی
            }
        },
        grid: {
            show: false // پنهان کردن خطوط شبکه
        }
    };
    let optionsSol = {
        series: [{
            name: "SOL",
            data: [10, 15, 8, 12, 18, 14, 12] // مقادیر نمونه
        }],
        chart: {
            type: 'line',
            width: '60%',
            toolbar: {
                show: false // این خط تمام آیکون‌های ابزار (زوم، ریست و غیره) را پنهان می‌کند
            }
        },
        colors: ['#1ECB4F'],
        stroke: {
            width: 2,
            curve: 'straight'
        },
        xaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور افقی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور افقی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور افقی
            }
        },
        yaxis: {
            labels: {
                show: false // پنهان کردن برچسب‌های محور عمودی
            },
            axisBorder: {
                show: false // پنهان کردن خط مرزی محور عمودی
            },
            axisTicks: {
                show: false // پنهان کردن تیک‌های محور عمودی
            }
        },
        grid: {
            show: false // پنهان کردن خطوط شبکه
        }
    };

    let chartBtc = new ApexCharts(document.querySelector("#bitcoin-chart"), optionsBtc);
    chartBtc.render();
    let chartLtc = new ApexCharts(document.querySelector("#litecoin-chart"), optionsLtc);
    chartLtc.render();
    let chartEth = new ApexCharts(document.querySelector("#ethereum-chart"), optionsEth);
    chartEth.render();
    let chartSol = new ApexCharts(document.querySelector("#solana-chart"), optionsSol);
    chartSol.render();
})()

// *********************************************************events
assetShowBtn.addEventListener('click', assetShowHandler)
assetHiddenBtn.addEventListener('click', assetHiddenHandler)
