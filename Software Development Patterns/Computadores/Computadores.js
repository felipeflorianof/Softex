class Computadores{
    constructor(ram, hdd, cpu, type){
        // Protegendo as propriedades
        var _ram = ram;
        var _hdd = hdd;
        var _cpu = cpu;
        var _type = type;

        // Métodos getters
        this.getRam = function(){
            console.log(`Ram = ${_ram} GB`);
        };
        this.getHdd = function(){
            console.log(`Hdd = ${_hdd} GB`);
        };
        this.getCpu = function(){
            console.log(`Cpu = ${_cpu} GHz`);
        };
        this.getType = function(){
            console.log(`Type = ${_type}`)
        };
        // Método setter
        this.setType = function(tp){
            _type = tp;
        };
        // function pedida
        this.toString = function(){
            console.log(`-Info-\n RAM: ${_ram} GB\n HDD: ${_hdd} GB\n CPU: ${_cpu} GHz\n TYPE: ${_type}\n`)
        };
    };
};

class Server extends Computadores{
    constructor(ram, hdd, cpu, type){
        super(ram, hdd, cpu, type);
        this.setType('Server'); // Toda vez que a classe Server for instânciada seu Type será 'Server';

    };
};

class Pc extends Computadores{
    constructor(ram, hdd, cpu, type){
        super(ram, hdd, cpu, type); 
        this.setType('Pc'); // Toda vez que a classe Pc for instânciada seu type será 'Pc'; 
        
    };
};

var linux = new Pc(24, 150, 3.5);
linux.toString();

var mac = new Pc(16, 120, 3.2);
mac.toString();

var Microsoft = new Server(100, 300, 10.4);
Microsoft.toString();
