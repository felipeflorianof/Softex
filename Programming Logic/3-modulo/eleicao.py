import enum

    # Classe com os candidatos disponíveis

class Politicos(enum.Enum):
    branco = 0
    lula = 13
    bolsonaro = 17
    alckmin = 45

    # Função criada pra contabilizar os votos

def votacao():
    nulos = 0
    l = 0
    b = 0
    a = 0

    # Enquanto for verdade, execute tudo isso:

    while True:
        print("\n\n ----ELEIÇÕES 2022---- \n\n Considere - \n\n - Lula = 13 \n - Bolsonaro = 17 \n - Alckmin = 45 \n - nulo = 0 \n")
        votos = input("Digite seu voto: ")

        try:
            numero_votos = int(votos)
            if(numero_votos == Politicos.lula.value):
                l += 1
            elif(numero_votos == Politicos.bolsonaro.value):
                b += 1
            elif(numero_votos == Politicos.alckmin.value):
                a += 1
            else:
                nulos += 1

        except ValueError:

            print("Digite um número inteiro.")

            continue
        else:
            question = input("Deseja fazer a contagem de votos? ")

            # Se for verdade o programa para, e então é exibido o político eleito e todos os votos.
            if(question == "Sim" or question == "sim" or question == "SIM"):
                break
            # Senão o programa "continua" e volta para a input("Digite seu voto: ")
            else:
                continue

    # verificação de quem recebeu mais votos, o print de quem foi o vencedor:

    if(l > b and l > a):
        print("Lula venceu!")
    elif(b > l and b > a):
        print("Bolsonaro venceu!")
    elif(a > l and a > b):
        print("Alckmin venceu!")

    # Exibição de Todos os votos

    print("Total de votos: ")
    print("Lula: " + str(l))
    print("Bolsonaro: " + str(b))
    print("Alckmin: " + str(a))
    print("Nulos: " + str(nulos))

votacao()








