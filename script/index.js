//CODE GOES HERE

document.addEventListener('DOMContentLoaded', ()=>{
  selectWorks()
  
  fetch('https://api.npoint.io/71eeb4c6accc790e272b/data/')
  .then(response=>(response.json()))
  .then(data=> {
    console.log(data)
   

})




  })

selectWorks = () =>{
  dropDwn = document.getElementById("dropbtn")
  image = document.getElementById('image_id')
  title = document.getElementById('title')
  refNo = document.getElementById('main_reference_number')
  date = document.getElementById('date_display')
  artist = document.getElementById('artist_display'); 

};


