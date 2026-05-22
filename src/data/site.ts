// 站点基本信息
export const siteConfig = {
  title: '- Even the light hesitates - coolife-code',
  titleWords: ['Even', 'the', 'light', 'hesitates'],
  subtitle: 'coolife-code',
};

// 导航菜单项
export interface NavItem {
  id: string;
  label: string;
  angle: number;
}

export const navItems: NavItem[] = [
  { id: 'identity', label: '身份', angle: 240 },
  { id: 'stack', label: '技术栈', angle: 180 },
  { id: 'experience', label: '经历', angle: 120 },
  { id: 'social', label: '社交', angle: 60 },
  { id: 'quotes', label: '语录', angle: 0 },
  { id: 'guestbook', label: '留言', angle: 300 },
];

// 内容项类型
export interface ContentItem {
  type: 'work' | 'book';
  slug: string;
  title: string;
  image: string;
  depth: number;
}

export interface WorkItem {
  slug: string;
  title: string;
  description: string;
  detail: string;
  subtitle?: string;
  tags: string[];
  year: string;
  image: string;
  repoUrl: string;
}

export const works: WorkItem[] = [
  {
    slug: 'csustdate',
    title: 'CSUST DATE DROP',
    subtitle: '校园配对平台',
    description: '长沙理工大学学生配对网站，含前台、管理端与后端服务。',
    detail: '一个面向校园场景的配对平台，采用前后端分离结构，覆盖用户资料、问卷、匹配、邮件与管理能力。',
    tags: ['Vue 3', 'Vite', 'Koa', 'SQLite'],
    year: '2026',
    image: '/images/work1.jpg',
    repoUrl: 'https://github.com/coolife-code/csustdate',
  },
  {
    slug: 'reacord',
    title: 'REACORD',
    subtitle: '英语阅读学习小程序',
    description: '英语学习微信小程序，聚合阅读、单词、电子书与 AI 助记。',
    detail: '围绕英语输入与记忆打造的小程序产品，包含文章推荐、单词本、电子书阅读与 AI 助记卡。',
    tags: ['Mini Program', 'TypeScript', 'Express', 'Prisma'],
    year: '2026',
    image: '/images/work2.jpg',
    repoUrl: 'https://github.com/coolife-code/reacord',
  },
  {
    slug: 'aleth-eia',
    title: 'ALETHEIA',
    subtitle: '多角度真相核查系统',
    description: '多 Agent 真相核查系统，支持联网搜索与流式分析。',
    detail: '一个面向信息辨伪的多角度验证系统，结合事实核查、时间线重建、利益相关者分析与来源追溯。',
    tags: ['Python', 'FastAPI', 'React', 'LLM'],
    year: '2026',
    image: '/images/work3.jpg',
    repoUrl: 'https://github.com/coolife-code/aleth_eia',
  },
  {
    slug: 'ifnoai',
    title: 'IFNOAI',
    subtitle: 'AI 断联实验',
    description: 'Windows 端 AI 断联实验工具，用于阻断主流 AI 服务请求。',
    detail: '一个带有科幻叙事风格的桌面实验项目，通过修改 Hosts 与请求拦截，模拟与云端 AI 断联后的使用体验。',
    tags: ['Python', 'Windows', 'CLI', 'Hosts'],
    year: '2025',
    image: '/images/work4.jpg',
    repoUrl: 'https://github.com/coolife-code/ifnoai',
  },
];

// 所有子页面入口数据（works + books）
export const allItems: ContentItem[] = [
  // Works
  ...works.map((work, index) => ({
    type: 'work' as const,
    slug: work.slug,
    title: work.title,
    image: work.image,
    depth: index + 1,
  })),
  // Books
  { type: 'book', slug: 'the-great-gatsby', title: 'THE GREAT GATSBY', image: '/images/book1.jpg', depth: 5 },
  { type: 'book', slug: '1984', title: '1984', image: '/images/book2.jpg', depth: 6 },
  { type: 'book', slug: 'crime-and-punishment', title: 'CRIME AND PUNISHMENT', image: '/images/book3.jpg', depth: 7 },
];
