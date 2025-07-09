

function TOH(n, source, helper, destination){

    if(n === 1){
        console.log(`Move disk ${n} from ${source} to ${destination}`);
        return;
    }

    // Move n-1 disks from source to helper
    TOH(n-1, source, destination, helper );

    console.log(`Move disk ${n} from ${source} to ${destination}`);
    // Move n-1 disks from helper to destination

    TOH(n-1, helper, source, destination );

    console.log(`Move disk ${n} from ${source} to ${destination}`);

}

// 1 -> A TO B
// 2 -> A TO C
// 3 -> B TO C
let n = 3;
TOH(n, 'A', 'B', 'C');