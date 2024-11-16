(function charts() {

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
    let userChart = new ApexCharts(document.querySelector("#user-chart"), saleOptions);
    userChart.render();
})();