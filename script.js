// Open a modal by ID
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'flex'; // Display the modal
    }
  }
  
  // Close a modal by ID
  function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
      modal.style.display = 'none'; // Hide the modal
    }
  }
  
  // Confirm form submission
  function confirmSubmission() {
    alert("Your form has been submitted successfully!");
    closeModal('confirmModal'); // Close the confirmation modal
  }
  
  // Close modal when clicking outside of it
  window.addEventListener('click', (event) => {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  