export const fetchUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/posts').then((res) => res.json()).catch((err) =>
    console.error(err)
  );
};
