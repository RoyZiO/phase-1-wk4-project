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
  work = document.querySelectorAll('li.list-group-item'); 
  const list = document.querySelectorAll('li.list-group-item');

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




  







//Creating functions to open and suspend the sidebar on the right




fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
.then(response => (response.json()))
.then( function(data) {
    //console.log(data);

        let i = -1
        do {
            i+=1

        otherData = data.data[i];

        work[i].textContent = otherData.title;

        } while (i < 11)

        //statement goes here
        console.log(data[i]);
       // work = data[i];

    })

        



//  for (i= -1; i<11; i+=1) {
//     otherData = data.data[i]

//     //console.log(otherData);

//     work[i].textContent = otherData.title;
//     console.log(work[i].textContent);
//  }
 
//////////

const moreArtwork = document.querySelectorAll('li.list-group-item');
work.forEach (work => {
  work.addEventListener('click', (e) => {
    e.preventDefault()
    fetch('https://api.npoint.io/fb6348ea0f63624394bb/data/')
    .then(response => (response.json()))
      .then(films=> {
        moreData = films.data
        let i = Array.prototype.indexOf.call(work.parentNode.children, work);
        image.src = moreData[i].image_url 
        artTitle.textContent = moreData[i].title
        refNo.textContent = `MAIN REF. NO :   ${moreData[0].main_reference_number}`
        date.textContent = `Date of Display :   ${moreData[0].date_display}`
        artist.textContent = `Artist :  ${moreData[0].artist_display}`

      })})})