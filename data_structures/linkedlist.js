class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.current = null;
		this.length = 0;
	}

	initFirstNode(newNode) {
		this.head = newNode;
		this.tail = newNode;
		this.current = newNode;
		this.length = 1;
	}

	pushFront(inData) {
		const newNode = {
			data: inData,
			prevNode: null,
			nextNode: null
		};

		if (this.length === 0) {
			this.initFirstNode(newNode);
		} else {
			this.head.prevNode = newNode;
			newNode.nextNode = this.head;
			this.head = newNode;
		}
	}

	pushBack(inData) {
		const newNode = {
			data: inData,
			prevNode: null,
			nextNode: null
		};

		if (this.length === 0) {
			this.initFirstNode(newNode);
		} else {
			this.tail.nextNode = newNode;
			newNode.prevNode = this.tail;
			this.tail = newNode;
		}
	}
}
