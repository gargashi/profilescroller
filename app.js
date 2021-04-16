const data=[//actually data will come from any API or data base, but in this we are hard coding
  {
    name:'John Doe',
    age: 32,
    gender:'Male',
    lookingfor:'Female',
    location:'Boston MA',
    image:'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    name:'Jen Smith',
    age: 26,
    gender:'Female',
    lookingfor:'Male',
    location:'Miami FL',
    image:'https://randomuser.me/api/portraits/women/3.jpg'
  },
  {
    name:'Willaim Johnson',
    age: 38,
    gender:'Male',
    lookingfor:'Female',
    location:'Lynn MA',
    image:'https://randomuser.me/api/portraits/men/10.jpg'
  }
];

const profiles=profileIterator(data);

// Call First Profile
nextProfile();

// Next Event
document.getElementById('next').addEventListener('click',nextProfile);

// Next Profile Display
function nextProfile(){
  const currentProfile=profiles.next().value;

  // Profile Display

  if(currentProfile!==undefined){  
    document.getElementById('profileDisplay').innerHTML=`
      <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
        <li class="list-group-item">Age: ${currentProfile.age}</li>
        <li class="list-group-item">Location: ${currentProfile.location}</li>
        <li class="list-group-item">Preference: ${currentProfile.gender} looking for ${currentProfile.lookingfor}</li>
      </ul>
    `;

    // Image Display
    document.getElementById('imageDisplay').innerHTML=`
    <img src="${currentProfile.image}">`;
  }else{
    // No More profiles
    window.location.reload();
  }
}

// Profile Iterator
function profileIterator(profiles){
  let nextIndex=0;

  return{
    next:function(){
      return nextIndex<profiles.length?
      {value:profiles [nextIndex++], done:false}:
      {done:true}
    }
  };
}