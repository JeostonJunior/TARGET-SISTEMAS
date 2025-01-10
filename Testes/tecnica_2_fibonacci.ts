function isFibonacciNumber(number: number): string {
    if (number < 0) {
        return 'The number does not belong to the Fibonacci sequence.';
    }

    let first = 0;
    let second = 1;

    // If the number is 0 or 1, it belongs to the Fibonacci sequence
    if (number === first || number === second) {
        return 'The number belongs to the Fibonacci sequence.';
    }

    while (second < number) {
        let next = first + second;
        first = second;
        second = next;
    }

    if (second === number) {
        return 'The number belongs to the Fibonacci sequence.';
    } else {
        return 'The number does not belong to the Fibonacci sequence.';
    }
}

const numberToCheck = 21;  // Replace with any number you want to test
console.log(isFibonacciNumber(numberToCheck));
