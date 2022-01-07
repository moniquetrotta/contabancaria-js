class contaBancaria {
  constructor(agencia, numero, tipo) {
    this.agencia = agencia;
    this.numero = numero;
    this.tipo = tipo;
    this.saldo = 0;
  }

  get saldo(){
    return this._saldo;
  }
  set saldo(valor){
    this._saldo =  valor;
  }

  sacar(valor){
    if (valor > this._saldo){
      return "Operação negada"
    }
    this._saldo =  this._saldo -  valor;
    return this._saldo;
  }

  depositar (valor){
    this._saldo =  this._saldo +  valor;
    return this._saldo;
  }
}

class ContaCorrente extends contaBancaria{
  constructor(agencia, numero, tipo, cartaoCredito) {
    super(agencia, numero, tipo);
    this.tipo = 'corrente';
    this._cartaoCredito = cartaoCredito;
  }

  get cartaoCredito(){
    return this._cartaoCredito;
  }
  set cartaoCredito(valor){
    this._cartaoCredito =  valor;
  }
}
class ContaPoupanca extends contaBancaria{
  constructor(agencia, numero, tipo) {
    super(agencia, numero, tipo);
    this.tipo = 'poupança';
  }
}
class ContaUniversitaria extends contaBancaria{
  constructor(agencia, numero, tipo) {
    super(agencia, numero, tipo);
    this.tipo = 'universitaria';
  }

  sacar(valor){
    if (valor > 500) {
      return 'operacao negada'
    }

    this._saldo =  this._saldo - valor;
  }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);