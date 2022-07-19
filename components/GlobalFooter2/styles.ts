import styled from "styled-components";
import { PAGE_MAX_WIDTH } from "../../constants";

export const GlobalFooterContainer = styled.section`
  background-color: #151A42;
`;

export const FooterCableLeft = styled.div`
  position: absolute;
  display: block;
  width: calc( (184 / 1920) * 100vw );
  height: calc( (240 / 1920) * 100vw );
  background: url(/footer-cables/left-cable.svg) no-repeat;
  background-size: contain;
  left: 0;
`;

export const FooterCableRight = styled.div`
  position: absolute;
  display: block;
  width: calc( (116 / 1920) * 100vw );
  height: calc( (212 / 1920) * 100vw );
  background: url(/footer-cables/right-cable.svg) no-repeat;
  background-size: contain;
  right: 0;
`;

export const FooterContainer = styled.div`
  width: 100%;
  max-width: ${PAGE_MAX_WIDTH};
  margin: auto;
  padding: 5rem 2rem;

  .title {
    font-size: 52px;
    text-transform: uppercase;
  }
  .summary {
    font-size: 24px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.4);
    margin-top: 5px;
  }
`

export const ComingSoonTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 2.5rem;
  font-weight: normal;
  text-transform: uppercase;

  margin: 15rem 0;
`;

export const Twitter = styled.a`
  font-weight: normal;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-in-out;
    color: #1da1f2;
  }
`;

export const Discord = styled.a`
  font-weight: normal;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  text-transform: uppercase;

  &:hover {
    transition: all 0.05s ease-in-out;
    color: #5865f2;
  }
`;

export const LinksRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 2.5rem;
  gap: 8rem;
`;

export const LinksColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  h1 {
    font-size: 1.75rem;
    line-height: 1em;
    font-weight: normal;

    margin: 0 0 1rem 0;
  }

  > a {
    line-height: 1em;
    opacity: 0.35;
    font-weight: normal;
    font-size: 1.12rem;

    transition: all 0.05s ease-in-out;

    &:hover {
      opacity: 1;
    }
  }
`;

export const SocialsRow = styled.div`
  display: flex;
  color: rgba(255, 255, 255, 0.4);
  flex-direction: column;
  gap: 0.5rem;
`;

export const CyberApeRendererWrapper = styled.div`
  display: block;
  position: absolute;
  right: calc( (325 / 1920) * 100vw);
  bottom: calc(-325px - 5.7rem);

  @media screen and (max-width: 600px) {
    position: relative;
    top: 45px;
    bottom: 0;
    left: 15%;
  }
`;