import Defaultoverlaycontent from "../Defaultoverlaycontent";
import { Modelsections, ModelsWrapper } from "../Model";
import UniqueOverlay from "../UniqueOverlay";

import * as S from "./styles";

const Page: React.FC = () => {
  return (
    <S.Container>
      <ModelsWrapper>
        <div>
          {[
            "Model One",
            "Model Two",
            "Model Three",
            "Model Four",
            "Model Five",
            "Model Six",
            "Model Seven",
          ].map((modelName) => (
            <Modelsections
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <Defaultoverlaycontent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <S.Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </S.Container>
  );
};

export default Page;
