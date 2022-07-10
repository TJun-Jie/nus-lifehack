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

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  cans: number;
  plastic: number;
  metal: number;
  glass: number;

  points: number;
  vouchers: string[];
}
