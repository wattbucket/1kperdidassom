
# https://ec.europa.eu/jrc/en/PVGIS/docs/noninteractive
# https://ec.europa.eu/jrc/en/PVGIS/releases/pvgis51
# https://re.jrc.ec.europa.eu/pvg_tools/es/#MR

from flask import Flask, jsonify, render_template, request, session, json
import requests as requests

import pandas as pd # data wrangling
import datetime
from math import pi
import numpy as np
import matplotlib.pyplot as plt
# 

app = Flask(__name__)

app.config['SECRET_KEY'] = 'pk'



@app.route('/infor')
def infor():
    return render_template('informe.html')






@app.route('/informe')
def informe():
    latitud=session["latitud"]
    longitud=session["longitud"]
    inclinacion=session["inclinacion"]
    P=session["P"]



    #  devuelta navegador
    informe=render_template('notebook.html', P=P)
    return jsonify( informe=informe)




@app.route('/sinsombra')
def sinsombra():

    # datos del navegador
    latitud = request.args.get('latitud', 0, type=float)
    longitud = request.args.get('longitud', 0, type=float)
    inclinacion = request.args.get('inclinacion', 0, type=int)
    orientacion = request.args.get('orientacion', 0, type=int)

    


  #  sin sombras
    url="https://re.jrc.ec.europa.eu/api/PVcalc?lat="+str(latitud)+"&lon="+str(longitud)+"&peakpower=1&loss=0"
    url=url+"&angle="+str(inclinacion) # angle Inclination angle from horizontal plane of the (fixed) PV system. 
    url=url+"&aspect="+str(orientacion)    #Orientation (azimuth) angle of the (fixed) PV system, 0=south, 90=west, -90=east.
    url=url+"&localtime=1"
    url=url+"&outputformat=json"
    # print(url)
    hh=[0,0,0,0,0,0,0,0]
    url=url+"&userhorizon="+str(hh).strip('[]')
    # print(url)
    r = requests.get(url)
    data = r.json()
    session.pop('Es', None) #####   !!!! ojo libera la sesion para poder y acumulando los cambios
    Es0=data["outputs"]["totals"]["fixed"]["H(i)_y"]

    return jsonify(Es0=Es0,E=0)





@app.route('/formulario')
def formulario():
    p=session["p"]
    # Ess=session["Ess"]

    # datos del navegador
    latitud = request.args.get('latitud', 0, type=float)
    longitud = request.args.get('longitud', 0, type=float)
    inclinacion = request.args.get('inclinacion', 0, type=int)
    orientacion = request.args.get('orientacion', 0, type=int)
    punto = request.args.get('punto', 0, type=str)
    Es0 = request.args.get('Es0', 0, type=str)
    
    print(Es0)

    # 
    # punto="5,0,-180,50"
    # latitud=40
    # longitud=-4

    def horizonte(p,df):
        dfp=df.loc[p,:]
        pp=dfp.values.tolist()
        pp.sort()
        pp=([-180,0],[pp[0][0]-1,0],pp[0],pp[1],[pp[1][0]+1,0],[180,0])
        ddf=pd.DataFrame(pp)
        ddf[0]=ddf[0]+180

        d = pd.Series(np.nan, index=np.arange(360))

        ii=ddf.index.tolist()
        for i in ii: 
            d.at[ddf.at[i,0]]=ddf.at[i,1]
        s=d.interpolate()
        return s
    #
    # tuples=[(0,0),(0,1),(1,0),(1,1),(2,0),(2,1),(3,0),(3,1),(4,0),(4,1),(5,0),(5,1),(6,0),(6,1),(7,0),(7,1)]
    tuples=[(0,0),(0,1),(1,0),(1,1),(2,0),(2,1),(3,0),(3,1),(4,0),(4,1),(5,0),(5,1)]
    index=pd.MultiIndex.from_tuples(tuples)

    st=pd.Series(0, index=np.arange(360))
    df=pd.DataFrame(p, index=index)
    session.pop('p', None) #####   !!!! ojo libera la sesion para poder y acumulando los cambios
    # actualiza con el punto del front
    pp = pd.DataFrame([x.split(',') for x in punto.split('\n')])
    pp=pp.astype(int) 
    # actualiza la tabla de puntos
    df.loc[pp.at[0,0]].at[pp.at[0,1],0]=pp.at[0,2]
    df.loc[pp.at[0,0]].at[pp.at[0,1],1]=pp.at[0,3]
    # print(df)
    p=df.values.tolist()


    puntos=list(set(index.get_level_values(0)))
    for i in puntos:
        s=horizonte(i,df)
        st=st.combine(s, max, 0)


    hh=st.tolist()
    hh = [round(x,2) for x in hh]
    hh=hh[0:359]



    # Calculos
    # ????????????????   irraciacion
    # url="https://re.jrc.ec.europa.eu/api/DRcalc?lat="+lat+"&lon="+lon+"&month="+mes+"&global=1"

    url="https://re.jrc.ec.europa.eu/api/PVcalc?lat="+str(latitud)+"&lon="+str(longitud)+"&peakpower=1&loss=0"
    url=url+"&angle="+str(inclinacion) # angle Inclination angle from horizontal plane of the (fixed) PV system. 
    url=url+"&aspect="+str(orientacion)    #Orientation (azimuth) angle of the (fixed) PV system, 0=south, 90=west, -90=east.
    url=url+"&localtime=1"
    url=url+"&outputformat=json"
    # print(url)
    # hh=[0,10,20,80,40,15,25,5]
    url=url+"&userhorizon="+str(hh).strip('[]')
    # print(url)
    r = requests.get(url)
    data = r.json()
    # session.pop('E', None) #####   !!!! ojo libera la sesion para poder y acumulando los cambios
    E=data["outputs"]["totals"]["fixed"]["H(i)_y"]


  


    # session.pop('P', None) #####   !!!! ojo libera la sesion para poder y acumulando los cambios
    print(Es0)
    Es0=float(Es0)
    P=100-E*100/Es0
    P=round(P,2)
    # 
    # calculo de las perdidas

    # 
    session["latitud"]=latitud
    session["longitud"]=longitud
    session["inclinacion"]=inclinacion
    session["orientacion"]=orientacion
    session["p"]=p
    session["E"]=E
    session["P"]=P # Perdidas    
    return jsonify(E=E,P=P)



@app.route('/')
def index():
    p=[[-80,0],[-100,0],[-40,0],[-60,0],[-0,5],[-20,0],[0,10],[20,0],[40,0],[60,0],[80,0],[100,0]]
    session["p"]=p

    return render_template('index.html')

if __name__ == '__main__':
    app.run('0.0.0.0', 5500 ,debug=True)
    