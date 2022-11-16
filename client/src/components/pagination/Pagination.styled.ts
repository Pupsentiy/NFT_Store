import ReactPaginate from "react-paginate";
import styled from "styled-components";

export const StyledReactPaginate = styled(ReactPaginate)`
  .selected {
    background: #1e50ff;
    -webkit-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
    -moz-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
    box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
    border-radius: 8px;
  }
  .disabled {
    opacity: 0.6;
  }
  li {
    display: inline-block;
    margin: 5px;

    a {
      border: solid 1px #1e50ff;
      font-size: 16px;
      color: #ffffff;
      font-weight: 400;
      width: 45px;
      height: 45px;
      text-align: center;
      line-height: 43px;
      border-radius: 8px;
      display: inline-block;
      cursor: pointer;
      &:active {
        background: #1e50ff;
        -webkit-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
        -moz-box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
        box-shadow: 0px 0px 16px 4px rgba(30, 80, 255, 0.71);
      }
    }
  }
`;