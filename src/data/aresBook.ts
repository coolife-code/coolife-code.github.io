import { getBookBySlug } from './books';

const book = getBookBySlug('ares-childhood-1');

if (!book) {
  throw new Error('未找到《阿瑞斯的童年》的书籍数据。');
}

export const aresBook = book;

export const aresFeaturedQuotes = [
  '“小孩会迷路，但大人也会迷路吗？”',
  '“人类会迷路，但人造智能也会迷路吗？”',
  '“童年和未来，到底该如何选择？”',
  '“自然智能的悲哀，莫过于此。”',
] as const;
