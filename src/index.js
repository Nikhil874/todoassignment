//in importing import {file} from "./clac.js"
import file from "./noteicon.png";
import "./index.css"
let container=document.getElementById("container");
let img=document.createElement("img");
img.classList.add("small");
img.src=file;

let h2=document.createElement("h2");
h2.innerText="ToDo";
container.append(img,h2);
let input=document.createElement("input");
let button=document.createElement("button");
button.innerText="Add Task";
let inputdiv=document.getElementById("inputdiv");
inputdiv.append(input,button);
let arr=JSON.parse(localStorage.getItem("dataarr"))||[];
let getdata=()=>{
    arr.push(input.value);
   localStorage.setItem("dataarr",JSON.stringify(arr));
   displaydata();
}
button.addEventListener("click",getdata);


let displaydata=()=>{
    var table=document.getElementById("table");
    table.innerHTML=null;
    var count=1;
    let tr1=document.createElement("tr");
    let th1=document.createElement("th");
    let th2=document.createElement("th");
    th1.innerText="S.No";
    th2.innerText="Tasks";
    table.append(tr1,th1,th2);
    arr.forEach((el) => {
        let tr=document.createElement("tr");
        let td1=document.createElement("td");
        let td2=document.createElement("td");
        td1.innerText=count;
        td2.innerText=el;
        tr.append(td1,td2);
        table.append(tr);
        count++;
    });
    
}
displaydata();

