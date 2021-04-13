let punchlines = [
    "Chuck Norris ne ment pas, c'est la vérité qui se trompe.",
    "Chuck Norris est en couleur sur les photos Noir et Blanc.",
    "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.",
    "Un jour Chuck Norris a dit Va voir la-bas si j'y suis... et il y était...",
    "Chuck Norris est contre les radars automatiques : ça l'éblouit lorsqu'il fait du vélo.",
    "Un aigle peut lire un journal à 1400 mètres de distance. Chuck Norris peut tourner la page.",
    "Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.",
    "Quand Google ne trouve pas quelque chose, il demande à Chuck Norris.",
    "Chuck Norris va régulièrement voir des matchs du PSG pour ne pas oublier ce qu'est la défaite.",
    "Chuck Norris peut encercler ses ennemis. Tout seul."
];

function getRandomInt(max){
    return Math.floor(Math.random() * max);
  }
  
function randomPunchline(){
    let citation = document.querySelector(".citation")
    citation.innerHTML = punchlines[getRandomInt(punchlines.length)]
}

let btn = document.querySelector(".btn")
btn.addEventListener("click",randomPunchline)
btn.addEventListener("click", randomColor)
console.log(btn)

function randomColor(){
    let Color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${ getRandomInt(255)})`
    let body = document.querySelector(".body")
    let span = document.querySelector(".citation")
    let chuck = document.querySelector("#chuck")
    body.style.backgroundColor = Color
    btn.style.backgroundColor = Color
    body.style.backgroundColor = Color
    span.style.color = Color
    chuck.style.color = Color
}
