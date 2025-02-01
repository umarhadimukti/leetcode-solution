class ListNode {
    val: number;
    next: ListNode|null;
    constructor(val?: number, next?: ListNode|null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    };
}

const addTwoNumbers = (l1: ListNode|null, l2: ListNode|null): ListNode|null => {
    if (l1 === null || l2 === null) return null;

    let dummyHead = new ListNode(0);
    let current1: ListNode | null = l1;
    let current2: ListNode | null = l2;
    let carry = 0;
    let current: ListNode|null = dummyHead;
    
    while (current1 !== null || current2 !== null) {
        let x: number = current1 ? current1.val : 0;
        let y: number = current2 ? current2.val : 0;
        let sum: number = x + y + carry;
        let newNode = new ListNode(sum % 10);
        carry = sum >= 10 ? 1 : 0;
        current.next = newNode;
        current = current.next;
        
        if (current1 !== null) {
            current1 = current1.next;
        }
        if (current2 !== null) {
            current2 = current2.next;
        }
    }

    if (carry > 0) {
        current.next = new ListNode(carry);
    }

    return dummyHead.next;
};

const createLinkedList = (nums: number[]): ListNode | null => {
    const dummyHead = new ListNode(0);
    let current = dummyHead;
    for (let num of nums) {
        current.next = new ListNode(num);
        current = current.next;
    }

    return dummyHead.next;
}

const printLinkedList = (head: ListNode | null): void => {
    let result: number[] = [];
    while(head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

const list1 = createLinkedList([3,4,2]);
const list2 = createLinkedList([5,4,1]);
const result = addTwoNumbers(list1, list2);
printLinkedList(result);