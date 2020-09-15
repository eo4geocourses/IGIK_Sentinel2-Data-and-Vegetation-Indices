var num = 1;
var syllabus = document.getElementById("syllabus")
var btn = document.getElementById("btn")

btn.addEventListener("click", function() {

    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://slangit20.github.io/CourSL/syl_655352.json')
    ourRequest.onload = function() {
        
        console.log(ourRequest.responseText)
        var ourData = JSON.parse(ourRequest.responseText);
        
        console.log(ourData[0]);
        renderHTML(ourData);
    };

    ourRequest.onerror = function () {
        console.log("Connection error");
    }

    ourRequest.send();
      
});

function renderHTML (data) {
    var htmlString ="<small>";

    for (i = 0; i < data.length; i++) {
        htmlString += "<p><b>U-" + data[i].uID + ": " + data[i].unit + "</b><br><i>Lessons</i>: ";
        
        for (j = 0; j < data[i].unitElem.lesson.length; j++ ) {
            if (j == 0) {
                htmlString += data[i].unitElem.lesson[j];
            }   else    {
                htmlString += " | " + data[i].unitElem.lesson[j];
            }
        }

        htmlString += "<br><i>Dates</i>: ";

        for (j = 0; j < data[i].unitElem.date.length; j++ ) {
            if (j == 0) {
                htmlString += data[i].unitElem.date[j];
            }   else    {
                htmlString += " | " + data[i].unitElem.date[j]; 
            }
        }


    }

    syllabus.insertAdjacentHTML('beforeend', htmlString)

}