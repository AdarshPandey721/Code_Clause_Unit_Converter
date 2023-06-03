function convertLength() {
    var value = parseFloat(document.getElementById("lengthInput").value);
    var fromUnit = document.getElementById("fromLengthUnit").value;
    var toUnit = document.getElementById("toLengthUnit").value;
    var result;
  
    if (fromUnit === toUnit) {
      result = value;
    } else if (fromUnit === "inch" && toUnit === "centimeter") {
      result = value * 2.54;
    } else if (fromUnit === "centimeter" && toUnit === "inch") {
      result = value / 2.54;
    } else if (fromUnit === "foot" && toUnit === "meter") {
      result = value * 0.3048;
    } else if (fromUnit === "meter" && toUnit === "foot") {
      result = value / 0.3048;
    } else if (fromUnit === "inch" && toUnit === "foot") {
      result = value / 12;
    } else if (fromUnit === "foot" && toUnit === "inch") {
      result = value * 12;
    } else if (fromUnit === "inch" && toUnit === "meter") {
      result = value * 0.0254;
    } else if (fromUnit === "meter" && toUnit === "inch") {
      result = value / 0.0254;
    } else if (fromUnit === "centimeter" && toUnit === "meter") {
      result = value / 100;
    } else if (fromUnit === "meter" && toUnit === "centimeter") {
      result = value * 100;
    }
  
    document.getElementById("lengthOutput").value = result.toFixed(2);
  }
  
  function convertTemperature() {
    var value = parseFloat(document.getElementById("tempInput").value);
    var fromUnit = document.getElementById("fromTempUnit").value;
    var toUnit = document.getElementById("toTempUnit").value;
    var result;
  
    if (fromUnit === toUnit) {
      result = value;
    } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
      result = (value * 9/5) + 32;
    } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
      result = (value - 32) * 5/9;
    }
  
    document.getElementById("tempOutput").value = result.toFixed(2);
  }
  