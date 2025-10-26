document.addEventListener('DOMContentLoaded', () => {
  const scheduleElement = document.getElementById('schedule');
  const searchInput = document.getElementById('searchInput');
  let talks = [];

  fetch('/api/talks')
    .then(response => response.json())
    .then(data => {
      talks = data;
      renderSchedule(talks);
    });

  searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredTalks = talks.filter(talk => 
      talk.category.some(category => category.toLowerCase().includes(searchTerm)) ||
      talk.speakers.some(speaker => speaker.toLowerCase().includes(searchTerm))
    );
    renderSchedule(filteredTalks);
  });

  function renderSchedule(talksToRender) {
    scheduleElement.innerHTML = '';
    let currentTime = new Date('2025-10-26T10:00:00');

    talksToRender.forEach((talk, index) => {
      const startTime = new Date(currentTime);
      const endTime = new Date(currentTime.getTime() + talk.duration * 60000);

      const talkElement = document.createElement('div');
      talkElement.classList.add('talk');
      talkElement.innerHTML = `
        <div class="time">${formatTime(startTime)} - ${formatTime(endTime)}</div>
        <h2>${talk.title}</h2>
        <div class="speakers">By: ${talk.speakers.join(', ')}</div>
        <p>${talk.description}</p>
        <div>
          ${talk.category.map(cat => `<span class="category">${cat}</span>`).join('')}
        </div>
      `;
      scheduleElement.appendChild(talkElement);

      currentTime = new Date(endTime.getTime() + 10 * 60000); // 10 minute break

      if (index === 2) { // Add lunch break after the 3rd talk
        const lunchElement = document.createElement('div');
        lunchElement.classList.add('break');
        lunchElement.textContent = 'Lunch Break';
        scheduleElement.appendChild(lunchElement);
        currentTime = new Date(currentTime.getTime() + 60 * 60000); // 1 hour lunch break
      }
    });
  }

  function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }
});
