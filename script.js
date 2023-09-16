// Expand buttons
const expandCv = document.getElementById("expandcv");
const expandProjects = document.getElementById('expandprojects');
const expandWriting = document.getElementById('expandwriting');

// Collapse all button
const cross = document.getElementById('closecontent');

// Frame & 3 content sections
const contentFrame = document.getElementById('contentframe');
const cvContent = document.getElementById('cvcontent');
const projectsContent = document.getElementById('projectscontent');
const writingContent = document.getElementById('writingcontent');

// Show & Hide Element Functions
const hideElement = (elementVar) => {
    elementVar.style.display = "none";
}
const showElement = (elementVar) => {
    elementVar.style.display = "block";
}

expandCv.addEventListener("click", function() {
    showElement(contentFrame);
    showElement(cvContent);
    hideElement(projectsContent);
    hideElement(writingContent);
})

expandProjects.addEventListener("click", function() {
    showElement(contentFrame);
    showElement(projectsContent);
    hideElement(cvContent);
    hideElement(writingContent);
})

expandWriting.addEventListener("click", function() {
    showElement(contentFrame);
    showElement(writingContent);
    hideElement(cvContent);
    hideElement(projectsContent);
})

cross.addEventListener("click", function() {
    hideElement(contentFrame);
    hideElement(cvContent);
    hideElement(projectsContent);
    hideElement(writingContent);
});