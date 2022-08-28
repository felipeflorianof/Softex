let Veiculo = class {
    constructor(modelo, marca, cor, numeroRodas){
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    };
    clone(obj){ 
        obj.__proto__;
    };

    represent(){
        console.log(`Modelo: ${this.modelo} || Marca: ${this.marca} || Cor: ${this.cor} || Rodas: ${this.rodas}`); 
    };
};

let carro = class extends Veiculo{
    constructor(modelo, marca, cor, numeroRodas, numeroDePortas){
        super(modelo, marca, cor, numeroRodas);
        this.numeroDePortas = numeroDePortas;
        

        let cloneCarro = {
            modelo: this.modelo,
            marca: this.marca,
            cor: this.cor,
            numeroRodas: this.numeroRodas,
            numeroDePortas: this.numeroDePortas
        }
        Veiculo.prototype.clone=function(obj){
            obj.prototype = cloneCarro;
        }
            Veiculo.prototype.represent=function(){
                console.log(`Modelo: ${this.modelo} || Marca: ${this.marca} || Cor: ${this.cor} || Rodas: ${this.numeroRodas} || Portas: ${this.numeroDePortas}`);
            };
    };
};

let moto = class extends Veiculo {
    constructor(modelo, marca, cor, numeroRodas, cilindradas){
        super(modelo, marca, cor, numeroRodas);
        this.cilindradas = cilindradas;


        let cloneMoto = {
            modelo: this.modelo,
            marca: this.marca,
            cor: this.cor,
            numeroRodas: this.numeroRodas,
            cilindradas: this.cilindradas
        }
        Veiculo.prototype.clone=function(obj){
            return obj.prototype = cloneMoto;
        }
            Veiculo.prototype.represent=function(){
                console.log(`Modelo: ${this.modelo} || Marca: ${this.marca} || Cor: ${this.cor} || Rodas: ${this.numeroRodas} || Cilindradas ${this.cilindradas}`);
            };
    };
};


// Carros:
var civic = new carro('LXL', 'Honda', 'Preto Fosco', 4, 4);
civic.represent();
civic.clone(civic);


var BMW = new carro('S 1000 RR', 'BMW', 'Black', 4, 4);
BMW.represent();
BMW.clone(BMW);

var Porsche = new carro('Panamera', 'Porsche', 'Blue', 4, 4);
Porsche.represent();
Porsche.clone(Porsche);



// Motos:
var Ducati = new moto('Panigale V4 S', 'Panigale', 'red', 2, 200);
Ducati.represent();
Ducati.clone(Ducati);

var ninja = new moto("250SL", 'Kawasaki', 'green', 2, 300);
ninja.represent();
ninja.clone(ninja);

var Fireblade = new moto('cbr 1000rr-r', 'Honda', 'Black', 2, 250);
Fireblade.represent();
Fireblade.clone(Fireblade);




// Inserindo os prototypes(clones) dentro do Array 'veiculos'
    
const veiculos = [];

veiculos.push(civic);
veiculos.push(BMW);
veiculos.push(Porsche);

veiculos.push(Ducati);
veiculos.push(ninja);
veiculos.push(Fireblade);


// Criando um array que pega tudo o que tem dentro do array Veiculo e mostra apenas o prototype

const CloneDoArrayVeiculos = [];
veiculos.forEach(function(element){
    CloneDoArrayVeiculos.push(element.prototype);
});


console.log(veiculos);
console.log(CloneDoArrayVeiculos);
















