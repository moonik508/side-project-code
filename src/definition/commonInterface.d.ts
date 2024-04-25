export interface LandingCardList {
  list: LandingCardItem[];
}
export interface LandingCardItem {
  id: number; // 고유 ID
  categoryId: number;
  questionDesc: string;
  title: string;
  subTitle: string;
  videoUrl: string;
  color: string;
}

// 카드 클릭 시 detail api 호출 대용으로 사용하는 interface. 실제 배포엔 사용하지 않는다.
export interface dummyFindDetail {
  list: CardDetailData[];
}
export interface CardDetailData {
  categoryId: number;
  id: number;
  type: string;
  title: string;
  subTitle?: string;
  desc: string;
  sampleVideoUrl: string;
  mainVisualContents: VisualItems[];
  amountList: amountItem[];
  detailResource?: detailDesc[]
}
export interface detailDesc {
  type: string;
  title: string;
  description: descData[];
}
export interface descData {
  tagType?: string;
  data: string;
}
export interface VisualItems {
  contImgUrl: string;
  contTitle: string;
  contDesc?: string;
}
export interface amountItem {
  amountType: string,
  amount: number,
}
export interface DetailParams {
  categoryId: number;
  itemId?: number;
}
// todo : enum은 메모를 위해 사용함
export enum MainCategoryType {
  BEST = '베스트',
  CATEGORY= '카테고리',
}

export enum tagType {
  TITLE = '타이틀',
  BULLET= '불릿형',
}
export enum amountType {
  SOLUTION = '타이틀',
  INFRA= '불릿형',
  CUSTOM= '커스텀'
}