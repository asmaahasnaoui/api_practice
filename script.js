const api ="https://www.breakingbadapi.com/api/characters";
async function getData(){
   try{
    const respose=await fetch(api)
    const data =await respose.json();
    printData(data)

   }catch(e){
       console.log("Error",e.message)

   }
}
function printData(data){
    const header=document.querySelector("#header")

    const content=document.querySelector("#content")
    header.innerHTML += `<select class ="form-control" onchange="getch(this.value)">
    <option>Please Select</option>
    ${data.map(character => `<option>${character.name}</option>`)}
    </select>`


}
async function getch(e){
  if(e === 'Please Select'){
      console.log("wrong")
  
  }else{
    const respose=await fetch(`${api}?name=${e}`)
    const data=await respose.json()
    content.innerHTML=`<h2>${data[0].name} (${data[0].nickname})</h2>
    <h4>${data[0].portrayed} </h4>
    <img src="${data[0].img}" width="250">
    `
  }
}

getData()