/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/



/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/



/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

//creates a card by using data from passed in user object
const createUserCard = (user) => {
  //create all elements that make up card
  const card = document.createElement('div');
  const image = document.createElement('img'); 
  const info = document.createElement('div'); 
  const name = document.createElement('h3'); 
  //all p elements 
  const username = document.createElement('p'), profile = document.createElement('p'), location = document.createElement('p'), followers = document.createElement('p'), following = document.createElement('p'), bio = document.createElement('p'); 

  //append the image and info card to card div
  card.appendChild(image);
  card.appendChild(info);

  //all elements that are a child of info div
  info.appendChild(name); 
  info.append(username, location, profile, followers, following, bio); 
  
  //assign class names to elements
  card.classList.add('card'); 
  info.classList.add('card-info'); 
  name.classList.add('name'); 
  username.classList.add('username'); 
 
  //content from github object
  //each url will return a data object with properties (such as name:)
  name.textContent = user.data.name; 
  username.textContent = user.data.login;
  image.src = user.data.avatar_url; 
  profile.textContent = user.data.html_url; 
  location.textContent = user.data.location; 
  followers.textContent = `Followers: ${user.data.followers}`; 
  following.textContent = `Following: ${user.data.following}`; 
  bio.textContent = user.data.bio; 
  
  return card; 
}

//create card to append to 
const cards = document.querySelector('.cards');

//create a card for my github user account
axios.get('https://api.github.com/users/umekow').then(response =>{
  //create a card then attach it to cards div
  cards.prepend(createUserCard(response)); 

});

//get list of my github followers
axios.get("https://api.github.com/users/umekow/followers ").then(response => {
  
  //store all followers in an array
  const followersArray = response.data; 
  
  //for each follower get api github url
  followersArray.forEach(item => {
    axios.get(item.url).then(r =>{
      //create a card for current follower then append to cards div
       cards.appendChild(createUserCard(r));
    });//end of then block for followersArray

  });//end of forEachloop

});//end of then block for followers url