//AQUESTA FUNCIÓ HA ESTAT TRANSCRITA AMB GPT35 DES DE LA FUNCIÓ costDeute dins el fitxer ScriptToCalculate_ORIGINAL
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

//AQUESTA FUNCIÓ HA ESTAT TRANSCRITA AMB GPT35 DES DE LA FUNCIÓ calcula dins el fitxer ScriptToCalculate_ORIGINAL. Ha calgut readaptar algunes
//coses que no feia bé el programa: la funció split necessita que se li passi l'argument " " perquè talli espai buits, mentre que en python ho fa
//per defecte. A més, no elimina tots els espais buits... només ho fa amb el nombre d'espais buits passats. Finalment ha calgut canviart la funció strip() per la funció trim()
function calcula(text) {
    const textLines = text.split("<br>");
    var arr_deudor1 = []; //longitud n
    var arr_deudor2 = []; //longitud m
    var deudor1 = '';
    
    
    var afegit = false;
    for (const linia of textLines) {
        const parts = linia.trim().split("--");
        const deudor = parts[0].split(" ")[0].toLowerCase(); // nom del deudor que apareix primer (nomes hi ha dues persones)
        const diners = costDeute(parts[1].trim().replace(",",".")); // els euros
        if (deudor1 == '') { //primer cas afegit
            deudor1 = deudor;
            var n = arr_deudor1.push(diners);
        }
        else if (deudor1 != deudor) { //cas en que poso a la segona llista
            var m = arr_deudor2.push(diners);
            if (!afegit) {
                var deudor2 = deudor;
                afegit = true;
            }
        }
        else { //deudor1 == deudor (cas en que ja hem afegit dades i deudor 1 ja te un o mes elemnts afegits a l'array)
            var n = arr_deudor1.push(diners);
        }
        console.log(deudor, diners);
    }
    var arr_pack = [arr_deudor1, arr_deudor2, n, m, deudor1, deudor2];
    return arr_pack;
}


//gpt3.5. Gràcies <3
function preservaSaltsDeLinia(text) {
    return text.replace(/\n/g, '<br>');
}

//PRE:  paquetet es l'arr pack = [arr_deudor1, arr_deudor2, n, m]: dos arrays de gastos i la longitud de la primera array i de la segona, repspectiva,ent
// de l'estil [['3', '12', '12.3', '20.9'],['9', '6.24'],4,2]
//POST: una impressió dels calculs parcials i el retorn dels deutes acumulats
function DeutesParcials(paquetet) {
    var [arr_deudor1, arr_deudor2, n, m, deudor1, deudor2] = paquetet;
    
    console.log(arr_deudor1);
    console.log(arr_deudor2);
    console.log(n);
    console.log(m);
    console.log(deudor1);
    console.log(deudor2);

    //RECORRO LA LLISTA DEL PRIMER DEUDOR
    var str_sum_d1 = '';
    var sum_d1 = 0.0;
    for (let i = 0; i < n; i++) {
        str_sum_d1 += arr_deudor1[i] + " +";
        sum_d1 +=  Number(arr_deudor1[i]);
    }
    str_sum_d1 = str_sum_d1.slice(0, str_sum_d1.length - 2); //elimino el vestigi de la suma del final

    //RECORRO LA LLISTA DEL SEGON DEUDOR
    var str_sum_d2 = '';
    var sum_d2 = 0.0;
    for (let i = 0; i < m; i++) {
        str_sum_d2 += arr_deudor2[i] + " +";
        sum_d2 += Number(arr_deudor2[i]);
    }    
    str_sum_d2 = str_sum_d2.slice(0, str_sum_d2.length - 2); //elimino el vestigi de la suma del final

    //POSEM PARENTESIS I O SIMBOLS D'EURO A LA TIRALLONGA DE CALCULS PER AL DEUDOR 1
    if (n > 1)  str_sum_d1 = "(" + str_sum_d1 + ") € = <u><b>"+Math.round(sum_d1*100) / 100+"</b></u> €";
    else        str_sum_d1 = "<b>"+str_sum_d1+"</b> €";  //cas que nomes hi ha un deute pel deudor 1 (n==1)
    
    //POSEM PARENTESIS I O SIMBOLS D'EURO A LA TIRALLONGA DE CALCULS PER AL DEUDOR 1
    if (m > 1)  str_sum_d2 = "(" + str_sum_d2 + ") € = <u><b>"+Math.round(sum_d2*100) / 100+"</b></u> €";
    else        str_sum_d2 = "<b>"+str_sum_d2 + "</b> €";  //cas que nomes hi ha un deute pel deudor 2

    var judici_d1 = deudor1 +" debe a "+deudor2+" = "+ str_sum_d1;
    var judici_d2 = deudor2 +" debe a "+deudor1+" = "+ str_sum_d2;
    if (sum_d1 > sum_d2) {
        return judici_d1+"<br>"+judici_d2+'<p style="color:orange"><br>DEUDA NETA: '+deudor1+" debe pagar <b>"+(Math.round((sum_d1 - sum_d2) * 100) / 100).toString()+'</b></p>';
    }
    else if (sum_d2 > sum_d1) {
        return judici_d2+"<br>"+judici_d1+'<p style="color:orange"><br>DEUDA NETA: '+deudor2+" debe pagar <b>"+(Math.round((sum_d2 - sum_d1) * 100) / 100).toString()+'</b></p>';
    }
    else {
        return judici_d2+"<br>"+judici_d1+'<p style="color:green"><br>Nadie debe nada a nadie :D</p>';
    }
    
    
}

/*pre: prenc l'entrada del formulari. De la forma 

        pepe debe a marta -- 3€ (salmon)
        marta debe a pepe -- 9 euros (pepinete)
        pepe debe a Marta -- 12e
        Pepe debe a Marta -- 12.3 e (salmoncito 24.6/2 = 12.3)
        pepe debe a Marta -- 20,9 e (queviures)
        Marta debe--6,24€


  post:
        retorna un string amb

            Pepe debe a Marta = (3 + 12 + 12.3 + 20.9)€ = 48.2€
            Marta debe a Pepe = 9€

            RESUMEN: ---> Pepe debe a Marta = 48.2€ - 9€ = 39.2€
            
        i fa una alerta:

            Analitzats 5 moviments
*/
function mostraDeutes() {
    var inputForm = preservaSaltsDeLinia(document.getElementById("latextarea").value);
    var arr_pack = calcula(inputForm);
    var tirallongaCalculs = DeutesParcials(arr_pack);
    document.getElementById("output").innerHTML = "<br>"+tirallongaCalculs;
}





