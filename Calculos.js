let superior, inferior, objetivo, error;

function punto_medio(v1, v2, v3, v4){

    let resultado;
    let iteracion = 0;

    let su = v1;
    let inf = v2;

    let error_mayor = v3+v4;
    let error_menor = v3-v4;

    while (true) 
    {
        resultado = ((su + inf)/2);
        iteracion++;

        document.getElementById('iteraciones').innerHTML = `Iteraciones: ${iteracion}`;
        document.getElementById('resultado').innerHTML = `Objetivo: ${resultado.toFixed(2)}`;

        if(resultado >= error_menor && resultado <= error_mayor) return true
        
        if(resultado < v3){
            inf = resultado;
        }
        else{
            su = resultado;
        }
    }  
    
}

function enviar(){
    const form = document.getElementById('form');
    superior = parseFloat(form['superior'].value);
    inferior = parseFloat(form['inferior'].value);
    objetivo = parseFloat(form['objetivo'].value);
    error = parseFloat(form['error'].value);

    punto_medio(superior, inferior, objetivo, error);

}

