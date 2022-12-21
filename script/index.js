//CODE GOES HERE
document.addEventListener('DOMContentLoaded', ()=>{
  //selectWorks()
  
  //fetching data from the server

  fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
  .then(response=>(response.json()))
  .then(data=> {
    console.log(data)
   
    //using src and textContent to display data in the browser
    image.src = data[0].image_url 
    artTitle.textContent = data[0].title
   
    refNo.textContent = `MAIN REF. NO :   ${data[0].main_reference_number}`
    date.textContent = `Date of Display :   ${data[0].date_display}`
    artist.textContent = `Artist :  ${data[0].artist_display}`
     

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



    




  // creating function openNav() to open the side bar navigation menu and closeNav() to close the menu
openNav.addEventListener("click", 
function openNav() {
    document.getElementById("mainNav").style.width = "350px";
    
    document.querySelector('div.main-container').style.marginRight = "350px";

  });
  document.getElementById("closeNav").addEventListener("click", 
  function closeNav() {
    document.getElementById("mainNav").style.width = "0";
  
    document.querySelector('div.main-container').style.marginLeft = "0";
  });




  // create a function appendArtworks to display the list of available paintings on the side bar navigation plane 

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



// creating a function displayArtwork() containing a click event for selecting the artworks on the sidebar navigation pane of the webpage 
 


 function displayArtwork() {
    //let otherData = document.querySelectorAll('a.list-group-item');

    work.forEach(work => {
        work.addEventListener('click', (e) => {
            e.preventDefault();
            //console.log(e);

    fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
    .then(response => response.json())
    .then(data => {

        otherData = data.split

        otherData = Array.isArray(data) ? data : [data];

        //otherData.length = data.length;
  
        //let i = Array.prototype.indexOf(otherData, 0)

        //Now, iterating over the otherData

     for (i < 0; i < otherData.length; i++) {
            
            image.src = otherData[i].image_url

            artTitle.textContent = otherData[i].title
     
            refNo.textContent = `MAIN REF. NO :   ${otherData[i].main_reference_number}`
     
            date.textContent = `Date of Display :   ${otherData[i].date_display}`
     
            artist.textContent = `Artist :  ${otherData[i].artist_display}`    

     } return otherData[i]
     
        })

})
    })

}

 displayArtwork();
