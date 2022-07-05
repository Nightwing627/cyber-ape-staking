import { NextPage } from "next/types";
import GlobalFooter from "../components/GlobalFooter";
import GlobalHeader from "../components/GlobalHeader";
import { HomeContainer, NotFoundContainer } from "../styles/Home";

const AstralBreakersPage: NextPage = () => {
  return (
    <HomeContainer>
      <GlobalHeader />
      <NotFoundContainer>Astral Breakers Page Goes Here</NotFoundContainer>
      <GlobalFooter />
    </HomeContainer>
  );
};

export default AstralBreakersPage;
