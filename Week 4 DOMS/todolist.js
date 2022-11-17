/*Create function for the submit button
The text from the input box is used to add a list item to the bottom of the list 
The text from the input box is cleared out.
When the user clicks on a list item, it is removed

Extra Credit: - When a list item is clicked, cross it out, then remove it after 1 second*/

function onClick() {
    var ul= document.getElementById("myUL");
    var li= document.createElement("li");
    var myInput= document.getElementById("myInput");
    li.appendChild(document.createTextNode(myInput.value));
    //create delete button on ul li
    const btn = document.createElement("button");
    btn.innerHTML = "Delete";
    btn.onClick=function() {
        console.log("text");
    }
    li.appendChild(btn);
    ul.appendChild(li);

    // change place holder text back to an empty string of "submit your text here..."
    document.getElementById("myInput").value="";

    

}
//Add js to click list item and have it be deleted

