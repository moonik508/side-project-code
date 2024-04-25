import React from 'react';

import styled from 'styled-components';

const StyledWrapper = styled.div`
  position: fixed;
  z-index: 9000;
  left: 0;
  top: 100%;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  &.is_active {
    top: 0;
  }
`;

const StyledInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  &.scroll {
    overflow-y: auto;
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(17, 17, 17, 0.1);
`;

function SampleModal(props: {
  isOpen: boolean;
  toggleCallback: () => void;
  contents?: React.ReactNode;
  scrollClass?: string;
}) {
  if (props.isOpen) {
    document.body.style.overflowY = 'hidden';
  }
  const closeModal = (e: any) => {
    e.preventDefault();
    if (props.toggleCallback) {
      props.toggleCallback();
      document.body.style.overflowY = 'auto';
    }
  };

  return (
    <StyledWrapper className={props.isOpen ? 'is_active' : ''}>
      <StyledBackground onClick={closeModal} />
      <StyledInner className={props.scrollClass ? 'scroll' : ''}>
        {props.contents}
      </StyledInner>
    </StyledWrapper>
  );
}

export default SampleModal;
