let {Node, BST} = require('./bst.js');
var numstree = new BST();

numstree.insert(10);
numstree.insert(5);
numstree.insert(3);
numstree.insert(23);
numstree.insert(99);
numstree.insert(43);
numstree.insert(32);
numstree.insert(77);
console.log("Inorder traversal: ");
numstree.inOrder();
