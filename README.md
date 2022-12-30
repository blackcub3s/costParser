# online costParser
   

## Description

This website has been created to allow two people to track debts against each other. Yoy can test it here [https://blackcub3s.github.io/costParser/](https://blackcub3s.github.io/costParser/). It works simply by copy and pasting a list of accumulated debts using a format similar to the following:

    - pepe debe a marta -- 3€ (salmon)
    - marta debe a pepe -- 9 euros (pepinete)
    - pepe debe -- 12e
    - Pepe debe a Marta -- 12.3 e (salmoncito 24.6/2 = 12.3)
    - pepe debe a Marta -- 20,9 e (queviures)

## considerations

Just bare in mind that you NEED to follow the following rules, otherwise the program will crash

    - The debtor's name needs to be specified at the beggining of each line
    - Each line must have a "--" separation between the string description of who owes what to whom and the amount that is owed.
    - After the specified debt, a "€" symbols or "e" simbol must appear     
    - A minimum of two lines must be defined in the text, with debts owed reciprocally between debtors.