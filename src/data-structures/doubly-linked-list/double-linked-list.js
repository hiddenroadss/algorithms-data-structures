class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}


class DoublyLinkedList {
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
            node.prev = this.tail;
            this.tail = node;
        }

        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        const oldTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = oldTail.prev;
            this.tail.next = null;
            oldTail.prev = null;
        }
        this.length--;
        return oldTail;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(value) {
        const node = new Node(value);
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return null;
        const half = Math.floor(this.length - 1 / 2);
        let node;
        let counter;
        if (index < half) {
            node = this.head;
            counter = 0;
            while (index !== counter) {
                node = node.next;
                counter++;
            }
        } else {
            node = this.tail;
            counter = this.length - 1;
            while (index !== counter) {
                node  = node.prev;
                counter--;
            }
        }

        return node;
    }
}

const list = new DoublyLinkedList();
list.push(2);
list.push(5);
list.push(9);
list.push(12);
console.log(list.get(3))