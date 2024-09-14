
function generateResume(event: Event): void {
    event.preventDefault();  

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email address') as HTMLInputElement).value;
    const phone = (document.getElementById('phone number') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('expertness') as HTMLTextAreaElement).value;

    
    (document.getElementById('previewName') as HTMLSpanElement).innerText = name;
    (document.getElementById('previewEmail address') as HTMLSpanElement).innerText = email;
    (document.getElementById('previewPhone Number') as HTMLSpanElement).innerText = phone;
    (document.getElementById('previewEducation') as HTMLParagraphElement).innerText = education;
    (document.getElementById('previewExperience') as HTMLParagraphElement).innerText = experience;
    (document.getElementById('previewExpertness') as HTMLParagraphElement).innerText = skills;

    
    const resumePreview = document.getElementById('resumePreview');
    if (resumePreview) {
        resumePreview.style.display = 'block';
    }
}


document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resumeForm');
    if (form) {
        form.addEventListener('submit', generateResume);
    }
});


