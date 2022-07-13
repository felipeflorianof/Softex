num1 = int(input("Digite um número Inteiro: "))
num2 = int(input("Digite outro número Inteiro: "))
escolha = int(input("Escolha o tipo de opercação a ser realizada \n Considere: \n 1 = Soma \n 2 = Subtração \n 3 = Multiplicação \n 4 = Divisão \n -  "))


def calculadora(num1, num2, escolha):

    if(escolha == 1):
        s = num1 + num2
        print("Somando... ",num1," - ",num2," = ", s)

    elif(escolha == 2):
        sub = num1 + num2
        print("Subtraindo... ",num1," - ",num2," = ", sub)

    elif(escolha == 3):
        mul = num1 * num2
        print("Multiplicando... ",num1, " * ", num2, " = ", mul)

    elif(escolha == 4):
        div = num1 / num2
        print("Dividindo... ",num1, " / ", num2, " = ", div)

    else:
        print("[ERRO] Selecione um identificador válido, exemplo: 1, 2, 3 ou 4")


calculadora(num1, num2, escolha)