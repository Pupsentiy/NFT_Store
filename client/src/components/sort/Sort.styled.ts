import styled from "styled-components";

export const WrapperSortEl = styled.div<{open?:boolean}>`
  position: relative;
  border: solid 1px #1e50ff;
  font-size: 14px;
  border-radius: ${({open}) => (open === false ? '8px' : '8px 8px 0px 0px')};
  height: 50px;
  display: flex;
  align-items: center;
  background: rgba(30, 80, 255, 0.1019607843);
  cursor: pointer;
  margin-right: 10px;
`;

export const LabelNameEl = styled.span`
  width: 115px;
  padding: 16px 0px;
  text-align: center;
`;
export const LabelImg = styled.img<{ open: boolean }>`
  margin-right: 10px;
  rotate: ${(props) => (props.open ? "360deg" : "180deg")};
`;

export const SortList = styled.ul`
  position: absolute;
  z-index: 10;
  border: solid 2px #1e50ff;
  top: 50px;
  width: 137px;
  cursor: pointer;
  left: -1px;
  border-radius: 0px 0px 8px 8px;
  background: rgb(30 80 255 / 89%);
`;
export const ListItem = styled.li`
  padding: 8px;
  &:hover {
    background: rgb(0 21 92);
  }
`;
