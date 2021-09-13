function CuentaBancaria(nombreTitular,apellidoTitular, numeroCuenta, saldo){

    this.nombreTitular = nombreTitular;
    this.apellidoTitular = apellidoTitular;
    this.numeroCuenta = numeroCuenta;
    this.saldo = saldo;
    this.movimientos = [];
    this.nombreCompleto = function(){
       console.log(`El nombre completo del titular de la cuenta es ${this.nombreTitular} ${this.apellidoTitular}.`)
    } ;
    this.mostrarSaldo = function(){
        console.log(`El saldo en cuenta es ${this.saldo}.`)
    };
    this.mostrarHistorialMov = function(){
        console.log(this.movimientos)
    };

    this.debitarDinero = function(dinero){
        if(dinero < saldo){
            this.movimientos.push(`Se debitaron $ ${dinero}`);
            this.saldo-=dinero;
            console.log(this.movimientos)
            console.log(this.saldo)
        }else {
            console.log("No dispone del dinero suficiente para realizar esta operación")

        }

    } ;
    this.acreditarDinero = function(dinero){

        this.movimientos.push(`Se acreditaron $ ${dinero}`);
        this.saldo += dinero;
        console.log(this.movimientos)
        console.log(this.saldo);
    } ;
    
}

let miCuenta = new CuentaNueva('Alan','Lazaro',0923823,)


console.log(miCuenta);





