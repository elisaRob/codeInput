const elInput=document.getElementById("password");
// const oeilOuvert=document.getElementsByClassName('.fa-eye-slash');
const oeilOuvertBouton=document.querySelector('.oeilOuvert');
const oeilFermeBouton=document.querySelector('.oeilFerme');



oeilFermeBouton.addEventListener("click",()=>{
    elInput.type='text'
    oeilFermeBouton.style.display = 'none';
    oeilOuvertBouton.style.display = 'inline-block';
   
})

oeilOuvertBouton.addEventListener("click",()=>{
     elInput.type='password';
     oeilOuvertBouton.style.display = 'none';
     oeilFermeBouton.style.display = 'inline-block';
     

})

