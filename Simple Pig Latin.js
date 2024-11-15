function pigIt(str) {
    return str.split(" ").map((word) => /^\w+$/.test(word) ? word.slice(1) + word[0] + 'ay' : word).join(" ")
}
