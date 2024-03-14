
function patternChecker(text, patter) {

  const singleChars = text.

}

console.log(
  'text = "aa" and patter = "a", should be false',
  patternChecker('aa', 'a')
)

console.log(
  'text = "aa" and patter = "a*", should be true',
  patternChecker('aa', 'a*')
)

console.log(
  'text = "ab" and patter = ".*", should be true',
  patternChecker('ab', '.*')
)