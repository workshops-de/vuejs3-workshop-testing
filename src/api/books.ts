export const getBooks = async () => {
  const response = await fetch('http://localhost:4730/books');
  return response.json();
};
