
class lanche {
    constructor(hamburgerCarne, pao, queijo, salada, molho, picles, frango, hamburgerFrango) {
        this.hamburgerCarne = hamburgerCarne
        this.pao = pao
        this.queijo = queijo
        this.salada = salada
        this.molho = molho
        this.picles = picles
        this.frango = frango
        this.hamburgerFrango = hamburgerFrango
    }

}



class combo {
    constructor(hamburgerCarne, pao, queijo, salada, molho, picles, frango, hamburgerFrango, batata_media, batata_pequena, bebida, fruta) {
        this.hamburgerCarne = hamburgerCarne
        this.pao = pao
        this.queijo = queijo
        this.salada = salada
        this.molho = molho
        this.picles = picles
        this.frango = frango
        this.hamburgerFrango = hamburgerFrango

        this.batata_media = batata_media
        this.batata_pequena = batata_pequena
        this.bebida = bebida
        this.fruta = fruta
    }
}


McLanche_alegre = new lanche(1, 2, 1, 0, 0, 0, 0, 0)
Big_lanche = new lanche(2, 2, 1, 1, 1, 1, 0, 0)
McHen = new lanche(0, 2, 1, 1, 0, 1, 1, 1)


comboBig_lanche = new combo(2, 2, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0)
comboMcLanche_alegre = new combo(1, 2, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1)
comboMcHen = new combo(0, 2, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0)


console.log("Lanches:")
console.log(McLanche_alegre)
console.log(Big_lanche)
console.log(McHen)
console.log("Combos:")
console.log(comboMcLanche_alegre)
console.log(comboBig_lanche)
console.log(comboMcHen)


