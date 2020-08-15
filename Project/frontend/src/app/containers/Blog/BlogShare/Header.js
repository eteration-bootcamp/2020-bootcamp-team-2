import React from 'react';
import { withTranslation } from 'react-i18next';

class Header extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="header">
                <div className="location_header_style">
                    <center><h1>{t('Share Blog')}</h1></center>
                </div>
            </div>

        )
    }
}

export default withTranslation()(Header);