export const required = (param: any) => (value: any) =>{
    return value ? undefined : `${param} is required`
} 

export const email = (value: any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const nameValidator = (param: any) => (value: any) =>
  value && /[^a-zA-Z]/i.test(value)
    ? `${param} is not valid`
    : undefined