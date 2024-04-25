import React from 'react';

import styled from 'styled-components';

import { media } from '@/components/style/responsive';
import { LandingCardItem } from '@/definition/commonInterface';
import useMapData from '@/constants/mapData';

interface CardOption {
  color?: string;
}

const CardBoxStyle = styled.div`
  width: 240px;
  height: 400px;
  padding: 8px;
  background-color: #fff;
  border-radius: 40px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.16);
  margin: 20px 0;
  ${media.tablet`
      border-radius: 20px;
      width: 168px;
      height: 284px;
      padding: 4px;
    `}
  ${media.mobile`
      width: 44.8vw;
      height: 74.67vw;
      margin: 3.2vw 0;
    `}
  .card_wrap {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid #ccc;
    border-radius: 32px;
    overflow: hidden;
    ${media.tablet`
      border-radius: 16px;
    `}
  }
`;
const CardTopSheetStyle = styled.div<CardOption>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 36px;
  padding: 0 24px;
  border-bottom: 1px solid #ccc;
  ${media.tablet`
    height: 32px;
    padding: 0 16px;
  `}
  ${media.mobile`
    height: 8.53vw;
    padding: 0 4.27vw;
  `}
  span {
    color: #666;
    font-size: 12px;
    ${media.mobile`
      font-size: 2.67vw;
    `}
  }
  .card_title {
    font-size: 14px;
    font-weight: 600;
    color: ${(props) => props.color || '#666'};
    ${media.mobile`
      font-size: 3.2vw;
    `}
  }
`;
const CardItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 36px);
  ${media.tablet`
    height: calc(100% - 32px);
  `}
  ${media.mobile`
    height: calc(100% - 8.53vw);
  `}
  p {
    padding: 24px;
    color: #111;
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    line-height: 32px;
    ${media.tablet`
      font-size: 16px;
      padding: 10px 16px;
      line-height: 24px;
    `}
    ${media.mobile`
      font-size: 4.27vw;
      padding: 2.67vw 4.27vw;
      line-height: 6.4vw;
    `}
  }
  img {
    width: 100%;
    border-top: 1px solid #ccc;
  }
`;
const CardBottonSheetStyle = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  button {
    padding: 10px;
    font-size: 16px;
    font-weight: 500;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    ${media.tablet`
      font-size: 14px;
      padding: 10px;
    `}
    ${media.mobile`
      font-size: 3.2vw;
      padding: 2.67vw;
    `}
  }
`;

function CardBox(props: {
  upStateCallback: (categoryId: number, itemId: number) => void;
  modalOpen: () => void;
  item: LandingCardItem;
}) {
  const { MAP_CARD_TITLE } = useMapData();
  const newValueData = Array.from(MAP_CARD_TITLE.values());
  return (
    <CardBoxStyle>
      <div className="card_wrap">
        <CardTopSheetStyle color={props.item.color}>
          <span className="card_title">
            {newValueData[props.item.categoryId - 1]}
          </span>
          <span>No. {String(props.item.id).padStart(3, '0')}</span>
        </CardTopSheetStyle>
        <CardItemStyle>
          <p dangerouslySetInnerHTML={{ __html: props.item.title }}></p>
        </CardItemStyle>
        <CardBottonSheetStyle>
          <button
            type="button"
            onClick={() => {
              props.modalOpen();
              props.upStateCallback(props.item.categoryId, props.item.id);
            }}
          >
            Show Detail
          </button>
        </CardBottonSheetStyle>
      </div>
    </CardBoxStyle>
  );
}

export default CardBox;
