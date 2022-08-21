import Link from "next/link";
import { Container, CustomLink} from "../customElemets/customStyledElements";
import { navLinks } from "../constants/constants";
import styled from "styled-components";

const HeaderWrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
  background-color: black;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  width: 100%;
  padding: 16px;
`
const HeaderLogoContainer = styled.div`
  flex: 1;
`
const HeaderLinksContainer = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const Header = () => {
  const headerLinks = navLinks.filter(item => item.header)
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoContainer> Events App </HeaderLogoContainer>
        <HeaderLinksContainer>
          {headerLinks.map(item => (
            <Link key={item.name} href={item.url}>
              <CustomLink> {item.name} </CustomLink>
            </Link>
          ))}
        </HeaderLinksContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}