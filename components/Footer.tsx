import Link from "next/link";
import { Container, CustomLink} from "../customElemets/customStyledElements";
import { navLinks } from "../constants/constants";
import styled from "styled-components";

const FooterWrapper = styled.footer`
	width: 100%;
	display: flex;
  flex-shrink: 0;
	justify-content: center;
  background-color: black;
`;

const FooterContainer = styled(Container)`
  display: flex;
  width: 100%;
  padding: 16px;
`

const FooterLogoContainer = styled.div`
  flex: 1;
`
const FooterLinksContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`
const FooterLink = styled.li`
  line-height: 28px;
  color: #7d7d7d;
`
const Footer = () => {
  const footerLinks = navLinks.filter(item => item.footer)
  
	return (
    <FooterWrapper>
      <FooterContainer>
        <FooterLogoContainer>
          <Link href={'/'}>
            <CustomLink> Logo </CustomLink>
          </Link>
        </FooterLogoContainer>
        <FooterLinksContainer>
          {footerLinks.map( item => (
            <FooterLink key={item.name}>
              <Link href={item.url}>
                <CustomLink> {item.name} </CustomLink>
              </Link>
            </FooterLink>
          ))}
        </FooterLinksContainer>
      </FooterContainer>
    </FooterWrapper>
  );
};

export default Footer;
