console.log('This is seperate js file');

//option:2 onclick function
function makered(){
    console.log(document.body.style.backgroundColor='red');
}



//option :3
const  makebluebutton=document.getElementById('make-blue');
        makebluebutton.onclick=makeblue;


        function makeblue(){
            document.body.style.backgroundColor='blue';
        }