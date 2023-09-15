var openPopupButton = document.getElementById("openPopup");

openPopupButton.addEventListener("click", function () {
    var overlay = document.createElement("div");
    overlay.className = "overlay";

    var popup = document.createElement("div");
    popup.className = "popup";

    var closePopupButton = document.createElement("button");
    closePopupButton.className = "close-popup";
    closePopupButton.textContent = "Close";
    closePopupButton.addEventListener("click", function () {
        document.body.removeChild(overlay);
        document.body.removeChild(popup);
    });

    var popupContent = `
        <h2>Send a Letter to Messi</h2>
        <form id="letterForm">
            <label for="senderName">Your Name:</label>
            <input type="text" id="senderName" required><br><br>

            <label for="gender">Gender:</label>
            <select id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br><br>

            <label for="dob">Date of Birth:</label>
            <input type="date" id="dob" required><br><br>

            <label for="letterContent">Letter Content:</label><br>
            <textarea id="letterContent" rows="4" cols="50" required></textarea><br><br>

            <input type="submit" value="Send Letter">
        </form>
    `;

    popup.innerHTML = popupContent;
    popup.appendChild(closePopupButton);

    document.body.appendChild(overlay);
    document.body.appendChild(popup);

    overlay.addEventListener("click", function (e) {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
            document.body.removeChild(popup);
        }
    });

    var letterForm = document.getElementById("letterForm");
    letterForm.addEventListener("submit", function (e) {
        e.preventDefault();

        var senderName = document.getElementById("senderName").value;
        var gender = document.getElementById("gender").value;
        var dob = document.getElementById("dob").value;
        var letterContent = document.getElementById("letterContent").value;

        document.body.removeChild(overlay);
        document.body.removeChild(popup);

        console.log("Sender Name: " + senderName);
        console.log("Gender: " + gender);
        console.log("Date of Birth: " + dob);
        console.log("Letter Content: " + letterContent);
    });
});
