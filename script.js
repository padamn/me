// Wimpy Kid-Inspired Diary Website - JavaScript

// Diary overlay system
function openDiaryPage(pageId) {
  const overlay = document.getElementById('diary-overlay');
  const content = document.getElementById('diary-content');

  // Get the content for the specific page
  const pageContent = getDiaryPageContent(pageId);

  if (pageContent) {
    content.innerHTML = pageContent;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeDiaryPage() {
  const overlay = document.getElementById('diary-overlay');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}

// Get content for different diary pages
function getDiaryPageContent(pageId) {
  const pages = {
    'questions': getQuestionsContent(),
    'thoughts': getThoughtsContent(),
    'music': getMusicContent(),
    'about': getAboutContent()
  };

  return pages[pageId] || null;
}

// Questions page content
function getQuestionsContent() {
  return `
    <button class="close-btn" onclick="closeDiaryPage()">×</button>
    <h1 class="tilt-left mb-md">Questions I Think About {placeholder for now, not my thoughts}</h1>
    <p class="text-gray mb-lg">Click any question to see my thoughts...</p>
    
    <div class="question-list">
      ${createQuestion(
    "What would you do if you knew you couldn't fail?",
    "I'd probably start that weird project I've been thinking about for months. You know, the one that seems too ambitious or silly. Fear of failure is such a powerful brake on doing interesting things."
  )}
      
      ${createQuestion(
    "When was the last time you changed your mind about something important?",
    "Recently realized that being 'productive' all the time isn't actually productive. Sometimes the best ideas come when you're doing absolutely nothing. Changed how I think about rest."
  )}
      
      ${createQuestion(
    "What advice would you give to someone feeling stuck?",
    "Move. Literally. Go for a walk, change your environment, talk to someone new. Stuck-ness is often just being too close to the problem. Distance creates clarity."
  )}
      
      ${createQuestion(
    "What's something you believe that most people disagree with?",
    "That being 'weird' is underrated. We spend so much energy trying to fit in, but the most interesting people are the ones who stopped caring about that."
  )}
      
      ${createQuestion(
    "If you could have dinner with anyone, who and why?",
    "Someone who failed spectacularly and then succeeded. Not the success story, but the failure-to-success story. Those are way more interesting."
  )}
    </div>
    
    <div class="highlight-box mt-lg">
      <p class="mb-sm">Hinge ahh section </p>
    </div>
  `;
}

// Create expandable question
function createQuestion(question, answer) {
  const id = 'q-' + Math.random().toString(36).substr(2, 9);
  return `
    <div class="question-item mb-md">
      <div class="question-text playful-scale" onclick="toggleAnswer('${id}')">
        ${question}
      </div>
      <div id="${id}" class="answer-text" style="display: none;">
        <p class="mt-sm text-gray tilt-slight">${answer}</p>
      </div>
    </div>
  `;
}

function toggleAnswer(id) {
  const answer = document.getElementById(id);
  if (answer.style.display === 'none') {
    answer.style.display = 'block';
    answer.classList.add('text-reveal');
  } else {
    answer.style.display = 'none';
  }
}

// Thoughts page content
function getThoughtsContent() {
  return `
    <button class="close-btn" onclick="closeDiaryPage()">×</button>
    <h1 class="tilt-right mb-md">Random Thoughts</h1>
    <p class="annotation mb-lg">unfiltered brain dumps</p>
    
    <div class="thought-entry mb-lg">
      <p class="mb-sm">Games I want to play.</p>
      <p class="mb-sm"><span class="strikethrough">I want to build companies because gotta change the world!</span></p>
      <p class="mb-sm">I treat my life as a set of games I can play. There are various games. Think - mastery over my skills, or create an amazing life or, be the most well rounded person or travel the world.</p>
      <p class="text-gray">I enjoy this game -> building businesses. Even if the end outcome turns out to be the same as other games, this is the one i want to be a world class player in. Even if i end up making money, i see it enabling me building more businesses lol. Maybe I'll write more sometime later .</p>
      <span class="doodle doodle-star" style="margin-left: 10px;">★</span>
    </div>
    
    <div class="thought-entry mb-lg tilt-slight">
      <p class="mb-sm">Spent the last week of the year being badgered by people.</p>
      <p class="mb-sm">How are you able to leave a job, when you're not even sure what you want to do?</p>
      <p class="mb-sm">How do you survive without a salary? When are you getting married (thanks mum)</p>
      <p class="mb-sm"><span class="strikethrough">just got the balls to do it</span></p>
    <p class="text-gray">idk man. cross the bridge and then burn the boats  ¯\_(ツ)_/¯</p>
    </div>
    
    <div class="thought-entry mb-lg">
      <p class="mb-sm">Why do we ask "what do you do?" instead of "what are you curious about?"</p>
      <p class="mb-sm">One is about labels, the other is about who you actually are.</p>
      <p class="text-gray">Trying to ask better questions.</p>
    </div>
    
    <div class="thought-entry mb-lg tilt-left">
      <p class="mb-sm">The best ideas come from weird combinations.</p>
      <p class="mb-sm">Like... what if a diary was a website?</p>
      <p class="mb-sm"><span class="strikethrough">That's stupid</span></p>
      <p class="text-blue">Actually, that's kind of interesting.</p>
    </div>
    
    <div class="thought-entry mb-lg">
      <p class="mb-sm">Noticed I'm happiest when I'm making things.</p>
      <p class="mb-sm">Doesn't matter if they're "useful" or not.</p>
      <p class="text-gray">The making is the point.</p>
    </div>
  `;
}

// Music page content
function getMusicContent() {
  return `
    <button class="close-btn" onclick="closeDiaryPage()">×</button>
    <h1 class="tilt-left mb-md">On Loop ♪</h1>
    <p class="text-gray mb-lg">What I listen to and when...</p>
    
    <div class="playlist-item mb-lg">
      <h3 class="text-blue mb-sm">My YouTube Playlists</h3>
      <p class="mb-sm text-gray">Add your YouTube playlist links below. You can get the embed code from YouTube by:</p>
      <ol class="text-gray" style="margin-left: 20px; font-size: 0.9rem;">
        <li>Go to your YouTube playlist</li>
        <li>Click "Share" → "Embed"</li>
        <li>Copy the iframe code and paste it here</li>
      </ol>
    </div>

    <!-- Example YouTube Playlist Embed -->
    <div class="playlist-item mb-lg">
      <h3 class="text-blue mb-sm">Current Favorites ♪</h3>
      <p class="mb-sm">Replace this with your actual YouTube playlist embed code</p>
      <div style="position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; margin-top: 15px;">
        <iframe 
          style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" 
          src="https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID_HERE" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowfullscreen>
        </iframe>
      </div>
      <p class="text-gray mt-sm" style="font-size: 0.85rem;">👆 Replace YOUR_PLAYLIST_ID_HERE with your actual playlist ID</p>
    </div>
    
    <div class="playlist-item mb-lg tilt-slight">
      <h3 class="text-red mb-sm">Late Night Vibes 🌙</h3>
      <p class="mb-sm">For when it's 2am and you're thinking about everything and nothing.</p>
      <p class="text-gray">Add another YouTube playlist embed here if you want</p>
    </div>
    
    <div class="playlist-item mb-lg">
      <h3 class="text-blue mb-sm">Focus Mode 🎧</h3>
      <p class="mb-sm">For deep work. No lyrics, just vibes.</p>
      <p class="text-gray">Instrumental hip-hop, jazz, electronic.</p>
      <span class="doodle doodle-star" style="margin-left: 10px;">★</span>
    </div>
    
    <div class="highlight-box mt-lg">
      <p class="mb-sm">Want to add your YouTube Wrapped or Spotify Wrapped?</p>
      <p class="text-gray">You can embed those here too! Just get the share/embed code and paste it in.</p>
    </div>
  `;
}

// About page content
function getAboutContent() {
  return `
    <button class="close-btn" onclick="closeDiaryPage()">×</button>
    <h1 class="tilt-right mb-md">About (kind of)</h1>
    
    <div class="about-section mb-lg">
      <h2 class="text-blue mb-sm">Things that interest me:</h2>
      <ul>
        <li>Good conversations that go on for hours</li>
        <li>Making things (even if they're imperfect)</li>
        <li>People who are genuinely curious</li>
        <li>Running, cycling, basically anything that gets me moving. Always down for these</li>
        <li>Books that change how you think</li>
        <li>Walking without a destination</li>
        <li>Being an optimist, cuz what else we living for babyyy!</li>
        <li>Philosophy : Hit me with the latest train of thought you got fren - oriental, existential, nihilistic - I'm all game</li>
      </ul>
      <span class="doodle doodle-heart" style="margin-left: 10px;">♥</span>
    </div>
    
    <div class="about-section mb-lg tilt-slight">
      <h2 class="text-red mb-sm">Things I'm bad at:</h2>
      <ul>
        <li>Keeping plants alive <span class="strikethrough">sorry plants</span></li>
        <li>Unpacking and packing my Suitcase (i have spent half my life in it)</li>
        <li>Not overthinking everything</li>
        <li>Waking up early (I'm trying, okay?)</li>
        <li><span class="strikethrough">FUCKING</span> EMAILS!!!!!!!!!!!</li>
      </ul>
    </div>
    
    <div class="about-section mb-lg">
      <h2 class="text-blue mb-sm">Things I'm trying to get better at:</h2>
      <ul>
        <li>Asking better questions</li>
        <li>Listening more than talking. Have been more of a yapper lately.</li>
        <li>Being comfortable with uncertainty (this will be an ongoing journey)</li>
        <li>Creating more, consuming less</li>
        <li>writing :|</li>
        <li>Being more present</li>
      </ul>
    </div>
    
    <div class="highlight-box mt-lg">
      <p class="mb-sm">This ain't a pitch.</p>
      <p class="mb-sm">It's just... me, I guess.</p>
      <p class="text-blue mt-sm"> Found something interesting? let's chat.</p>
    </div>
  `;
}

// Random doodle positioning
function addRandomDoodles() {
  const container = document.querySelector('.page-container');
  if (!container) return;

  const doodles = ['★', '♥', '~', '•'];
  const numDoodles = 5;

  for (let i = 0; i < numDoodles; i++) {
    const doodle = document.createElement('div');
    doodle.className = 'doodle doodle-float';
    doodle.textContent = doodles[Math.floor(Math.random() * doodles.length)];
    doodle.style.position = 'absolute';
    doodle.style.left = Math.random() * 90 + '%';
    doodle.style.top = Math.random() * 90 + '%';
    doodle.style.fontSize = (Math.random() * 1 + 1) + 'rem';
    doodle.style.animationDelay = Math.random() * 3 + 's';

    container.appendChild(doodle);
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function () {
  // Add random doodles to the page
  addRandomDoodles();

  // Close overlay on background click
  const overlay = document.getElementById('diary-overlay');
  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        closeDiaryPage();
      }
    });
  }

  // Close overlay on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      closeDiaryPage();
    }
  });
});
