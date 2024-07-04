const isPasswordValid = (password: string): boolean => {
    return password.length < 8;
};

export default isPasswordValid;