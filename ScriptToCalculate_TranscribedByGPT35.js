function costDeute(cad) {
    // PRE: cadena amb un preu i acabada amb un símbol ("e","€", o " e", o " €") que permeti definir l'acabament de la seqüència. No funciona si no hi ha e o € després del simbol d'euro.
    // POST: retorna només el numero dels euros (amb string)
    const buscats = "0123456789.";
    let s = '';
    for (const c of cad) {
        if (buscats.includes(c)) {
            s = s + c;
        } else {
            return s;
        }
    }
}
  
function calcula(text) {
    const textLines = text.split("\n");
    for (const linia of textLines) {
        const parts = linia.strip().split("--");
        const deudor = parts[0].split(" ")[0].toLowerCase(); // nom del deudor (nomes hi ha dues persones)
        const diners = costDeute(parts[1].strip().replace(",",".")); // els euros
        console.log(deudor, diners);
    }
    return;
}


const text = `pepe debe a marta -- 3€ (salmon)
marta debe a pepe -- 9 euros (pepinete)
pepe debe a Marta -- 12 e
Pepe debe a Marta -- 12.3 e (salmonet 24.6/2 = 12.3)
pepe debe a Marta -- 20,9 e (queviures)`;

calcula(text);

  