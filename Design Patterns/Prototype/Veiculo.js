class Veiculo{
    constructor(modelo, marca, cor, numeroRodas){
        var _modelo = modelo;
        var _marca = marca;
        var _cor = cor;
        var _numeroRodas = numeroRodas;

        this.clone = function(){

        }
        this.represent = function(){

        }
    }
}

class carro extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas, numeroPortas){
        super(modelo, marca, cor, numeroRodas);
        var _numeroPortas = numeroPortas;
    };
};

class moto extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas, Cilindrada){
        super(modelo, marca, cor, numeroRodas);
        var _Cilindrada = Cilindrada;
    };
};

class Aplicacao{
    
}