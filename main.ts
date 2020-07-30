function BougerDiodeDansColonne (colonne: string) {
    for (let ligne = 0; ligne <= 4; ligne++) {
        let direction: number[] = []
        let colonne = 0
        if (led.point(colonne, ligne)) {
            ligne_suivante = ligne + direction[colonne]
            led.plot(colonne, ligne)
        }
        if (ligne_suivante <= 0) {
            direction[colonne] = 0
        } else if (ligne_suivante >= 4) {
            direction[0] = 0
        }
    }
}
let ligne_suivante = 0
let liste = [1, 1, 1, 1, -1]
for (let i = 0; i <= 4; i++) {
    led.plot(i, i)
}
basic.forever(function () {
    for (let colonne_boucle = 0; colonne_boucle <= 4; colonne_boucle++) {
        BougerDiodeDansColonne(colonne_boucle)
    }
    basic.pause(200)
})
