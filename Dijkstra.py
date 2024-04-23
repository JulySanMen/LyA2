def dijkstra(grafo, nodo_inicial):
    # Inicializamos las distancias de todos los nodos como infinito
    distancias = {nodo: float('inf') for nodo in grafo}
    distancias[nodo_inicial] = 0
    visitados = set()
    padres = {}
    
    while len(visitados) < len(grafo):
        nodo_actual = min((distancia, nodo) for nodo, distancia in distancias.items() if nodo not in visitados)[1]
        visitados.add(nodo_actual)
        
        for vecino, peso_arista in grafo[nodo_actual].items():
            distancia_nueva = distancias[nodo_actual] + peso_arista
            if distancia_nueva < distancias[vecino]:
                distancias[vecino] = distancia_nueva
                padres[vecino] = nodo_actual
    
    return distancias, padres


def obtener_ruta(padres, nodo_final):
    ruta = []
    while nodo_final is not None:
        ruta.append(nodo_final)
        nodo_final = padres.get(nodo_final)
    return ruta[::-1]

def imprimir():
    global resul
    resul = []
    grafo = {
        1: {3: 6, 2: 3},
        2: {3: 2, 4: 1},
        3: {2: 2, 4: 4, 5: 2},
        4: {5: 6},
        5: {6: 2, 7: 2},
        6: {7: 3},
        7: {}
    }

    nodo_inicial = 1
    distancias, padres = dijkstra(grafo, nodo_inicial)
    print("Rutas mínimas desde el nodo inicial:")
    for nodo, distancia in distancias.items():
        ruta = obtener_ruta(padres, nodo)
        resul.append(f"Nodo: {nodo}, Distancia: {distancia}, Ruta: {' -> '.join(str(n) for n in ruta)} \nx")
    return resul