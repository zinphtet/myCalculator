const btnsDiv = document.getElementById('buttons')

const btns = document.querySelectorAll('button')
var display = document.getElementById('result')
btns.forEach(btn =>{
    btn.addEventListener('click',(e)=>{

    //  display.innerText += e.target.innerText

     switch(e.target.innerText){
         case 'AC':display.innerText=''
         break;
         case '←':
         if(display.innerText){
            display.innerText = display.innerText.slice(0,-1)
         }    
         
         break
         case '=': 
         try{
            display.innerText=eval(display.innerText)
         }
         catch{
            display.innerText = 'Can\'t perform' 
         }
         break
         default : display.innerText +=e.target.innerText
     }
    })
})
