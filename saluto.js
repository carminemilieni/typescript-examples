var Saluto = (function () {
    function Saluto(saluto) {
        this.saluto = saluto;
    }
    Saluto.prototype.stampaSaluto = function () {
        return "<h1>" + this.saluto + "</h1>";
    };
    return Saluto;
}());
;
var saluto = new Saluto('Hello World');
document.body.innerHTML = saluto.stampaSaluto();
