let list=[];

while(true){
    let action=prompt("Welcome! Enter action to be performed. Add/Delete/Show/Quit");
    if(action=="Quit"){
        console.log("Thank you for visiting.");
        break;
    }else{
        if(action=="Add"){
            let task=prompt("Please enter the task: ");
            list.push(task);
            console.log("==========================")
            console.log("To Do List:")
            for(let i=0; i<list.length; i++){
                console.log(i+"  "+list[i]);
            }
            console.log("==========================")

        }else if(action=="Delete"){
            let i=prompt("Please enter Index of task to be deleted: ");
            list.splice(i,parseInt(1));
            console.log("==========================")
            console.log("To Do List:")
            for(let i=0; i<list.length; i++){
                console.log(i+"  "+list[i]);
            }
            console.log("==========================")
        }else if(action=="Show"){
            console.log("==========================")
            console.log("To Do List:")
            for(let i=0; i<list.length; i++){
                console.log(i+"  "+list[i]);
            }
            console.log("==========================")
        }else{
            console.log("Wrong request.");
        }
    }
}

