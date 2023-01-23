function definingNumbers(num) {
    if (num < 1 || num > 1000) return "данные неверны";
    let y = Math.sqrt(num);
    for (let i = 2; i <= y; i++)
        if (num % i === 0) return "составное число";
    return "простое число";
}
console.log(definingNumbers(9))