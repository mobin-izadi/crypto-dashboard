(function charts() {

    var options = {
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
            categories: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
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

    let campaignChart = new ApexCharts(document.querySelector("#campaign-chart"), options);
    campaignChart.render();
})();