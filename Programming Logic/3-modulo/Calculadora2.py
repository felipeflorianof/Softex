num1 = int(input("Digite um número Inteiro: "))
num2 = int(input("Digite outro número Inteiro: "))
escolha = ""

def calculadora(num1, num2, escolha):


    while(escolha != 5):
        print("Escolha o tipo de opercação a ser realizada \n Considere: \n 1 = Soma \n 2 = Subtração \n 3 = Multiplicação \n 4 = Divisão \n 5 = Sair \n - ")
        escolha = int(input())

        if(escolha == 5):
            print("Saindo...")
            break

        elif(escolha == 1 or escolha == 2 or escolha == 3 or escolha == 4):

            if(escolha == 1):
                s = num1 + num2
                print("Somando... ",num1," + ",num2, " = ",s)

            elif(escolha == 2):
                sub = num1 - num2
                print("Subtraindo... ",num1," - ",num2," = ",sub)

            elif(escolha == 3):
                mul = num1 * num2
                print("Multiplicando... ",num1," * ",num2," = ",mul)

            elif(escolha == 4):
                div = num1 / num2
                print("Dividindo... ",num1," / ",num2," = ",div)



calculadora(num1, num2, escolha)