
<main role="main" class="container">



<div  onclick="openForm()">

<center>
## Pliego de Condiciones Técnicas de Inst. Conectadas a Red-ANEXO II
### CÁLCULO DE LAS PÉRDIDAS POR ORIENTACIÓN E INCLINACIÓN DEL GENERADOR DISTINTA DE LA ÓPTIMA

</center>




El objeto de este anexo es determinar los límites en la orientación e inclinación de los módulos de acuerdo a las pérdidas máximas permisibles por este concepto en el PCT.


Se utiliza el método descrito en el Pliego de Condiciones Técnicas de Instalaciones Conectadas a Red (PCT-C-REV - julio 2011),
que propone en casos cerca del límite de inclinación aceptables, como instrumento de verificación, 
<div class="col-md-12">
<img src="{{ url_for('static', filename='images/fig.png') }}" class="rounded mx-auto d-block" />
</div>



<center>

$$
Pérdidas (\%)  = 100 · [1,2 ·10^{-4} (\beta - \phi + 10)^2 + 3,5 ·10^{-5} · \alpha ^2]\ ; (15° < \beta < 90°) \label{eq1} 
$$
$$
Pérdidas (\%)  = 100 · [1,2 ·10^{-4} (\beta - \phi + 10)^2 ]\ ;  ( \beta \leqq 15°) 
$$
</center>

donde:

- $\beta$ .- Ángulo  de  inclinación  ,  definido  como  el  ángulo  que  forma  la  superficie  de  los  módulos con el plano horizontal . Su valor es 0° para módulos horizontales y 90° para verticales. 
- $\alpha$ .- Ángulo  de  azimut  ,  definido  como  el  ángulo  entre  la  proyección  sobre  el  plano  horizontal de la normal a la superficie del módulo y el meridiano del lugar . Su valor es 0° para módulos orientados al Sur, –90° para módulos orientados al Este y +90° para módulos orientados al Oeste. 
- $\phi$ .- Latitud del lugar

sustituyendo,

<center> {{model_plot2}}</center>
                                            




</div>
</main>
