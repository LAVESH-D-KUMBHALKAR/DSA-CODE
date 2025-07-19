// 3 → 2 → 0 → -1
//      ↑       ↓
//      ←←←←←←<-





class listnode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function createlinkedlistWithCycle(arr, pos) {
    let head = new listnode(arr[0]);
    let current = head;
    let cycleNode = null;

    if (pos === 0) cycleNode = head;

    for (let i = 1; i < arr.length; i++) {
        let newNode = new listnode(arr[i]);
        current.next = newNode;
        current = newNode;
        
        if (i === pos) {
            cycleNode = newNode;
        }
    }

    if (pos !== -1) {
        current.next = cycleNode;
    }

    return head;
}



function detectCycle(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {
            // Cycle detected, find starting point
            let start = head;
            while (start !== slow) {
                start = start.next;
                slow = slow.next;
            }
            return start; // Start of cycle
        }
    }

    return null; // No cycle
}


let head = [3, 2, 0, -1];
let pos = 1;

let cycleStart = detectCycle(createlinkedlistWithCycle(head, pos));
if (cycleStart) {
    console.log("Cycle detected at node with value:", cycleStart.val);
} else {
    console.log("No cycle detected.");
}
