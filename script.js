const inputFile = document.getElementById("input-file");
const conversiontoMB = 1024 * 1024;

function checkFileExtension(fileInput) {
    const allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if (!allowedExtensions.exec(fileInput.name)) {
        alert('Error: Please upload an image file (jpg, jpeg, png, gif)');
        return false;
    }
    return true;
}

inputFile.addEventListener('change', function() {
    if (!checkFileExtension(this.files[0])) {
        return;
    }
    const fileSizeInMB = this.files[0].size / conversiontoMB;
    const fileSizeSpan = document.getElementById("file-size");

    if (fileSizeInMB > 100 || !this.files[0]) {
        alert("You've passed the limit. Image size up to 100MB");
        this.value = '';
        fileSizeSpan.innerHTML = "0MB";
        return;
    }

    document.getElementById("uploadedPic").src = URL.createObjectURL(this.files[0]);
    fileSizeSpan.innerHTML = fileSizeInMB.toFixed(2) + "MB";
    const left = 100 - fileSizeInMB;
    document.getElementById("gb-left").innerHTML = left.toFixed(2);

    const usagePercentage = fileSizeInMB;
    const progressBar = document.querySelector('.gradient-bar');
    progressBar.style.width = `${usagePercentage}%`;
});
