export default function NotExistSample() {
  const name = null
  console.log('Not exist sample 1', typeof name, name)

  const age = undefined
  console.log('Not exist sample 2', typeof age, age)
}
