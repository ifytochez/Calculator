let Output = document.getElementById("Output");
function Display(num) {
    Output.value += num;
}

function Calculate(){
    try{
        Output.value = eval(Output.value);
    } catch(error){
        alert("Invalid");
    }
}
function Clear(){
    Output.value = "";
}
function Delete() {
    Output.value = Output.value.slice(0, -1);
}