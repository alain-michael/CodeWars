function translate(sentence) {
    let words = sentence.split(" ");
    let result = [];
    for(let word of words) {
        if("aeiouAEIOU".includes(word[0])) {
            let [a, part, punc, rest, ..._] = word.match(/^([a-zA-Z]*)([\W]*)(\w*)/);
            result.push(`${part}way${rest}${punc}`)
            continue
        }
        let [_, cons, vow, punc, ...rest] = word.match(/^([^aeiouAEIOU]+)([a-zA-Z]*)([\W]*)/);
        result.push(`${cons[0] == cons[0].toUpperCase() ? vow[0].toUpperCase(): vow[0]}${vow.slice(1)}${cons.toLowerCase()}ay${punc}`)
    }
    return result.join(" ");
}
