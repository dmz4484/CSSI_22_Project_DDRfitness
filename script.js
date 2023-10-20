const workout=document.querySelector('#workout')
// returns null
console.log(workout)





const workouts = {
	 Shoulder: ['Lateral Raises','Shoulder Dumbell Press','Shrugs','Renegade Rows','High Pulls','Trap Raises','Pike Press','Reverse Machine Flyes','Overhead Presses','Push-Ups'],
	 Bicep: ['Hammer Curls','Preacher Curls','EZ Bar Curl','Chin-Ups','Concentration Curls'],
   Tricep:['Skull Crushers','Dips','Tricep Press','Diamond Push-Ups','Bar Pushdowns'],
   Chest:['Bench Press','Incline Dumbell Press','Pushups','Chest Dips','Cable Crossover','Dumbell Pull-Overs','Press-Ups','Squats','Chin-Ups','Overhead Press'],
   Back: ['Deadlifts','Barbell Rows','Pullups','Inverted Row','Face Pulls','Seal Rows','Croc Row','Landmine Row','Cable Trap Shrugs','T-Bar Row'],
   Leg: ['Squats','Romanian Deadlifts','Leg Press','Reverse Lunge','Step-Ups','Leg Curls','Calf Raises','Side Lunge','Leg Extensions','Power Pushes'],
  Abs: ['Crunches','Jumping Jacks','Flutter Kicks','Leg Raises','Sit Ups','Plank','Russian Twists','Burpees']
}

const selectors = [
rw1 = document.querySelector(".randomWorkoutOne"),
rw2 = document.querySelector(".randomWorkoutTwo"),
rw3 = document.querySelector(".randomWorkoutThree"),
rw4 = document.querySelector(".randomWorkoutFour"),
rw5 = document.querySelector(".randomWorkoutFive"),
rw6 = document.querySelector(".randomWorkoutSix"),
rw7 = document.querySelector(".randomWorkoutSeven")
]
let tracker=0;
for (const [key, value] of Object.entries(workouts)) {
  i=Math.floor(Math.random() * (value.length));
  randomworkout=value[i];
  console.log(randomworkout);
  selectors[tracker].innerHTML=randomworkout;
  tracker++;
}






document.querySelectorAll(".muscle-groups svg g g[id]").forEach(function(group) {
  // For the hover
  group.addEventListener('mouseover', function(el) {
    let id = el.path[1].id.toLowerCase()
    if(!id) id = el.path[2].id.toLowerCase()
    let label = document.querySelectorAll("label[for=" + id + "]")[0]
    if (label.classList)
      label.classList.add("hover")
    else
      label.className += ' ' + "hover"
  })
  group.addEventListener('mouseout', function(el) {
    let id = el.path[1].id.toLowerCase()
    if(!id) id = el.path[2].id.toLowerCase()
    let label = document.querySelectorAll("label[for=" + id + "]")[0]
    let clss = "hover"
    if (label.classList)
      label.classList.remove(clss)
    else
      label.className = label.className.replace(new RegExp('(^|\\b)' + clss.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
  })
  // For the click
  group.addEventListener('click', function(el) {
    let id = el.path[1].id.toLowerCase()
    console.log(id)
    if(!id) id = el.path[2].id.toLowerCase()
    let input = document.getElementById(id)
    if(input.checked) input.checked = false
    else input.checked = true

    switch (id) {
      case 'triceps':
      case 'biceps':
      case 'forearms':
        location.href = '/arms.html';
      break;

      case 'deltoids':
        location.href = '/shoulder.html';
      break;

      case 'lats':
      case 'trapezius':
        location.href = '/back.html';
      break;

      case 'pectorals':
        location.href = '/chest.html';
      break;

      case 'abs':
      case 'obliques':
        location.href = '/abs.html';
      break;

      case 'adductors':
      case 'calves':
      case 'hamstrings':
      case 'glutes':
      case 'quads':
        location.href = '/legs.html';
      break;

      default: break;
      
      
        
        
      }
        
        
    

 
  });
})
//RANDOM RECIPE CODE
// Select the spans & divs where we'll display outputs.
const recipeTitle = document.querySelector(".recipeTitle");
const recipePic = document.querySelector(".recipePic");
const recipeSummary = document.querySelector(".summary");
const recipeLink = document.querySelector(".recipeLink");
const ingredients = document.querySelector(".ingredients");
const instructions = document.querySelector(".instructions");


//UPDATED RANDOM API
const getRecipe = async () => {
  //construct api 
  const apiOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e1a6f44856mshe846fb6cfd51f7ap1240c1jsn8cd78fe4a9ec',
      'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
    }
  };
  const url = `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?tags=vegetarian&number=1`;
 // console.log("url:", url);

  //use fetch to get response
  const response = await fetch(url, apiOptions);
 // console.log("response: ", response);

  //use json to get json
  const data = await response.json();
  //console.log("data: ", data);

  recipeTitle.innerHTML = data.recipes[0].title; //replace recipe title
  recipeSummary.innerHTML = data.recipes[0].summary; //replace recipe summary
  recipeLink.innerHTML = data.recipes[0].spoonacularSourceUrl; //replace recipe link
  instructions.innerHTML = data.recipes[0].instructions; //replace recipe instructions
  recipePic.src=data.recipes[0].image; //replace recipe picture
  
  let x ="";
  for(let i=0;i<data.recipes[0].extendedIngredients.length;i++)
    {
      //add each ingredient to a list seperated by commas except the last one
      if(i===data.recipes[0].extendedIngredients.length-1){
        x+=data.recipes[0].extendedIngredients[i].original;
      }
      else{
        x+=data.recipes[0].extendedIngredients[i].original + ", ";
      }
    };
  ingredients.innerHTML = x;
  
  }; //end of api function
getRecipe(); 





