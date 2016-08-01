/**
 * Class representing a node in a tree
 */
class Node  {
    /**
     * Create a node
     * @param  {number} data  value to be saved in node
     * @param  {Node} left  a reference to left node
     * @param  {Node} right a reference to right node
     * @return {Node} a Node instance
     */
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
    /**
     * returns value saved in a node
     * @return {number} value in node
     */
    show() {
        return this.data;
    }
}

/**
 * Class representing a binary search tree
 */
class BST  {
    /**
     * Create a binary search tree.
     * @return {BST} a BST instance
     */
    constructor() {
        this.root = null;
    }

    /**
     * Inserts data in a binary tree
     * @param  {number} data value to be inserted in tree
     */
    insert(data) {
        // create a node object
        let node = new Node(data, null, null);
        // if tree is empty, create root node
        if(this.root == null) {
            this.root = node;
        }
        // else find position in node where this new node can be inserted
        // in binary search tree, left subtree has values lesser than root node
        // and right subtree has values more than root node
        else {
            // begin with traversal pointer at root
            let current = this.root;
            let parent;
            // an infinite loop, will use break statement to get out of this
            while(true) {
                // assume current node is whose child this new node will be
                parent = current;
                // if value to be inserted is lesser than the one stored in current node
                if(data < current.data) {
                    // we traverse on left subtree
                    current = current.left; 
                    // if we are on leaf node, place node on left pointer
                    if(current == null) {
                        parent.left = node;
                        break;
                    }
                }
                else {
                    current = current.right;
                    if(current == null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
    }

    /**
     * in-order traversal of a binary tree.
     * @param  {Node} node root node of a tree/subtree
     */
    inOrder(node = this.root) {
        if( node !== null) {
            this.inOrder(node.left);
            console.log(node.show() + " ");
            this.inOrder(node.right);
        }
    }
}

exports.Node = Node;
exports.BST = BST;