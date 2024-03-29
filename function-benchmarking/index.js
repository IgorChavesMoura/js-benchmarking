import Benchmark from 'benchmark';
import CartIdNew from './cart-id-new.js';
import CartIdOld from './cart-id-old.js';
import CartRmPropOld from './cart-rm-prop-old.js';
import CartRmPropNew from './cart-rm-prop-new.js';
import CartPriceOld from './cart-price-old.js';
import CartPriceNew from './cart-price-new.js';

import database from '../database.js';

const suite = new Benchmark.Suite;

/* suite
    .add("Cart#cartIdUUID", function() {
        new CartIdOld();
    })
    .add("Cart#cartIdCrypto", function() {
        new CartIdNew();
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run(); */

const data = {
    products: [
        {
            id: 'ae',
            n: undefined,
            abc: undefined,
            a: null,
            b: 123
        },
        {
            id: 'ae',
            n: undefined,
            abc: undefined,
            a: null,
            b: 123
        },
    ]
};

/* suite
    .add("Cart#cartRmPropMapReduce", function() {
        new CartRmPropOld(data);
    })
    .add("Cart#cartRmPropFor", function() {
        new CartRmPropNew(data);
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run({ async: true }); */

suite
    .add("Cart#cartPriceMapReduce", function() {
        new CartPriceOld(database);
    })
    .add("Cart#cartPriceFor", function() {
        new CartPriceNew(database);
    })
    .on('cycle', (event) => console.log(String(event.target)))
    .on('complete', function() {
        console.log(`Fastest is ${this.filter('fastest').map('name')}`)
    })
    .run({ async: true });