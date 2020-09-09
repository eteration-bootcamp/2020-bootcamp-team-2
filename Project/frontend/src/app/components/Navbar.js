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
            <div className="collapse navbar-collapse h3" id="nvbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <Link to="/">
                        <li className="nav-item active">
                            <a className="mr-5" href="index.html">{t('HOME')}</a>
                        </li>
                    </Link>
                    <Link to="/Location">
                        <li className="nav-item">
                            <a className="mr-5" href="index.html" role="button">{t('LOCATION')}</a>
                        </li>
                    </Link>
                    <Link to="/Blog">
                        <li className="nav-item">
                            <a href="index.html" role="button">{t('BLOG')}</a>
                        </li>
                    </Link>
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