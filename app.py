
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

    E=session["E"]
    Es=session["Es"]
    P=session["P"]


    #  devuelta navegador
    informe=render_template('notebook.html', P=P)
    return jsonify( informe=informe)





@app.route('/formulario')
def formulario():
    p=session["p"]
    E=session["E"]
    Es=session["Es"]
    P=session["P"]

    # datos del navegador
    latitud = request.args.get('latitud', 0, type=float)
    longitud = request.args.get('longitud', 0, type=float)
    inclinacion = request.args.get('inclinacion', 0, type=int)
    orientacion = request.args.get('orientacion', 0, type=int)
    punto = request.args.get('punto', 0, type=str)
    # 


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
    tuples=[(0,0),(0,1),(1,0),(1,1),(2,0),(2,1),(3,0),(3,1),(4,0),(4,1),(5,0),(5,1),(6,0),(6,1),(7,0),(7,1)]
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
    print(df)
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
    url=url+"&angle=30" # angle Inclination angle from horizontal plane of the (fixed) PV system. 
    url=url+"&aspect=44"    #Orientation (azimuth) angle of the (fixed) PV system, 0=south, 90=west, -90=east.
    url=url+"&localtime=1"
    url=url+"&outputformat=json"
    print(url)
    # hh=[0,10,20,80,40,15,25,5]
    url=url+"&userhorizon="+str(hh).strip('[]')
    # print(url)
    r = requests.get(url)
    data = r.json()
    session.pop('Es', None) #####   !!!! ojo libera la sesion para poder y acumulando los cambios
    Es=data["outputs"]["totals"]["fixed"]["E_y"]
    session.pop('P', None) #####   !!!! ojo libera la sesion para poder y acumulando los cambios
    P=100-Es*100/E

    # 
    # calculo de las perdidas


    # 
    session["latitud"]=latitud
    session["longitud"]=longitud
    session["inclinacion"]=inclinacion
    session["orientacion"]=orientacion
    session["p"]=p
    session["Es"]=Es
    session["P"]=P # Perdidas    
    # print('----------------valores del navegador-------------')

    # print(p,'y de salida: ')

    return jsonify(P=P)





@app.route('/')
def index():

    latitud = 36.664
    longitud = -4.458
    inclinacion = 30
    orientacion = 0
    p=[[-115,1],[-100,3],[-100,3],[-60,1],[-50,3],[-40,6],[-40,15],[-20,15],[-10,3],[0,6],[0,15],[10,25],[30,5],[50,7],[50,5],[70,2]]
    # session["df"]=df
    st=pd.Series(0, index=np.arange(360))
    hh=st.tolist()
    hh = [round(x,2) for x in hh]
    hh=hh[0:359]


    # Calculos

    # Energia sin obstaculos
    # \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    # url="https://re.jrc.ec.europa.eu/api/DRcalc?lat="+lat+"&lon="+lon+"&month="+mes+"&global=1"

    url="https://re.jrc.ec.europa.eu/api/PVcalc?lat="+str(latitud)+"&lon="+str(longitud)+"&peakpower=1&loss=0"
    url=url+"&angle="+str(inclinacion) # angle Inclination angle from horizontal plane of the (fixed) PV system. 
    url=url+"&aspect="+str(orientacion)    #Orientation (azimuth) angle of the (fixed) PV system, 0=south, 90=west, -90=east.
    url=url+"&localtime=1"
    url=url+"&outputformat=json"
    print(url)
    # hh=[0,10,20,80,40,15,25,5]
    url=url+"&userhorizon="+str(hh).strip('[]')
    print(url)
    r = requests.get(url)
    # 
    data = r.json()
    Es=data["outputs"]["totals"]["fixed"]["E_y"]
    # print(E)
    # ////////////////////////////////////////////////////////////////////////////
    E=Es
    P=100-Es*100/E
    # 
    # calculo de las perdidas






    session["latitud"]=latitud
    session["longitud"]=longitud
    session["inclinacion"]=inclinacion
    session["orientacion"]=orientacion
    session["p"]=p

    session["E"]=E
    session["Es"]=Es
    session["P"]=P # Perdidas






    return render_template('index.html',latitud_value=latitud,longitud_value=longitud)

if __name__ == '__main__':
    app.run('0.0.0.0', 8000 ,debug=True)
    