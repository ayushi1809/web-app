import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from "react-bootstrap";

const DocumentForm = ({ onSave, initialData, text, edit }) => {
    const [formData, setFormData] = useState([]);
    const [open, setOpen] = useState(true);


    useEffect(() => {
        setFormData(initialData)
    }, [initialData]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        setOpen(false)
    };
    return (
        <section>
            {(open || edit) &&
                <div className="container mt-3 d-flex justify-content-center align-items-center">
                    <div className="card p-2 shadow-lg d-flex card-width-300 justify-content-center align-items-center">
                        <h3 className="mb-3">{text}</h3>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label> Title:</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="title"
                                    placeholder="Enter title"
                                    value={formData?.title}
                                    onChange={(e) => handleChange(e)}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="email">
                                <Form.Label>Content</Form.Label>
                                <textarea className="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" name="content" value={formData?.content}
                                    onChange={(event) => handleChange(event)}></textarea>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            }
        </section>
    );
};

export default DocumentForm;
