function charts4() {
    var chartS = new Highcharts.Chart({
        chart: {
            renderTo: 'Skin4',
            backgroundColor: '#16181d',
        },
        title: {
            text: 'Skin (Celcius)',
            style: { color: '#8f9195' },
        },
        series: [{
            showInLegend: false,
            data: []
        }],
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style: { fontSize: 10, textOutline: false }
                }
            },
            series: { color: '#059e8a' }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%M:%S' }
        },
        yAxis: {
            tickInterval: 0.1,
            title: false
            //title: { text: 'Temperature (Fahrenheit)' }
        },
        credits: { enabled: false }

    });


    setInterval(function () {
        var x = (new Date()).getTime(),
            y = parseFloat(document.getElementById("cSskin4").innerHTML);
        //console.log(this.responseText);
        if (y > 0) {
            if (chartS?.series[0]?.data.length > 10) {
                chartS?.series[0]?.addPoint([x, y], true, true, true);
            } else {
                chartS?.series[0]?.addPoint([x, y], true, false, true);
            }
        }
    }, 1000);


    var chartC = new Highcharts.Chart({
        chart: {
            renderTo: 'Chamber4',
            backgroundColor: '#16181d',
        },
        title: { 
            text: 'Chamber   (Celcius)' ,
            style: { color: '#8f9195' }, 
        },
        series: [{
            showInLegend: false,
            data: []
        }],
        plotOptions: {
            line: {
                animation: false,
                color: '#FFFFFF',
                dataLabels: {
                    enabled: true,
                    style: { fontSize: 10, textOutline: false }
                }
            }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            tickInterval: 0.1,
            title: false
        },
        credits: { enabled: false }
    });


    setInterval(function () {
        var x2 = (new Date()).getTime(),
            y2 = parseFloat(document.getElementById("cSchamber4").innerHTML);
            if (y2 > 0) {
                //console.log(this.responseText);
            if (chartC?.series[0]?.data.length > 10) {
                chartC?.series[0]?.addPoint([x2, y2], true, true, true);
            } else {
                chartC?.series[0]?.addPoint([x2, y2], true, false, true);
            }
        }
    }, 1000);

    var chartH = new Highcharts.Chart({
        chart: {
            renderTo: 'Humadity4',
            backgroundColor: '#16181d',
        },
        title: { 
            text: 'Humidity (%)' ,
            style: { 
                color: '#8f9195' ,
                style: { color: '#8f9195' }, 
            }, 
        },
        series: [{
            showInLegend: false,
            data: []
        }],
        plotOptions: {
            line: {
                animation: false,
                dataLabels: {
                    enabled: true,
                    color: '#FFFFFF',
                    style: { fontSize: 10, textOutline: false }
                }
            },
            series: { color: '#18009c' }
        },
        xAxis: {
            type: 'datetime',
            dateTimeLabelFormats: { second: '%H:%M:%S' }
        },
        yAxis: {
            tickInterval: 0.5,
            title: false
        },
        credits: { enabled: false }
    });

    setInterval(function () {
        var x3 = (new Date()).getTime(),
            y3 = parseFloat(document.getElementById("chumadity4").innerHTML);
        //console.log(this.responseText);
        if (y3 > 0) {
            if (chartH?.series[0]?.data.length > 10) {
                chartH?.series[0]?.addPoint([x3, y3], true, true, true);
            } else {
                chartH?.series[0]?.addPoint([x3, y3], true, false, true);
            }
        }
    }, 1000);


}