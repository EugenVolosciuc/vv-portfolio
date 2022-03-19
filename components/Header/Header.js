import Link from "next/link";
import {
  AiFillDribbbleCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  NavLi,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link href="/" passHref>
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Valeria Voloșciuc</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <NavLi>
        <Link href="#projects" passHref>
          <NavLink>Projects</NavLink>
        </Link>
      </NavLi>
      <NavLi>
        <Link href="/about" passHref>
          <NavLink>About</NavLink>
        </Link>
      </NavLi>
    </Div2>
    <Div3>
      <SocialIcons href="https://google.com">
        <AiFillDribbbleCircle size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/valeriacerbu">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
