class Saluto{
  constructor(public saluto: string) { }
  stampaSaluto() {
    return "<h1>" + this.saluto + "</h1>";
  }
};

var saluto = new Saluto('Hello World');

document.body.innerHTML = saluto.stampaSaluto();
