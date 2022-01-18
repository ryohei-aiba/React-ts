export default function primitiveSample() {
  const name = 'バッチ'
  //name = 123;
  console.log('primitive sample 1', typeof name, name)

  const age = 21
  console.log('primitive sample 2', typeof age, age)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 3', typeof isOver20, isOver20)
}
