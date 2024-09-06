import {z} from 'zod';
// define schema Data for login data validation
const loginSchema=z.object({
    email:z.string()
        .min(1,'Email cannot be empty!')
        .email('Invalid email adress'),
    password:z.string()
        .min(8, 'Password must be a minimum of 8 characters long')
        .regex(/[A-Z]/, 'Password must contain atleast one capital letter')
        .regex(/[a-z]/, 'password must contain atleast one lower case letter')
        .regex(/\d/, 'Password must contain atleast one number')
        .regex(/[!@#$%&*?]/, 'Password must contain atleast one special character'),
});

export default loginSchema;