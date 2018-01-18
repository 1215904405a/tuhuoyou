import createObject from './createObject';

export default function createChildren(i) {
  var children = [];
  while (i--) {
    children[i] = createObject(0);
  }
  return children;
}
