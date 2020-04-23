import fetch from 'isomorphic-unfetch';

export default function getter(url) {
  return fetch(url).then((res) => res.json());
}
