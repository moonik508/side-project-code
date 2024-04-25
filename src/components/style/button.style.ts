import styled from 'styled-components';

export default function btnStyledComponents() {
  const StyledBtnDefault = styled.button`
    width: 160px;
    height: 48px;
    padding: 0 11px;
    margin: 0 12px 12px 0;
    border: 1px solid #666;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.3);
    transition: background-color 0.2s;
    &:hover {
      color: #fff;
      background-color: #111;
    }
    &:nth-child(3n) {
      margin: 0 0 12px 0;
    }
  `;
  const StyledBtnWide = styled(StyledBtnDefault)`
    width: 504px;
    height: 48px;
    padding: 0 11px;
  `;
  const StyledBtnWidePoint = styled(StyledBtnWide)`
    color: #fe4141;
    border: 1px solid #fe4141;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 0 12px 0;
    &:hover {
      color: #fff;
      border: 1px solid #111;
      background-color: #111;
    }
  `;

  return {
    StyledBtnDefault,
    StyledBtnWide,
    StyledBtnWidePoint,
  };
}
