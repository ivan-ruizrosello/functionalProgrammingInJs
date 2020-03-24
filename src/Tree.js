const R = require('ramda');

class Tree {
    constructor(root) {
        this._root = root;
    }
    
    static map = (node, fn, tree = null) => {
        node.value = fn(node.value);

        if(!tree) {
            tree = new Tree(node);
        }

        if(node.hasChildren()) {
            R.map(child => {
                Tree.map(child, fn, tree);
            }, node.children);
        }

        return tree;
    }
    
    get root() {
        return this._root;
    }
}

module.exports = Tree;