// FUNCTION EXERCISE
// 1
function fozzieBear(){
    console.log("Wocka Wocka!");
  }
  fozzieBear(); // Wocka Wocka!
  
  console.log(`==============`);
  
  // 2
  function beaker(speak){
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
  }
  beaker("Meep");
  /*
  Meep
  Meep
  Meep
  Meep
  */
  
  console.log(`===============`);
  
  // 3
  function muppetShow(a, b){
    if (a === "Muppet" && b === "Show"){
      console.log("It's time to play the music. It's time to light the lights.");
    }
  }
  muppetShow(`Muppet`, `Show`); // It's time to play the music. It's time to light the lights.
  muppetShow(`Hello`, `Bye`); // Does NOT display anything in the terminal/console
  
  console.log(`===========`);
  
  // 4
  function kermit(){
    return "Kermit The Frog";
  }
  kermit(); // Does NOT display anything in the terminal/console
  console.log(kermit()); // Kermit The Frog
  
  console.log(`===============`);
  
  // 5
  function muppetShowSeasons(seasons){
    if (seasons === 5){
      return true;
    } else {
      return false;
    }
  }
  console.log(muppetShowSeasons(5)); // true
  console.log(muppetShowSeasons(3)); // false
  
  console.log(`=============`);
  
  // 6
  const manOrMuppet = () => {
    console.log("Am I a man or am I a Muppet?");
  }
  // OR
  // const manOrMuppet = function() {
  //   console.log("Am I a man or am I a Muppet?");
  // }
  
  manOrMuppet(); // Am I a man or am I a Muppet?
  
  console.log(`==============`);
  
  // 7
  rainbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
  // OR
  // rainbowConnection = () => (
  //   "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me"
  // );
  
  console.log(rainbowConnection()); // Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me
  
  console.log(`===================`);
  
  // 8
  // No
  
  // 9
  // Yes
  
  // 10a
  const newMuppetMovies = [
    "The Muppets",
    "Muppets Most Wanted"
  ];
  
  // 10b
  const upperMovies = newMuppetMovies.map(function(u){
    return u.toUpperCase();
  });
  console.log(upperMovies); // [ 'THE MUPPETS', 'MUPPETS MOST WANTED' ]