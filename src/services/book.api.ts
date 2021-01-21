import { Book } from '../store/modules/books/types';

export async function createBook(book: Partial<Book>) {
  const response = await fetch('http://localhost:4730/books', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(book)
  });

  await response.json();
}
