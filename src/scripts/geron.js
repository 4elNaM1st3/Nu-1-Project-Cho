"use strict";
let array = [
    {
        category: "smartphone",
        price: 120000,
        count: 60
    },
    {
        category: "smartphone",
        price: 120000,
        count: 52
    },
    {
        category: "laptop",
        price: 120000,
        count: 60
    }
];
let aps = array.filter((e) => e.category === "smartphone");
let spa = array.filter((e) => e.category === "laptop");
function dobavNaProezd(cat, price, count) {
    if (cat === "smartphone") {
        aps.push({
            category: cat,
            price: price,
            count: count
        });
    }
    else {
        spa.push({
            category: cat,
            price: price,
            count: count
        });
    }
}
function tolkay() {
    aps.push({
        category: "laptop",
        price: 400000,
        count: 31
    });
    spa.push({
        category: "smartphone",
        price: 310000,
        count: 97
    });
}
tolkay();
console.log();
array.forEach((e) => {
    if (e.category === "smartphone")
        e.price *= 1.1;
});
aps.forEach((e1) => {
    e1.price *= 0.8;
});
console.log(aps);
aps.sort((a, b) => {
    return a.price - b.price;
});
spa.sort((a, b) => {
    return a.price - b.price;
}).reverse();
let to = aps.concat(spa);
console.log(to);
