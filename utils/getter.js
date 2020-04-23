import fetch from 'isomorphic-unfetch';

export default function getter(url, options = {}) {
  return fetch(url, {
    headers: {
      'content-type': 'application/json',
      ...options.headers,
    },
    method: 'GET',
  }).then((res) => res.json());
}
