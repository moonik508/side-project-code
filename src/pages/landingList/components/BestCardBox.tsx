import React from 'react';

import styled from 'styled-components';

import { media } from '@/components/style/responsive';
import useMapData from '@/constants/mapData';

interface CardOption {
  color?: string;
}
const CardBoxStyle = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 32px;
  overflow: hidden;
`;

const CardTopSheetStyle = styled.div<CardOption>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 52px;
  padding: 0 24px;
  border-bottom: 1px solid #ccc;
  ${media.tablet`
    height: 36px;
    padding: 0 16px
  `}
  ${media.mobile`
    height: 9.6vw;
    padding: 0 4.27vw;
  `}
  span {
    color: #666;
    ${media.tablet`
    font-size: 12px;
  `}
  }
  .card_title {
    font-size: 18px;
    font-weight: 700;
    color: ${(props) => props.color || '#666'};

    ${media.tablet`
    font-size: 14px;
  `}
    ${media.mobile`
    font-size: 3.73vw;
  `}
  }
`;
const CardItemStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 52px);
  ${media.mobile`
    height: calc(100% - 9.6vw);
  `}
  .card_top_box {
    height: 196px;
    padding: 24px;
    ${media.tablet`
      height: 124px;
      padding: 16px;
    `}
    p {
      width: 100%;
      color: #111;
      font-size: 36px;
      font-weight: 700;
      text-align: left;
      line-height: 50px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      ${media.tablet`
        font-size: 24px;
        line-height: 32px;
      `}
      ${media.mobile`
        font-size: 6.4vw;
        line-height: 8.53vw;
      `}
    }
    .sub_title {
      width: 100%;
      font-size: 24px;
      line-height: 1.5;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      color: #666;
      padding-top: 8px;
    }
  }

  img {
    width: 100%;
    border-bottom: 1px solid #ccc;
  }
`;
const CardBottonSheetStyle = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  border-top: 1px solid #ccc;
  text-align: center;
  ${media.tablet`
    display: block;
  `}
  button {
    padding: 10px;
    font-size: 14px;
    font-weight: 500;
    color: #fff;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

function BestCardBox(props: {
  color: string;
  title: string;
  subTitle: string;
  id: number;
  categoryId: number;
}) {
  const { MAP_CARD_TITLE } = useMapData();
  const newValueData = Array.from(MAP_CARD_TITLE.values());
  return (
    <CardBoxStyle>
      <CardTopSheetStyle color={props.color}>
        <span className="card_title">{newValueData[props.categoryId - 1]}</span>
        <span>No. {String(props.id).padStart(3, '0')}</span>
      </CardTopSheetStyle>
      <CardItemStyle>
        <div className="card_top_box">
          <p dangerouslySetInnerHTML={{ __html: props.title }}></p>
          <p
            className="sub_title"
            dangerouslySetInnerHTML={{ __html: props.subTitle }}
          ></p>
        </div>
      </CardItemStyle>
      <CardBottonSheetStyle>
        <button type="button">Show Detail</button>
      </CardBottonSheetStyle>
    </CardBoxStyle>
  );
}

export default BestCardBox;
