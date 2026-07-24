//form 2 code


const form = document.getElementById("registerForm");

form.addEventListener("submit", function (e) {          //submit function to submit the form
    e.preventDefault();     //after submit reload the page

    //Inputs
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("emailId");
    const phoneNo = document.getElementById("phoneNo");
    const dob = document.getElementById("dob");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const terms = document.getElementById("terms");

    const gender = document.querySelector(
        'input[name="gender"]:checked'   //if any radio button select then select them
    );

    //First Name
    if (firstName.value.trim() === ""){
        alert("Please enter First Name");
        firstName.focus();  //cursor automatic come to first name not need to click manually  
        return;
    }

    //last name
    if (lastName.value.trim() === ""){
        alert("Enter your Last Name");
        lastName.focus();
        return;
    }
    //email
    if (email.value.trim() === ""){
        alert("Enter Email");
        email.focus();
        return;
    }
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email.value)){
            alert("enter a valid Email");
            email.focus();
            return;
        }

        //phone
        const phonePattern = /^[6-9]\d{9}$/;

        if(!phonePattern.test(phoneNo.value)){
            alert("enter valid 10 digit phone number");
            phoneNo.focus();
            return;
        }

        //date of birth
        if(dob.value.trim() === ""){
            alert("Enter Date of Birth");
            dob.focus();
            return;
        }
        
        //gender
        if(!gender){
            alert("Select Gender");
            return;
        }

        //password
        if(password.value.length <4){
            alert("Password must be at least 4 character");
            password.focus();
            return;
        }
        //confirm password
        if(password.value !== confirmPassword.value){
            alert("Password not match");
            confirmPassword.focus();
            return;
        }

        //Terms
        if(!terms.checked){
            alert("Accept Terms & Conditions");
            return;
        }
        

    //success
    alert("Registration successfull");
    form.reset();
})