import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BlogNavbar from '../BlogNavbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import { blog } from '../../../../api/apiCalls';
import { withTranslation } from 'react-i18next';

class Comment extends React.Component {
    state = {
        blogComment: '',
        blogImage: '',
        pendingApiCall: false,
        errors: {}
    };

    onChange = event => {
        const { t } = this.props;
        const { name, value } = event.target;
        const errors = { ...this.state.errors }
        errors[name] = undefined
        this.setState({
            [name]: value,
            errors
        });
    };

    onClickComment = async event => {
        event.preventDefault();

        const { blogComment, blogImage } = this.state;

        const body = {
            blogComment,
            blogImage
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
        const { blogComment } = errors;
        const { t } = this.props;
        return (
            <Container fluid>
                <Row >
                    <Col md={2}>
                        <BlogNavbar/>
                    </Col>
                    <Col style={{ marginRight: "20px" }}>
                        <Form>
                            <div className="form-group">
                                <label for="exampleFormControlTextarea1">{t('Write a comment')}</label><br />
                                <textarea onChange={this.onChange} name='blogComment' className={blogComment ? "form-control is-invalid" : "form-control"} id="exampleFormControlTextarea1" rows="3"></textarea>
                                <div className="invalid-feedback">{blogComment}</div>
                            </div>
                            <br />

                            <div className="form-group">
                                <label for="exampleFormControlFile1">{t('Choose photo')}</label>
                                <input onChange={this.onChange} type="file" name='blogImage' className="form-control-file" id="exampleFormControlFile1" />
                            </div>
                            <br /><br /> <br /><br />

                            <Button onClick={this.onClickComment} disabled={pendingApiCall} className="card_button navbar_text_color share_button">
                                {pendingApiCall && <span className="spinner-border spinner-border-sm"></span>}{t('Share Blog')}</Button>

                        </Form>
                    </Col>
                </Row>
                <br /><br /> <br />
            </Container>
        )
    }
}

const CommentWithTranslation = withTranslation()(Comment);

export default CommentWithTranslation;
