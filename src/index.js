function validateCreditCard(number) {
    // Remove all non-digit characters
    const sanitized = number.replace(/[^0-9]/g, '');

    // Check if the number has 16 digits
    if (sanitized.length !== 16) {
        return {
            isValid: false,
            bandeira: 'Unknown',
            message: 'Credit card number must be 16 digits long'
        };
    }

    // Luhn Algorithm for validation
    let sum = 0;
    let shouldDouble = false;
    for (let i = sanitized.length - 1; i >= 0; i--) {
        let digit = parseInt(sanitized.charAt(i));

        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }

        sum += digit;
        shouldDouble = !shouldDouble;
    }

    const isValid = (sum % 10) === 0;

    // Determine card issuer (bandeira)
    let bandeira = 'Unknown';
    if (/^4[0-9]{12}(?:[0-9]{3})?$/.test(sanitized)) {
        bandeira = 'Visa';
    } else if (/^5[1-5][0-9]{14}$/.test(sanitized)) {
        bandeira = 'MasterCard';
    } else if (/^3[47][0-9]{13}$/.test(sanitized)) {
        bandeira = 'American Express';
    } else if (/^6(?:011|5[0-9]{2})[0-9]{12}$/.test(sanitized)) {
        bandeira = 'Discover';
    }

    return {
        isValid,
        bandeira
    };
}

// Example usage
const cardInfo = validateCreditCard('4111111111111111');
console.log(cardInfo); // { isValid: true, bandeira: 'Visa' }