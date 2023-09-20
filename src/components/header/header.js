import ReactCountryFlag from "react-country-flag"
import { useSelector, shallowEqual } from "react-redux";

import headerStyles from './header.module.css'

function Header() {

    const { offer } = useSelector((state) => ({ offer: state.offer }), shallowEqual);

    return (
        <>
            <div className={`text_size_h4 ${headerStyles.line}`}>
                <ReactCountryFlag className={`text ${headerStyles.line__decoration}`} countryCode={offer.decoration.toUpperCase()} svg />
                <p className={`text text_color_dark ${headerStyles.line__text}`}>{offer.offer}</p>
                <ReactCountryFlag className={`text ${headerStyles.line__decoration}`} countryCode={offer.decoration.toUpperCase()} svg />
            </div>

            <div className={`${headerStyles.logo}`} />
        </>
    );
}

export default Header;