import ActiveNavLink from "../Utils/ActiveNavLink";
import Logo from "../Utils/Logo";
import { Subtitle } from "../Utils/Title";

const Header = () => {
    return (
        <nav className="nav"> 
            <Logo logo="Narson Kevine YVES"/>
            <ul className="nav__link">
                <li><ActiveNavLink to="/" ><Subtitle subtitle="Acceuil"/> </ActiveNavLink></li>
                <li> <ActiveNavLink to="/project" ><Subtitle subtitle="Projet"/></ActiveNavLink></li>
                <li> <ActiveNavLink to="/about" ><Subtitle subtitle="A propos"/></ActiveNavLink></li>
                <li><ActiveNavLink to="/contact" ><Subtitle subtitle="Contact"/></ActiveNavLink></li>
                {/* Ajout de la li pour choisir la langue */}
               
            </ul> 
         
                    <select className="select">
                        <option className="option" value="fr">FR</option>
                        <option  className="option" value="en">EN</option>
                    </select>
               
        </nav>
    );
};

export default Header;
