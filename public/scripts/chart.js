let isDarkMode = localStorage.getItem('dark') == 'true' ? true : false;
const themeButtons = document.querySelectorAll('.theme-mode')



function charts() {
    // چارت کمپین
    let campaignChartOptions = {
        chart: {
            type: 'line',
            height: '100%',
            width: '100%',
            toolbar: {
                show: false // غیرفعال کردن دکمه‌های toolbar
            },
        },
        series: [{
            name: 'Data',
            type: 'column',
            data: [40, 20, 10, 20, 60, 10, 50] // داده‌های نمودار
        }],
        xaxis: {
            categories: ['دوشنبه', 'سه شنبه', 'چهارشنبه', 'پنجشنبه', 'جمعه', 'شبنه', 'یکشنبه'],
            min: 0,
            labels: {
                style: {
                    colors: '#FFFFFF'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#FFFFFF' // تنظیم رنگ برچسب‌های محور عمودی
                }
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 1, // گوشه‌های منحنی
                columnWidth: '15%', // عرض ستون‌ها
            }
        },
        grid: {
            borderColor: '#FFFFFF', // رنگ خطوط شبکه
            strokeDashArray: 5, // خطوط پیوسته
            xaxis: {
                lines: {
                    show: true // نمایش خطوط شبکه محور X
                }
            },
            yaxis: {
                lines: {
                    show: true // نمایش خطوط شبکه محور Y
                }
            }
        },
        colors: ['#FFFFFF'], // رنگ ستون‌ها
        fill: {
            opacity: 1,
        },
        tooltip: {
            theme: 'dark' // تم تیره برای پنجره توضیحات
        },

    };
    let campaignChart = new ApexCharts(document.querySelector("#campaign-chart"), campaignChartOptions);
    campaignChart.render();
    // چارت فروش
    let saleOptions = {
        chart: {
            type: 'line',
            height: '100%',
            width: '100%',
            toolbar: {
                show: false // غیرفعال کردن دکمه‌های toolbar
            },
        },
        series: [{
            name: 'Data',
            data: [100_000, 2_000_000, 1_500_000, 1_000_000, 8_000_000, 800_000, 200_000] // داده‌های نمودار
        }],
        xaxis: {
            categories: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور', 'مهر'],
            labels: {
                style: {
                    colors: '#FFFFFF'
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: '#FFFFFF' // تنظیم رنگ برچسب‌های محور عمودی
                }
            }
        },
        plotOptions: {
            bar: {
                borderRadius: 1, // گوشه‌های منحنی
                columnWidth: '5%', // عرض ستون‌ها
            }
        },
        grid: {
            borderColor: '#FFFFFF', // رنگ خطوط شبکه
            strokeDashArray: 5, // خطوط پیوسته
            xaxis: {
                lines: {
                    show: true // نمایش خطوط شبکه محور X
                }
            },
            yaxis: {
                lines: {
                    show: true // نمایش خطوط شبکه محور Y
                }
            }
        },
        colors: ['#FFFFFF'], // رنگ ستون‌ها
        fill: {
            opacity: 1,
        },
        tooltip: {
            theme: 'dark' // تم تیره برای پنجره توضیحات
        },
        markers: {
            size: 6, // اندازه دایره‌ها
            colors: ['#FFFFFF'], // رنگ داخل دایره‌ها
            strokeColors: '#FFFFFF', // رنگ حاشیه دایره‌ها
            strokeWidth: 2, // ضخامت حاشیه
            hover: {
                size: 8 // اندازه دایره هنگام هاور
            }
        },

    };
    let saleChart = new ApexCharts(document.querySelector("#sale-chart"), saleOptions);
    saleChart.render();
    // چارت کاربران
    let userChart = new ApexCharts(document.querySelector("#user-chart"), saleOptions);
    userChart.render();
    // چارت امیتاز
    let rateOptions = {
        series: [70, 20, 5, 3, 2],
        chart: {
            width: '100%',
            height: '100%',
            type: 'pie',
            foreColor: isDarkMode ? '#FFFFFF' : '#000000'
        },
        labels: ['5', '4', '3', '2', '1'],
        dataLabels: {
            style: {
                colors: isDarkMode ? ['#FFFFFF'] : ['#000000'] // رنگ لیبل‌ها
            }
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light' // تنظیم تولتیپ برای دارک/لایت
        },

    };
    let rateChart = new ApexCharts(document.querySelector("#user-rate"), rateOptions);
    rateChart.render();
    // چارت نرخ تبدیل و بازگشت کاربران
    let rate2Options = {
        series: [{
            name: ' نرخ تبدیل',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'نرخ بازگشت کاربران',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
        chart: {
            height: '100%',
            width: '100%',
            type: 'area',
            foreColor: isDarkMode ? '#FFFFFF' : '#000000' // رنگ پیش‌فرض متن‌ها
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        xaxis: {
            type: 'datetime',
            categories: [
                "2018-09-19T00:00:00.000Z",
                "2018-09-19T01:30:00.000Z",
                "2018-09-19T02:30:00.000Z",
                "2018-09-19T03:30:00.000Z",
                "2018-09-19T04:30:00.000Z",
                "2018-09-19T05:30:00.000Z",
                "2018-09-19T06:30:00.000Z"
            ],
            labels: {
                style: {
                    colors: isDarkMode ? '#FFFFFF' : '#000000' // رنگ لیبل‌های محور X
                }
            }
        },
        yaxis: {
            labels: {
                style: {
                    colors: isDarkMode ? '#FFFFFF' : '#000000' // رنگ لیبل‌های محور Y
                }
            }
        },
        tooltip: {
            theme: isDarkMode ? 'dark' : 'light' // تغییر رنگ پس‌زمینه و متن تولتیپ
        }
    };
    let rate2Chart = new ApexCharts(document.querySelector("#user-rate2"), rate2Options);
    rate2Chart.render();
    // تابعی برای تغییر تم در لحظه
    function toggleDarkMode() {
        isDarkMode = !isDarkMode;
        rate2Chart.updateOptions({
            chart: {
                foreColor: isDarkMode ? '#FFFFFF' : '#000000'
            },
            xaxis: {
                labels: {
                    style: {
                        colors: isDarkMode ? '#FFFFFF' : '#000000'
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: isDarkMode ? '#FFFFFF' : '#000000'
                    }
                }
            },
            tooltip: {
                theme: isDarkMode ? 'dark' : 'light'
            }
        });

        rateChart.updateOptions({
            chart: {
                foreColor: isDarkMode ? '#FFFFFF' : '#000000'
            },
            dataLabels: {
                style: {
                    colors: isDarkMode ? ['#FFFFFF'] : ['#000000'] // رنگ لیبل‌ها
                }
            },
            tooltip: {
                theme: isDarkMode ? 'dark' : 'light' // تنظیم تولتیپ برای دارک/لایت
            },
        });
    }
    themeButtons.forEach(button => {
        button.addEventListener('click', toggleDarkMode)
    })

}


window.addEventListener('load', charts)

