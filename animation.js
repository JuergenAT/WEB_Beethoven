let canvas = new fabric.Canvas('canv',{backgroundColor:'rgb(0,0,0)'}); // black
// let canvas = new fabric.Canvas('canv',{backgroundColor:'rgb(0,150,255)'}); // blue
canvas.setHeight(window.innerHeight-16);
canvas.setWidth(window.innerWidth-18);
fabric.Object.prototype.objectCaching = true;
let BG_El = document.getElementById('BG');
let phrase = '„Im Allgemeinen führt die Leidenschaft der Deutschen, die Namen von Großmietern in Häusern zu verewigen, manchmal zu lustigen Dingen. In Bonn gibt es beispielsweise zwei Häuser in verschiedenen Stadtteilen, auf denen steht: „Beethoven wurde hier geboren!“';
let dYphrase = 50;
let dXphrase = 100;
let strFontSize = 40;
let strColor = '#ffffff';
let stringMax = 30; // max length of string on a screen
let letters = null;  // array of Letter objects
const fps = 18  // frames per sec. max 60

let BG = new fabric.Image(BG_El);
BG.scale(0.68);
// canvas.backgroundImage = BG;



  // checking MIDI ability
  //
  // Variable which tell us what step of the game we're on. 
// We'll use this later when we parse noteOn/Off messages
let currentStep = 0;

// Request MIDI access
if (navigator.requestMIDIAccess) {
    console.log('This browser supports WebMIDI!');

    navigator.requestMIDIAccess().then(onMIDISuccess, onMIDIFailure);

} else {
    console.log('WebMIDI is not supported in this browser.');
}




// Function to run when requestMIDIAccess is successful
function onMIDISuccess(midiAccess) {
  let inputs = midiAccess.inputs;
  let outputs = midiAccess.outputs;
  console.log('000', midiAccess.inputs)

  // Attach MIDI event "listeners" to each input
  for (let input of midiAccess.inputs.values()) {
      input.onmidimessage = getMIDIMessage;
      console.log('111', input.name)
  }
}

// Function to run when requestMIDIAccess fails
function onMIDIFailure() {
  console.log('Error: Could not access MIDI devices.');
}

// Function to parse the MIDI messages we receive
// For this app, we're only concerned with the actual note value,
// but we can parse for other information, as well
function getMIDIMessage(message) {
  let command = message.data[0];
  let note = message.data[1];
  let velocity = (message.data.length > 2) ? message.data[2] : 0; // a velocity value might not be included with a noteOff command

  switch (command) {
      case 144: // note on
          if (velocity > 0) {
              noteOn(note);
          } else {
              // noteOff(note);
          }
          break;
      case 128: // note off
          // noteOffCallback(note);
          break;
      // we could easily expand this switch statement to cover other types of commands such as controllers or sysex
  }
}

// Function to handle noteOn messages (ie. key is pressed)
// Think of this like an 'onkeydown' event
function noteOn(note) {
  console.log('note =', note);


// if (note < 48 ) { Eye.ceiling = 500}
// else if (note < 60)  {Eye.ceiling = 400}
// else if (note < 72)  {Eye.ceiling = 300}
// else if (note < 84)  {Eye.ceiling = 200}
// else {Eye.ceiling = 100}


  switch(note) {
  case 36: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="A") item.opacity=1;})} break;
  case 37: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="B") item.opacity=1;})} break;
  case 38: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="D") item.opacity=1;})} break;
  case 39: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="G") item.opacity=1;})} break;
  case 40: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="H") item.opacity=1;})} break;
  case 41: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="I") item.opacity=1;})} break;
  case 42: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="L") item.opacity=1;})} break;
  case 43: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="N") item.opacity=1;})} break;
  case 44: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="S") item.opacity=1;})} break;
  case 45: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="a") item.opacity=1;})} break;
  case 46: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="ä") item.opacity=1;})} break;
  case 47: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="b") item.opacity=1;})} break;
  case 48: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="c") item.opacity=1;})} break;
  case 49: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="d") item.opacity=1;})} break;
  case 50: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="e") item.opacity=1;})} break;
  case 51: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="f") item.opacity=1;})} break;
  case 52: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="g") item.opacity=1;})} break;
  case 53: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="h") item.opacity=1;})} break;
  case 54: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="i") item.opacity=1;})} break;
  case 55: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="l") item.opacity=1;})} break;
  case 56: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="m") item.opacity=1;})} break;
  case 57: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="n") item.opacity=1;})} break;
  case 58: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="o") item.opacity=1;})} break;
  case 59: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="p") item.opacity=1;})} break;
  case 60: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="r") item.opacity=1;})} break;
  case 61: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="s") item.opacity=1;})} break;
  case 62: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="ß") item.opacity=1;})} break;
  case 63: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="t") item.opacity=1;})} break;
  case 64: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="u") item.opacity=1;})} break;
  case 65: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="ü") item.opacity=1;})} break;
  case 66: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="v") item.opacity=1;})} break;
  case 67: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="w") item.opacity=1;})} break;
  case 68: if(letters) {letters.forEach((item, index, letters) => {if(item.text=="!") item.opacity=1;})} break;
  case 96: //   включить все и начать анимацию
      if(letters) {letters.forEach((item, index, letters) => {item.opacity=1;
        letters.full = true;  // set of letters is full, to start combine string
      })} break;
}   // switch
}   // function


// Function to handle noteOff messages (ie. key is released)
// Think of this like an 'onkeyup' event
function noteOff(note) {
  //...
}






// Animating Particles
//  http://fabricjs.com/particles
//

(function() {
  let maxx = canvas.width,
    maxy = canvas.height*2/3;

    letters = new Array(phrase.length);
    letters.full = false;

  // fabric.Image.fromURL('../assets/GP_Note.png', blobLoaded);
  letterLoaded(phrase);


  function letterLoaded(str) {

    let stringIndex = new Array(), spacePos = -1, nl = +0, nlXPos=+0;
    for (let i=0; i < phrase.length; i++) {
      spacePos = phrase.indexOf(' ', spacePos);
      if(((spacePos/stringMax)|0) - nl >= 1) {
        nlXPos = i;
        nl = ((spacePos/stringMax)|0);
      }
      stringIndex[i] = {
        wordEnd: (spacePos == -1? spacePos=phrase.length: spacePos),
        line   : (spacePos/stringMax)|0,
        startPosX : ((i==0)||(nlXPos==0)? 0: nlXPos)
      }
      if (i >= spacePos) (spacePos == -1? spacePos=phrase.length: spacePos++);
    }


    for (let i = 0; i < str.length; i++) {
      let str2 = new fabric.Text(str[i], {
        left: Math.floor(Math.random() * maxx),
        top: Math.floor(Math.random() * maxy),
        selectable: false
      });
      str2.fontFamily = 'Courier';
      str2.fill = strColor;
      str2.opacity = 0;
      str2.angle = Math.floor(Math.random() * 180);
      str2.fontSize = strFontSize;
      str2.vx = 0;
      str2.vy = 0;
      str2.originX = 'center';
      str2.originY = 'center';
      str2.endPosX = dXphrase + (stringIndex[i].startPosX==0?i*24:(i-(stringIndex[i].startPosX))*24); // i multiply on letters width
      str2.endPosY = dYphrase + stringIndex[i].line*36;

      canvas.add(str2);
      letters[i] = str2;
    }   // for


    animate();
  }   // end of function LetterLoaded(str)

  function animate() {
    for (let i = 0; i < phrase.length; i++) {
      let letter = letters[i];
      
      
      let dx = letter.left - letter.endPosX;
      let dy = letter.top - letter.endPosY;
      let speedX = 1;
      let speedY = 1;
 
      // let dx = blob.left - mouse_pos.x;
      // let dy = blob.top - mouse_pos.y;


      
      let vx = letter.vx;
      let vy = letter.vy;

      if (letters.full) {
        // let gamma = letters[i].text.charCodeAt(0);
        // gamma=((gamma>150)||(gamma<65)?100:gamma);


        // vx -= dx * Math.random()*gamma*0.01/300;
        // vy -= dy * Math.random()*gamma*0.01/300;
        // speedX = (dx*dx > 10000 ? 1 : dx/100);
        // speedY = (dy*dy > 10000 ? 1 : dy/100);
        // letters[i].angle = letters[i].angle*0.98;

        a();
        function a(){
          for (let j=0; j<letters.length; j++) {
            
          letters[j].animate('angle', 0, {
            // onChange: canvas.renderAll.bind(canvas),
            duration: 2500,
            easing : fabric.util.ease.easeInOutBack
          }); // animate angle
          letters[j].animate('left', letters[j].endPosX, {
            // onChange: canvas.renderAll.bind(canvas),
            duration: 20+Math.floor(2000*Math.random()),
            easing : fabric.util.ease.easeInOutSine
          }); // animate X
          letters[j].animate('top', letters[j].endPosY, {
            // onChange: canvas.renderAll.bind(canvas),
            duration: 20+Math.floor(2000*Math.random()),
            easing : fabric.util.ease.easeInOutSine
          }); // animate Y
        } //  for j
          // fabric.util.requestAnimFrame(a, canvas.getElement());
        };  // function a()
        return;   // from function animate()




      }   // if full
      vx *= 0.95;
      vy *= 0.95;

      vx += speedX*(Math.random() - 0.5);
      vy += speedY*(Math.random() - 0.5);

      let x = letter.left += vx;
      let y = letter.top += vy;

      if (x < 0 || x > maxx || y < 0 || y > maxy) {
        let r = Math.atan2(y - maxy / 2, x - maxx / 2);
        vx = -Math.cos(r);
        vy = -Math.sin(r);
      }

      letter.vx = vx;
      letter.vy = vy;
    }   // for i

   

    fabric.util.requestAnimFrame(animate, canvas.getElement());
  }     //  end of function animate()
})();


// waitig quasi event - letters.full and writing last sentence
(()=>{

  let strBorodin = new fabric.Text("A. Borodin, 1877", {
    fontFamily : 'Courier',
    fontSize   :  strFontSize,
    fill       :  strColor,
    left       :  dXphrase,
    top        :  dYphrase + 400,
    opacity    :  0
  })
  canvas.add(strBorodin);
  borodinWait(); 

  function borodinWait(){
    if (letters.full){ setTimeout(()=>{ strBorodin.animate('opacity', 1, {duration: 2000});} ,2000);
      return;  // from function borodinWait()
    }   //  if full
    fabric.util.requestAnimFrame(borodinWait, strBorodin);
  }   //  end of function borodinWait()


})();



// 2nd variant of globalRender
function globalRender(){
    canvas.renderAll();
    fabric.util.requestAnimFrame(globalRender);
}

globalRender()