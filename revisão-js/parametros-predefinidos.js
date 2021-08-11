function areaForma(base, altura, forma = 'R') {
    let area
    switch (forma) {
        case 'R': // Re
            area = base * altura
            break
        case 'T':
            area = base * altura / 2
            break
        case 'E':
            area = (base / 2) * (altura / 2) * Math.PI
    }
    return area
}

console.log(`Retângulo 45*15: ${areaForma(45,15,'R')}`)
console.log(`Triângulo 13*8: ${areaForma(13,8,'T')}`)
console.log(`Elipse 12*16: ${areaForma(12,16,'E')}`)
console.log(`Quadrado 6.5*6.5: ${areaForma(6.5,6.5)}`)
console.log(`Retângulo 20*25: ${areaForma(20,25)}`)






