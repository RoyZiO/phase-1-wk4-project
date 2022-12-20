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
      //console.log(data);


      let i = -1

      while (i < 11) {
        //console.log(data);
        i++;
        //otherData.textContent = data.data[i];

        work[i].textContent = data[i].title

        return work[i].textContent

        //console.log(work[i].textContent)
      }


  })
  

      }
  appendArtworks();    

//Creating functions to open and suspend the sidebar on the right
 

function clickArtwork() {

const moreArtwork = document.querySelectorAll('a.list-group-item');
work.forEach (work => {
  work.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
    .then(response => (response.json()))
      .then(pieces=> {
        moreData = pieces.data
        let i = Array.prototype.indexOf.call(work.parentNode.children, work);
        image.src = moreData[i].image_url 
        artTitle.textContent = moreData[i].title
        refNo.textContent = `MAIN REF. NO :   ${moreData[i].main_reference_number}`
        date.textContent = `Date of Display :   ${moreData[i].date_display}`
        artist.textContent = `Artist :  ${moreData[i].artist_display}`

      })})})
    }
    clickArtwork();