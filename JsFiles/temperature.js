document.addEventListener('DOMContentLoaded', () => {
    const tempValue = document.getElementById('temp-value');
    const tempSlider = document.getElementById('temp-slider');
    const getTemperatureButton = document.getElementById('get-temperature');
  
    // Simulating getting a temperature reading (can be replaced by real API call)
    getTemperatureButton.addEventListener('click', () => {
      const randomTemp = Math.floor(Math.random() * 60) - 10; // Simulate temperature between -10 to 50 degrees
      tempValue.textContent = randomTemp;
      tempSlider.value = randomTemp;
    });
  });
  