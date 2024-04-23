from flask import Flask, render_template, jsonify
from Arbol import Nodo
import Puzzle_lineal as pzz
import vuelos as vl
import DFS as df
import DFSIter as dfi
import Dijkstra as dj

app = Flask(__name__)

@app.route ('/')
def index():
    return render_template('index.html')

@app.route('/puzzle',methods=['GET'])
def puzzle():
    resul=""
    resul=pzz.BFSpz()
    return jsonify(resultado=resul)

@app.route('/vuelos',methods=['GET'])
def vuelos():
    res=""
    res=vl.vuelitos()
    return jsonify(resultado=res)

@app.route('/DFS',methods=['GET'])
def DFS():
    res=""
    res=df.DFS()
    return jsonify(resultado=res)

@app.route('/DFSIter',methods=['GET'])
def DFSIter():
    res=""
    res=dfi.DFSIter
    return jsonify(resultado=res)

@app.route('/obtener_ruta',methods=['GET'])
def obtener_ruta():
    res= ""
    res=dj.imprimir()
    return jsonify(resultado=res)

if __name__ == '__main__':
    app.run(debug=True)