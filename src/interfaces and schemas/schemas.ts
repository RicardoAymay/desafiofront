import * as yup from 'yup';


const validationSchema = yup.object().shape({
    name: yup.string().required('This field is required').min(2).max(120),
    email: yup.string().email('Invalid email').required('This field is required'),
    password: yup.string().min(8, 'Password must be at least 8 characters').required('This field is required'),
    phone: yup.string().required('This field is required'),
    is_medic: yup.boolean(),
    is_admin: yup.boolean()
});

export default validationSchema