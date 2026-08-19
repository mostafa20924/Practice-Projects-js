 function checkPalindrome() {
    const input = document.getElementById("inputString").value;
    const cleanedInput = input.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
    const reversedInput = cleanedInput.split("").reverse().join("");
    
    if (cleanedInput === reversedInput) {
        alert(`"${input}" is a palindrome.`);
    } else {
        alert(`"${input}" is not a palindrome.`);
    }
}

function clearInput() {
    document.getElementById("inputString").value = "";
}