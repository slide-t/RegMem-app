<script>
        "Ibafo": ["Ibafo Hall", "Ibafo Primary"]
      }
    },
    "Odeda": {
      wards: {
        "Odeda": ["Odeda Hall", "Odeda School"],
        "Alabata": ["Alabata Hall", "Alabata School"],
        "Obantoko": ["Obantoko Hall", "Obantoko Primary"],
        "Kila": ["Kila Hall", "Kila School"],
        "Opeji": ["Opeji Hall", "Opeji Primary"]
      }
    },
    "Odogbolu": {
      wards: {
        "Odogbolu": ["Odogbolu Hall", "Odogbolu Primary"],
        "Ijesa Ijebu": ["Ijesa Town Hall", "Ijesa School"],
        "Okun Owa": ["Okun Hall", "Okun School"],
        "Leguru": ["Leguru Hall", "Leguru Primary"],
        "Imagbon": ["Imagbon Hall", "Imagbon School"]
      }
    },
    "Remo North": {
      wards: {
        "Isara": ["Isara Town Hall", "Isara School"],
        "Ilara": ["Ilara Hall", "Ilara School"],
        "Ipara": ["Ipara Central", "Ipara School"],
        "Akaka": ["Akaka Hall", "Akaka School"],
        "Orile-Oko": ["Orile Hall", "Orile School"]
      }
    },
    "Shagamu": {
      wards: {
        "Makun": ["Makun High School", "St. John's Church"],
        "Sabo": ["Sabo Central Mosque", "Sabo Primary School"],
        "Isote": ["Isote Hall", "Isote School"],
        "Igbepa": ["Igbepa Hall", "Igbepa Primary"],
        "Ijoku": ["Ijoku Market", "Ijoku School"]
      }
    },
    "Yewa North": {
      wards: {
        "Ayetoro I": ["Ayetoro Town Hall", "St. Paul’s School"],
        "Ayetoro II": ["Community School", "Anglican Primary School"],
        "Igbogila": ["Igbogila Central", "St. James Primary"],
        "Joga-Orile": ["Joga Community Hall", "Moslem Primary School"],
        "Sawonjo": ["Sawonjo Central", "Christ School"]
      }
    },
    "Yewa South": {
      wards: {
        "Ilaro I": ["Ilaro Town Hall", "Sacred Heart Primary"],
        "Ilaro II": ["St. John's School", "Market Square"],
        "Owode": ["Owode Youth Centre", "Owode Primary School"],
        "Ilobi": ["Ilobi Community School", "C&S Primary"],
        "Erinja": ["Erinja Central", "Community Hall"]
      }
    }
  }
};

const stateSelect = document.getElementById('state');
    const lgaSelect = document.getElementById('lga');
    const wardSelect = document.getElementById('ward');
    const pollingUnitSelect = document.getElementById('pollingUnit');
    const biodataDiv = document.getElementById('biodata');
    const contactMethod = document.getElementById('contactMethod');
    const phoneGroup = document.getElementById('phoneGroup');
    const emailGroup = document.getElementById('emailGroup');

    stateSelect.addEventListener('change', () => {
      const selectedState = stateSelect.value;
      resetSelect(lgaSelect);
      resetSelect(wardSelect);
      resetSelect(pollingUnitSelect);
      biodataDiv.classList.add("hidden");

      if (data[selectedState]) {
        lgaSelect.disabled = false;
        Object.keys(data[selectedState]).forEach(lga => {
          lgaSelect.add(new Option(lga, lga));
        });
      }
    });

    lgaSelect.addEventListener('change', () => {
      const selectedState = stateSelect.value;
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


  </script>

<script>
  function handleSubmit() {
    const phone = document.getElementById("phone");
    const contactMethod = document.getElementById("contact-method");
    const biodataDiv = document.getElementById("biodata");
    const phonePattern = /^\+234[0-9]{10}$/;

    // Validation only if biodata section is visible
    if (!biodataDiv.classList.contains("hidden")) {
      if (
        (contactMethod.value === "whatsapp" || contactMethod.value === "mobile") &&
        !phonePattern.test(phone.value)
      ) {
        alert("Enter a valid Nigerian phone number starting with +234 and 10 digits");
        return false; // Prevent form submission and reload
      }

      alert("Form submitted successfully!");
    }

    return true; // Allow form submission (page will reload)
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

