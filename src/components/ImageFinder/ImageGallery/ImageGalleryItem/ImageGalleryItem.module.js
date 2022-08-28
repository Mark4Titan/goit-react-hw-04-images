import styled from 'styled-components';
export const IMG = styled.img`
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    -webkit-transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
`;
