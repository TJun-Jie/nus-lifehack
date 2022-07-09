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
  url: string;
}

export interface Bins {
  location_name: string;
  is_active: boolean;
  latitude: string;
  longitude: string;
}

export interface BinsDoc extends Bins {
  id: string;
}
