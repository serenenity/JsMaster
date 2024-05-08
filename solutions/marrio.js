const size = 5; // Define the size

for (let i = 0; i < size; i++) {
    let output1 = "";
    let output2 = "";
    for (let j = size; j >= 0; j--) {
        if (j > i) {
            output1 += " ";
        } else {
            output1 += "#";
            output2 += "#";
        }
    }

    console.log(`${output1}   ${output2}`);
}

