interface IArticle {
  id: any; // Consider using a more specific type if possible, like string or number
  label: any; // Consider using a more specific type if possible, like string
}

interface IState {
  articles: IArticle[];
  status: string;
  error: string;
}

export type { IArticle, IState };
