describe('Cuentas', () => {
    var a=1;
    it('Vamos a ver una igualdad', () => {
        expect(1==1,"ambos terminos tienen que ser iguales").to.equal(true)
    });
    it('vamos a ver que no sea una igualdad', () => {
        expect(1==2).to.equal(false);
    });
    it('vamos a ver que una resta este bien', () => {
        expect(1-1).to.equal(0);
    });
    it('vamos a ver que una resta no este bien ', () => {
        expect(1-1).to.not.equal(2);
    });
    it('tiene que ser verdadero', () => {
        expect(2==2).to.be.true;
    });
    it('tiene que ser falso', () => {
        expect(2==1).to.be.false;
    });
    it('la variable existe', () => {
        expect(a).to.exist;
    });
    it('es menor a 10', () => {
        expect(a).to.be.lessThan(10);
    });
    it('es mayor a 10', () => {
        expect(25).to.be.greaterThan(10);
    });
});