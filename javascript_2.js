const passwordLengthRange = document.getElementById ("passwordLengthRange")
const passwordLengthNumber = document.getElementById ("passwordLengthNumber")
const upperCaseLettersElement = document.getElementById ("upperCaseLetters")
const lowerCaseLettersElement = document.getElementById ("lowerCaseLetters")
const numbersElement = document.getElementById ("numbers")
const specialCharactersElement = document.getElementById ("specialCharacters")
const generateBtn = document.getElementById ("generate")
const form = document.getElementById("form")
const passwordValue = document.getElementById("passwordValue")

const uppercaseCharCodes = arrayFromLowtoHigh(65,90)
const lowercaseCharCodes = arrayFromLowtoHigh(97,122)
const numbersCharCodes = arrayFromLowtoHigh(48,57)
const specialCharacterCharCodes = arrayFromLowtoHigh(33, 47).concat(arrayFromLowtoHigh(58, 64)).concat(arrayFromLowtoHigh(91, 96)).concat(arrayFromLowtoHigh(123, 126))

passwordLengthNumber.addEventListener("input", syncCharacterAmount)
passwordLengthRange.addEventListener("input", syncCharacterAmount)

generateBtn.addEventListener("click", e => {
    e.preventDefault()
    console.log(passwordLengthNumber)
    const characterAmount = passwordLengthNumber.value
    const upperCaseLetters = upperCaseLettersElement.checked
    const lowerCaseLetters = lowerCaseLettersElement.checked
    const numbers = numbersElement.checked
    const specialCharacters = specialCharactersElement.checked
    const password = generatePassword(characterAmount, upperCaseLetters, lowerCaseLetters, numbers, specialCharacters)
    passwordValue.innerText = password === true? "Your Secure Password": password
})

function generatePassword(characterAmount, upperCaseLetters, lowerCaseLetters, numbers, specialCharacters) {
    let charCodes = []
    if (!upperCaseLetters && !lowerCaseLetters && !numbers && !specialCharacters){ 
        window.alert('Please select at least one character option.') 
        return true
    }
    if (upperCaseLetters) charCodes = [...charCodes, ...uppercaseCharCodes]
    if (lowerCaseLetters) charCodes = [...charCodes, ...lowercaseCharCodes]
    if (numbers) charCodes = [...charCodes, ...numbersCharCodes]
    if (specialCharacters) charCodes = [...charCodes, ...specialCharacterCharCodes]
    const passwordCharacters = []
    for (let i = 0; i <= parseInt(characterAmount) -1; i++) {
        let temp = Math.floor(Math.random(0) * charCodes.length)
        passwordCharacters.push(String.fromCharCode(charCodes[temp]))
    }
    return passwordCharacters.join('')
}

function arrayFromLowtoHigh(low,high) {
    const array = []
    for (let i = low; i <= high; i++){
    array.push(i)
    }
    return array
}

function syncCharacterAmount(e) {
    const value = e.target.value
    passwordLengthRange.value = value
    passwordLengthNumber.value = value
}

