import React from "react";
import RequestBtn from "../buttons/RequestBtn";
import RequestDataCard from "./RequestDataCard";
import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  margin: 1rem 0rem;

  /* Extra small devices (phones) */
  @media (max-width: 575.98px) {
    /* Add styles for extra small devices here */
  }

  /* Small devices (tablets) */
  @media (min-width: 576px) and (max-width: 767.98px) {
    /* Add styles for small devices (tablets) here */
  }

  /* Medium devices (landscape tablets) */
  @media (min-width: 768px) and (max-width: 991.98px) {
    /* Add styles for medium devices (landscape tablets) here */
  }

  /* Large devices (desktops) */
  @media (min-width: 992px) and (max-width: 1199.98px) {
    /* Add styles for large devices (desktops) here */
  }

  /* Extra large devices (large desktops) */
  @media (min-width: 1200px) and (max-width: 1920px) {
    /* Add styles for extra large devices (large desktops) here */
  }

  /* 4K monitors and larger */
  @media (min-width: 1920px) and (max-width: 2560px) {
    /* Add styles for 4K monitors here */
  }

  /* Ultra-wide monitors */
  @media (min-width: 2560px) and (max-width: 3440px) {
    /* Add styles for ultra-wide monitors here */
  }

  /* 4K ultra-wide monitors */
  @media (min-width: 3440px) and (max-width: 3840px) {
    /* Add styles for 4K ultra-wide monitors here */
  }

  /* Larger than 4K monitors */
  @media (min-width: 3840px) {
    /* Add styles for larger than 4K monitors here */
  }
`;

const RequestCard = ({ Name, Location, KarubarName, Image, children }) => {
  return (
    <StyledContainer>
      <RequestDataCard
        Name={Name}
        KarubarName={KarubarName}
        Location={Location}
        Image={Image}
      />
      <div className="flex flex-col gap-y-4 justify-between py-2 px-5 border-l-4 border-l-[#E5E9F3] relative">
        {children}
      </div>
    </StyledContainer>
  );
};

export default RequestCard;
