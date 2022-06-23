console.log('Chy');

/*var miCar = new Car('AVMCU87',new Account('Chuy','HUFHEUHF76'));
miCar.passanger = 4;
console.log(miCar);
console.log('Esto trae la licencia ->',miCar.license);
console.log(miCar.driver.name);
console.log('Esto trae el passanger ->' ,miCar.passanger);*/

var miCarro = new Car('A1234', new Account('Chuy Lugo', 'Pasaporte'));
var carTwo = new UberX('98IUIA',new Account('Jesus','9876YU'),'Toyota','Corola');
miCarro.passanger = 4;
console.log(miCarro.printData());
var carThree = new UberPool('MNB765', new Account('Maria','MNB76'),'Nissan', 'Black');
console.log(carTwo);
console.log('esto trae mi objeto carUberX',carThree);

var conductor = new Driver('Ruben','Pasaporte','JIHUG7', true);
const callFntionPrint = conductor.printDataDriver();
console.log(callFntionPrint);

var usuarioNuevo = new User('Jesus','Residencia','No',true);
console.log(usuarioNuevo.printDataUser());

var nuevaPersona = new Persona('Jesus',31,'Venezolana');
console.log(nuevaPersona.printDataPerson());

var nuevoJugador = new Jugador('Ronaldo',37,'United','Portuguesa')
console.log(nuevoJugador.printDataJugador());