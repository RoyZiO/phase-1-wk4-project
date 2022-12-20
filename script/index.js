//CODE GOES HERE

document.addEventListener('DOMContentLoaded', ()=>{
  selectWorks()
  
  fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
  .then(response=>(response.json()))
  .then(data=> {
    console.log(data)
   
    image.src = data[0].image_url 
    artTitle.textContent = data[0].title
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
  image = document.getElementById('image_url')
  artTitle = document.getElementById('title')
  refNo = document.getElementById('main_reference_number')
  date = document.getElementById('date_display')
  artist = document.getElementById('artist_display'); 

};
selectWorks();


//Creating functions to open and suspend the sidebar on the right

// fetch('')
// .then(res=>(res.json()))
// .then(data=>{
//  let i = -1
//  do{
//   i+=1
//   data2= data.films[i]
//   // print (side[i])
//   side[i].textContent = data2.title
// //  print(data2.title)
//  }while(i<14)   
// //  print (side[0].textContent)
//   })


  // side bar navigation menu displayer
openNav.addEventListener("click", 
function openNav() {
    document.getElementById("mainNav").style.width = "350px";
    document.querySelector('div.header').style.marginRight = "350px";
    document.querySelector('div.main-container').style.marginRight = "350px";
    // print( document.getElementById("mySidenav"))
  });
  document.getElementById("closeNav").addEventListener("click", 
  function closeNav() {
    document.getElementById("mainNav").style.width = "0";
    document.querySelector('div.header').style.marginLeft = "0";
    document.querySelector('div.main-container').style.marginLeft = "0";
  });

