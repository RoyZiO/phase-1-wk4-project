//CODE GOES HERE
document.addEventListener('DOMContentLoaded', ()=>{
  selectWorks()
  
  fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
  .then(response=>(response.json()))
  .then(data=> {
    console.log(data)
   
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



    




  // side bar navigation menu displayer
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



/////////////


//////
 


 function displayArtwork() {
    //let otherData = document.querySelectorAll('a.list-group-item');

    work.forEach(work => {
        work.addEventListener('click', (e) => {
            e.preventDefault();

    fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
    .then(response => response.json())
    .then(data => {

            otherData = data.split

         otherData = Array.isArray(data) ? data : [data];

        
        //otherData = Array.prototype.indexOf.call(work, work)

     for (i = 0; i < otherData.length; i++) {

            
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
