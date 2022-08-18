    var Banco = {
        saldo: 2000,
        tipo: 'Conta Corrente',
        agencia: 'XP inc.',
        numero: 14342,

        buscarSaldo: function(){
            console.log(this.saldo);
        },

        deposito: function(deposito){
            this.saldo += deposito;
            console.log(`${deposito} Depositado`);
        },

        saque: function(saque){
            if(this.saldo >= saque){
                this.saldo -= saque;
                console.log(`${saque} Sacado. \n Saldo restante: ${this.saldo}`)
            }else{
                console.log('Saldo insuficiente.');
            }
        },

        info: function(){
            console.log(`\n ---- Sua conta no banco ${this.agencia} ---- \n Número da conta: ${this.numero} \n Tipo de conta: ${this.tipo} \n Saldo atual: ${this.saldo} \n`)
        }
    }

    //Banco.buscarSaldo();
    //Banco.deposito(500);
    //Banco.saque(500);
    Banco.info();