
export type SectionType = 'intro' | 'body' | 'conclusion';

export interface BulletPoint {
  id: string;
  text: string;
  isQuote?: boolean;
  citation?: string;
}

export interface ContentBlock {
  id: string;
  title?: string;
  bullets: BulletPoint[];
}

export interface SubSection {
  id: string;
  title: string;
  description: string;
  blocks: ContentBlock[];
}

export interface EssaySection {
  id: string;
  type: SectionType;
  title: string;
  subtitle: string;
  percentage: number;
  iconName: string;
  colorTheme: string; // Tailwind color class prefix (e.g., 'blue', 'rose', 'amber')
  content: SubSection[];
}
