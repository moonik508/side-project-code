export default function useMapData() {
  const MAP_SEARCH_KEYWORDTYPE = new Map<number, string>([
    [1, '부동산'],
    [2, '리테일 & 팝업'],
    [3, '엔터프라이즈'],
  ]);
  const MAP_CARD_TITLE = new Map<number, string>([
    [1, 'Real Estate'],
    [2, 'Retail & Popup'],
    [3, 'Enterprise'],
  ]);
  const MAP_AMOUNT_TYPE = new Map<string, string>([
    ['SOLUTION', '1회성 구축'],
    ['INFRA', '인프라'],
    ['CUSTOM', '커스텀 상품'],
  ]);

  return {
    MAP_SEARCH_KEYWORDTYPE,
    MAP_CARD_TITLE,
    MAP_AMOUNT_TYPE,
  };
}
