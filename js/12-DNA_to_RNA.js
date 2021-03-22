// https://www.codewars.com/kata/5556282156230d0e5e000089


function DNAtoRNA(dna) {
    let rna = '';

    for (let i = 0; i < dna.length; i++) {
        if (dna[i] === 'T') {
            rna += 'U'
            continue;
        }
        rna += dna[i];
    }
return rna;
}

console.log(DNAtoRNA('TAZIKAS'));