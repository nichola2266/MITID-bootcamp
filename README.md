# MITID-bootcamp
Everything you need for MITID bootcamp!

1-[Johnny five → J5.js](#johnny-five)
⋅⋅⋅⋅1.[Firmata](#firmata)
⋅⋅⋅⋅2.[P5.js](#p5js)
⋅⋅⋅⋅3.[Components documentation](#johnny-five-documentation-for-almost-each-components-from-your-kit)






## johnny five

jhonny-five documentation: https://johnny-five.io/api/

johnny five fonctionne en deux parties. On commence par téléverser Firmata sur la carte arduino uno. Cela va nous permettre de controler notre carte arduino depuis notre page web, grâce à javascript et plus spécifiquement la librarie johnny-five.

### Firmata 

Steps:
- Plug in your Arduino or Arduino compatible microcontroller via USB
- Open the Arduino IDE, select: File > Examples > Firmata > StandardFirmataPlus
StandardFirmataPlus is available in Firmata v2.5.0 or greater
- Select your board and port.
- Click the "Upload" button.

Keep in mind:
- You just need to upload firmata ONCE on your board.
- Leave the board plugged to your computer when you want to use it. 
- Make sure to unplug the board when you create a circuit.

### P5.js

 minimal sketch to switch on a led

```javascript 

// a variable to store the "electronic object"
let led;

function preload(){

    // Load the board
    loadBoard();
}

function setup(){

    // we attach the led on the arduino pin ~3
    led = new five.Led(3);
}

function draw(){

    // switch on the led
    led.on();

    // switch off the led
    led.off();

    // set brightness from 0 to 255 (pin 3 has a ~ so we can apply an analog value)
    led.brightness(100);
}
```

More informations on leds can be found in the documentation 
https://johnny-five.io/api/led/

### johnny five documentation for (almost) each components from your kit

OUTPUTS
- [Led↗](https://johnny-five.io/api/led/)
- [RGB led↗](https://johnny-five.io/api/led.rgb/)
- [Piezo (buzzer)↗](https://johnny-five.io/api/piezo/)
- [Servo↗](https://johnny-five.io/api/servo/)
- [Motor↗](https://johnny-five.io/api/motor/)
- [LCD screen↗](https://johnny-five.io/api/lcd/)
```javascript 
    // LCD controller
    lcd = new five.LCD({
        controller: "PCF8574T",
    });  
```
INPUTS
- [Button↗](https://johnny-five.io/api/button/)
- [Sensor (light sensor and potentiometer for instance)↗](https://johnny-five.io/api/sensor/)

Components available in the makers'lab
- [Joystick↗](https://johnny-five.io/api/joystick/)
- [Motion sensor↗](https://johnny-five.io/api/motion/)


