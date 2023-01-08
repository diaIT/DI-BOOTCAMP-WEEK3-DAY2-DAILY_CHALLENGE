/*Get the value of each of the inputs in the HTML file when the form is submitted.
Remember the event.preventDefault()*/

document.getElementById("lib-button").addEventListener("click", function(event){
    event.preventDefault() //Make sure the values are not empty

    const noun = document.getElementById("noun").value
    const adjective = document.getElementById("adjective").value
    const person = document.getElementById("person").value
    const verb = document.getElementById("verb").value
    const place = document.getElementById("place").value
     
    if(noun =="" || adjective =="" || person =="" || verb == "" || place==""){
        return
    }else
        
    console.log("this is the form content:", noun,adjective,person,verb,place)

    //Write a story that uses each of the values.
    document.getElementById("story").innerHTML= noun +" " + adjective + " " +person +" " + verb+ " " + place

})

