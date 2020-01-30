let result = ""

let f = (numb) => {
    for (let i = 1; i <= numb; i += 2) {
        let rec = (numb - i) / 2
        result += ".".repeat(rec) + "#".repeat(i) + ".".repeat(rec) + "\n"
    }

    return result
}