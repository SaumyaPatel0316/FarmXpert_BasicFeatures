document.addEventListener('DOMContentLoaded', () => {
    const manualRadio = document.getElementById('manual');
    const autoRadio = document.getElementById('auto');
    const currentMode = document.getElementById('current-mode');
  
    // Function to update the current mode display
    function updateMode() {
      if (manualRadio.checked) {
        currentMode.textContent = 'Manual';
        currentMode.style.color = '#4CAF50';  // Green color for manual
      } else if (autoRadio.checked) {
        currentMode.textContent = 'Auto';
        currentMode.style.color = '#FF5722';  // Orange color for auto
      }
    }
  
    // Add event listeners to the radio buttons
    manualRadio.addEventListener('change', updateMode);
    autoRadio.addEventListener('change', updateMode);
  
    // Initialize the display with the default selected mode
    updateMode();
  });
  
  