import styled, { css } from 'styled-components';

import { media } from './responsive';

export default function formStyledComponents() {
  //select
  interface SelectBoxOptions {
    minWidth?: string;
    maxWidth?: string;
  }
  const StyledSelectBox = styled.div<SelectBoxOptions>`
    position: relative;
    margin-top: 0;
    margin-right: 8px;
    width: 220px;
    max-width: ${(props) => props.maxWidth || '220px'};
    min-width: ${(props) => props.minWidth || '100px'};
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
    z-index: 1;
    ${media.desktop`
      width: 220px;
      max-width: ${(props: SelectBoxOptions) => props.maxWidth || '220px'};
    `}
    ${media.tablet`
      width: 160px;
      max-width: ${(props: SelectBoxOptions) => props.maxWidth || '160px'};
    `}
    ${media.mobile`
      width: 42.67vw;
      max-width: ${(props: SelectBoxOptions) => props.maxWidth || '42.67vw'};
    `}
    select {
      position: relative;
      z-index: 1;
      padding: 10px;
      height: 100%;
      width: 100%;
      font-size: 24px;
      line-height: 28px;
      background-color: transparent;
      border: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      ${media.tablet`
        padding: 8px;
        font-size: 18px;
      `}
      ${media.mobile`
        padding: 2.13vw;
        font-size: 4.8vw;
      `}
    }
    svg {
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 26px;
    }
  `;
  // StyledCheckBox
  const inActiveCheck = css`
    content: '';
    display: inline-block;
    vertical-align: middle;
    margin-right: 12px;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background-size: contain;
    background-repeat: no-repeat;
    background-color: #fff;
    ${media.desktop`
      width: 16px;
      height: 16px;
      margin-right: 8px;
    `}
    ${media.mobile`
      width: 4.27vw;
      height: 4.27vw;
    `}
  `;
  const activeCheck = css`
    background-color: #111;
    background-image: url('/images/icon/ic-check.svg');
  `;
  const StyledCheckBox = styled.label`
    & span {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      font-size: 20px;
      ${media.desktop`
        font-size: 16px;
      `}
      :before {
        ${inActiveCheck}
      }
    }
    & input {
      display: none;
      :checked + span:before {
        ${activeCheck}
      }
    }
  `;
  return {
    StyledSelectBox,
    StyledCheckBox,
  };
}
