import React, {useState} from 'react';
import {Container, Form, Row, Col, Button} from "react-bootstrap";
import {addUserAction} from "../../redux/actions";
import {useDispatch} from "react-redux";
import LoadingSpinners from "../../components/LoadingSpinners";
import CustomAlert from "../../components/CustomAlert";



const UserRegisterPage = () => {

    const dispatch = useDispatch()

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: ''
    })

    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const formValue = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    }

    const addUser = async (event) => {
        event.preventDefault()
        setError(false);
        setSuccess(false);

        if (!user.name || !user.username || !user.email) {
            setError(true);
            return;
        }

        setIsLoading(true);

        try {
            await dispatch(addUserAction(user));
            setSuccess(true);
        } catch (e) {
            setError(true);
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <Container>
            <Form onSubmit={addUser}>
                <Row>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="name">
                            <Form.Control
                                type="text"
                                placeholder="name"
                                name="name"
                                onChange={formValue}
                                disabled={isLoading}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="username">
                            <Form.Control
                                type="text"
                                placeholder="username"
                                name="username"
                                onChange={formValue}
                                disabled={isLoading}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Control
                                type="text"
                                placeholder="email"
                                name="email"
                                onChange={formValue}
                                disabled={isLoading}
                            />
                        </Form.Group>
                    </Col>
                    <Col lg={3}>
                        <Button  type="submit" variant="success" className="w-100">
                            {isLoading ? 'Loading...' : 'Register user'}
                        </Button>
                    </Col>
                </Row>
            </Form>
            <LoadingSpinners isLoading={isLoading} />
            {
                error && (
                    <CustomAlert showAlert={true} variant="danger"/>
                )
            }
            {
                success && (
                    <CustomAlert showAlert={true} variant="success"/>
                )
            }
        </Container>
    )
};

export default UserRegisterPage;