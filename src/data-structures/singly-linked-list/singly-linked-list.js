class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
        return this;
    }

    pop() {
        if (this.head == null) return undefined;
        let current = this.head;
        let prev = this.head;
        while (current.next) {
            prev = current;
            current = current.next;
        }
        this.tail = prev;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (this.head === null) return undefined;
        const oldHead = this.head;
        this.head  = oldHead.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return oldHead;
    }

    unshift(value) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }
        let counter  = 0;
        let node = this.head;
        while(counter !== index) {
            node = node.next;
            counter++;
        }
        return node;
    }

    set(value, index) {
        const node = this.get(index);
        if (!node) {
            return false;
        }
        node.value = value;
        return true;
    }

    insert(value, index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === this.length) {
            this.push(value);
            return true;
        }else if (index === 0) {
            this.unshift(value);
            return true;
        } else {
            const prevNode = this.get(index - 1)
            const node = new Node(value);
            node.next = prevNode.next;
            prevNode.next = node;
            this.length++;
            return true;
        }
    }

    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        if (index === 0) {
            return this.shift();
           
        }
        if (index === this.length - 1) {
            return this.pop();
           
        }
        const prevNode = this.get(index - 1);
        const nodeToRemove = prevNode.next;
        prevNode.next = prevNode.next.next;
        this.length--;
        return nodeToRemove;
    }

    reverse() {
        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let currIndex = 0;
        while (currIndex < this.length) {
            
        } 
    }
}

const list = new SinglyLinkedList();
