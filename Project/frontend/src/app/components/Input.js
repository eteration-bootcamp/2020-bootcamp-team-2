import React from 'react';
import Form from 'react-bootstrap/Form'

const Input = (props) => {
    const {controlId, type, onChange, className, placeholder} = props
    return (
        <Form.Group controlId={controlId}>
            <Form.Control onChange={onChange} className= {className} type={type} placeholder={placeholder} />
        </Form.Group>
    );
}

export default Input;