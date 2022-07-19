import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../constants";
import {
  RarityBtnElemProps
} from '../components/FusionChamberComponents/types';

const headerH = `76px`;
const emptyH = `80px`;
const containerH = `calc(100vh - ${emptyH} - ${headerH})`;

const step2PX = '10px';
const step2ContainerH = `calc(100vh - ${emptyH} - ${headerH} - ${step2PX})`;
const headerPaddingX = `(22 / 1920) * 100vw`;
const apeItemW = `150px`;

export const MainContainer = styled.div`
  width: 100%;
  min-height: ${containerH};
  margin: 0 auto;
  background-image: url(/wordart.png);
  background-size: 100vw ${containerH};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: auto;
`;

export const EmptyContainer = styled.div`
  height: ${emptyH};
`;

export const BottomContainer = styled.div`
  height: 50px;
`;

export const DefaultHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 18px 0;
  text-align: center;
  font-size: 40px;
  line-height: 40px;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(89.56deg, #71bace 29.57%, #5fad67 82.94%);
`;

export const FusionChamberStart = styled.div`
    width: inherit;
    height: ${containerH};
    background-image: url(/fusionchamber/chamber.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    justify-content: center;
    display: flex;
`;

export const FusionChamberStartButton = styled.div`
    cursor: pointer;
    width: 156px;
    height: 129px;
    margin-top: calc(80vh - ${emptyH} - ${headerH});
    background-image: url(/fusionchamber/startbutton.svg);
    background-size: cover;

  /* transition: all 0.3s ease-in-out; */

    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
`;

export const FusionChamberSelectArea = styled.div`
  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};
  min-height: ${step2ContainerH};
  position: relative;
  background-color: #000;
  padding-top: ${step2PX};
  display: grid;
  grid-template-columns: repeat(auto-fill,30% 70%);
  grid-gap: 1rem;
  justify-content: space-between;
  margin: auto;
`;

export const FusionPreview = styled.div`
  width: inherit;
  background-image: url(/fusionchamber/chamber-preview.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-content: center;
  display: flex;
`;

export const FusionStartStep2Btn = styled.div`
    cursor: pointer;
    width: 130px;
    height: 111px;
    margin-top: calc(74.5vh - ${emptyH} - ${headerH});
    background-image: url(/fusionchamber/startfusion.svg);
    background-size: cover;

  /* transition: all 0.3s ease-in-out; */

    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
`;

export const FusionApesListContainer = styled.div`
    width: 100%;
    max-width: ${PAGE_MAX_WIDTH};
    text-align: center;
    padding: 5px 20px;
    @media screen and (min-height: 1100px) {
      margin-top: 5%;
    }

    .slick-next,
    .slick-prev {
        top: 104%;
    }
    .slick-next {
        right: 0;
        text-align: left;
        width: 49.3%;
    }
    .slick-prev {
        left: 0;
        text-align: right;
        margin-right: 1.4%;
        width: 49.3%;
    }
    .slick-next svg {
        transform: rotateY(180deg);
    }
    .slick-prev.slick-arrow:before,
    .slick-next.slick-arrow:before
     {
        content: '';
    }
    .slick-arrow:hover {
        svg path {
            opacity: 0.8;
            transition: ease-in-out 0.2s;
        }
    }
    .slick-dots {
        bottom: -15px;
    }
    .slick-dots ul li {
        width: auto;
        height: auto;
    }
    .slick-dots li div {
        width: 11px;
        height: 11px;
        background: rgba(196, 196, 196, 0.25);
    }
    .slick-dots li.slick-active div {
        background: #C4C4C4;
    }
    .slick-slide {
        // padding: 20px 0;
        cursor: pointer;
    }
    /* .slick-slide:hover {
        background: #29292d;
        display: block;
        z-index: 9999;
        opacity: 0.5;
        -webkit-transition: ease-out 1.8s;
        transition: ease-out 0.3s;
    } */
`;

export const RankSectionDiv = styled.div`
    width: ${apeItemW};
    display: flex;
    justify-content: space-between;
    position: relative;
    font-size: 28px;
    line-height: 28px;
    margin-top: 10px;
`
export const RarityBtnContainer = styled.div<RarityBtnElemProps>`
    position: relative;
    background: ${({color}) => color};
    width: ${apeItemW};
    margin-top: 10px;
    padding: 0 2px 2px 0;
    clip-path: ${({size, rare}) => rare ? `
        polygon(0% 0%,
            calc(100% - ${size}px) 0%,
            calc(100% - ${size}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size}px,
            100% ${size}px,
            100% 100%,
            ${size}px 100%,
            ${size}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size}px),
            0% calc(100% - ${size}px));`
    :
    `
        polygon(0% ${size}px, ${size/2}px ${size}px, 
            ${size/2}px ${size/2}px,
            ${size}px ${size/2}px,
            ${size}px 0%,
            calc(100% - ${size}px) 0%,
            calc(100% - ${size}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size}px,
            100% ${size}px,
            100% calc(100% - ${size}px),
            calc(100% - ${size/2}px) calc(100% - ${size}px),
            calc(100% - ${size/2}px) calc(100% - ${size/2}px),
            calc(100% - ${size}px) calc(100% - ${size/2}px),
            calc(100% - ${size}px) 100%,
            ${size}px 100%, ${size}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size}px),
            0% calc(100% - ${size}px));
    `};
`
export const RarityBtnInnerContainer = styled.div<RarityBtnElemProps>`
    display: flex;
    position: relative;
    top: 1px;
    left: 1px;
    right: 1px;
    bottom: 1px;
    background: ${({color}) => color};
    padding: 7px;
    justify-content: center;
    clip-path: ${({size, rare}) => rare ? `
        polygon(0% 0%,
            calc(100% - ${size}px) 0%,
            calc(100% - ${size}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size}px,
            100% ${size}px,
            100% 100%,
            ${size}px 100%,
            ${size}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size}px),
            0% calc(100% - ${size}px));`
    :
    `
        polygon(0% ${size}px, ${size/2}px ${size}px, 
            ${size/2}px ${size/2}px,
            ${size}px ${size/2}px,
            ${size}px 0%,
            calc(100% - ${size}px) 0%,
            calc(100% - ${size}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size/2}px,
            calc(100% - ${size/2}px) ${size}px,
            100% ${size}px,
            100% calc(100% - ${size}px),
            calc(100% - ${size/2}px) calc(100% - ${size}px),
            calc(100% - ${size/2}px) calc(100% - ${size/2}px),
            calc(100% - ${size}px) calc(100% - ${size/2}px),
            calc(100% - ${size}px) 100%,
            ${size}px 100%, ${size}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size/2}px),
            ${size/2}px calc(100% - ${size}px),
            0% calc(100% - ${size}px));
    `};

    & > svg {
        margin-right: 10px;
    };
`
export const RarityBtnElem = styled.span<RarityBtnElemProps>`
    text-align: center;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 16px;
`;

export const PreviewApe = styled.div`

`;

export const ApeItemContainer = styled.div`
    justify-content: center;
    display: inline-grid !important;
    margin-bottom: 1rem;
`;

export const HeroRenderWrapper = styled.div`
    width: ${apeItemW};
    position: relative;
    clip-path: polygon(
        0% 6%, 2% 6%, 2% 4%, 4% 4%, 4% 2%, 6% 2%, 6% 0%,
        94% 0%, 94% 2%, 96% 2%, 96% 4%, 98% 4%, 98% 6%, 100% 6%,
        100% 94%, 98% 94%, 98% 96%, 96% 96%, 96% 98%, 94% 98%, 94% 100%,
        6% 100%, 6% 98%, 4% 98%, 4% 96%, 2% 96%, 2% 94%, 0% 94%);
    
    &:hover {
        opacity: 0.3;
        transition: ease-in-out 0.35s;
    }
`;

// export const FusionChamberBoxArea = styled.div`
//   width: inherit;
//   height: ${containerH};

//   position: relative;

//   svg {
//     position: absolute;
//   }

//   .back {
//     top: 0;
//     left: 0;

//     width: 100%;
//     height: 100%;
//   }

//   .monkey {
//     top: calc((270 / 1920) * 100vw);

//     width: calc((552 / 1920) * 100vw);
//     height: calc((580 / 1920) * 100vw);
//   }

//   .start {
//     cursor: pointer;
//     position: absolute;

//     top: calc((937 / 1920) * 100vw);
//     left: calc((200 / 1920) * 100vw);

//     width: calc((160.06 / 1920) * 100vw);
//     height: calc((137.2 / 1920) * 100vw);

//     /* transition: all 0.3s ease-in; */

//     :active {
//       transform: translateY(calc((5 / 1920) * 100vw));
//     }
//   }
// `;

export const CardSelectArea = styled.div`
  width: calc((950 / 1920) * 100vw);
  min-height: calc((1101 / 1920) * 100vw);

  margin-top: calc((93 / 1920) * 100vw);

  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  position: relative;
`;

export const SteperBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  font-size: 25px;

  cursor: pointer;
`;

export const CardBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: start;

  width: calc((950 / 1920) * 100vw);
  height: calc((1101 / 1920) * 100vw);
`;

export const CardS = styled.div`
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5px;
  margin-right: 5px;

  width: calc((274.35 / 1920) * 100vw);
  height: calc((351 / 1920) * 100vw);
`;

export const CardImage = styled.div``;

export const BackButton = styled.div`
  position: absolute;
  cursor: pointer;

  right: calc((40 / 1920) * 100vw);
  top: calc((25 / 1920) * 100vw);

  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: calc((40 / 1920) * 100vw);
  line-height: calc((40 / 1920) * 100vw);

  text-transform: uppercase;

  color: #ffffff;

  transition: all 0.3s ease-in-out;

  :hover {
    transform: scale(1.03);
  }
`;

export const AssetSelectArea = styled.div`
  position: relative;

  background-color: #000;
  width: 100%;

  padding-top: calc((63 / 1920) * 100vw);

  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const AssetBoxArea = styled.div`
  width: calc((793 / 1920) * 100vw);
  height: calc((1683.41 / 1920) * 100vw);

  position: relative;

  svg {
    position: absolute;
  }

  .back {
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
  }

  .switch {
    cursor: pointer;
    top: calc((963 / 1920) * 100vw);

    width: calc((150 / 1920) * 100vw);
    height: calc((300 / 1920) * 100vw);
  }

  .first {
    left: calc((145 / 1920) * 100vw);
  }
  .second {
    left: calc((255 / 1920) * 100vw);
  }
  .third {
    left: calc((365 / 1920) * 100vw);
  }
  .fourth {
    left: calc((475 / 1920) * 100vw);
  }

  .start {
    cursor: pointer;
    position: absolute;

    top: calc((1210 / 1920) * 100vw);
    left: calc((300 / 1920) * 100vw);

    width: calc((190 / 1920) * 100vw);
    height: calc((230 / 1920) * 100vw);

    /* transition: all 0.3s ease-in; */

    :active {
      transform: translateY(calc((5 / 1920) * 100vw));
    }
  }
`;

export const AssetDescription = styled.div`
  width: calc((991 / 1920) * 100vw);

  font-family: "VT323";
  font-style: normal;
  font-weight: 400;
  font-size: calc((64 / 1920) * 100vw);
  line-height: calc((64 / 1920) * 100vw);
  text-align: center;
  text-transform: uppercase;

  color: #ffffff;
`;

export const AssetSelectBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 30px;

  padding-top: 60px;
`;

export const AssetSelectionArea = styled.div`
  width: calc((1000 / 1920) * 100vw);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const AssetBox = styled.div`
  width: calc((800 / 1920) * 100vw);
  height: calc((600 / 1920) * 100vw);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: calc((54 / 1920) * 100vw);
  padding-top: 13px;

  background-color: red;
`;

export const AssetSymbol = styled.div`
  width: calc((125 / 1920) * 100vw);
  height: calc((500 / 1920) * 100vw);

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 35px;

  background-color: blue;
`;

export const AssetLayer = styled.div`
  width: calc((770 / 1920) * 100vw);
  height: calc((110 / 1920) * 100vw);

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 72px;
`;
