import t from "ts-runtime/lib";
const Foo = t.type("Foo", Foo => {
    const T = Foo.typeParameter("T");
    return t.object(t.property("prop", T));
});
let _aType = t.ref(Foo, t.number()), a = _aType.assert({
    prop: 'bar'
});
