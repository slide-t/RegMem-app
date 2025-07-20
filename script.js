<script>
  function togglePartyFields() {
    const partySelect = document.getElementById("partyMember");
    const partyFields = document.getElementById("partyFields");
    const partyIdInput = document.getElementById("partyId");

    if (partySelect.value === "yes") {
      partyFields.style.display = "block";
      partyIdInput.setAttribute("required", "required");
    } else {
      partyFields.style.display = "none";
      partyIdInput.removeAttribute("required");
      partyIdInput.value = "";
      document.getElementById("positionHeld").value = "";
    }
  }
</script>
<script>
  document.getElementById("photoUpload").addEventListener("change", function(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("previewImage");
    if (file) {
      preview.src = URL.createObjectURL(file);
      preview.style.display = "block";
    } else {
      preview.src = "";
      preview.style.display = "none";
    }
  });
</script>
  
