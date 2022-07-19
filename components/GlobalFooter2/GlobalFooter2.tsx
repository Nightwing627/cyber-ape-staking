import { NextPage } from "next/types";
import { PAGE_MAX_WIDTH } from "../../constants";
import CyberApeRenderer from "../CyberApeRenderer";
import DiscordIcon from "../DiscordIcon";
import TwitterIcon from "../TwitterIcon";
import HubComingSoon from "../GlobalHeader/HubComingSoon";
import GlobalFAQ from "../GlobalFAQ/GlobalFAQ";
import { useContext } from "react";
import MobileMenuContext from "../../contexts/MobileMenu";
import SuperModalContext from "../../contexts/SuperModal";
import CyberApeSearch from "../CyberApeSearch";
import License from "../GlobalFAQ/License";
import Link from "next/link";
import {
  ComingSoonTitle,
  CyberApeRendererWrapper,
  Discord,
  GlobalFooterContainer,
  LinksColumn,
  LinksRowContainer,
  SocialsRow,
  Twitter,
  FooterCableLeft,
  FooterCableRight,
  FooterContainer
} from "./styles";
import License1 from "../GlobalFAQ/License";

const GlobalFooter: NextPage = () => {
  const { open } = useContext(SuperModalContext);

  function openHub(): void {
    open("troop's hub", <HubComingSoon />);
  }

  function license(): void {
    open("License Of Agreement", <License1 />);
  }

  return (
    <GlobalFooterContainer>
      <FooterCableLeft />
      <FooterCableRight />
      
      <FooterContainer>
        <p className="title">still wondering around?</p>
        <p className="summary">check out our discord server and let us know what&apos;s boggling your mind</p>

        <LinksRowContainer>
          <LinksColumn>
            <h1>TRAVEL AROUND</h1>
            <a onClick={openHub}>TROOP&apos;S HUB</a>

            <Link href={"/shop"}>
              <a>SHOP</a>
            </Link>
            <Link href={"/GlobalFAQ1"}>FAQ</Link>
          </LinksColumn>

          <LinksColumn>
            <h1>DOCUMENTATION</h1>
            <a href="#">WHITEPAPER</a>
            <a onClick={license}>LICENSE OF AGREEMENT</a>
            <a href="#">PRIVACY POLICY</a>
          </LinksColumn>
          <LinksColumn>
            <h1>SOCIALS</h1>
            <SocialsRow>
              <Discord
                href="https://discord.gg/cyberapeage"
                target="_blank"
                rel="noreferrer"
              >
                discord
              </Discord>
              <a href="#">INSTAGRAM</a>
              <Twitter
                href="https://twitter.com/CyberApeAge"
                target="_blank"
                rel="noreferrer"
              >
                TWITTER
              </Twitter>

              
            </SocialsRow>
          </LinksColumn>
        </LinksRowContainer>

        <CyberApeRendererWrapper>
          <CyberApeRenderer
            size="325px"
            traits= {{
              ape: "Brown",
              head: "Crown",
              ears: "Nothing",
              mouth: "Nothing",
              eyes: "Rainbow Visor",
            }}
          />
        </CyberApeRendererWrapper>
      </FooterContainer>
      
      
    </GlobalFooterContainer>
  );
};

export default GlobalFooter;
