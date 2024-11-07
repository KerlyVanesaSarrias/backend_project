
import * as yup from 'yup';

export const userCreateValidationShema = 
yup.object().shape({
    name: yup.string().required('Name is required'),
    lastName:  yup.string().required('Last name is required'),
    email: yup.string().typeError('Email must be a string').email('Email must be valid email').required('Email is required'),
    nick: yup.string().min(3, 'Nick must contain at least 3 characters').required('Nick is required'),
    password: yup.string().min(6,'Password must contain at least 6 characters').required('Password is required')
})

export const loginValidationSchema = yup.object().shape({
    email: yup.string().typeError('Email must be a string').email('Email must be valid email').required('Email is required'),
    password: yup.string().min(6,'Password must contain at least 6 characters').required('Password is required'),
})




