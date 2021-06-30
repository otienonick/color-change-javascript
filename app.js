 const button=document.querySelector('button');
 const bodyBackground=document.querySelector('body');
 const colors=['yellow','green','orange','blue'];




 button.addEventListener('click',changeColor);

 function changeColor(){
    //  choose random color from array on click;
    let randomColor = Math.floor(Math.random()*colors.length);
    bodyBackground.style.backgroundColor=colors[randomColor];
 }





