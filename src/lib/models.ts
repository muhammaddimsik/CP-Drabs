export interface TArticles {
  id_article: number;
  title: string;
  slug: string;
  image: string;
  status: number;
  content: string;
  meta_description: string;
  meta_keyword: string;
  categori_id: number;
  view_count: number;
  categories: {
    id_categori: number;
    name_categori: string;
  };
}

export interface TCategories {
  id_categori: number;
  name_categori: string;
}

export interface TServices {
  id_service: number;
  title: string;
  content: string;
  icon: string;
}

export interface TClients {
  id_client: number;
  title: string;
  image: string;
  description: string;
}

export interface TPortfolio {
  id_portofolio: number;
  title: string;
  image: string;
  description: string;
}
