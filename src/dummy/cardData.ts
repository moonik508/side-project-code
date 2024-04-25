export interface cardData {
  id: number;
  title: string;
  bgColor: string;
}

export default function getCardData() {
  const cardDataList: cardData[] = [
    {
      id: 1,
      title: '01',
      bgColor: '#fc0',
    },
    {
      id: 2,
      title: '02',
      bgColor: '#f00',
    },
    {
      id: 3,
      title: '03',
      bgColor: '#f0c',
    },
    {
      id: 4,
      title: '04',
      bgColor: '#aaa',
    },
    {
      id: 5,
      title: '05',
      bgColor: '#487',
    },
  ];
  return cardDataList;
}
