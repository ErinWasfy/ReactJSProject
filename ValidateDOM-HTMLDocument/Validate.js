<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    PERSON: <input type="radio" id="type_person" name="type" value="person" /> <br> 
    COMPANY:<input type="radio" id="type_company" name="type" value="company" checked/> <br> 
    <input type="text" id="first_name" name="first_name" value="John" />
    <input type="text" id="last_name" name="last_name" value="Doe" />
    <input type="text" id="email" name="email" value="john@example.com" />
    <input type="text" id="company_name" name="company_name" value="ACME" />
    <input type="text" id="phone" name="phone" value="12-3" />
    <input type="button" value="Validate" id="validateMe" />

$("#validateMe").on("click", function(){
  if(solution() == true){
    console.log("EVERYTHING OK!");
  } else {
    console.log("Validation FAILED!");
  }
  
});

function solution() {
    
    var person = $("#type_person").is(":checked");
    var company = $("#type_company").is(":checked");
    var fName = $("#first_name").val();
    var lName = $("#last_name").val();
    var email = $("#email").val();
    var companyName = $("#company_name").val();
    var phone = $("#phone").val();
    var result = true;
    
    $("input").removeClass("validateFail");

    if (person) {       
      if (fName.match(/[a-zA-Z ]+/) == null){
        $("#first_name").addClass("validateFail");
        result = false;
      }
      
      if(lName.match(/[a-zA-Z ]+/) == null){
        $("#last_name").addClass("validateFail");
        result = false;
      }
      
      if(email.match(/^[a-zAZ.]{1,64}@[a-zA-Z.]{1,64}$/) == null ){
        $("#email").addClass("validateFail");
          result = false;
      }
          
    } else if (company) {
      if(companyName.match(/(.)+/) == null){
        $("#company_name").addClass("validateFail");
        result = false; 
      }
      
      if(phone.match(/^[\d]{3}-[\d]{3}-[\d]{4}$/) == null){
        $("#phone").addClass("validateFail");
        result = false;
      }
      
    } else {
       return false; // Possible when a DOM Element isn't found
    }

  return result;
}

<style>
input {
  float: left;
}

input[type=text],
input[type=button] {
  clear: left;
}

.validateFail {
  background: red;
  color: white;
}
</style>
