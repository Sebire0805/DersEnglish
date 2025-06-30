import * as yup from 'yup'

export const RegistrForm =yup.object().shape({
    username: yup.string().required("This field is required."),
    email:yup.string().email('').required('This field is required'),
    password:yup.string().required('This field is requiered'),
    confirmpassword:yup.string().required('Main').oneOf([yup.ref('password',yup.password)],"Write correct password"),
    terms:yup.boolean().required()

})