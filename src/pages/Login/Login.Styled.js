import styled from "styled-components";

export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;

  @media (max-width: 850px) {
    .LoginContainerWrapper {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100% !important;
      margin-right: 0px !important;
    }
    .WelcomeText {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .LoginContainer {
      width: 100%;
    }
  }

  .bottom-image {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .top-image {
    position: absolute;
    top: 0;
    right: 0;
  }
`;
