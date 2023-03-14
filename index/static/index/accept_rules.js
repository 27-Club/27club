const accept_btn = document.getElementById('submitControl');
const accept_checkbox = document.getElementById('accept_rules');

accept_checkbox.onchange = function() {
    accept_btn.disabled = !this.checked;
  };