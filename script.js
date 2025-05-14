document.getElementById('ageForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const dob = new Date(document.getElementById('dob').value);
  const today = new Date();

  if (dob > today) {
    document.getElementById('result').textContent = 'Please enter a valid date of birth.';
    return;
  }

  let ageYears = today.getFullYear() - dob.getFullYear();
  let ageMonths = today.getMonth() - dob.getMonth();
  let ageDays = today.getDate() - dob.getDate();

  if (ageDays < 0) {
    ageMonths -= 1;
    const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
    ageDays += lastMonth.getDate();
  }

  if (ageMonths < 0) {
    ageYears -= 1;
    ageMonths += 12;
  }

  document.getElementById('result').textContent = 
    `You are ${ageYears} years, ${ageMonths} months, and ${ageDays} days old.`;
});
