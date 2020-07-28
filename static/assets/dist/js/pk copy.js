
var canvas = document.getElementById("canvas"),
    ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 100;

var scatterChart = new Chart(ctx, {
    type: 'scatter',
    data: {
        datasets: [{
            label: 'Obstaculo_1',
            pointRadius: 10,
            showLine: true,

            data: [
                // {
                //     x: -120,
                //     y: 0
                // },
                // {
                //     x: -45,
                //     y: 0
                // },
                // {
                //     x: -45,
                //     y: 20
                // }, {
                //     x: -45,
                //     y: 23
                // },
                // {
                //     x: -45,
                //     y: 26
                // },
                // {
                //     x: -32,
                //     y: 26
                // },
                // {
                //     x: -32,
                //     y: 20
                // },
                // {
                //     x: -17,
                //     y: 20
                // },
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
                },
                // {
                //     x: 35,
                //     y: 20
                // },
                // {
                //     x: 35,
                //     y: 30
                // },
                // {
                //     x: 35,
                //     y: 42
                // },
                // {
                //     x: 58,
                //     y: 42
                // },
                // {
                //     x: 58,
                //     y: 30
                // },
                // {
                //     x: 58,
                //     y: 20
                // },
                // {
                //     x: 58,
                //     y: 0
                // },
                // {
                //     x: 120,
                //     y: 0
                // },

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
                // {
                //     x: -120,
                //     y: 0
                // },
                // {
                //     x: -45,
                //     y: 0
                // },
                // {
                //     x: -45,
                //     y: 20
                // }, {
                //     x: -45,
                //     y: 23
                // },
                // {
                //     x: -45,
                //     y: 26
                // },
                {
                    x: -32,
                    y: 26
                },
                {
                    x: -32,
                    y: 20
                },
                {
                    x: -17,
                    y: 20
                },
                // {
                //     x: -5,
                //     y: 25

                // },
                // {
                //     x: 5,
                //     y: 25
                // },
                // {
                //     x: 17,
                //     y: 20
                // },
                // {
                //     x: 35,
                //     y: 20
                // },
                // {
                //     x: 35,
                //     y: 30
                // },
                // {
                //     x: 35,
                //     y: 42
                // },
                // {
                //     x: 58,
                //     y: 42
                // },
                // {
                //     x: 58,
                //     y: 30
                // },
                // {
                //     x: 58,
                //     y: 20
                // },
                // {
                //     x: 58,
                //     y: 0
                // },
                // {
                //     x: 120,
                //     y: 0
                // },

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
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                    max: 120,
                    min: -120
                }
            }],

            yAxes: [{
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
        }

        // onDragEnd: (e, datasetIndex, index, value) => {
        //     console.log(datasetIndex, index, value)
                        
        //     this.modifyDataSet(datasetIndex, index, value);
        // }

    }
});
ctx.globalAlpha = 0.99



