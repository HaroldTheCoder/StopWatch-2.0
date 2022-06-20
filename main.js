// Create stopwatch function
const MyStopwatch = () => {
    const minutesBox = document.querySelector('#minutes');
    const secondsBox = document.querySelector('#seconds');
    const millisecondsBox = document.querySelector('#milliseconds');
    const startButton = document.querySelector('#start');
    const pauseButton = document.querySelector('#pause');
    const resetButton = document.querySelector('#reset');

    /* Set time to 00 by default */
    let minutes = 00; 
    let seconds = 00;
    let milliseconds = 00;
    let interval;

    
    /* Start, Pause and Reset event on button click */
    startButton.addEventListener('click', ()=> {
        clearInterval(interval)
       interval = setInterval(startTimer, 10); // Sets time increment by 1 
       if(milliseconds >= 0) {
            startButton.style.display = "none";
            pauseButton.style.display = "block";
        }    
    });

    pauseButton.addEventListener('click', ()=> {
        clearInterval(interval)
        if(milliseconds >= 0) {
            pauseButton.style.display = "none";
            startButton.style.display = "block";
        }    
    });

    resetButton.addEventListener('click', ()=> {
        clearInterval(interval)
        minutesBox.innerHTML = '00';
        secondsBox.innerHTML = '00';
        millisecondsBox.innerHTML = '00';

        if(pauseButton.style.display = "block") {
            pauseButton.style.display = "none";
            startButton.style.display = "block";
        }
    });


    /* Time function */
    function startTimer() {
        milliseconds++;
        millisecondsBox.innerHTML = milliseconds;

        if(milliseconds < 9) {
            millisecondsBox.innerHTML = '0' + milliseconds;
        } else if (milliseconds === 100) {
            seconds++;
            milliseconds = 0;
            secondsBox.innerHTML = '0' + seconds;
            millisecondsBox.innerHTML = '0' + milliseconds;
        }

         if (seconds > 9) {
            secondsBox.innerHTML = seconds;
        } 

        if (seconds === 60) {
            minutes++;
            seconds = 0;
            milliseconds = 0;
            minutesBox.innerHTML = '0' + minutes;
            secondsBox.innerHTML = '0' + seconds;
            millisecondsBox.innerHTML = '0' + milliseconds;
        }

    }
  
}
// Declare function
MyStopwatch()

