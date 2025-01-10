function reverseString(input: string): string {
  let reversed: string = '';  // Explicitly define the type for reversed
  
  for (let i: number = input.length - 1; i >= 0; i--) {
    reversed += input[i];  // Append the character to the new string
  }
  
  return reversed;  
}

const inputString: string = "Target Sistemas";  // Explicitly define the type for inputString
const reversedString: string = reverseString(inputString);
console.log(reversedString);
