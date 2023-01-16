# Imprime um número aleatório (entre 1 e 10) enquanto o número 7 não for sorteado.
import random

numero = random.randint(1, 10)
while(numero != 7):
   print(numero)
   numero = random.randint(1, 10)


# Contagem regressiva utilitzando a função range():
#for i in range(10, 0, -1):
#   print(i)