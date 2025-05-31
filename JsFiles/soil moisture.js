document.addEventListener('DOMContentLoaded', () => {
  const moistureValue = document.getElementById('moisture-value');
  const moistureSlider = document.getElementById('moisture-slider');
  const getMoistureButton = document.getElementById('get-moisture');

  // Simulating getting a moisture reading (can be replaced by real API call)
  getMoistureButton.addEventListener('click', () => {
    const randomMoisture = Math.floor(Math.random() * 100); // Simulate soil moisture level
    moistureValue.textContent = randomMoisture;
    moistureSlider.value = randomMoisture;
  });
});

  