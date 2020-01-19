// https://www.codewars.com/kata/514b6c44a337752e67000077

function namespace(root, path, value){
  if (!value) {
    return get(root, path);
  } else {
  const pathExists = !isUndef(get(root, path));
  if (pathExists) {
    return get(root, path, value);
  } else {
    const splittedPath = path.split('.');
    splittedPath.reduce((memo, pathEntry, index) => {
      memo.push(pathEntry);
      const oPath = memo.join('.');
      if (isUndef(get(root, oPath))) {
        get(root, oPath, (index === splittedPath.length - 1) ? value : {});
      }
      return memo;
    }, []);
  }
 }
}

function get(obj, path, value) {
  let spl;
  return new Function(
    `return arguments[0]&&${(spl = path.split('.')).reverse().map((prop, index) => {
      const line = `arguments[0].${spl.slice(spl.length - index - 1).reverse().join('.')}`;
      return (value && index === spl.length - 1) ? `(${line}` : line;
    }).join('&&')} ${value ? `= ${JSON.stringify(value)})` : ''}`)(obj);
}

function isUndef(v) { return typeof v === 'undefined' }

