// Static type
class Counter {
    static counter: number = 0;

    static increment() {
        return (Counter.counter = Counter.counter + 1)
    }

    static decrement() {
        return (Counter.counter = Counter.counter - 1)
    }
}


console.log(Counter.increment());
console.log(Counter.increment());
