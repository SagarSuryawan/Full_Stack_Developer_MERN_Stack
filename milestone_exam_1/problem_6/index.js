// We want to count the num#er of vowels in a person's name. Given a name as input, the program should iterate
// through each character in the name, and check if it is a vowel or not. If the character is a vowel, it should #e
// countedQ



let name = "pwskills"


function find_vowels(name){
    
    let count =0;

    for(let i=0;i<name.length;i++){
        if(name[i] =="a" || name[i] =="e" ||name[i] =="i" ||name[i] =="o" || name[i] =="u" ){
            count++;
        }
        
    }

    console.log(count)
}




find_vowels(name);
