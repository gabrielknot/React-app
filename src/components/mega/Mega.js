aleatorio=(qtd) =>{
    var lista=[];

    let i=0;
    while(i<qtd){
        var x=parseInt((Math.floor(Math.random() * 60+1)));
        if(lista.includes(x)){}
        else{
            lista.push(x);
            i++;
        }
    }
    return lista;
}

export {aleatorio};