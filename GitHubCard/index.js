/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/

axios.get("https://api.github.com/users/umekow/followers ").then(response => {
  const cards = document.querySelector('.cards');
  const followersArray = response.data; 
  console.log(followersArray);
  followersArray.forEach(item => {
    cards.appendChild(createUserCard(item));
    
  });
 /* const newCard = createUserCard(response); 
  const cards = document.querySelector('.cards'); 
  cards.appendChild(newCard);*/
  
});

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
  name.textContent = user.name; 
  username.textContent = user.login; 
  image.src = user.avatar_url; 
  profile.textContent = user.html_url; 
  location.textContent = user.location; 
  followers.textContent = user.followers; 
  following.textContent = user.following; 
  bio.textContent = user.bio; 
  
  return card; 
}

/*
avatar_url: "https://avatars2.githubusercontent.com/u/21162641?v=4"
bio: "Currently a student at Lambda School"
blog: ""
company: null
created_at: "2016-08-21T23:04:18Z"
email: null
events_url: "https://api.github.com/users/umekow/events{/privacy}"
followers: 39
followers_url: "https://api.github.com/users/umekow/followers"
following: 62
following_url: "https://api.github.com/users/umekow/following{/other_user}"
gists_url: "https://api.github.com/users/umekow/gists{/gist_id}"
gravatar_id: ""
hireable: null
html_url: "https://github.com/umekow"
id: 21162641
location: "Jackson, MS"
login: "umekow"
name: "Umeko Walker"
node_id: "MDQ6VXNlcjIxMTYyNjQx"
organizations_url: "https://api.github.com/users/umekow/orgs"
public_gists: 0
public_repos: 26
received_events_url: "https://api.github.com/users/umekow/received_events"
repos_url: "https://api.github.com/users/umekow/repos"
site_admin: false
starred_url: "https://api.github.com/users/umekow/starred{/owner}{/repo}"
subscriptions_url: "https://api.github.com/users/umekow/subscriptions"
type: "User"
updated_at: "2019-09-03T23:25:38Z"
url: "https://api.github.com/users/umekow"

*/