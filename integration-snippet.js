// Use this filename in the existing studio.html question loader:
fetch('./operating_system_question_bank.json', {cache:'no-store'})
  .then(response => { if (!response.ok) throw new Error('Question bank unavailable'); return response.json(); })
  .then(data => { bank = data; home(); });
