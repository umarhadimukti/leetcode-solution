class List {
    val: number;
    next: List | null;
    constructor(val: number, next?: List|null) {
        this.val = val;
        this.next = next ?? null;
    }
}

class SingleLinkedList {
    head: List | null;

    append(val: number) {
        // inisialisasi new node
        let newNode = new List(val);
        // cek kalau head nya kosong, isi head dengan new node (current node)
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // inisialisasi current node
        let current = this.head;
        // selama next node (current.next) masih ada, pindahin current node (pointer) ke node berikutnya
        while(current.next) {
            current = current.next;
        }
        // kalo next node (current.next) sudah null, isi current node (pointer) dengan node baru
        current.next = newNode;
    }

    delete(val: number) {
        // jika head nya kosong, langsung return
        if (!this.head) return;
        // jika val sama dengan head.val, langsung skip (dihapus)
        if (val === this.head.val) {
            this.head = this.head.next;
            return;
        }
        // inisialisasi current node (mulai dari head)
        let current = this.head;
        // selama next node (current.next) masih ada,
        while(current.next && val !== current.next.val) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    print(): void {
        let result: number[] = [];
        let current: List|null = this.head;
        while(current) {
            result.push(current.val);
            current = current.next;
        }
        console.log(result);
    }
}

const list = new SingleLinkedList();
list.append(4);
list.append(7);
list.append(3);
list.print();
list.delete(4);
list.print();