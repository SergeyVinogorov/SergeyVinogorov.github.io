const strings = ["č", "é", "A", "b", "Đ"];

const defaultSort = Array.from(strings).sort();

const simpleSort = Array.from(strings).sort((a, b) => a - b);

const localeSort = Array.from(strings).sort(function(a, b) {
  return a.localCompare(b, "en", { sensitivity: "base" });
});

console.log(defaultSort);
console.log(simpleSort);
console.log(localeSort);
