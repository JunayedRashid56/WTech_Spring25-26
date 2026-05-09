console.log("Connected");

function collect_data() {
    let isNameValid = collect_name();
    let isAgeValid =collect_age();

    return false;
}

function collect_name(){
    let name = document.getElementById("patientName").value;
    if(name==""){
        document.getElementById("NameError").innerHTML="Name can't be Empty";
        return false;
    }
    else if(name.length < 5){
        document.getElementById("NameError").innerHTML="Name must consist atleast 5 characters";
        return false;
    }
    else{
        console.log(name);
    }
    return false;
}

function collect_age()
{
    let age = document.getElementById("patientAge").value;
    if(age == "")
    {
        document.getElementById("AgeError").innerHTML="Age Can not be Empty";
        return false;
    }
    else{
        console.log(age);
    }
    return false;
}