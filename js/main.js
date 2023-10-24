//***************D-R-U-M---M-A-C-H-I-N-E***************


//listen for keydown event; when that happens, run function
window.addEventListener('keydown', playSound);

//keyCode is a number keyboard event in javascript
//querySelector selects the audio tag with the data-key varible
//backticks and querySelector syntax=ES6
  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //halts the function
    audio.play();
    key.classList.add('playing');
    audio.currentTime = 0;
    
  }


  const keys = Array.from(document.querySelectorAll('.key'));
  keys.forEach(key => key.addEventListener('transitionend', removeTransition));
  window.addEventListener('keydown', playSound);

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
  }


//***************I-M-A-G-E---R-A-N-D-O-M-I-Z-E-R**************

window.onload = choosePic;


var random_img = new Array ();
                //adds images to array====
                random_img[0] = "./img/random/dollarsign.svg";
                random_img[1] = "./img/random/8bitbomb.svg";
                random_img[2] = "./img/random/nan.svg"


function choosePic() {
     var randomNum = Math.floor(Math.random() * random_img.length);
     document.getElementById("myPicture").src = random_img[randomNum];
}


//*****VIDEO SLIDESHOW*******/


            var images = ["./video/random/video1.mp4", "./video/random/video2.mp4", "./video/random/video3.mp4", "./video/random/video4.mp4"];
           

            var imageNumber = Math.floor(Math.random()*2);
            var imageLength = images.length - 1;

            function changeImage() {
                imageNumber = Math.floor(Math.random()*2) ;


                document.getElementById("video_image").src = images[imageNumber];


                return false;
            }
