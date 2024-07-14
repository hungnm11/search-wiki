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

interface IChildrenProps {
  searchValue: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  articles: any[];
  status?: string; // Adjust the type of articles as needed
}

interface ContainerProps {
  children: (props: IChildrenProps) => ReactNode;
}

export type { ContainerProps, IArticle, IChildrenProps, InputProps, IState };
