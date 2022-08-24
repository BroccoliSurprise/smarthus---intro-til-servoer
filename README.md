# Intro til Servomotorer

```template
input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P1, 0)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 90)
    basic.pause(1000)
    pins.servoWritePin(AnalogPin.P1, 180)
})

```

## Steg 1 - Hva er en Servomotor? @showdialog


En servomotor er en elektrisk motor som kan styres veldig presist.

![bilde av FS90 servomotor](https://d14xnrffmhx4ml.cloudfront.net/1660679072/smarthus-veiledning-microbit-microservo-180-degrees.jpg)

## Steg 2 - NB OBS ARGH IKKE DREP MICROBITEN @showdialog

**Viktig! Les dette før du begynner**  

Utstyret kan bli ødelagt om ledningene sklir eller kortslutter, så vær **helt** sikker på at det ikke er strøm i systemet når du skal koble til eller fra noe.

## Steg 2.5 - Hvordan koble servo og adapter @showdialog

Pass på at du kobler ledningen og adapteren sammen riktig vei, samme farge på samme side:

![bilde av servomotor og adapter](https://d14xnrffmhx4ml.cloudfront.net/1661359252/smarthus-veiledning-servoadapterkobling.jpg)


## Steg 3 - Hvordan koble på servo @showdialog

![bilde av ledninger koblet på microbit](https://d14xnrffmhx4ml.cloudfront.net/1661359253/smarthus-veiledning-servokobling.jpg)

Fra høyre til venstre skal det være svart på **GND**, rød på **3V**, og så gul på **1**.

## Steg 5 -  Last ned koden

Last ned eksempel-programmet til micro:biten og sjekk om det blir liv i servomotoren når du trykker på A.

## Steg 6 - Hurra!

Hvis det ble liv: Hurra! Ser du sammenhengen mellom tallene og veien motoren beveger seg? 
Prøv å endre eksempel-programmet og se hvordan motoren tolker ulike tall. 

## Steg 7 - Samme kommando, ulik resultat

Vi har to ulike modeller servo-motorer, 180-grader og 360-grader (markert med RØD TEIP).

Sjekk hvordan de to modellene oppfører seg ulikt med samme kode. Hvordan tolker 360-graderen "0" grader? Eller "180"?

## Steg 8 - Mer info @showdialog

Godt jobbet! Du har nå lært det grunnleggende om programmering av servo-motorer. Nå kan du trykke "Finish/Ferdig" for å avslutte denne veiledningen.

## Ferdig

Trykk på Finish/Ferdig til høyre.