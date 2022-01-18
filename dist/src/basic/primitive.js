"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function primitiveSample() {
    let name = 'バッチ';
    //name = 123;
    console.log('primitive sample 1', typeof name, name);
    const age = 21;
    console.log('primitive sample 2', typeof age, age);
    const isOver20 = age >= 20;
    console.log('primitive sample 3', typeof isOver20, isOver20);
}
exports.default = primitiveSample;
