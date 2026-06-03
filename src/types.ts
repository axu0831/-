export interface Project {
  id: string;
  title: string;
  enTitle: string;
  category: string;
  enCategory: string;
  description: string;
  image: string;
  gridSpan: string; // Tailwind column span class (e.g., md:col-span-7 or md:col-span-5)
  ratioClass: string; // Tailwind aspect ratio class (e.g., aspect-square, aspect-video, aspect-[16/10])
  client: string;
  tag: string;
  details: string[];
}

export interface JournalEntry {
  id: string;
  title: string;
  enTitle: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  summary: string;
  content: string;
}

export interface ExplorationItem {
  id: string;
  title: string;
  category: string;
  image: string;
  rotation: string; // GSAP initial tilt degree
  description: string;
  subImages?: string[];
  enTitle?: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  descriptions: string[];
  achievements: string[];
  brands: string[];
}
