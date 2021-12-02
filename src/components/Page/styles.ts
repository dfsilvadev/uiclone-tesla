import styled from "styled-components";
import Img1 from "../../assets/img/img-1.jpg";
import Img2 from "../../assets/img/img-2.jpg";
import Img3 from "../../assets/img/img-3.jpg";
import Img4 from "../../assets/img/img-4.jpg";
import Img5 from "../../assets/img/img-5.jpg";
import Img6 from "../../assets/img/img-6.jpg";
import Img7 from "../../assets/img/img-7.jpg";

export const Container = styled.div`
  .colored {
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
  .colored:nth-child(1) {
    background-image: url(${Img1});
  }
  .colored:nth-child(2) {
    background-image: url(${Img2});
  }
  .colored:nth-child(3) {
    background-image: url(${Img3});
  }
  .colored:nth-child(4) {
    background-image: url(${Img4});
  }
  .colored:nth-child(5) {
    background-image: url(${Img5});
  }
  .colored:nth-child(6) {
    background-image: url(${Img6});
  }
  .colored:nth-child(7) {
    background-image: url(${Img7});
  }
`;

export const Spacer = styled.div`
  height: 15vh;
  background-color: transparent;
`;
