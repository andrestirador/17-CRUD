import datos from "../data/data.json" assert { type: "json" };

export const cargaDeDatos = ()=>{
    const baseDeDatos =JSON.parse(localStorage.getItem('datos'));

    if (!baseDeDatos) {
        localStorage.setItem('datos', JSON.stringify(datos));
    }
}