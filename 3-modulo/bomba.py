import time

print("Iniciando contagem regressiva da bomba")
for i in range(10, -1, -1):
    time.sleep(1)
    print(i)
    if(i == 0):
        print("BOOOM")