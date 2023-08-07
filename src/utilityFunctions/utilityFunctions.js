export const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailRegex.test(email);
};

export const isLongEnoughString = (passedString, minLength) => {
  return passedString.length >= minLength;
};

export const includesSpecialCharacters = (string) => {
  const allowedCharacters = /^[a-zA-Z0-9_]+$/;

  if (!allowedCharacters.test(string)) {
    return true;
  }

  return false;
};
