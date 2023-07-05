



    let marks = [52,48,68,79,89]

    function find_highest_marks(marks){
    
        let max = -Infinity
        for(let i=0;i<marks.length;i++){
            if(marks[i] > max){
                max = marks[i]
            }
        }
        return `Highest Marks scored ${max}`
    }


    console.log(find_highest_marks(marks))





    