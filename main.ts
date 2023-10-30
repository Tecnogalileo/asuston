basic.forever(function () {
    basic.showNumber(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) < 80) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 40)
    } else if (input.rotation(Rotation.Pitch) > 100) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 30)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
