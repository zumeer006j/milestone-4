// TypeScript function to handle form submission and display the resume
function generateResume(event) {
    event.preventDefault(); // Prevent form submission and page reload
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Fill the resume preview with form values
    document.getElementById('previewName').innerText = name;
    document.getElementById('previewEmail').innerText = email;
    document.getElementById('previewPhone').innerText = phone;
    document.getElementById('previewEducation').innerText = education;
    document.getElementById('previewExperience').innerText = experience;
    document.getElementById('previewSkills').innerText = skills;
    // Make the resume preview section visible
    var resumePreview = document.getElementById('resumePreview');
    if (resumePreview) {
        resumePreview.style.display = 'block';
    }
}
// Adding an event listener to handle form submission
document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    if (form) {
        form.addEventListener('submit', generateResume);
    }
});
