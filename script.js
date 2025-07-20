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
        const selectedLGA = lgaSelect.value;
      resetSelect(wardSelect);
      resetSelect(pollingUnitSelect);
      biodataDiv.classList.add("hidden");

      if (data[selectedState][selectedLGA]) {
        wardSelect.disabled = false;
        Object.keys(data[selectedState][selectedLGA].wards).forEach(ward => {
          wardSelect.add(new Option(ward, ward));
        });
      }
    });

    wardSelect.addEventListener('change', () => {
      const selectedState = stateSelect.value;
      const selectedLGA = lgaSelect.value;
      const selectedWard = wardSelect.value;
      resetSelect(pollingUnitSelect);
      biodataDiv.classList.add("hidden");

      const pollingUnits = data[selectedState][selectedLGA].wards[selectedWard];
      if (pollingUnits && pollingUnits.length > 0) {
        pollingUnitSelect.disabled = false;
        pollingUnits.forEach(unit => {
          pollingUnitSelect.add(new Option(unit, unit));
        });
      }
    });

    pollingUnitSelect.addEventListener('change', () => {
      if (pollingUnitSelect.value) {
        biodataDiv.classList.remove("hidden");
      } else {
        biodataDiv.classList.add("hidden");
      }
    });

    contactMethod.addEventListener('change', () => {
      const value = contactMethod.value;
      phoneGroup.classList.add("hidden");
      emailGroup.classList.add("hidden");

      if (value === "whatsapp" || value === "mobile") {
        phoneGroup.classList.remove("hidden");
        emailGroup.classList.remove("hidden");
      } else if (value === "email") {
        emailGroup.classList.remove("hidden");
      }
    });

    function resetSelect(select) {
      select.innerHTML = '<option value="">-- Select --</option>';
      select.disabled = true;
    }

    function handleSubmit() {
      const phone = document.getElementById("phone");
      const phonePattern = /^\+234[0-9]{10}$/;

      if (!biodataDiv.classList.contains("hidden")) {
        if ((contactMethod.value === "whatsapp" || contactMethod.value === "mobile") && !phonePattern.test(phone.value)) {
          alert("Enter a valid Nigerian phone number starting with +234 and 10 digits");
          return;
        }
        alert("Form submitted successfully!");
      }
    }
  </script>
<script>
  function calculateAge() {
    const dobInput = document.getElementById('dob');
    const ageInput = document.getElementById('age');
    const dob = new Date(dobInput.value);
    const today = new Date();

    let age = today.getFullYear() - dob.getFullYear();
    const m = today.getMonth() - dob.getMonth();

    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    ageInput.value = age;

    // Alert if underage
    if (age < 18) {
      alert("You must be at least 18 years old to proceed.");
      ageInput.style.border = "2px solid red";
    } else {
      ageInput.style.border = "";
    }
  }

  function handleSubmit() {
    const age = parseInt(document.getElementById('age').value, 10);

    if (isNaN(age) || age < 18) {
      alert("You must be at least 18 years old to submit.");
      return;
    }

    alert("Form submitted successfully!");
    // Add your data handling logic here
  }
</script>
<script>
  function toggleInecFields() {
    const inecSelect = document.getElementById("inec");
    const vinInput = document.getElementById("vin");
    const vinField = document.getElementById("vinField");

    if (inecSelect.value === "yes") {
      vinField.style.display = "block";
      vinInput.required = true;
    } else {
      vinField.style.display = "none";
      vinInput.value = "";
      vinInput.required = false;
    }
  }

  function togglePartyFields() {
    const partySelect = document.getElementById("partyMember");
    const partyIdInput = document.getElementById("partyId");
    const partyFields = document.getElementById("partyFields");

    if (partySelect.value === "yes") {
      partyFields.style.display = "block";
      partyIdInput.required = true;
    } else {
      partyFields.style.display = "none";
      partyIdInput.value = "";
      partyIdInput.required = false;
    }
  }
</script>

