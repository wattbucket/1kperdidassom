
var output_punto = document.getElementById("punto_value");

var c = document.getElementById("canvas"),
    ctx = c.getContext("2d");


var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [

            {
                label: '0',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: -80,
                        y: 0

                    },
                    {
                        x: -100,
                        y: 0
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0,0,  0, 0.3)"

            }, {
                label: '1',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: -40,
                        y: 0
                    },
                    {
                        x: -60,
                        y: 0
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0,0,  0, 0.3)"

            },
            {
                label: '2',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: 0,
                        y: 5
                    },
                    {
                        x: -20,
                        y: 0
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0,0,  0, 0.3)"

            },
            {
                label: '3',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: 0,
                        y: 10
                    },
                    {
                        x: 20,
                        y: 0
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0,0,  0, 0.3)"

            },
            {
                label: '4',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: 40,
                        y: 0
                    },
                    {
                        x: 60,
                        y: 0
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0,0,  0, 0.3)"

            },
            {
                label: '5',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: 80,
                        y: 0

                    },
                    {
                        x: 100,
                        y: 0
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0,0, 0, 0.3)"
            },


            {
                label: 'SV',
                pointRadius: 0.1,
                showLine: true,
                data:
                    [{ "index": 1561093200000, "x": -119.8603800159, "y": 1.9639924627 }, { "index": 1561095000000, "x": -115.1880993582, "y": 6.8488158554 }, { "index": 1561096800000, "x": -110.6889685337, "y": 12.0546220222 }, { "index": 1561098600000, "x": -106.298099202, "y": 17.4447334358 }, { "index": 1561100400000, "x": -101.9440071837, "y": 22.9669997088 }, { "index": 1561102200000, "x": -97.5443778253, "y": 28.5839192801 }, { "index": 1561104000000, "x": -92.9988934288, "y": 34.2614558565 }, { "index": 1561105800000, "x": -88.1774230249, "y": 39.9642950354 }, { "index": 1561107600000, "x": -82.9003008732, "y": 45.6511939135 }, { "index": 1561109400000, "x": -76.9046257104, "y": 51.2680089745 }, { "index": 1561111200000, "x": -69.7860936535, "y": 56.7353043517 }, { "index": 1561113000000, "x": -60.9027467815, "y": 61.9245855798 }, { "index": 1561114800000, "x": -49.249718647, "y": 66.6122697596 }, { "index": 1561116600000, "x": -33.4834020575, "y": 70.4020065469 }, { "index": 1561118400000, "x": -12.8436946631, "y": 72.6695029725 }, { "index": 1561120200000, "x": 10.4659920252, "y": 72.7895601546 }, { "index": 1561122000000, "x": 31.5578680306, "y": 70.721482356 }, { "index": 1561123800000, "x": 47.824442607, "y": 67.057573046 }, { "index": 1561125600000, "x": 59.8402535939, "y": 62.4410954728 }, { "index": 1561127400000, "x": 68.9578551935, "y": 57.2913912803 }, { "index": 1561129200000, "x": 76.2249894853, "y": 51.845903918 }, { "index": 1561131000000, "x": 82.3155720137, "y": 46.2403725051 }, { "index": 1561132800000, "x": 87.6534039557, "y": 40.5579577975 }, { "index": 1561134600000, "x": 92.5128517426, "y": 34.8547255382 }, { "index": 1561136400000, "x": 97.0803576148, "y": 29.1728754219 }, { "index": 1561138200000, "x": 101.4901114305, "y": 23.5481010113 }, { "index": 1561140000000, "x": 105.8448818788, "y": 18.0143758402 }, { "index": 1561141800000, "x": 110.2284608512, "y": 12.6085361623 }, { "index": 1561143600000, "x": 114.7132202981, "y": 7.3800453885 }, { "index": 1561145400000, "x": 119.3646036896, "y": 2.4462735115 }],
                backgroundColor: "rgba(0,0,  0, 0.01)",
                dragData: false,
                dragX: false
            }
            , {
                label: 'SI',
                pointRadius: 0.1,
                showLine: true,
                data: [
                    { "index": 1576915200000, "x": -55.0887064636, "y": 3.51188166 }, { "index": 1576917000000, "x": -49.8849133491, "y": 7.9372286194 }, { "index": 1576918800000, "x": -44.3402228422, "y": 12.0839023362 }, { "index": 1576920600000, "x": -38.4148768822, "y": 15.8401134505 }, { "index": 1576922400000, "x": -32.0853956548, "y": 19.125391871 }, { "index": 1576924200000, "x": -25.3525034457, "y": 21.8631255414 }, { "index": 1576926000000, "x": -18.2491655066, "y": 23.9802498879 }, { "index": 1576927800000, "x": -10.8458066725, "y": 25.4126336843 }, { "index": 1576929600000, "x": -3.2491363827, "y": 26.1123746458 }, { "index": 1576931400000, "x": 4.407780391, "y": 26.054587409 }, { "index": 1576933200000, "x": 11.9831723765, "y": 25.2413661772 }, { "index": 1576935000000, "x": 19.3469912564, "y": 23.7014397041 }, { "index": 1576936800000, "x": 26.3976221608, "y": 21.4856521509 }, { "index": 1576938600000, "x": 33.0704484443, "y": 18.6599412689 }, { "index": 1576940400000, "x": 39.3378461083, "y": 15.2981758437 }, { "index": 1576942200000, "x": 45.2033060231, "y": 11.4772988067 }, { "index": 1576944000000, "x": 50.6932572803, "y": 7.279306595 }, { "index": 1576945800000, "x": 55.8493307816, "y": 2.8307458972 }],
                // data=[{xx,yy}],
                backgroundColor: "rgba(255,255,  255, 0.1)",
                dragData: false,
                dragX: false
            }
        ]
    },
    options: {
        legend: {
            display: false
        },
        dragDataRound: 0,
        dragData: true,
        dragX: true,
        responsive: true,
        scales: {
            xAxes: [{
                ticks: {
                    max: 120,
                    min: -120
                }
            }],

            yAxes: [{
                // type: 'linear',
                ticks: {
                    max: 80,
                    min: 0
                }
            }
            ]
        },
        onDragStart: function (e, element) {
            // console.log(element)
            // console.log('movido un punto')
        },
        onDrag: function (e, datasetIndex, index, value) {
            // change cursor style to grabbing during drag action
            e.target.style.cursor = 'grabbing'
            // where e = event
        },

        onDragEnd: function (e, datasetIndex, index, value) {
            // restore default cursor style upon drag release
            e.target.style.cursor = 'default'
            console.log(datasetIndex, index, value)
            // where e = event


            punto.innerHTML = [datasetIndex, index, value.x, value.y];
            // punto.innerHTML = value;
            fetchdata()

        }
    }
});



var slider2 = document.getElementById("inclinacion_range");
var output2 = document.getElementById("inclinacion_value");
output2.innerHTML = slider2.value;
slider2.oninput = function () {
    output2.innerHTML = this.value;
    fetchdata()
}

var slider3 = document.getElementById("orientacion_range");
var output3 = document.getElementById("orientacion_value");
output3.innerHTML = slider3.value;
slider3.oninput = function () {
    output3.innerHTML = this.value;
    fetchdata()
}




function initialize() {
    // Initialize the map
    var map = L.map('map').setView([40, -4], 5);
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        maxNativeZoom: 18
    }).addTo(map);


    // Event Handlers

    var output_lat = document.getElementById("latitud_value");
    var output_lon = document.getElementById("longitud_value");

    var callBack = function () {
        console.log("Map successfully loaded");
        output_lat.innerHTML = 40;
        output_lon.innerHTML = -4;
        // fetchdata()

    };

    map.whenReady(callBack);

    var theMarker = L.marker([40, -4]).addTo(map);
    map.on('click', function (e) {
        lat = e.latlng.lat;
        lon = e.latlng.lng;

        console.log("has clicao LAT: " + lat + " y LONG: " + lon);
        //Clear existing marker, 
        if (theMarker != undefined) {
            map.removeLayer(theMarker);
        };
        //Add a marker to show where you clicked.
        theMarker = L.marker([lat, lon]).addTo(map);
        var llat = lat.toFixed(3);
        var llon = lon.toFixed(3);
        output_lat.innerHTML = llat;
        output_lon.innerHTML = llon;
        fetchdata()
    });
}







function fetchdata() {
    $.getJSON($SCRIPT_ROOT + '/formulario', {
        'latitud': document.getElementById("latitud_value").innerHTML,
        'longitud': document.getElementById("longitud_value").innerHTML,
        'inclinacion': document.getElementById("inclinacion_value").innerHTML,
        'orientacion': document.getElementById("orientacion_value").innerHTML,
        // 'punto': document.getElementById("punto_value").innerHTML,

    }, function (data) {
        $("#P0").text(data.P);
        $("#P1").text(data.P);
        $("#P2").text(data.P);
        $("#P3").text(data.P);
    });



    // alert('Disculpe, esta en mantenimiento, proximamente estara operativo')

}







document.addEventListener("DOMContentLoaded", function () { ; initialize() }, false);
//   document.addEventListener("mouseup", function () { fetchdata() }, false);
//   document.addEventListener("touchmove", function () { fetchdata() }, false);
// console.log(datasets)



$('#informe').bind('click', function () {
    $.getJSON($SCRIPT_ROOT + '/informe', {
    }, function (data) {
    });
    // alert('Disculpe, esta en mantenimiento, proximamente estara operativo')
    return false;
});


