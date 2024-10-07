document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search");
    const commands = document.querySelectorAll(".command");
    
    searchInput.addEventListener("input", () => {
        const filter = searchInput.value.toLowerCase();
        commands.forEach(command => {
            const commandText = command.querySelector("h2").textContent.toLowerCase();
            command.style.display = commandText.includes(filter) ? "" : "none";
        });
    });
});