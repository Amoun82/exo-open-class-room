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