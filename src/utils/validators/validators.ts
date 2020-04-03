export type FieldValidatorType = (value: string ) => string | undefined
type MaxLengthType = (length: number) => FieldValidatorType;

export const requiredField: FieldValidatorType = (value) => (!value ? 'Field is required!' : undefined);

export const maxLengthCreator: MaxLengthType = length => (value => (value && value.length > length ? 'Max field length is 140 symbols' : undefined));

export const emailValidation: FieldValidatorType = value => {
    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const isValid = regExp.test(String(value).toLowerCase());
    return !isValid ? 'Please enter email in format "mail@site.com"' : undefined;
};