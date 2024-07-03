import styled from "styled-components";

export const StyledWrapperItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-width: 0px 0px 2px 0px;
  border-color: #fdf0c8;
  padding-bottom: 20px;
  .sub-item {
    position: relative;
  }
  .sub-item::after {
    content: "";
    position: absolute;
    top: -10px;
    left: 0px;
    background-color: black;
    width: 2px;
    height: 20px;
  }
`;
