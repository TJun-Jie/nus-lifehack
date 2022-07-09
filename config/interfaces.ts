export interface Post {
  title: string;
  content: string;
  userId: string;
}

export interface PostDoc extends Post {
  id: string;
}

export interface Reward {
  title: string;
  description: string;
  points: number;
}
