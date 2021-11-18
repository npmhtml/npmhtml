function amTheAuthor(helloAuthor){
    var authorTarget = document.getElementById("theTargetAuthor");
    authorTarget.innerHTML = helloAuthor;
    return "I am "+helloAuthor;
}

module.exports = amTheAuthor;
