
function patternChecker(text: string, pattern: string): boolean {
  if (pattern.length === 0) {
    return text.length === 0;
  }
  
  const firstMatch = text.length > 0 && (pattern[0] === '.' || pattern[0] === text[0]);

  if (pattern.length >= 2 && pattern[1] === '*') {
    return (patternChecker(text, pattern.slice(2))) || (firstMatch && patternChecker(text.slice(1), pattern));
  } else {
    return firstMatch && patternChecker(text.slice(1), pattern.slice(1));
  }
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