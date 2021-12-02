import { HTMLAttributes, ReactNode, useEffect, useRef } from "react";

import useModel from "../useModel";

import * as S from "./styles";

interface Props extends HTMLAttributes<HTMLDivElement> {
  modelName: string;
  overlayNode: ReactNode;
}

const ModelSections: React.FC<Props> = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);

  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef,
      });
    }
  }, [modelName, overlayNode, registerModel]);

  return (
    <S.Container ref={sectionRef} {...props}>
      {children}
    </S.Container>
  );
};

export default ModelSections;
