import React, {useState, useEffect} from 'react';
import {Form, Field, withFormik} from 'formik'
import * as Yup from "yup";

const SignUp = (props) => {
    const [user, setUser] = useState([])

    useEffect(()=> {
        if(props.status) {
            setUser([...user, props.status])
        }
    })

    console.log(props)
    return (
        <div>
            SignUp
            <Form>
                <Field 
                type="text" 
                placeholder="email"
                name="email"
                />
                {props.touched.email && props.errors.email && <p>{props.errors.email}</p>}

                <Field 
                type="text" 
                placeholder="password"
                name="password"
                />
                {props.touched.password && props.errors.password && <p>{props.errors.password}</p>}

                <Field 
                type="text" 
                placeholder="password"
                name="passwordConfirm"
                />
                 {props.touched.passwordConfirm && props.errors.passwordConfirm && <p>{props.errors.passwordConfirm}</p>}

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