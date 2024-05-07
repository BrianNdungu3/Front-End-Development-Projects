function submitForm(event) {
    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "process-form.php", true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById("successMessage").classList.remove("hidden");
            form.reset();
            setTimeout(function() {
                document.getElementById("successMessage").classList.add("hidden");
            }, 3000);
        }
    };
    xhr.send(formData);
}
