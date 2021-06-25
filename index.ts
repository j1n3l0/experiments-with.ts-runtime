interface Foo<T> {
    prop: T;
}

let a: Foo<number> = {
    prop: 'bar' as any
};
