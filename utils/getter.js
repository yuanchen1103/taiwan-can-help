export default function getter(url) {
  return fetch(url).then((res) => res.json());
}
