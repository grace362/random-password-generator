const passwordBox = document.getElementById("password");
        const lenght = 11;

        const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const lowercase = "abcdefghijklmnopqrstuvwxyz";
        const number = "0123456789";
        const symbol = "@#$%&*()_+{[]}<>/=";

        const allChars = upperCase + lowerCase + number + symbol;


function createPassword(){
            let password = "";
password += uppercase[math.floor(math.random() * upperCase.length)];
password += lowerCase[math.floor(math.random() * lowerCase.length)];
password += number[math.floor(math.random() * number.length)];
password += symbol[math.floor(math.random() * symbol.length)]; 

 while(length > password.length){
password += allChars[math.floor(math.random() * allChars.length)]; 

 }
  passwordBox.value = password;
}
function copyPassword(){
    passwordBox.select();
    document.execCommand("copy");
}