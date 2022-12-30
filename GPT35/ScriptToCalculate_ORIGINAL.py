
def costDeute(cad):
	""" #PRE: cadena amb un preu i acabada amb un símbol ("e","€", o " e", o " €") que permeti definir l'acabament de la seqüència. No funciona si no hi ha e o € després del simbol d'euro.
		#POST: retorna només el numero dels euros (amb string)"""	
	buscats = "0123456789."
	s = ''
	for c in cad:
		if c in buscats:
			s = s + c
		else:
			return s



def calcula(text):
	text = text.split("\n")
	for linia in text:
		linia = linia.strip().split("--")
		
		deudor = linia[0].split()[0].lower() 	 #nom del deudor (nomes hi ha dues persones)
		diners = costDeute(linia[1].strip().replace(",",".")) #els euros
		#print(deudor,diners)
	return 




if __name__ == "__main__":
	text = """pepe debe a marta -- 3€ (salmon)
marta debe a pepe -- 9 euros (pepinete)
pepe debe a Marta -- 12 e
Pepe debe a Marta -- 12.3 e (salmonet 24.6/2 = 12.3)
pepe debe a Marta -- 20,9 e (queviures)"""
	calcula(text)
