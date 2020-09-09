import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavbarLogIn from './NavbarLogIn';
import NavbarLogOut from './NavbarLogOut';
import LanguageSelector from './LanguageSelector';
import { withTranslation } from 'react-i18next';


const Navbar = (props) => {
    const { auth } = props;
    const { t } = props;
    const links = auth.uid ? <NavbarLogOut /> : <NavbarLogIn />;

    return (
        <nav className="navbar navbar-expand-lg" >
            <Link to="/"><img src={require('../images/logo.png')} className="w-50 mr-3" alt="Logo" /></Link>
            <div className="collapse navbar-collapse h3">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to="/" className="mr-5">
                            {t('HOME')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Location" className="mr-5">
                            {t('LOCATION')}
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Blog">
                            {t('BLOG')}
                        </Link>
                    </li>
                </ul>
            </div>
            {links}
            <div>
                <LanguageSelector />
            </div>
        </nav>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth
    }
}
const NavbarWithTranslation = withTranslation()(Navbar);
export default connect(mapStateToProps)(NavbarWithTranslation);