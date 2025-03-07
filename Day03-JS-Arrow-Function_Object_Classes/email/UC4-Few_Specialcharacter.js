function validateEmail(email) {
  const emailPattern = /^abc([_+-.]xyz)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
  return emailPattern.test(email);
}

// Test cases
console.log(validateEmail("abc@bridgelabz.co"));
console.log(validateEmail("abc@bridgelabz.co.in"));
console.log(validateEmail("abc.xyz@bridgelabz.co.in"));
console.log(validateEmail("abc@xyz.co.in"));
console.log(validateEmail("abc@bridgelabzcom"));
console.log(validateEmail("abc$xyz@bridgelabz.co"));
