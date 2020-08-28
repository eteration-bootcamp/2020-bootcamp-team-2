import React from 'react';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';
import { blog } from '../../../../api/apiCalls';
import { withTranslation } from 'react-i18next';
import Header from './Header'

class Content extends React.Component {
    /*
    constructor(props) {
        super(props);
        state = {
            blogContent: '',
            blogName: '',
            imageUrl: '',
            pendingApiCall: false,
            errors: {}
        };
    }
    componentDidMount() { 
    }*/
    state = {
        blogContent: '',
        blogName: '',
        imageUrl: '',
        pendingApiCall: false,
        errors: {}
    };

    onChange = event => {
        const { name, value } = event.target;
        const errors = { ...this.state.errors }
        errors[name] = undefined
        this.setState({
            [name]: value,
            errors
        });
    };

    onClickContent = async event => {
        event.preventDefault();
        const { blogContent, blogName, imageUrl } = this.state;
        const body = {
            blogContent,
            blogName,
            imageUrl
        };

        this.setState({ pendingApiCall: true });

        try {
            const response = await blog(body);
        }
        catch (error) {
            if (error.response.data.validationErrors) {
                this.setState({ errors: error.response.data.validationErrors });
            }
        }

        this.setState({ pendingApiCall: false });
    };

    render() {
        const { pendingApiCall, errors } = this.state;
        const { blogContent, blogName } = errors;
        const { t } = this.props;
        return (
            <Container fluid style={{ backgroundSize: "cover", backgroundImage: "url(https://www.dunyaatlasi.com/wp-content/uploads/2018/06/seyahat-ederken-dil-engeline-takilmamaniz-icin-8-ipucu.jpg)" }}>
                <Header />
                <Row >
                    <Col style={{ marginRight: "150px", marginLeft: "150px" }}>
                        <Form>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">{t('Write a blog title!')}</label><br />
                                <textarea onChange={this.onChange} name='blogName' className={blogName ? "form-control is-invalid" : "form-control"} id="exampleFormControlTextarea1" rows="3"></textarea>
                                <div className="invalid-feedback">{blogName}</div>
                            </div>

                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">{t('Write a blog content!')}</label><br />
                                <textarea onChange={this.onChange} name='blogContent' className={blogContent ? "form-control is-invalid" : "form-control"} id="exampleFormControlTextarea1" rows="3"></textarea>
                                <div className="invalid-feedback">{blogContent}</div>
                            </div>
                            <br />

                            <div className="form-group">
                                <label for="exampleFormControlFile1">{t('Choose photo')}</label>
                                <input onChange={this.onChange} type="file" name='imageUrl' className="form-control-file" id="exampleFormControlFile1" />

                            </div>
                            <br /><br /> <br /><br />

                            <Button onClick={this.onClickContent} disabled={pendingApiCall} className="card_button navbar_text_color share_button">
                                {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{t('Share Blog')}</Button>

                        </Form>
                    </Col>
                </Row>
                <br /><br /> <br />
            </Container>
        )
    }
}

const ContentWithTranslation = withTranslation()(Content);

export default ContentWithTranslation;
