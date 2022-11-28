let veil = document.getElementById("veil");
let rabbit = document.getElementById("rabbit");
let wizard = document.getElementById("wizard");
let hat =document.getElementById("hat");
let bird =document.getElementById("bird");
let triangle =document.getElementById("triangle");
let flag = false;
let rabbitBird = false;

function animationUp(div) {
    switch (div)
    {
      case 1:
        {

            let start = Date.now(); // запомнить время начала
        
            let timer = setInterval(function() {
              // сколько времени прошло с начала анимации?
              let timePassed = Date.now() - start;
            
              if (timePassed >= 1000) {
                clearInterval(timer); // закончить анимацию через 2 секунды
                return;
              }
              // отрисовать анимацию на момент timePassed, прошедший с начала анимации
              veil.style.bottom = timePassed*5  + 'vh';
        
            });
            break;
        }
      case 2:
        {

            let start = Date.now(); // запомнить время начала
        
            let timer = setInterval(function() {
              // сколько времени прошло с начала анимации?
              let timePassed = Date.now() - start;
            
              if (timePassed >= 40) {
                clearInterval(timer); // закончить анимацию через 2 секунды
                return;
              }
              // отрисовать анимацию на момент timePassed, прошедший с начала анимации
              veil.style.bottom = timePassed/8  + 'vh';
        
            });
            break;
        }
      case 3:
        {

            let start = Date.now(); // запомнить время начала
        
            let timer = setInterval(function() {
              // сколько времени прошло с начала анимации?
              let timePassed = Date.now() - start;
            
              if (timePassed >= 40) {
                clearInterval(timer); // закончить анимацию через 2 секунды
                return;
              }
              // отрисовать анимацию на момент timePassed, прошедший с начала анимации
              veil.style.bottom = 1  + 'px';
        
            });
            break;
        } 
      case 4:
        {
          if (rabbitBird == false)
          {

            let start = Date.now(); // запомнить время начала
        
            let timer = setInterval(function() {
              // сколько времени прошло с начала анимации?
              let timePassed = Date.now() - start;
            
              if (timePassed >= 200) {
                clearInterval(timer); 
                return;
              }
                rabbit.style.bottom = 30  - timePassed/10  + 'vh';
                bird.style.bottom = 10 +timePassed/10  + 'vh';
            });
            rabbitBird = true;
          }
          else 
          {
            let start = Date.now(); // запомнить время начала
        
            let timer = setInterval(function() {
              // сколько времени прошло с начала анимации?
              let timePassed = Date.now() - start;
            
              if (timePassed >= 200) {
                clearInterval(timer); 
                return;
              }
              rabbit.style.bottom = 10  + timePassed/10  + 'vh';
              bird.style.bottom = 30 - timePassed/10  + 'vh';
              });
              rabbitBird = false;
          }
            break;
        }     

    }    
}

function animDown()
{
  let switcher = document.getElementById("lamp-switcher");
  let start = Date.now(); // запомнить время начала
            
  let timer = setInterval(function() {
    // сколько времени прошло с начала анимации?
    let timePassed = Date.now() - start;
  
    if (timePassed >= 100) {
      clearInterval(timer); // закончить анимацию через 2 секунды
      return;
    }
    if(timePassed>=72){
      switcher.style.top = timePassed/7  + 'vh';
    }
  });
}

function animUp()
{
  let switcher = document.getElementById("lamp-switcher");
  if(flag == false)
  {
    let start = Date.now(); // запомнить время начала
              
    let timer = setInterval(function() {
      // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 800) {
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
      }
      if(timePassed <= 72 && timePassed>=50){
        switcher.style.top = timePassed/7  + 'vh';

      }
      wizard.style.opacity = timePassed/799;
      hat.style.opacity = timePassed/799;
      bird.style.opacity = timePassed/799;
      rabbit.style.opacity = timePassed/799 ;
      if(triangle.style.opacity < 0.5)
      {
        triangle.style.opacity = timePassed/799;
      }
    });
    flag = true;
  }
  else
  {
    let start = Date.now(); // запомнить время начала
              
    let timer = setInterval(function() {
      // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;
      if (timePassed >= 800) {
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
      }
      if(timePassed <= 72 && timePassed>=50){
        switcher.style.top = timePassed/7  + 'vh';

      }
      wizard.style.opacity = 1 - timePassed/799;
      hat.style.opacity = 1 - timePassed/799;
      bird.style.opacity = 1 - timePassed/799;
      rabbit.style.opacity = 1 - timePassed/799;
      triangle.style.opacity = 0.5 - timePassed/799;
    });
    flag = false;
  }
}
