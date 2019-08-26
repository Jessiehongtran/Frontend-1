import React, {useState} from 'react';
import {Form, Field, withFormik, yupToFormErrors} from 'formik'
import * as Yup from "yup";

const SignUp = () => {
    const [user, setUser] = useState({email:'', password:'', passwordConfirm: ''})

    return (
        <div>
            SignUp
            <Form>
                <Field 
                type="text" 
                placeholder="email"
                name="email"
                />

                <Field 
                type="text" 
                placeholder="password"
                name="password"
                />

                <Field 
                type="text" 
                placeholder="password"
                name="passwordConfirm"
                />
                <button>Create</button>
            </Form>
        </div>
    )
}

const FormikSignUp = withFormik({
    mapPropsToValues(values){
        return {
            email: values.email || '',
            password: values.password || '',
            passwordConfirm: values.passwordConfirm || '',
        }
    },

    validationSchema: Yup.object().shape({
            email: Yup.string().required("An email is important to keep you validated"),
            password: Yup.string().required("A password is important, you can't miss"),
            passwordConfirm: Yup.string().oneOf(
                [Yup.ref('password')],
                'Passwords do not match')
            }),

    handleSubmit(values, {setUser}){
        console.log(values)
        // setUser(values)
    }
})(SignUp)

export default FormikSignUp;