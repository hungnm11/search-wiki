import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';

interface IArticle {
  id: any; // Consider using a more specific type if possible, like string or number
  label: any; // Consider using a more specific type if possible, like string
}

interface IState {
  articles: IArticle[];
  status: string;
  error: string;
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

interface RenderMenuProps {
  children: ReactNode;
  value: string;
  style?: CSSProperties;
}

export type { IArticle, InputProps, IState, RenderMenuProps };
