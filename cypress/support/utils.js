//Random string

const randomString = (length) => {
    let result           = '';
    let characters       = 'abcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
};
export const randomRegisterData = () => {
    let firstName = randomString(5);
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
    let lastName = randomString(7);
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);
    const email = `peca86pfc+${randomString(5)}@gmail.com`;

    let newVar = {
        firstName: firstName,
        lastName: lastName,
        email: email,
    }
    return newVar;
    };