import React, { useState, useEffect } from "react";
import next, {NextPage} from "next";

import Slider, { CustomArrowProps, Settings, ResponsiveObject } from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css"; 

import { PublicKey } from "@solana/web3.js";
import { useWallet } from "@solana/wallet-adapter-react";
import { TokenData } from "../../types";
import getWalletNfts from "../CyberApeSearch/getWalletNfts";

import ArrowDown from "../Arrows/ArrowDown";
import ArrowLeft from "../Arrows/ArrowLeft";
import CyberApeRenderer from '../CyberApeRenderer'
import {
  ApeItemContainer,
  HeroRenderWrapper,
  FusionApesListContainer
} from "../../styles/FusionChamber";
import RankSection from "./RankSection";
import RarityButton from "./RarityButton";
import APES from "./test.data";

const FusionApesList: NextPage = () => {
  const { publicKey, connected } = useWallet();
  const [walletNFTs, setWalletNFTs] = useState<TokenData[] | null>(null);
  const [isLoadingWalletNFTs, setIsLoadingWalletNFTs] = useState<boolean>(false);

  const getWallNFTList = async (publicKey: PublicKey) => {
    if (isLoadingWalletNFTs) return;
    
    setIsLoadingWalletNFTs(true);

    const curWalletNFTs: TokenData[] | null = await getWalletNfts(publicKey);
    console.log(curWalletNFTs);

    if (curWalletNFTs) {
      setWalletNFTs(curWalletNFTs);
    }

    setIsLoadingWalletNFTs(false);
  }

  useEffect(() => {
    if (!connected || !publicKey) return;

    console.log('wallect connected');

    getWallNFTList(publicKey);
  }, [publicKey, connected])

  const SlickArrowLeft = ({...props }:CustomArrowProps) => (
    <button
      {...props}
      className="slick-prev slick-arrow"
      aria-hidden="true"
      type="button"
    >
      <ArrowLeft />
    </button>
  );
  
  const SlickArrowRight = ({...props }:CustomArrowProps) => (
      <button
        {...props}
        className="slick-next slick-arrow"
        aria-hidden="true"
        type="button"
      >
        <ArrowLeft />
      </button>
  );

  const AppendDots = (dots: React.ReactNode) => (
    <div className="slick-dots">
      <ul>
        {dots}
      </ul>
    </div>
  );

  const CustomPaging = (index: number) => (
    <div></div>
  )

  const responsives: ResponsiveObject[] = [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]

  const slickSetting:Settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    appendDots: AppendDots,
    initialSlide: 0,
    responsive: responsives,
    customPaging: CustomPaging,
    rows: 3,
    slidesPerRow: 3,    
  };

  return (
    <FusionApesListContainer>
      <Slider {...slickSetting}>
        {/* {(!!!isLoadingWalletNFTs && walletNFTs) 
          && walletNFTs.map((item: TokenData, index) => (
          <ApeItemContainer key={index} className='apeItemContainer'>
            <HeroRenderWrapper>
                <CyberApeRenderer 
                    isLookingRight={false}
                    size="150px"
                    traits={item.traits}
                />
            </HeroRenderWrapper>

            <RankSection 
                index={item.index}
                rank={item.rank}
            />

            <RarityButton rank={item.rank} />
          </ApeItemContainer>
        ))} */}
        {APES.map((item: TokenData, index) => (
          <ApeItemContainer key={index} className='apeItemContainer'>
            <HeroRenderWrapper>
                <CyberApeRenderer 
                    isLookingRight={false}
                    size="150px"
                    traits={item.traits}
                />
            </HeroRenderWrapper>

            <RankSection 
                index={item.index}
                rank={item.rank}
            />

            <RarityButton rank={item.rank} />
          </ApeItemContainer>
        ))}
        </Slider>
    </FusionApesListContainer>
  )
}

export default FusionApesList;