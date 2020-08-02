export default function (ms = 0) {
  let timeout;
  return new Promise(
    (resolve) =>
      (timeout = setTimeout(() => {
        resolve();
      }, ms))
  )
    .catch((e) => {
      clearTimeout(timeout);
    })
    .then(() => {
      clearTimeout(timeout);
    })
    .finally(() => {
      clearTimeout(timeout);
    });
}
