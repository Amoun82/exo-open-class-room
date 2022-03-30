let p = document.createElement('p');

document.getElementById("main").appendChild(p);
p.innerHTML = "Mon <strong>grand</strong> contenu" ;

p.classList.add("important") ;

p.style.color = "green" ;


if( p.classList.contains("important") == true )
{
    console.log("la classe important est bien celle de notre paragraphe");
    console.log(p) ;
    p.classList.replace("important" , "modifier") ;
}

if (p.classList.contains("important") == false)
{
    console.log("la classe a été modifier passant de important a modifier") ;
    console.log(p) ;
}

const test = document.getElementById("main") ;

test.replaceChild(document.createElement("article"),p) ;


p = document.querySelector('article') ;

p.classList.add("essayer")

p.innerHTML = "coucou" ;

console.log(`variable test : ${test}`);
console.log(`variable p : ${p}`);


/* autre exercice */
const selectElement = document.querySelector('#glace');
const resultat = document.querySelector('.resultat') ;

selectElement.addEventListener('change', (event) => {
  
  resultat.textContent = `tu aimes ${event.target.value}`;
});


/* autre exo */
const textBox = document.querySelector('input') ;
const afficher = document.getElementById('afficher') ;

textBox.addEventListener('input', mettreAJour) ;

console.log(textBox) ;

function mettreAJour(text)
{
    afficher.innerHTML = text.target.value ;
}


/* autre exo */
const zoneDeText = document.querySelector('textarea') ;
const afficher1 = document.getElementById('afficher1') ;

zoneDeText.addEventListener('change', mettreAJour1) ;

function mettreAJour1(text)
{
    afficher1.textContent = afficher.innerHTML + " " + text.target.value + " " + resultat.innerHTML ;
}


/* autre exo */
const nom = document.getElementById('name') ;
const resname = document.getElementById('res-name')  ;

nom.addEventListener('input', mettreAJour2) ;

function mettreAJour2(e)
{
  resname.innerHTML = e.target.value ;
}

document
    .getElementById('gender')
    .addEventListener('change', function(e){
        document
            .getElementById('res-gender')
            .innerHTML = e.target.value ;
    });

document
    .getElementById('result')
    .addEventListener('mousemove' ,function(e){
        console.log(e);
        document
            .getElementById('mouse-x')
            .innerHTML = e.offsetX ;
        document
            .getElementById('mouse-y')
            .innerHTML = e.offsetY ;
    });

document
    .addEventListener('mousemove' ,function(e1){
        document
            .getElementById('souris-x') 
            .innerHTML = e1.offsetX ;
        document
            .getElementById('souris-y')
            .innerHTML = e1.offsetY ;
    })

function verrouillage()
{    
    document
        .addEventListener('click', function()
        {
            alert('tu n\'as plus le droit de cliquer') ;
        })

}

/* autre exo */
function askHello()
{
    fetch("https://mockbin.com/request?coucou=salut")
    .then(function(res) {
        if (res.ok) {
        return res.json();
        }
    })
    .then(function(value) {
    document
        .getElementById("leResultatDemande")
        .innerText = value.queryString.coucou;
    })
    .catch(function(err) {
    // Une erreur est survenue
    });
}

document
  .getElementById("demandeMoi")
  .addEventListener("click", askHello);


/* autre exemple */
function appel()
{
    fetch("https://mockbin.com/request?attention=je ne suis pas la<br>et il lit le html")
    .then(function(recupere) {
    if (recupere.ok) {
      return recupere.json();
    }
  })
  .then(function(value) {
    console.log(value);  
    document
        .getElementById('leResultatDemande1')
        .innerHTML = value.queryString.attention ;

        
  })
  .catch(function(err) {
    document.write("erreur") 
    console.log(err) ;
  });
}

document
  .getElementById("demandeMoi1")
  .addEventListener("click", appel);