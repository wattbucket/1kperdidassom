
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
                label: 'Obstaculo_1',
                pointRadius: 10,
                showLine: true,

                data: [
                    {
                        x: -5,
                        y: 25

                    },
                    {
                        x: 5,
                        y: 25
                    },
                    {
                        x: 17,
                        y: 20
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear'
            },
            {
                label: 'Obstaculo_2',
                pointRadius: 10,
                showLine: true,
                data: [
                    {
                        x: -50,
                        y: 15
                    },
                    {
                        x: -32,
                        y: 20
                    },
                    {
                        x: -17,
                        y: 20
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear'
            },
            {
                label: 'Obstaculo_3',
                pointRadius: 10,
                showLine: true,

                data: [
                    {
                        x: 18,
                        y: 20
                    },
                    {
                        x: 58,
                        y: 20
                    },
                    {
                        x: 100,
                        y: 10
                    }
                ],
                // data=[{xx,yy}],
                lineTension: 0,
                cubicInterpolationMode: 'linear'
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
            console.log(element)
            console.log('movido un punto')
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


            output4.innerHTML = this.value;
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

var slider1 = document.getElementById("latitud_range");
var output1 = document.getElementById("latitud_value");
output1.innerHTML = slider1.value;
slider1.oninput = function () {
    output1.innerHTML = this.value;
    fetchdata()
}

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


function fetchdata() {
    $.getJSON($SCRIPT_ROOT + '/formulario', {
        'latitud': document.getElementById("latitud_value").innerHTML,
        'inclinacion': document.getElementById("inclinacion_value").innerHTML,
        'orientacion': document.getElementById("orientacion_value").innerHTML,
    }, function (data) {
        $("#P").text(data.P);
        $("#P1").text(data.P);
        $("#P2").text(data.P);
    });
    // alert('Disculpe, esta en mantenimiento, proximamente estara operativo')

}


document.addEventListener("DOMContentLoaded", function () { fetchdata() }, false);
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


