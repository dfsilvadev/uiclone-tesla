import { useCallback, useLayoutEffect, useState } from "react";
import { useTransform } from "framer-motion";

import useWrapperScroll from "../useWrapperScroll";
import { CarModel } from "../ModelsContext";

import * as S from "./styles";

interface Props {
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const getSectionsDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionsDimensions()
  );

  useLayoutEffect(() => {
    function onResize() {
      window.requestAnimationFrame(() =>
        setDimensions(getSectionsDimensions())
      );
    }

    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, [getSectionsDimensions]);

  const { scrollY } = useWrapperScroll();

  const sectionScrollProgress = useTransform(
    scrollY,
    (y) => (y - dimensions.offsetTop) / dimensions.offsetHeight
  );

  const opacity = useTransform(
    sectionScrollProgress,
    [-0.42, -0.05, 0.05, 0.45],
    [0, 1, 1, 0]
  );

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0 ? "auto" : "none"
  );

  return (
    <S.Container style={{ opacity, pointerEvents }}>{children}</S.Container>
  );
};

export default ModelOverlay;
