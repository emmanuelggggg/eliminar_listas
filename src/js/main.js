const boton = document.getElementById("addLi");
const lista = document.getElementById("contenedor");
const texto=document.getElementById("entrada");
const formulario=document.getElementById("formulario");
const alerta=document.getElementById("alerta");

formulario.addEventListener("submit",e=>{
  e.preventDefault();
  agregar();
})


const agregar = e=> {
  const elemento =  document.createElement("li");
  const eliminar =  document.createElement("button");
  const editar =  document.createElement("button");
  elemento.textContent = texto.value;
  eliminar.textContent=`eliminar`;
  editar.textContent=`editar`;


  if(texto.value.length<=0){
    alert("Advertencia No se permite añadir una lista vacía");
  }else{
    eliminar.onclick= e =>{
      elemento.remove();
      alerta.innerHTML=("");
    }
    editar.onclick= e =>{
      var ntext=prompt("editartar texto de la lista seleccionada","");
      if(ntext.length<=0){
        alerta.innerHTML=("No se puede dejar vacio el elemento");  
      }else{
        elemento.textContent=ntext;
        elemento.appendChild(eliminar);
        elemento.appendChild(editar);
        alerta.innerHTML=("");
      }
    }
    alerta.innerHTML=("");
    elemento.appendChild(eliminar);
    elemento.appendChild(editar);
    lista.appendChild(elemento);
  }
  texto.value="";
}
