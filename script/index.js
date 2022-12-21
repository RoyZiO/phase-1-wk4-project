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
  //dropDwn = document.getElementById("dropbtn")
  image = document.getElementById('image_url')
  artTitle = document.getElementById('title')
  refNo = document.getElementById('main_reference_number')
  date = document.getElementById('date_display')
  artist = document.getElementById('artist_display')
  work = document.querySelectorAll('a.list-group-item'); 
  const list = document.querySelectorAll('a.list-group-item');

};
selectWorks();



    




  // side bar navigation menu displayer
openNav.addEventListener("click", 
function openNav() {
    document.getElementById("mainNav").style.width = "350px";
    //document.querySelector('div.container-fluid text bg-dark').style.marginRight = "350px";
    document.querySelector('div.main-container').style.marginRight = "350px";
    // print( document.getElementById("mySidenav"))
  });
  document.getElementById("closeNav").addEventListener("click", 
  function closeNav() {
    document.getElementById("mainNav").style.width = "0";
    //document.querySelector('div.container-fluid text bg-dark').style.marginLeft = "0";
    document.querySelector('div.main-container').style.marginLeft = "0";
  });




  



  function appendArtworks() {

  fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
  .then(response => (response.json()))
  .then( function(data) {


            for(i=0; i < data.length; i++) {

                console.log(data[i].title);
                //console.log(data[title]);
            work[i].textContent = data[i].title;
          
            }  
            return work[i];
           
  })

      }
  appendArtworks();    

//Creating functions to open and suspend the sidebar on the right

/////////////
 


 function displayArtwork() {
    let data3 = document.querySelectorAll('.artworks');

    work.forEach(work => {
        work.addEventListener('click', (e) => {
            e.preventDefault();

    fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
    .then(response => response.json())
    .then(work => {

        
        data3.textContent = work[i]

     let i = Array.prototype.indexOf.call(work.Array, work[i])

     for (i = 0; i < data3.length; i++) {

        
            
            image.src = data3[i].image_url 

             artTitle.textContent = data3[i].title
     
             refNo.textContent = `MAIN REF. NO :   ${data3[i].main_reference_number}`
     
             date.textContent = `Date of Display :   ${data3[i].date_display}`
     
             artist.textContent = `Artist :  ${data3[i].artist_display}`

     } return data3[i]
     
    })

})

})

    
 }
 displayArtwork();
    