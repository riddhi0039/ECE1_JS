function calculateResult() {
    let n=document.getElementById("subjects").value;
    let i;
    let total=0;
    for(i=0;i<n;i++){
        let x=prompt("Enter subject no "+(i+1));
        total+=parseInt(x);
    }
        let average=total/n;
        let grade;
        let p;
        if(average>=90){
            grade="A";}
            else if(average>=80){
                grade="B";
            }
            else if(average>=70){
                grade="C";
            }
            else if(average>=60){
                grade="D";
            }
            else if(average>=50){
                grade="E";
            }
            else {
                grade="F";
            }
            if(average>=40){
                p="Passed";
            }
            else {
                p="Failed";
            }
            let r=document.getElementById("result");
            r.innerHTML="total marks: "+total+"<br/>" +"average: "+average+"<br/>"+"your grade is "+grade+"<br/>"+"you are "+p;
}