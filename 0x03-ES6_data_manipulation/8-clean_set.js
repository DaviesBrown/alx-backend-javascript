export default function cleanSet(set, startString) {
  const text = [];
  for (const x of set.values()) {
    if (!startString) return '';
    if (x.startsWith(startString)) {
      text.push(x.slice(startString.length));
    }
  }

  return text.join('-');
}
