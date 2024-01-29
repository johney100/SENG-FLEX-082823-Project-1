



  //DOM Render functions
  function renderShow(show){
    let card = document.createElement('li')
    card.className = 'card'
    card.innerHTML =`
    <img src="${show.image}">
    <div class="content"> 
    <h4> ${show.name} </h4>
    <p>
        ${show.network}
    </p>
    <p>
        ${show.summary}
    </p>
    </div>
    <div class="buttons">
    <button id="${show.id}"> Favorite </button> 
    </div>
    `
    document.querySelector('#show-list').appendChild(card);
    const upvoteButton = document.getElementById(`${show.id}`);
    upvoteButton.addEventListener('click', colorElement);
    upvoteButton.addEventListener('dblclick', removeColor);
  }

  // fetch data from api
  function getAllShows(){
    fetch('http://localhost:3000/showData')
    .then (res => res.json())
    .then (showData => showData.forEach(show =>renderShow(show))) ;
  }
  
 
  // initial render
  //get data and render shows to dom

  function intialize(){
    getAllShows()
    
  }

  intialize();
  


  function colorElement(event) {
  const element = event.target;
  element.style.color = 'yellow';
}

  function removeColor(event){
  const element = event.target;
  element.style.color = 'black';
}

  const emailForm = document.getElementById('#form');
  emailForm.addEventListener('submit', formSubmit);
      
  function formSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    const form = event.target; // Get the form element that triggered the event
    alert("thanks for singing up");
  }
