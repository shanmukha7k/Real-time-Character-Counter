const textareaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

textareaEl.addEventListener("keyup", () => {
    updateCounter();
});

updateCounter()

function updateCounter() {
    totalCounterEl.innerText = textareaEl.value.length;
    remainingCounterEl.innerText =
        textareaEl.getAttribute("maxLength") - textareaEl.value.length;

}
var maxLength = 50; // Define the maximum length here

function checkLength() {
    var message = document.getElementById("total-counter").value;

    if (message.length > maxLength) {
        alert("Maximum length exceeded!");
    }
}