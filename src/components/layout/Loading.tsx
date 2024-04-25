import React from 'react';

import styled from 'styled-components';

const StyledLoadingAsset = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2000;
  display: block;
  width: 100%;
  height: 100vh;
  img {
    position: fixed;
    top: 50%;
    left: 50%;
    z-index: 2000;
    margin-top: -25px;
    margin-left: -25px;
    display: block;
    width: 50px;
    height: 50px;
  }
`;

// 사용법
// dataTable 에 noDataComponent={<NoDataList />} 로 선언
const Loading = () => {
  return (
    <StyledLoadingAsset>
      <img
        src="/images/loading-dots.gif"
        alt="loading three dots animation image"
      />
    </StyledLoadingAsset>
  );
};

export default Loading;
