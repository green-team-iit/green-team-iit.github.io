let currentPrompt = 0; // Initialize currentPrompt to 0


document.getElementById('prompt0').style.display = 'block';



function nextPrompt() {
    let current = document.getElementById('prompt' + currentPrompt);
    current.style.display = 'none';
    currentPrompt++;
    let next = document.getElementById('prompt' + currentPrompt);
    if (next) {
        next.style.display = 'block';
        updateProfile(); // Call updateProfile to update the profile with the previous prompt's data
        progressUpdate(); // Call progressUpdate after updating the prompt
    } 
}

function prevPrompt() {
    let current = document.getElementById('prompt' + currentPrompt);
    current.style.display = 'none';
    currentPrompt--;
    let previous = document.getElementById('prompt' + currentPrompt);
    if (previous) {
        previous.style.display = 'block';
        updateProfile(); // Call updateProfile to update the profile with the previous prompt's data
        progressUpdate(); // Call progressUpdate after updating the prompt
    }
}

function progressUpdate() {
    let totalPrompts = 17; // Total number of prompts in the form
    let progress = Math.round((currentPrompt / totalPrompts) * 100); // Calculate progress percentage
    document.getElementById('progressText').innerText = `Profile completed: ${progress}%`; // Update progress text
    let progressBar = document.getElementById('progressBar');
    progressBar.style.width = progress + '%';
}

progressUpdate();



function updateProfile() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    
    var rational = document.getElementById("rational").value;
    var task = document.getElementById("task").value;
    var place = document.getElementById("place").value;
    var hours = document.getElementById("hours").value;

    var mainfield = document.getElementById("mainField").value;
    var degree = document.getElementById("degree").value;
    var university = document.getElementById("university").value;
    var completionYear = document.getElementById("completionYear").value;
    var country = document.getElementById("country").value;

    var address = document.getElementById("address").value;
    var tel = document.getElementById("tel").value;
    var email = document.getElementById("email").value;




    document.getElementById("personName").innerText = "Name: " + name;
    document.getElementById("personSurname").innerText = "Surname: " + surname;
    document.getElementById("personUsername").innerText = "Username: " + username;
    document.getElementById("personAge").innerText = "Age: " + age;

    document.getElementById("personRational").innerText = "Rational: " + rational;
    document.getElementById("personTask").innerText = "Task: " + task;
    document.getElementById("personPlace").innerText = "Place: " + place;
    document.getElementById("personHours").innerText = "Min Hours: " + hours;

    document.getElementById("personMainfield").innerText = "Mainfield: " + mainfield;
    document.getElementById("personDegree").innerText = "Degree: " + degree;
    document.getElementById("personUniversity").innerText = "University: " + university;
    document.getElementById("personCompletionYear").innerText = "Completion Year: " + completionYear;
    document.getElementById("personCountry").innerText = "Country: "  + country;
    
    document.getElementById("personAddress").innerText = "Address: " + address;
    document.getElementById("personTel").innerText = "Telephone Number: " + tel;
    document.getElementById("personEmail").innerText = "Email: " + email;
    
    // Show output div
    document.getElementById("profileHeading").style.display = "block";
    document.getElementById("output1").style.display = "block";
    document.getElementById("output2").style.display = "block";
    document.getElementById("output3").style.display = "block";
    document.getElementById("output4").style.display = "block";

}




function submitProfile() {
    // Here you can collect the user input and handle profile submission
    alert("Profile submitted!");
    
}




