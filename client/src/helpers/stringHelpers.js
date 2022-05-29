// FORMATTERS

function camelCaseToKebabCase(str) {
  const delimiter = "-";
  const indices = [...str.matchAll(/[A-Z]|[0-9]+/g)].map((m) => m.index);
  const words = indices.reduce((acc, cur, i, arr) => {
    const word = str.slice(cur, arr[i + 1]);
    acc += `${delimiter}${word.toLowerCase()}`;
    return acc;
  }, str.slice(0, indices[0]));
  return words;
}

function camelCaseToSnakeCase(str) {
  const delimiter = "_";
  const indices = [...str.matchAll(/[A-Z]|[0-9]+/g)].map((m) => m.index);
  const words = indices.reduce((acc, cur, i, arr) => {
    const word = str.slice(cur, arr[i + 1]);
    acc += `${delimiter}${word.toLowerCase()}`;
    return acc;
  }, str.slice(0, indices[0]));
  return words;
}

export { camelCaseToKebabCase, camelCaseToSnakeCase };
