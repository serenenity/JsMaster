function mario(val){
    for(let h = 1; h <= val; h++){
        console.log(" ".repeat(val-h)+"$".repeat(h) + "  "+ "$".repeat(h));
    }
}


mario(8)
