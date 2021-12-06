import React from "react";
import {Container, Row, Col, Form} from "react-bootstrap";
import ButtonWrapper from "./ButtonWrapper";
import flags from "react-phone-number-input/flags";
import PhoneInputWithCountry from "react-phone-number-input";
import 'react-phone-number-input/style.css'
import { useForm, Controller } from 'react-hook-form';
import TextInput from "./TextInput"

const ContactForm = () => {
    const {control, trigger, register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        reset();
    }

    return (
        <section id="form" className="form">
            <Container>
                <div className="wrapper">
                    <p className="form__title">Contact <span>Us</span></p>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Row className="mb-3">
                            <Col sm="12" md="6">
                                <Controller
                                    control={control}
                                    onChange={trigger}
                                    name={"firstName"}
                                    rules={{ required: true, maxLength: 20 }}
                                    render={({ field }) =>
                                        <TextInput
                                            {...field}
                                            type={"text"}
                                            errors={errors.firstName}
                                            label={"First Name"}
                                            className={"text-input"}
                                            fieldName={"input"}
                                        />}
                                />
                            </Col>
                            <Col sm="12" md="6">
                                <Controller
                                    control={control}
                                    onChange={trigger}
                                    name={"lastName"}
                                    rules={{ required: true, maxLength: 20 }}
                                    render={({field}) =>
                                        <TextInput
                                            {...field}
                                            name={"lastName"}
                                            type={"text"}
                                            errors={errors.lastName}
                                            label={"Last Name"}
                                            className={"text-input"}
                                            fieldName={"input"}
                                        />}
                                />
                            </Col>
                        </Row>

                        <Row className="mb-3">
                            <Col sm="12" md="6">
                                <Controller
                                    control={control}
                                    name={"phone"}
                                    rules={{required: true, maxLength: 20, minLength: 13}}
                                    onChange={trigger}
                                    render={({ field, ref }) =>
                                        <PhoneInputWithCountry
                                            {...field}
                                            className={errors.phone && "error"}
                                            international
                                            name={"phone"}
                                            flags={flags}
                                            defaultCountry="US"
                                    />}
                                />
                            </Col>

                            <Col sm="12" md="6">
                                <Controller
                                    control={control}
                                    onChange={trigger}
                                    name={"email"}
                                    rules={{ required: true, maxLength: 20 }}
                                    render={({field}) =>
                                        <TextInput
                                            {...field}
                                            name={"email"}
                                            type={"email"}
                                            errors={errors.email}
                                            label={"Enter email"}
                                            className={"text-input"}
                                            fieldName={"input"}
                                        />}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Controller
                                    control={control}
                                    onChange={trigger}
                                    name={"message"}
                                    render={({field}) =>
                                        <TextInput
                                            {...field}
                                            name={"message"}
                                            type={"text"}
                                            label={"Tell Us What Happened"}
                                            className={"text-area"}
                                            fieldName={"text-area"}
                                        />}
                                />
                            </Col>
                        </Row>

                        <ButtonWrapper bsPrefix="custom-btn" variant="black" type="submit">
                            Send
                        </ButtonWrapper>
                    </Form>
                </div>
            </Container>
        </section>
    )
};

export default ContactForm;