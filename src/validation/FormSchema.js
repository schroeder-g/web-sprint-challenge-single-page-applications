import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, "your name must includ at least 2 characters.")
        .required("you must enter your name"),
    size: yup
        .string()
        .oneOf(['s','m','l','xl'])
        .required("you must choose a size for your pizza"),
    instructions: yup
        .string()
        .max(25)
})

export default formSchema