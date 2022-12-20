//CODE GOES HERE

document.addEventListener('DOMContentLoaded', ()=>{
  selectWorks()
  
  fetch('https://api.npoint.io/71eeb4c6accc790e272b/data/')
  .then(response=>(response.json()))
  .then(data=> {
    console.log(data)
   
    //image.src = data[0].poster 
    title.textContent = data[0].title
   // description.textContent = data[0].description
    refNo.textContent = `MAIN REF. NO :   ${data[0].main_reference_number}`
    date.textContent = `Date of Display :   ${data[0].date_display}`
    artist.textContent = `Artist :  ${data[0].artist_display}`
    //remainder = (data[0].capacity)-(data[0].tickets_sold)
    //footer.textContent = `${remainder}`  
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
selectWorks();


