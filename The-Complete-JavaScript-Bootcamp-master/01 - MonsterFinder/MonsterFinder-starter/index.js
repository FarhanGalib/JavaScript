
import {monsters} from './monsters.js';


for(let monster of monsters){
    showMonsters(monster);
}



function showMonsters(monster){
    const monstersDiv=document.createElement('div');
    monstersDiv.className="monster";

    const img=document.createElement('img');
    img.src=`https://robohash.org/${monster.id}6?set=set2`;
    img.alt=monster.name;

    const p1= document.createElement('p');
    p1.className='name';
    p1.innerText=monster.name;
    
    const p2=document.createElement("p");
    p2.className='email';
    p2.innerText=monster.email;

    monstersDiv.append(img,p1,p2);


    document.querySelector('.monsters').append(monstersDiv);
    console.log(document.querySelector('.monsters'));

}

notFound();
function notFound(){
    
  const notFoundDiv =  document.createElement('div');
  notFoundDiv.className="p-5 not-found";
  notFoundDiv.style.display="none";

  const span = document.createElement('span');
  span.innerText="404";
  const h1=document.createElement('h1');
  h1.innerText="🧟‍♂️ No Monster Found 🧟‍♂️";

  notFoundDiv.append(span,h1);
  document.querySelector('.monsters').append(notFoundDiv);
}



document.querySelector("#search-monster").addEventListener("keyup",function(e){
    const keyword = e.target.value.toLowerCase();

    const monsters=document.querySelectorAll(".monster");
    let notFound=true;
    for(let monster of monsters){
        const name = monster.children[1].innerText.toLowerCase();
        const email =monster.children[2].innerText.toLowerCase();

        if(name.includes(keyword)||email.includes(keyword)){
            monster.style.display="block";
            notFound=false;
        }
        else{
            monster.style.display="none";
        }
    }

    if(notFound){
        document.querySelector(".not-found").style.display="block";
    }
    else{
        document.querySelector(".not-found").style.display="none";
    }

});





document.getElementById("btn search__btn").addEventListener("click",function(){
    const keyword = document.getElementById("search-monster").value.toLowerCase();
    const monsters=document.querySelectorAll(".monster");
    let notFound=true;
    for(let monster of monsters){
        const name = monster.children[1].innerText.toLowerCase();
        const email =monster.children[2].innerText.toLowerCase();

        if(name.includes(keyword)||email.includes(keyword)){
            monster.style.display="block";
            notFound=false;
        }
        else{
            monster.style.display="none";
        }
    }
    if(notFound){
        document.querySelector(".not-found").style.display="block";
    }
    else{
        document.querySelector(".not-found").style.display="none";
    }
});