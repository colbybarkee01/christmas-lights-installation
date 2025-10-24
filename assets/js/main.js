// Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// No-backend form helper (temporary)
const form = document.getElementById('quoteForm');
const msg = document.getElementById('formMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(form).entries());

  const sms = `sms:+1406YOURNUMBER?body=${encodeURIComponent(
    `Quote Request — Name: ${data.name}, Phone: ${data.phone}, Address: ${data.address}, Notes: ${data.notes}`
  )}`;

  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    window.location.href = sms;
  } else {
    window.location.href = `mailto:you@example.com?subject=Quote Request&body=${encodeURIComponent(
      `Name: ${data.name}\nPhone: ${data.phone}\nAddress: ${data.address}\nNotes: ${data.notes}`
    )}`;
  }

  msg.textContent = "Thanks! We opened your SMS/email draft. We’ll reply ASAP.";
  form.reset();
});
