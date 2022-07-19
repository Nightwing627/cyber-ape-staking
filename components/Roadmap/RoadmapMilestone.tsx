import { NextPage } from "next";
import { useContext, useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { APE_DATA } from "../../constants/cyberapeage-data";
import SuperModalContext from "../../contexts/SuperModal";
import { getRandomApeIndex } from "../../utils";
import CyberApeRenderer from "../CyberApeRenderer";
import SignatureButton from "../SignatureButton";
import {
  RoadmapMilestoneCenterSquare,
  RoadmapMilestoneContainer,
  RoadmapMilestoneDate,
  RoadmapMilestoneDateWrapper,
  RoadmapMilestoneDesc,
  RoadmapMilestoneTitle,
} from "./styles";
import { RoadmapMilestoneProps } from "./types";

const BodyContainer = styled.div`
  border: 2px solid #101010;
  transform: matrix(1, 0, 0, 1, 0, 0);
  width: 40%;
  padding: 2.188rem 0rem 0 1.438rem;
  border: 20px solid;
  border-image: url("stair-border-roadmap.svg");
  border-image-slice: 16;
`;

const BackgroundBox = styled.div`
  background: rgba(97, 97, 97, 0.08);
  z-index: -10;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`;

const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: flex-end;
`;

const ApeContainer = styled.div`
  position: relative;
  top: 18px;
  left: 30px;
`;

const RoadmapMilestone: NextPage<RoadmapMilestoneProps> = ({
  title,
  description,
  date,
  detailsPopup,
  popupTitle,
}) => {
  const RANDOM_APE_TRAITS = useMemo(
    () => APE_DATA[getRandomApeIndex()].traits,
    []
  );

  const RoadmapMilestoneContainerRef = useRef<HTMLDivElement>(null);

  const [isAboveMiddle, setIsAboveMiddle] = useState<boolean>(false);
  const { open } = useContext(SuperModalContext);

  function license(): void {
    if (popupTitle != null && detailsPopup != null) {
      open(popupTitle, detailsPopup);
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (!RoadmapMilestoneContainerRef.current) return;

      const isAboveMiddleCheck =
        RoadmapMilestoneContainerRef.current.getBoundingClientRect().top <
        window.innerHeight / 2;

      setIsAboveMiddle(isAboveMiddleCheck);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <RoadmapMilestoneContainer ref={RoadmapMilestoneContainerRef}>
      <BodyContainer>
        <BackgroundBox></BackgroundBox>
        <RoadmapMilestoneTitle>{title}</RoadmapMilestoneTitle>
        <RoadmapMilestoneDesc>{description}</RoadmapMilestoneDesc>
        <BottomContainer>
          <ApeContainer>
            <CyberApeRenderer
              isLookingLeft
              size="150px"
              traits={{
                ape: RANDOM_APE_TRAITS.ape,
                head: RANDOM_APE_TRAITS.head,
                ears: RANDOM_APE_TRAITS.ears,
                eyes: RANDOM_APE_TRAITS.eyes,
                mouth: RANDOM_APE_TRAITS.mouth,
              }}
            />
          </ApeContainer>
          {popupTitle != null && detailsPopup != null && (
            <SignatureButton
              backgroundColor={"#1"}
              onClick={license}
              accent="#1"
            >
              DETAILS
            </SignatureButton>
          )}
        </BottomContainer>
      </BodyContainer>
      <RoadmapMilestoneCenterSquare isAboveMiddle={isAboveMiddle} />
      <RoadmapMilestoneDateWrapper>
        <RoadmapMilestoneDate>{date}</RoadmapMilestoneDate>
      </RoadmapMilestoneDateWrapper>
    </RoadmapMilestoneContainer>
  );
};

export default RoadmapMilestone;
