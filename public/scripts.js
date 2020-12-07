var projectsArrow = document.querySelectorAll(".arrow-left");
var chevron = document.querySelectorAll(".fa-chevron-right");

var projectInfo = document.querySelectorAll(".project-info");
var projectTab = document.querySelectorAll(".projects-list > li");

projectTab.forEach(function(elem) {
    elem.addEventListener("click", function() {
        var index = getIndex(elem);

        for(var i = 0; i < projectsArrow.length; i++){
            projectsArrow[i].classList.add("hide");
            projectInfo[i].classList.add("hide");

            chevron[i].setAttribute("style", "display:none;");
        }

        projectsArrow[index].classList.remove("hide");
        projectInfo[index].classList.remove("hide");
        chevron[index].setAttribute("style", "display:inline;");
    });
    
})

function getIndex(elem){
    for (var i = 0; i < projectTab.length; i++){
        if(projectTab[i].innerText == elem.innerText){
            return i;
        }
    }
}


function start(){
    var index = 0;

    for(var i = 1; i < projectsArrow.length; i++){
        projectsArrow[i].classList.add("hide");
        projectInfo[i].classList.add("hide");
        chevron[i].setAttribute("style", "display:none;");
    }

    projectsArrow[0].classList.remove("hide");
    projectInfo[0].classList.remove("hide");
}
