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
