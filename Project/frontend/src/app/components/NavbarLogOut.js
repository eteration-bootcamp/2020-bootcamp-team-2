import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../store/actions/authActions'
import { withTranslation } from 'react-i18next';

const NavbarLogOut = (props) => {
    const { t } = props;

    return (
        <div className="navbar_login">
            <Link to="/">
                <button onClick={props.signOut} className="btn btn-outline-light my-2 my-sm-0 mr-3 " type="submit">{t('LOGOUT')}</button>
            </Link>
            <Link to="/Profile">
                <button className="btn btn-outline-light my-2 my-sm-0" type="submit">&nbsp; {t('PROFILE')} &nbsp;</button>
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

const NavbarLogOutWithTranslation = withTranslation()(NavbarLogOut);

export default connect(null, mapDispatchToProps)(NavbarLogOutWithTranslation)