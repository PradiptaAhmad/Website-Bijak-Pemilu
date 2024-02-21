function toggleDescription(partyName) {
    var description = document.getElementById(partyName + "-description");
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}
