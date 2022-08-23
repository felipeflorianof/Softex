class fabricarComputadores{
    constructor(ram, hdd, cpu, type){
        let objeto = {}; // 'interface'
        objeto.ram = ram;
        objeto.hdd = hdd; 
        objeto.cpu = cpu;
        objeto.type = type;

        // Métodos getters
        objeto.getRam = function(){
            console.log(`Ram = ${objeto.ram}GB`);
        };
        objeto.getHdd = function(){
            console.log(`Hdd = ${objeto.hdd}GB`);
        };
        objeto.getCpu = function(){
            console.log(`Cpu = ${objeto.cpu}GHz`);
        };
        objeto.getType = function(){
            console.log(`Type = ${objeto.type}`);
        };

        switch (objeto.type) {
            case 1:
                objeto.type = "Pc";
                break;
            case 2:
                objeto.type = "Server";
                break;
            default:
                objeto.type = 'Pc';
                break;
        }

        function tostring(){
            return `Type Escolhido: ${objeto.type}, Ram: ${objeto.ram} GB, Hdd: ${objeto.hdd} GB, Cpu: ${objeto.cpu} GHz.`;
        }
        objeto.tostring = tostring;
        return objeto;
    }
}

    let Pc = new fabricarComputadores(16, 120, 3.5);
    let Server = new fabricarComputadores(32, 180, 5.0, 2);
    
    Pc.tostring();
    Pc.getRam();
    //Server.tostring();