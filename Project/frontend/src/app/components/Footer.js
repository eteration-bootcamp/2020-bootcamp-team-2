import React from 'react';
import { withTranslation } from 'react-i18next';

class Footer extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="main-footer footer_style" >
                <div className="container">

                    <div className="row">
                        <div className="col">
                            <br></br>
                            <h4>{t('ABOUT US')}</h4>
                            <br></br>
                            <h>{t('TRAWELL is a travel guide.')}</h>
                            <br></br>
                            <h>{t('TRAWELL enhances your travel experience and helps you plan a more enjoyable trip.')}</h>
                        </div>

                        <div className="col"></div>

                        <div className="col">
                            <br></br>
                            <h4>{t('FOLLOW US')}</h4>
                            <a style={{ color: "#FFFFFF", fontSize: "36px" }} className="icon" href="https://github.com/eteration-bootcamp/2020-bootcamp-team-2/tree/master/Project"><i className="fab fa-github"></i></a>
                        </div>
                    </div>

                    <hr style={{ height: "5px" }} />

                    <div className="row">
                        <p className="col float-center">
                            &copy;{new Date().getFullYear()} {t('TRAWELL | All right reserved')}
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const FooterWithTranslation = withTranslation()(Footer);

export default FooterWithTranslation;