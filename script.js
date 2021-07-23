var cookie= document.getElementById("cookie");
var score= document.getElementById("score");
var reset= document.getElementById("reset");
var clicks=0;
var extraclicks=0;
cookie.onclick=add_clicks;
function add_clicks(){
  if (clicks <20)
  {
  clicks+=1;
  score.innerHTML=clicks;
  }
  else
  {
    extraclicks=Math.floor(clicks/10);
    clicks=clicks+ extraclicks;
    score.innerHTML= clicks;
  }
}
reset.onclick=reset_score;
function reset_score(){
  clicks=0;
  score.innerHTML=clicks;
}

