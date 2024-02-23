


let albumes = async function () {
    let url = 'https://jsonplaceholder.typicode.com/photos';
    try{
        let result = await fetch(url);
        let data = await result.json();
    
        for(let i = 0 ; i<20;i++){
            console.log(data[i].title);
        }
    }catch(error){
        console.log(error);
    }

}();

const promise = new Promise((resolve, reject) => {
   
    resolve('Exito')
}) 

setTimeout(()=>{
    promise.then(//resp=>console.log(resp)
    );
}, 3000)


let promesa = function cargarDatos(){
    let respuesta = new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('informacion enviada');   
        },3000) 
}) 


return respuesta;
}

async function devolverPromesa(){
    let promesaPrometida = await promesa();
    console.log(promesaPrometida);

}


devolverPromesa();




