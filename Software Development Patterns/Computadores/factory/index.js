function fabricarComputadores(ram, hdd, cpu, type){
    let objeto = {}; // 'interface'
    objeto.ram = ram;
    objeto.hdd = hdd; 
    objeto.cpu = cpu;
    objeto.type = type;

    function tostring(){
        return `Type Escolhido: ${objeto.type}, Ram: ${objeto.ram} GB, Hdd: ${objeto.hdd} GB, Cpu: ${objeto.cpu} GHz.`;
    }
    objeto.tostring = tostring;
    return objeto;
}

let Pc = fabricarComputadores(16, 120, 3.5, 'Pc');
let Server = fabricarComputadores(32, 180, 5.0, 'Server');

Pc.tostring();
Server.tostring();


/**
 * Design pattern: Factory
 */