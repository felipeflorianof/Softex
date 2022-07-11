
total_de_rodas = 4
peso_bruto = 3499
total_de_pessoas = 8
# Considerei um peso mínimo de 100kg para qualquer tipo de veículo
if peso_bruto >= 100 and total_de_rodas > 1:
    if (total_de_rodas == 2 or total_de_rodas == 3):
        print("Categoria A - Motos")
    elif (total_de_rodas == 4 and total_de_pessoas <= 8 and peso_bruto <= 3500):
        print("Categoria B - Carros e veículos de carga leve")
    elif (total_de_rodas >= 4 and peso_bruto >= 3500 and peso_bruto <= 6000):
        print("Categoria C - Caminhões pequenos e outros veículos")
    elif (total_de_rodas >= 4 and total_de_pessoas > 8):
        print("Categoria D - Ônibus e microônibus")
    elif (total_de_rodas >= 4 and peso_bruto > 6000):
        print("Categoria E - Veículos com reboque além de todos os veículos das categorias B,C e D.")
else:
    print("[ERRO] Selecione um 'Peso_bruto' ou 'Total_de_rodas' Válidos para continuar.")