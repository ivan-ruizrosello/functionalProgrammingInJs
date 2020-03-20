const Node = require('../../Node');
const Tree = require('../../Tree');
const { Person } = require('../../Person');

const p1 = new Person('Nelson', 'Nelson', '111-11-1111');
const p2 = new Person('Barkley', 'Rosser', '222-22-2222');
const p3 = new Person('El', 'Gandy', '333-33-3333');
const p4 = new Person('Alonzo', 'Church', '444-44-4444');
const p5 = new Person('Annon', 'Constable', '555-55-5555');
const p6 = new Person('Alan', 'Turing', '666-66-6666');
const p7 = new Person('Stephen', 'Kleene', '777-77-7777');
const p8 = new Person('Felix', 'Mendelson', '888-888-888');
const p9 = new Person('Stanislaw', 'Saks', '123-456-789');

const church = new Node(p4);
const rosser = new Node(p2);
const turing = new Node(p6);
const kleene = new Node(p7);
const mendelson = new Node(p8);
const saks = new Node(p9);
const gandy  = new Node(p3);
const nelson = new Node(p1);
const constable = new Node(p5)


church.append(rosser).append(turing).append(kleene);
kleene.append(nelson).append(constable);
rosser.append(mendelson).append(saks);
turing.append(gandy);

const tree = Tree.map(church, p => `${p.fullname}!!`);
console.log(tree.root.children[0].value); // Berkley Rosser!!
