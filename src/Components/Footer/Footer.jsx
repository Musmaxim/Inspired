import s from "./Footer.module.scss";
import { Container } from "../Layout/Container/Container";
import { Category } from "./Category/Category";
import { Contacts } from "./Contacts/Contacts";
import { Copyright } from "./Copyright/Copyright";
import { Development } from "./Development/Development";
import { Social } from "./Social/Social";

export const Footer = ({ list }) => {
  return (
    <footer>
      <Container className={s.container}>
        <Category s={s} list={list} />
        <Contacts s={s} />
        <Copyright s={s} />
        <Development s={s} />
        <Social s={s} />
      </Container>
    </footer>
  );
};
