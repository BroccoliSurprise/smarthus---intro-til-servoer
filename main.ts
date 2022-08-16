input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 180)
})
