import React from 'react';
import { withTranslation } from 'react-i18next';
import { Container, Row, Col } from 'reactstrap'

class Footer extends React.Component {
    render() {
        const { t } = this.props;
        return (
            <div className="main-footer footer_style" >
                <Container>
                    <Row>
                        <Col>
                            <br />
                            <h4>{t('ABOUT US')}</h4>
                            <br />
                            <h>{t('TRAWELL is a travel guide.')}</h>
                            <br />
                            <h>{t('TRAWELL enhances your travel experience and helps you plan a more enjoyable trip.')}</h>
                        </Col>
                        <Col />
                        <Col>
                            <br></br>
                            <h4>{t('FOLLOW US')}</h4>
                            <a className="icon profile-font-style text-white" href="https://github.com/eteration-bootcamp/2020-bootcamp-team-2/tree/master/Project"><i className="fab fa-github"></i></a>
                        </Col>
                    </Row>
                    <hr />
                    <Row>
                        <Col>
                            &copy;{new Date().getFullYear()} {t('TRAWELL | All right reserved')}
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

const FooterWithTranslation = withTranslation()(Footer);

export default FooterWithTranslation;