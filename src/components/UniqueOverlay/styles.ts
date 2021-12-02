import { motion } from "framer-motion";
import styled from "styled-components";
import { LogoSVG, BurgerSVG } from "./iconSVG";

export const Container = styled.div`
  position: sticky;
  inset: 0;
`;

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  min-height: 52px;
`;
export const Logo = styled(LogoSVG)`
  height: 1.5rem;
  cursor: pointer;
`;
export const Burger = styled(BurgerSVG)`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export const Footer = styled(motion.footer)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    li {
      list-style: none;
      font-size: 14px;
    }

    a {
      text-decoration: none;
      color: #393c41;

      &:hover {
        color: #000;
      }
    }
  }

  margin-bottom: 30px;

  @media (min-width: 600px) {
    ul {
      flex-direction: row;
    }
  }
`;
