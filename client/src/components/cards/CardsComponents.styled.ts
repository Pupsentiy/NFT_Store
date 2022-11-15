import styled from "styled-components";

export const CardContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  background-color: #272d37;
  z-index: 5;
  justify-content: flex-start;
  break-inside: avoid;
`;
export const BlockCardName = styled.div`
  text-align: center;
  margin-top: 24px;
  width: 325px;
  height: 100%;
`;
export const WrapperAvatar = styled.div`
  width: 45px;
  height: 45px;
  object-fit: contain;
`;

export const PriceEl = styled.div`
  font-weight: 600;
  text-align: end;
  width: 100%;
  margin-top: 10px;
`;
