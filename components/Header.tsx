import Link from "next/link";
import { useRouter } from "next/router";
import { Container, CustomLink} from "../customElemets/customStyledElements";
import { navLinks } from "../constants/constants";
import styled from "styled-components";

const HeaderWrapper = styled.header`
	width: 100%;
	display: flex;
	justify-content: center;
  background-color: #783030;
`;

const HeaderContainer = styled(Container)`
  display: flex;
  width: 100%;
`
const HeaderLogoContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const HeaderLinksContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

const Header = () => {
  const headerLinks = navLinks.filter(item => item.header)
  const router = useRouter()
  let baseURL = `/${router.asPath.split('/')[1]}`
  
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderLogoContainer> 
          <Link href={'/'}>
            <CustomLink> Events App </CustomLink>
          </Link>    
        </HeaderLogoContainer>
        <HeaderLinksContainer data-test-id="test_headerLinks">
          {headerLinks.map(item => (
            <Link key={item.name} href={item.url}>
              <CustomLink active={baseURL === item.url} isHeaderLink={true}>{item.name}</CustomLink>
            </Link>
          ))}
        </HeaderLinksContainer>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header