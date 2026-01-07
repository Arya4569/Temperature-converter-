function convertTemp() {
    let value = document.getElementById("tempValue").value;
    let unit = document.getElementById("unit").value;
    let result = document.getElementById("result");

    if (value === "" || isNaN(value)) {
        result.innerHTML = "❌ Please enter a valid number";
        result.style.color = "red";
        return;
    }

    value = parseFloat(value);
    let output, emoji;

    if (unit === "C") {
        output = (value * 9/5) + 32;
        emoji = "🔥";
        result.innerHTML = `${emoji} ${output.toFixed(2)} °F`;
    } 
    else if (unit === "F") {
        output = (value - 32) * 5/9;
        emoji = "❄️";
        result.innerHTML = `${emoji} ${output.toFixed(2)} °C`;
    } 
    else {
        output = value - 273.15;
        emoji = "🌡️";
        result.innerHTML = `${emoji} ${output.toFixed(2)} °C`;
    }

    result.style.color = "#6a11cb";
}
