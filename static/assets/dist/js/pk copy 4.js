
var output4 = document.getElementById("punto");


var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
// canvas.width = 200;
// canvas.height = 100;

var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [
            {
                label: 'Obst_E',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: -4*10,
                        y: 10
                    },
                    {
                        x: -3*10,
                        y: 10
                    },
                    {
                        x: -2*10,
                        y: 10
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0,0,  0, 0.1)"

            },
            {
                label: 'Obst_S',
                pointRadius: 10,
                showLine: true,

                data: [
                    {
                        x: -1*10,
                        y: 10

                    },
                    {
                        x: -0*10,
                        y: 10
                    },
                    {
                        x: 1*10,
                        y: 10
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0, 0, 0, 0.3)"
            },

            {
                label: 'Obst_O',
                pointRadius: 10,
                showLine: true,

                data: [
                    {
                        x: 2*10,
                        y: 10
                    },
                    {
                        x: 3*10,
                        y: 10
                    },
                    {
                        x: 4*10,
                        y: 10
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear',
                backgroundColor: "rgba(0, 0, 0, 0.5)"

            }




        ]
    },
    options: {
        dragDataRound: 0,
        dragData: true,
        dragX: true,
        maintainAspectRatio: true,
        responsive: false,
        scales: {
            xAxes: [{
                // type: 'linear',
                // position: 'bottom',
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


            output4.innerHTML = [datasetIndex, datasetIndex ,value.x, value.y];
            // output4.innerHTML = value;
            fetchdata()

        }

        // onDragEnd: (e, datasetIndex, index, value) => {
        //     console.log(datasetIndex, index, value)

        //     this.modifyDataSet(datasetIndex, index, value);
        // }

    }
});
ctx.globalAlpha = 0.99

// $SCRIPT_ROOT = {{ request.script_root | tojson | safe }};

// var slider1 = document.getElementById("latitud_range");
// var output1 = document.getElementById("latitud_value");
// output1.innerHTML = slider1.value;
// slider1.oninput = function () {
//     output1.innerHTML = this.value;
//     fetchdata()
// }

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
        maxZoom: 18
    }).addTo(map);


    // Event Handlers
    var output_lat = document.getElementById("latitud_value");
    var output_lon = document.getElementById("longitud_value");
    var theMarker = {};
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
        'inclinacion': document.getElementById("inclinacion_value").innerHTML,
        'orientacion': document.getElementById("orientacion_value").innerHTML,
        'punto': document.getElementById("punto").innerHTML,
    }, function (data) {
        $("#P").text(data.P);
        $("#P1").text(data.P);
        $("#P2").text(data.P);
    });
    // alert('Disculpe, esta en mantenimiento, proximamente estara operativo')

}







document.addEventListener("DOMContentLoaded", function () { fetchdata();initialize() }, false);
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


