import s from './Footer.module.css';
import Container from "../Container";
import Batman from "../../images/harli.png";

const Footer = () => {
    const today = new Date(),
        year = today.getFullYear()
    return (
        <footer className={s.footer}>
            <Container>
                <p className={s.copyright}>&#169; {year} | All Rights Reserved | Developed by <a className={s.link} href='https://github.com/KateSjo/goit-react-hw-05-movies' target="_blank" rel="noreferrer"><img className={s.profile} src={Batman} alt='harli' /><span className={s.name}>Jekaterina Sjomkina</span></a></p>
            </Container>
        </footer>
    )
};

export default Footer;