import React from 'react';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

const NavbarLogIn = (props) => {
    const { t } = props;
    return (
        <div className="navbar_login">
            <Link to="/Register">
                <button className="btn btn-outline-light my-2 my-sm-0 mr-3 " type="submit">{t('REGISTER')}</button>
            </Link>
            <Link to="/Login">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">&nbsp; {t('LOGIN')} &nbsp;</button>
            </Link>
        </div>
    )
}

const NavbarLogInWithTranslation = withTranslation()(NavbarLogIn);

export default NavbarLogInWithTranslation;