export interface IResult {
  id: number;
  name: string;
  description: string;
  image: null;
  num_course: number;
  course: ICourse[];
}

export interface ICourse {
  id: number;
  slug: string;
  title: string;
  description: string;
  start_at: string;
  end_at: string;
  image: string;
  video: null;
  link: string;
  lessons: number[];
  price: number;
  discount_percent: number;
  duration: number;
  community: ICommunity;
  ave_rating: number;
  hashtag: string[];
  language: string;
  order_before: boolean;
}

export interface ICommunity {
  id: number;
  slug: string;
  name: string;
  icon: string;
}

export interface ICourseDetail {
  id: number;
  start_at: string;
  end_at: string;
  instructor: IInstructor[];
  rewards: null;
  lessons: ILesson[];
  created_at: string;
  updated_at: string;
  slug: string;
  title: string;
  status: string;
  requirements: string;
  description: string;
  image: string;
  video: null;
  link: string;
  price: number;
  discount_percent: number;
  duration: number;
  language: string;
  active: boolean;
  ave_rating: number;
  hashtag: string[];
  review: boolean;
  recept_question: boolean;
  facebook_link: null;
  zalo_link: null;
  verify_status: string;
  reject_comment: null;
  created_by: number;
  updated_by: number;
  community: number;
  document: any[];
}

export interface ILesson {
  id: number;
  slug: string;
  title: string;
  description: string;
  detail: null;
  start_at: string;
  end_at: string;
  image: null;
  video: null;
  video_from_link: string;
  num_mission: number;
  num_participant: number;
  qrcode: null;
}

export interface IInstructor {
  id: number;
  email: string;
  avatar: string;
  name: string;
  birthday: string;
  about_me: string;
  telegram: null;
  discord: null;
  twitter: null;
  facebook: null;
}