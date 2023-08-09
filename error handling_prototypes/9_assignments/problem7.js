// 7. Password Checker.

// Create a class called User with properties username and password. Implement a getter method for password that returns the password with all characters replaced by asterisks. Implement a setter method for password that checks if the new password is at least 8 characters long and contains at least one number and one uppercase letter. If the password is valid, set the new password. If not, log an error message.

// Expected output:
// const user = new User("johndoe", "Password123");
// console.log(user.getPassword()); // ***********

// user.setPassword("myPassword"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.

// user.setPassword("MyPassword"); // Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.

// user.setPassword("Mypassword123");
// console.log(user.getPassword()); // *************




class User{

    constructor(u,p){
        this.username = u,
        this.password = p
    }
    getPassword() {
        return this.password.replace(/./g, "*");
      }
    
      setPassword(newPassword) {
        let containsNumber = false;
        let containsUppercase = false;
        for (let i = 0; i < newPassword.length; i++) {
          const char = newPassword.charAt(i);
          if (!isNaN(char)) {
            containsNumber = true;
          } else if (char === char.toUpperCase()) {
            containsUppercase = true;
          }
        }
        if (newPassword.length >= 8 && containsNumber && containsUppercase) {
          this.password = newPassword;
        } else {
          console.log(
            "Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter."
          );
        }
      }
    
}

const user = new User("johndoe", "ssdgegegegag");
console.log(user.getPassword());