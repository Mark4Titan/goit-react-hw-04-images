import styled from 'styled-components';

export const DIVOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1050;
  transition: opacity 400ms ease-in;
  pointer-events: none;
`;
export const DIVModal = styled.div`

  pointer-events: auto;
  overflow-y: auto;
`;
