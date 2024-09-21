// function generateResume(): void {
//   const name = (document.getElementById("namefield") as HTMLInputElement).value;
//   const lastname = (
//     document.getElementById("lastnamefield") as HTMLInputElement
//   ).value;
//   const email = (document.getElementById("Emailfield") as HTMLInputElement)
//     .value;
//   const phone = (document.getElementById("contactfield") as HTMLInputElement)
//     .value;
//   const address = (
//     document.getElementById("Addressfield") as HTMLTextAreaElement
//   ).value;
//   const facebook = (document.getElementById("fbfield") as HTMLInputElement)
//     .value;
//   const instagram = (document.getElementById("instafield") as HTMLInputElement)
//     .value;
//   const linkedin = (document.getElementById("linkdinfeild") as HTMLInputElement)
//     .value;
//   const github = (document.getElementById("githubfield") as HTMLInputElement)
//     .value;
//   const education = (document.getElementById("edufield") as HTMLTextAreaElement)
//     .value;
//   const experience = (
//     document.getElementById("expfield") as HTMLTextAreaElement
//   ).value;
//   const skills = (document.getElementById("skillfield") as HTMLTextAreaElement)
//     .value;
//   //resume template
//   (document.getElementById("firstnametemp") as HTMLElement).innerText = name;
//   (document.getElementById("lastnametemp") as HTMLElement).innerText = name;
//   (document.getElementById("emailtemp") as HTMLElement).innerText = email;
//   (document.getElementById("phonetemp") as HTMLElement).innerText = phone;
//   (document.getElementById("Addresstemp") as HTMLElement).innerText = address;
//   (document.getElementById("fbtemp") as HTMLAnchorElement).href = facebook;
//   (document.getElementById("instatemp") as HTMLAnchorElement).href = instagram;
//   (document.getElementById("linkdintemp") as HTMLAnchorElement).href = linkedin;
//   (document.getElementById("githubtemp") as HTMLAnchorElement).href = github;
//   (
//     document.getElementById("edutemp") as HTMLElement
//   ).innerHTML = `<li>${education}</li>`;
//   (document.getElementById("exptemp") as HTMLElement).innerText = experience;
//   (
//     document.getElementById("skiltemp") as HTMLElement
//   ).innerHTML = `<li>${skills}</li>`;
//   // Show resume templete
//   (document.getElementById("Templet-generate") as HTMLElement).style.display =
//     "block";
//   //hide form nd button
//   (document.getElementById("RESUME-GENERATE") as HTMLElement).style.display =
//     "none";
// }
// Function to add new Education field
function addNewEduField() {
    var eduFields = document.getElementById('edu-fields');
    var newField = document.createElement('textarea');
    newField.placeholder = "Type here";
    newField.className = "form-control";
    newField.rows = 3;
    eduFields.appendChild(newField);
}
// // Function to add new Experience field
function addNewExpField() {
    var expFields = document.getElementById('exp-fields');
    var newField = document.createElement('textarea');
    newField.placeholder = "Type here";
    newField.className = "form-control";
    newField.rows = 3;
    expFields.appendChild(newField);
}
// // Function to add new Skill field
function addNewSkillField() {
    var skilsFields = document.getElementById('skils-fields');
    var newField = document.createElement('textarea');
    newField.placeholder = "Type here";
    newField.className = "form-control";
    newField.rows = 3;
    skilsFields.appendChild(newField);
}
// // Function to generate Resume
// function generateResume(): void {
//   const name = (document.getElementById("namefield") as HTMLInputElement).value;
//   const lastname = (
//     document.getElementById("lastnamefield") as HTMLInputElement
//   ).value;
//   const email = (document.getElementById("Emailfield") as HTMLInputElement)
//     .value;
//   const phone = (document.getElementById("contactfield") as HTMLInputElement)
//     .value;
//   const address = (
//     document.getElementById("Addressfield") as HTMLTextAreaElement
//   ).value;
//   const facebook = (document.getElementById("fbfield") as HTMLInputElement)
//     .value;
//   const instagram = (document.getElementById("instafield") as HTMLInputElement)
//     .value;
//   const linkedin = (document.getElementById("linkdinfeild") as HTMLInputElement)
//     .value;
//   const github = (document.getElementById("githubfield") as HTMLInputElement)
//     .value;
//   const education = (document.getElementById("edufield") as HTMLTextAreaElement)
//     .value;
//   const experience = (
//     document.getElementById("expfield") as HTMLTextAreaElement
//   ).value;
//   const skills = (document.getElementById("skillfield") as HTMLTextAreaElement)
//     .value;
//   //resume template
//   (document.getElementById("firstnametemp") as HTMLElement).innerText = name;
//   (document.getElementById("lastnametemp") as HTMLElement).innerText = name;
//   (document.getElementById("emailtemp") as HTMLElement).innerText = email;
//   (document.getElementById("phonetemp") as HTMLElement).innerText = phone;
//   (document.getElementById("Addresstemp") as HTMLElement).innerText = address;
//   (document.getElementById("fbtemp") as HTMLAnchorElement).href = facebook;
//   (document.getElementById("instatemp") as HTMLAnchorElement).href = instagram;
//   (document.getElementById("linkdintemp") as HTMLAnchorElement).href = linkedin;
//   (document.getElementById("githubtemp") as HTMLAnchorElement).href = github;
//   (
//     document.getElementById("edutemp") as HTMLElement
//   ).innerHTML = `<li>${education}</li>`;
//   (document.getElementById("exptemp") as HTMLElement).innerText = experience;
//   (
//     document.getElementById("skiltemp") as HTMLElement
//   ).innerHTML = `<li>${skills}</li>`;
//   // Show resume templete
//   (document.getElementById("Templet-generate") as HTMLElement).style.display =
//     "block";
//   //hide form nd button
//   (document.getElementById("RESUME-GENERATE") as HTMLElement).style.display =
//     "none";
// }
function generateResume() {
    var name = document.getElementById("namefield").value;
    var lastname = document.getElementById("lastnamefield").value;
    var email = document.getElementById("Emailfield")
        .value;
    var phone = document.getElementById("contactfield")
        .value;
    var address = document.getElementById("Addressfield").value;
    var facebook = document.getElementById("fbfield")
        .value;
    var instagram = document.getElementById("instafield")
        .value;
    var linkedin = document.getElementById("linkdinfeild")
        .value;
    var github = document.getElementById("githubfield")
        .value;
    // Collect all dynamically added education fields
    var eduFields = document.querySelectorAll("#edu-fields textarea");
    var educationList = "";
    eduFields.forEach(function (field) {
        educationList += "<li>".concat(field.value, "</li>");
    });
    // Collect all dynamically added experience fields
    var expFields = document.querySelectorAll("#exp-fields textarea");
    var experienceList = "";
    expFields.forEach(function (field) {
        experienceList += "<p>".concat(field.value, "</p>");
    });
    // Collect all dynamically added skills fields
    var skillFields = document.querySelectorAll("#skils-fields textarea");
    var skillsList = "";
    skillFields.forEach(function (field) {
        skillsList += "<li>".concat(field.value, "</li>");
    });
    // Update the resume template with collected data
    document.getElementById("firstnametemp").innerText = name;
    document.getElementById("lastnametemp").innerText = lastname;
    document.getElementById("emailtemp").innerText = email;
    document.getElementById("phonetemp").innerText = phone;
    document.getElementById("Addresstemp").innerText = address;
    document.getElementById("fbtemp").href = facebook;
    document.getElementById("instatemp").href = instagram;
    document.getElementById("linkdintemp").href = linkedin;
    document.getElementById("githubtemp").href = github;
    // Update education, experience, and skills in the template
    document.getElementById("edutemp").innerHTML = educationList;
    document.getElementById("exptemp").innerHTML =
        experienceList;
    document.getElementById("skiltemp").innerHTML = skillsList;
    // Show resume template and hide the form
    document.getElementById("Templet-generate").style.display =
        "block";
    document.getElementById("RESUME-GENERATE").style.display =
        "none";
}
