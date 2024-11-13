function add(a, b) {
    let sum = '';
    let carry = 0;
    let digSum = 0;
    a = a.padStart(Math.max(a.length, b.length), "0");
    b = b.padStart(Math.max(a.length, b.length), "0");
    for(let i=(a.length - 1); i>=0; i--) {
        digSum = carry + Number(a[i] || 0) + Number(b[i]);
        carry = Math.floor(digSum / 10)
        sum = (digSum % 10).toString() + sum;
    }
    sum = carry > 0 ? carry + sum : sum;
    return sum;
}
