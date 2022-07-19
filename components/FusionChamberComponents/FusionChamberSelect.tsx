import React from "react";
import {
  FusionChamberSelectArea,
  FusionPreview,
  PreviewApe,
  BackButton,
  FusionStartStep2Btn
} from "../../styles/FusionChamber";
import { ChamberBox, FusionMonkey, FusionStart } from "./svg";
import { NFTSelectBox } from "./box";
import FusionApesList from './FusionApesList'

interface Props {
  toNext: () => void;
  toBack: () => void;
}

const FusionChamberSelectComponent: React.FC<Props> = ({ toNext, toBack }) => {
  return (
    <>
      <FusionChamberSelectArea>
        <FusionPreview>
          <PreviewApe />
          <FusionStartStep2Btn onClick={() => toNext()} />
        </FusionPreview>

        <FusionApesList />
      </FusionChamberSelectArea>
      <BackButton onClick={() => toBack()}>&lt; back</BackButton>
    </>
  );
};

export default FusionChamberSelectComponent;
