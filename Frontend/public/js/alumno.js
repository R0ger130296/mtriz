var dtosAlumno=[];
var Notas=[];
const http = new XMLHttpRequest();



const getNotas = (method,API_URL) => {
    const promise = new Promise((resolve,reject)=>{
        http.open(method,API_URL+ "?tabla=nota");
        http.responseType='json';
         http.onload=()=>{
            resolve(http.response.datos)
         };
        http.send();

    });
return promise;
};



const getNombreAlumno = (method,API_URL) => {
    const promise = new Promise((resolve,reject)=>{
        http.open(method,API_URL+ "?tabla=persona");
        http.responseType='json';
         http.onload=()=>{
            resolve(http.response.datos)
         };
        http.send();

    });
return promise;
};


const getData=()=>{
    getNombreAlumno('GET','http://localhost:8001/server/matriz').then(responseDta=>{
       dtosAlumno=responseDta
        console.log(dtosAlumno);
    });
  
}




// var investigacion = document.getElementById("investigacion");
// http.open("POST", API_URL);
// http.send(new FormData(formElement));