var num = 0; // global variable

function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}

function toggleStyleSheet(){
    // Task 1
    // Steps
    // 1 (a) Get style element by ID (hint: getElementById)
    var styleElement = document.getElementById("mainStyleSheet");

    // 1 (b) Check the current stylesheet file name. (hint: element.getAttribute)
    var cur_style_sheet = styleElement.getAttribute("href");
    // 1 (c) Determine new stylesheet file name
    var new_style_sheet;
    if (cur_style_sheet == "css_files/style.css"){
        new_style_sheet = "css_files/dark.css";
    }
    else {
        new_style_sheet = "css_files/style.css"

    }
    // 1 (d) replace stylesheet with new stylesheet (hint: element.setAttribute)
    styleElement.setAttribute("href",new_style_sheet);

    // TASK 2
    // 2 (d) For persistence when page is refreshed. save new stylesheet name to localStorage
    // hint: localStorage.setItem(name, value)
    localStorage.setItem("cur_style_sheet", new_style_sheet);
}


window.onload = function(){
    // TASK 2
    // TODO: Make the last div color persist even when someone refreshes the page.

    // Steps
    // 2 (a) get stylesheet name from local storage hint: localStorage.getItem(name)
    var  stored_style = localStorage.getItem("cur_style_sheet");

    // 2 (b) get html style element by ID
    var styleElement = document.getElementById("mainStyleSheet");

    // 2 (c) replace href attribute of html element.
    styleElement.setAttribute("href", stored_style)   
}



