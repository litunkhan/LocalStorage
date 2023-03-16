let addBtn = document.getElementById('add-user')
let userFeild = document.getElementById('user-name')
let userArray =[];
let editId = null;

let getlocalStorage = JSON.parse(localStorage.getItem('user'));
if(getlocalStorage){
userArray = getlocalStorage 
}

addBtn.addEventListener('click',()=>{
   const userFeildvalue = userFeild.value;
   userArray.push({name:userFeildvalue});
   console.log(userArray)
   saveinfoinlocalStorage(userArray)
   userFeild.value ="";
   // location.reload() ata dileo hobe 
   displaylocalstorage()

})


const saveinfoinlocalStorage =(array)=>{
   const loclarraySave = JSON.stringify(array);
   localStorage.setItem('user',loclarraySave)
   displaylocalstorage()
}

const displaylocalstorage = ()=>{
 let displayItem = '';
 userArray.forEach((data,index)=>{
   displayItem +=`   <tr>
                 <th scope="row">${index+1}</th>
                 <td>${data.name}</td>
      <td> <i class="fa fa-edit btn btn-info mx-3 text-white" style="font-size:20px"></i>

   <i onclick="deleteformDisplay(${index})" class="fa fa-trash-o text-white btn btn-danger" style="font-size:20px"></i> </td>
                
               </tr>`
 })

 document.querySelector('tbody').innerHTML = displayItem
}
displaylocalstorage()

const deleteformDisplay =(indexvalue)=>{
console.log(indexvalue)
     userArray.splice(indexvalue,1)
     saveinfoinlocalStorage(userArray)
    
}
