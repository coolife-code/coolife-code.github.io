// 站点基本信息
export const siteConfig = {
  title: 'Even the Devil Smiles - Personal Page',
  titleWords: ['EVEN', 'THE', 'DEVIL', 'SMILES'],
  subtitle: '"EVERYONE KNOWS" FEAT. RZA',
};

// 导航菜单项
export interface NavItem {
  id: string;
  label: string;
  angle: number;
}

export const navItems: NavItem[] = [
  { id: 'explore', label: '1. EXPLORE', angle: 0 },
  { id: 'updates', label: '2. UPDATES', angle: 60 },
  { id: 'songs', label: '3. SONGS', angle: 120 },
  { id: 'videos', label: '4. VIDEOS', angle: 180 },
  { id: 'info', label: '5. INFO', angle: 240 },
  { id: 'shop', label: '6. SHOP', angle: 300 },
];

// 内容项类型
export interface ContentItem {
  type: 'work' | 'book';
  slug: string;
  title: string;
  image: string;
  depth: number;
}

// 所有子页面入口数据（works + books）
export const allItems: ContentItem[] = [
  // Works
  { type: 'work', slug: 'project-one', title: 'PROJECT ONE', image: '/images/work1.jpg', depth: 1 },
  { type: 'work', slug: 'project-two', title: 'PROJECT TWO', image: '/images/work2.jpg', depth: 2 },
  { type: 'work', slug: 'project-three', title: 'PROJECT THREE', image: '/images/work3.jpg', depth: 3 },
  // Books
  { type: 'book', slug: 'the-great-gatsby', title: 'THE GREAT GATSBY', image: '/images/book1.jpg', depth: 4 },
  { type: 'book', slug: '1984', title: '1984', image: '/images/book2.jpg', depth: 5 },
  { type: 'book', slug: 'crime-and-punishment', title: 'CRIME AND PUNISHMENT', image: '/images/book3.jpg', depth: 6 },
];
