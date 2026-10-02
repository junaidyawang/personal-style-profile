// PSP Assessment App v5.0
// Master Assessment & App Specification Version 5.0

const ASSESSMENT_META = {
  id: "psp-v5",
  title: "PSP – Personal Style Profile",
  version: "5.0",
  audience: "Junior employees / new joiners in a Mentor–Mentee programme"
};

const DIMENSIONS = {
  1: {
    id: "dim_1",
    name: "Processing Style",
    reflectionQuestion: "Do I understand my thinking better by talking about it, or by having time to think first?",
    sideA: {
      key: "TALK_THROUGH",
      code: "T",
      title: "Talk Through",
      typicalThought: "Talking about it helps me work out what I really think.",
      description: "You often develop your thinking through conversation. Discussing an idea, question or problem with someone can help you clarify what you think.",
      helpsWhen: "You can talk ideas through, brainstorm out loud, or collaborate in real-time.",
      othersNotice: "You may start talking to discover what you think and refine your view through conversation.",
      remember: "Sometimes others need quiet time to process before they are ready to discuss."
    },
    sideB: {
      key: "THINK_THROUGH",
      code: "R",
      title: "Think Through",
      typicalThought: "Give me some time to think and I will usually have more to contribute.",
      description: "You often prefer some time to process internally before discussing your thinking. Reflection helps you form your view before sharing it.",
      helpsWhen: "You have time to prepare, review information or think before an important conversation.",
      othersNotice: "You may listen first and contribute once you have formed your view.",
      remember: "Sharing early or incomplete thoughts can invite valuable collaboration and reduce misunderstandings."
    }
  },
  2: {
    id: "dim_2",
    name: "Information Focus",
    reflectionQuestion: "Do I naturally start with the practical details and facts, or with the big picture and where this could lead?",
    sideA: {
      key: "DETAILS",
      code: "D",
      title: "Details",
      typicalThought: "Show me what this actually looks like and how it works.",
      description: "You tend to notice facts, specifics, examples and what is happening in practice. Concrete information can help you understand something quickly.",
      helpsWhen: "You need practical accuracy, operational precision, or clear execution guidelines.",
      othersNotice: "You focus on real-world examples, concrete facts, and tangible steps.",
      remember: "Checking in on the bigger vision helps ensure daily details align with the wider purpose."
    },
    sideB: {
      key: "BIG_PICTURE",
      code: "B",
      title: "Big Picture",
      typicalThought: "Help me understand where this fits and what it could lead to.",
      description: "You tend to notice patterns, connections, possibilities and where something may be heading. Understanding the overall purpose can help you make sense of information.",
      helpsWhen: "You are exploring ideas, change, strategy or unfamiliar situations.",
      othersNotice: "You look at the overarching context, possibilities, and long-term implications.",
      remember: "Sometimes the immediate facts and details need attention before exploring what could be possible."
    }
  },
  3: {
    id: "dim_3",
    name: "Decision Approach",
    reflectionQuestion: "When I need to decide, what do I naturally consider first: the reasoning or the people impact?",
    sideA: {
      key: "WHAT_MAKES_SENSE",
      code: "S",
      title: "What Makes Sense",
      typicalThought: "What is the most reasonable course of action?",
      description: "You tend to give weight to logic, consistency, evidence and what can be reasonably justified. You may naturally step back from a situation to examine it objectively.",
      helpsWhen: "You need to analyse alternatives, solve a problem or challenge assumptions.",
      othersNotice: "You examine evidence, consistency, and objective reasoning.",
      remember: "A sound decision may also need to consider how people experience its impact."
    },
    sideB: {
      key: "WHAT_MATTERS_TO_PEOPLE",
      code: "M",
      title: "What Matters to People",
      typicalThought: "What would this mean for the people involved?",
      description: "You tend to give weight to values, circumstances, relationships and the impact a decision may have on people. You may naturally consider how a decision will be experienced by those involved.",
      helpsWhen: "You are navigating team dynamics, supporting colleagues, or aligning on shared values.",
      othersNotice: "You consider personal context, empathy, morale, and interpersonal harmony.",
      remember: "Objective data and clear logical boundaries help protect people and fairness in the long run."
    }
  },
  4: {
    id: "dim_4",
    name: "Execution Style",
    reflectionQuestion: "Do I feel more comfortable establishing the plan, or leaving room to adjust along the way?",
    sideA: {
      key: "PLAN_IT",
      code: "P",
      title: "Plan It",
      typicalThought: "Let's agree what we are doing and get moving.",
      description: "You tend to appreciate clarity, direction, milestones and knowing what needs to happen next. Having a plan can help you focus and move forward.",
      helpsWhen: "There are deadlines, multiple priorities or a clear outcome to achieve.",
      othersNotice: "You establish milestones, clarify ownership, and drive toward completion.",
      remember: "Sometimes new information makes it useful to keep an option open or change the plan."
    },
    sideB: {
      key: "ADAPT_IT",
      code: "A",
      title: "Adapt It",
      typicalThought: "Let's start, learn and adjust as we go.",
      description: "You tend to appreciate keeping some options open so that you can respond as circumstances or information change. Flexibility can help you explore and improve the approach as you go.",
      helpsWhen: "Situations are evolving rapidly, exploratory, or require creative agility.",
      othersNotice: "You stay open to emerging insights and pivot smoothly when conditions shift.",
      remember: "Agreeing on baseline checkpoints and interim milestones helps keep projects on track."
    }
  }
};

const QUESTIONS = [
  {
    id: 1,
    dimensionId: 1,
    prompt: "You receive a new assignment but are not yet sure what you think about it. What are you more likely to do first?",
    options: [
      { text: "Talk it through with someone and develop my thinking as we discuss it.", score: "TALK_THROUGH", side: "A" },
      { text: "Spend some time thinking about it before discussing my view.", score: "THINK_THROUGH", side: "B" }
    ]
  },
  {
    id: 2,
    dimensionId: 2,
    prompt: "During a project briefing, what helps you understand the work more quickly?",
    options: [
      { text: "Knowing the specific requirements, examples and immediate priorities.", score: "DETAILS", side: "A" },
      { text: "Understanding the overall purpose and how the project connects to something bigger.", score: "BIG_PICTURE", side: "B" }
    ]
  },
  {
    id: 3,
    dimensionId: 3,
    prompt: "Two possible solutions could both work. What are you more likely to consider first?",
    options: [
      { text: "Which option takes better account of the people and circumstances involved.", score: "WHAT_MATTERS_TO_PEOPLE", side: "B" },
      { text: "Which option can be supported most clearly by reasoning and evidence.", score: "WHAT_MAKES_SENSE", side: "A" }
    ]
  },
  {
    id: 4,
    dimensionId: 4,
    prompt: "You are given three weeks to complete an assignment. Which approach feels more natural?",
    options: [
      { text: "Set some milestones early and work towards them.", score: "PLAN_IT", side: "A" },
      { text: "Keep the approach relatively open and adjust as the work develops.", score: "ADAPT_IT", side: "B" }
    ]
  },
  {
    id: 5,
    dimensionId: 1,
    prompt: "Someone unexpectedly asks for your opinion during a meeting. What feels more natural?",
    options: [
      { text: "Pause briefly so I can organise my thoughts before responding.", score: "THINK_THROUGH", side: "B" },
      { text: "Start responding and clarify my thinking as I speak.", score: "TALK_THROUGH", side: "A" }
    ]
  },
  {
    id: 6,
    dimensionId: 2,
    prompt: "You are learning a new organisational process. What would you rather understand first?",
    options: [
      { text: "Why the process exists and how it connects with other parts of the organisation.", score: "BIG_PICTURE", side: "B" },
      { text: "The actual steps involved and what I am expected to do.", score: "DETAILS", side: "A" }
    ]
  },
  {
    id: 7,
    dimensionId: 3,
    prompt: "You need to give a colleague some difficult feedback. What are you more likely to focus on first?",
    options: [
      { text: "Making sure the issue and reasoning are clearly explained.", score: "WHAT_MAKES_SENSE", side: "A" },
      { text: "Considering how to raise the issue constructively for the person involved.", score: "WHAT_MATTERS_TO_PEOPLE", side: "B" }
    ]
  },
  {
    id: 8,
    dimensionId: 4,
    prompt: "You are assigned to draft your first project briefing deck. Which starting condition would you prefer?",
    options: [
      { text: "A clear objective with the freedom to structure and design the deck as ideas emerge.", score: "ADAPT_IT", side: "B" },
      { text: "A detailed slide template and checklist of required sections to follow.", score: "PLAN_IT", side: "A" }
    ]
  },
  {
    id: 9,
    dimensionId: 1,
    prompt: "You are stuck on a difficult problem. What is more likely to help you make progress?",
    options: [
      { text: "Discuss the problem with someone and test possible ideas aloud.", score: "TALK_THROUGH", side: "A" },
      { text: "Step away from the conversation and work through the issue privately for a while.", score: "THINK_THROUGH", side: "B" }
    ]
  },
  {
    id: 10,
    dimensionId: 2,
    prompt: "Your mentor describes a difficult situation they handled in the past. What are you most naturally interested in?",
    options: [
      { text: "What happened, what they did and how the situation turned out.", score: "DETAILS", side: "A" },
      { text: "The broader pattern behind the situation and what might apply elsewhere.", score: "BIG_PICTURE", side: "B" }
    ]
  },
  {
    id: 11,
    dimensionId: 3,
    prompt: "Your mentor is reviewing a milestone deliverable you completed. Which feedback would give you a stronger sense of accomplishment?",
    options: [
      { text: "Feedback validating that your logic was airtight, robust, and supported by sound data.", score: "WHAT_MAKES_SENSE", side: "A" },
      { text: "Feedback acknowledging your collaboration, sensitivity to stakeholder needs, and positive team impact.", score: "WHAT_MATTERS_TO_PEOPLE", side: "B" }
    ]
  },
  {
    id: 12,
    dimensionId: 4,
    prompt: "Before an important discussion, what usually makes you more comfortable?",
    options: [
      { text: "Having the general purpose but allowing the conversation to unfold.", score: "ADAPT_IT", side: "B" },
      { text: "Knowing the key topics and what we hope to achieve by the end.", score: "PLAN_IT", side: "A" }
    ]
  },
  {
    id: 13,
    dimensionId: 1,
    prompt: "You have just completed a full day of collaborative onboarding workshops. What feels more natural to help you reset?",
    options: [
      { text: "Spending quiet time alone to decompress and process the day.", score: "THINK_THROUGH", side: "B" },
      { text: "Catching up with a colleague or friend over dinner to chat about the experience.", score: "TALK_THROUGH", side: "A" }
    ]
  },
  {
    id: 14,
    dimensionId: 2,
    prompt: "You hear that your organisation is introducing a major change. What are you more curious about first?",
    options: [
      { text: "What exactly will change and what people will need to do differently.", score: "DETAILS", side: "A" },
      { text: "Why the change is happening and what it may mean for the organisation in the future.", score: "BIG_PICTURE", side: "B" }
    ]
  },
  {
    id: 15,
    dimensionId: 3,
    prompt: "A usual rule does not fit someone's situation very well. What are you more likely to consider first?",
    options: [
      { text: "Whether an exception is reasonable given the person's circumstances.", score: "WHAT_MATTERS_TO_PEOPLE", side: "B" },
      { text: "Whether the same principle can still be applied consistently.", score: "WHAT_MAKES_SENSE", side: "A" }
    ]
  },
  {
    id: 16,
    dimensionId: 4,
    prompt: "Several possible approaches could work, and you already have enough information to proceed. What feels more natural?",
    options: [
      { text: "Choose an approach and move forward with it.", score: "PLAN_IT", side: "A" },
      { text: "Keep the options open a little longer in case a better approach emerges.", score: "ADAPT_IT", side: "B" }
    ]
  },
  {
    id: 17,
    dimensionId: 1,
    prompt: "During a discussion, someone introduces an idea you had not considered before. What are you more likely to do?",
    options: [
      { text: "Respond to it and discover my reaction through the conversation.", score: "TALK_THROUGH", side: "A" },
      { text: "Hold the thought for a while and respond after I have considered it more fully.", score: "THINK_THROUGH", side: "B" }
    ]
  },
  {
    id: 18,
    dimensionId: 2,
    prompt: "You are assigned to learn a complex internal reporting system. Which starting point gives you more confidence?",
    options: [
      { text: "Step-by-step walkthroughs of common tasks and actual sample inputs.", score: "DETAILS", side: "A" },
      { text: "A high-level overview of how the system tracks business performance and feeds into leadership decisions.", score: "BIG_PICTURE", side: "B" }
    ]
  },
  {
    id: 19,
    dimensionId: 3,
    prompt: "Two colleagues strongly disagree about how to handle an issue. What are you more likely to pay attention to first?",
    options: [
      { text: "Which position is supported by the strongest reasoning.", score: "WHAT_MAKES_SENSE", side: "A" },
      { text: "What matters to each person and how the disagreement is affecting them.", score: "WHAT_MATTERS_TO_PEOPLE", side: "B" }
    ]
  },
  {
    id: 20,
    dimensionId: 4,
    prompt: "Halfway through an assignment, important new information becomes available. What feels more natural?",
    options: [
      { text: "Adjust the approach and explore what the new information makes possible.", score: "ADAPT_IT", side: "B" },
      { text: "Rework the plan so that the revised direction and next steps are clear.", score: "PLAN_IT", side: "A" }
    ]
  },
  {
    id: 21,
    dimensionId: 1,
    prompt: "Something did not go as well as you expected. What are you more likely to do when trying to learn from it?",
    options: [
      { text: "Debrief it with someone and discover the lessons through the discussion.", score: "TALK_THROUGH", side: "A" },
      { text: "Review what happened myself and form my own conclusions before discussing it.", score: "THINK_THROUGH", side: "B" }
    ]
  },
  {
    id: 22,
    dimensionId: 2,
    prompt: "You are reviewing a proposal for a new initiative. What catches your attention first?",
    options: [
      { text: "Its potential, the connections it creates and what it could eventually become.", score: "BIG_PICTURE", side: "B" },
      { text: "Whether the facts, requirements and practical details are sufficiently clear.", score: "DETAILS", side: "A" }
    ]
  },
  {
    id: 23,
    dimensionId: 3,
    prompt: "A proposed change would improve efficiency but make things more difficult for some colleagues. What are you more likely to examine first?",
    options: [
      { text: "Whether the expected improvement justifies the change based on the evidence.", score: "WHAT_MAKES_SENSE", side: "A" },
      { text: "Whether the impact on the people affected has been adequately considered.", score: "WHAT_MATTERS_TO_PEOPLE", side: "B" }
    ]
  },
  {
    id: 24,
    dimensionId: 4,
    prompt: "A meeting has covered several useful ideas, but not everything has been resolved. What would you naturally prefer before it ends?",
    options: [
      { text: "Clarify the decisions, responsibilities and next steps that can already be agreed.", score: "PLAN_IT", side: "A" },
      { text: "Leave some issues open so people can continue thinking and revisit them later.", score: "ADAPT_IT", side: "B" }
    ]
  }
];

const QUESTION_25 = {
  id: 25,
  prompt: "One Thing My Mentor Should Know About Me (Choose ONE statement):",
  options: [
    { id: "A", text: "Talking something through often helps me work out what I really think." },
    { id: "B", text: "Give me some time to think and I will usually have more to contribute." },
    { id: "C", text: "I engage more quickly when I understand the bigger picture and where something could lead." },
    { id: "D", text: "Specific examples and clear details help me understand something quickly." },
    { id: "E", text: "I value questions that challenge my reasoning and help me test whether something makes sense." },
    { id: "F", text: "I value conversations that consider people's circumstances and the impact on them." },
    { id: "G", text: "Clear direction and next steps help me move forward." },
    { id: "H", text: "I work well when there is room to explore and adjust as I learn." }
  ]
};

const MENTOR_CONSIDERATIONS = {
  "T": "allowing time for verbal exploration and conversational brainstorming,",
  "R": "giving important questions a little reflection time before expecting contributions,",
  "D": "providing specific examples, concrete demonstrations, and practical expectations,",
  "B": "helping connect ideas and assignments to the wider organizational context,",
  "S": "challenging reasoning logically and walking through objective criteria,",
  "M": "acknowledging individual circumstances, team relationships, and personal impact,",
  "P": "agreeing on clear milestones and next steps while maintaining structure,",
  "A": "leaving room to experiment, iterate, and adjust as new insights emerge."
};

function calculatePSP(answers, bestFitOverrides = {}) {
  // answers: { [questionId 1..24]: selectedOptionIndex (0 or 1) }
  const dimScores = {
    1: { A: 0, B: 0 },
    2: { A: 0, B: 0 },
    3: { A: 0, B: 0 },
    4: { A: 0, B: 0 }
  };

  QUESTIONS.forEach(q => {
    const selectedIdx = answers[q.id];
    if (selectedIdx !== undefined && selectedIdx !== null) {
      const opt = q.options[selectedIdx];
      if (opt.side === 'A') {
        dimScores[q.dimensionId].A++;
      } else if (opt.side === 'B') {
        dimScores[q.dimensionId].B++;
      }
    }
  });

  const dimensionResults = {};
  const ties = [];
  let styleCode = "";

  for (let dim = 1; dim <= 4; dim++) {
    const scoreA = dimScores[dim].A;
    const scoreB = dimScores[dim].B;
    const dimMeta = DIMENSIONS[dim];

    let preference = null;
    let strength = null;
    let codeLetter = "";

    if (scoreA > scoreB) {
      preference = "A";
      codeLetter = dimMeta.sideA.code;
      strength = (scoreA >= 5) ? "Clear preference" : "Leaning preference";
    } else if (scoreB > scoreA) {
      preference = "B";
      codeLetter = dimMeta.sideB.code;
      strength = (scoreB >= 5) ? "Clear preference" : "Leaning preference";
    } else {
      // 3 - 3 Balanced: Context Dependent
      preference = "A";
      codeLetter = dimMeta.sideA.code;
      strength = "Balanced / Context Dependent (3–3)";
    }

    dimensionResults[dim] = {
      dimension: dimMeta,
      scoreA,
      scoreB,
      preference,
      strength,
      codeLetter,
      chosenSide: preference === 'A' ? dimMeta.sideA : dimMeta.sideB
    };

    if (codeLetter) {
      styleCode += codeLetter;
    }
  }

  return {
    dimScores,
    dimensionResults,
    ties: [],
    isComplete: true,
    styleCode
  };
}

// Application State
const state = {
  currentScreen: 'welcome',
  participantName: '',
  currentQuestionIndex: 0,
  answers: {}, // { [questionId: 1..24]: 0 | 1 }
  question25Answer: null, // option id 'A'..'H'
  bestFitOverrides: {}, // { [dimId]: 'A' | 'B' }
  calculationResult: null
};

let screens = {};

function init() {
  screens = {
    welcome: document.getElementById('screen-welcome'),
    instructions: document.getElementById('screen-instructions'),
    question: document.getElementById('screen-question'),
    calculating: document.getElementById('screen-calculating'),
    bestFit: document.getElementById('screen-best-fit'),
    results: document.getElementById('screen-results')
  };

  setupEventListeners();
  showScreen('welcome');
}

function showScreen(screenKey) {
  state.currentScreen = screenKey;
  Object.values(screens).forEach(screenEl => {
    if (screenEl) screenEl.classList.remove('active');
  });

  if (screens[screenKey]) {
    screens[screenKey].classList.add('active');
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupEventListeners() {
  document.getElementById('btn-to-instructions')?.addEventListener('click', () => {
    const nameInput = document.getElementById('participant-name');
    state.participantName = (nameInput?.value || '').trim();
    showScreen('instructions');
  });

  document.getElementById('btn-back-welcome')?.addEventListener('click', () => {
    showScreen('welcome');
  });

  document.getElementById('btn-start-questions')?.addEventListener('click', () => {
    state.currentQuestionIndex = 0;
    renderCurrentQuestion();
    showScreen('question');
  });

  const btnOptionA = document.getElementById('btn-option-a');
  const btnOptionB = document.getElementById('btn-option-b');
  const btnPrev = document.getElementById('btn-prev-question');
  const btnNext = document.getElementById('btn-next-question');

  btnOptionA?.addEventListener('click', () => handleSelectOption(0));
  btnOptionB?.addEventListener('click', () => handleSelectOption(1));

  btnPrev?.addEventListener('click', () => {
    if (state.currentQuestionIndex > 0) {
      state.currentQuestionIndex--;
      renderCurrentQuestion();
    } else if (state.currentQuestionIndex === 0) {
      // From Question 1, can go back to Instructions page
      showScreen('instructions');
    }
  });

  btnNext?.addEventListener('click', () => {
    if (state.currentQuestionIndex < 24) {
      state.currentQuestionIndex++;
      renderCurrentQuestion();
    }
  });

  document.getElementById('btn-confirm-best-fit')?.addEventListener('click', () => {
    finalizeCalculation();
  });

  document.getElementById('tab-participant')?.addEventListener('click', () => switchResultView('participant'));
  document.getElementById('tab-mentor')?.addEventListener('click', () => switchResultView('mentor'));

  document.getElementById('btn-print')?.addEventListener('click', () => {
    window.print();
  });

  document.getElementById('btn-copy-summary')?.addEventListener('click', copySummaryToClipboard);

  document.getElementById('btn-header-share')?.addEventListener('click', () => {
    openQrModal();
  });

  document.getElementById('btn-welcome-qr')?.addEventListener('click', () => {
    openQrModal();
  });

  document.getElementById('btn-qr-share')?.addEventListener('click', () => {
    openQrModal();
  });

  document.getElementById('btn-close-qr')?.addEventListener('click', () => {
    closeQrModal();
  });

  document.getElementById('qr-modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'qr-modal') {
      closeQrModal();
    }
  });

  document.getElementById('btn-copy-link')?.addEventListener('click', () => {
    const url = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(() => showToast("App link copied!"));
    }
  });

  document.getElementById('btn-retake')?.addEventListener('click', () => {
    if (confirm('Are you sure you want to retake the assessment? Your current responses will be cleared.')) {
      state.answers = {};
      state.question25Answer = null;
      state.bestFitOverrides = {};
      state.calculationResult = null;
      state.currentQuestionIndex = 0;
      const nameInput = document.getElementById('participant-name');
      if (nameInput) nameInput.value = state.participantName || '';
      showScreen('welcome');
    }
  });
}

function openQrModal() {
  const modal = document.getElementById('qr-modal');
  const qrImage = document.getElementById('qr-image');
  const qrUrlText = document.getElementById('qr-url-text');
  
  const currentUrl = window.location.href;
  if (qrUrlText) qrUrlText.textContent = currentUrl;
  
  // Generate QR Code via standard SVG QR API
  if (qrImage) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(currentUrl)}`;
  }
  
  modal?.classList.add('show');
}

function closeQrModal() {
  const modal = document.getElementById('qr-modal');
  modal?.classList.remove('show');
}

function renderCurrentQuestion() {
  const index = state.currentQuestionIndex;
  const total = 25;
  const isQ25 = index === 24;

  const counterEl = document.getElementById('question-counter');
  const percentEl = document.getElementById('progress-percent');
  const fillEl = document.getElementById('progress-fill');
  const prevBtn = document.getElementById('btn-prev-question');
  const nextBtn = document.getElementById('btn-next-question');

  const percent = Math.round(((index + 1) / total) * 100);
  if (counterEl) counterEl.textContent = `Question ${index + 1} of ${total}`;
  if (percentEl) percentEl.textContent = `${percent}%`;
  if (fillEl) fillEl.style.width = `${percent}%`;

  if (prevBtn) {
    prevBtn.disabled = false;
  }

  const promptEl = document.getElementById('question-prompt');
  const helpEl = document.getElementById('question-help');
  const optionsPair = document.getElementById('options-pair');
  const optionsQ25 = document.getElementById('options-q25');

  if (!isQ25) {
    const qData = QUESTIONS[index];
    promptEl.textContent = qData.prompt;
    helpEl.style.display = 'none';

    optionsPair.style.display = 'flex';
    optionsQ25.style.display = 'none';

    const btnA = document.getElementById('btn-option-a');
    const btnB = document.getElementById('btn-option-b');
    const textA = document.getElementById('text-option-a');
    const textB = document.getElementById('text-option-b');

    textA.textContent = qData.options[0].text;
    textB.textContent = qData.options[1].text;

    // Maintain selection history accurately
    const prevAnswerIdx = state.answers[qData.id];
    btnA.classList.toggle('selected', prevAnswerIdx === 0);
    btnB.classList.toggle('selected', prevAnswerIdx === 1);

    // Show Next button if this question already has an answer
    if (nextBtn) {
      if (prevAnswerIdx !== undefined && prevAnswerIdx !== null) {
        nextBtn.style.display = 'inline-flex';
      } else {
        nextBtn.style.display = 'none';
      }
    }
  } else {
    // Question 25
    promptEl.textContent = QUESTION_25.prompt;
    helpEl.style.display = 'none';

    optionsPair.style.display = 'none';
    optionsQ25.style.display = 'flex';

    if (nextBtn) {
      nextBtn.style.display = 'none';
    }

    optionsQ25.innerHTML = '';
    QUESTION_25.options.forEach(opt => {
      const isSelected = state.question25Answer === opt.id;
      const btn = document.createElement('button');
      btn.className = `option-btn ${isSelected ? 'selected' : ''}`;
      btn.innerHTML = `
        <span class="option-letter">${opt.id}</span>
        <span class="option-text">${opt.text}</span>
      `;
      btn.addEventListener('click', () => {
        state.question25Answer = opt.id;
        renderCurrentQuestion();
        setTimeout(() => {
          proceedToCalculation();
        }, 220);
      });
      optionsQ25.appendChild(btn);
    });
  }
}

function handleSelectOption(optionIndex) {
  const index = state.currentQuestionIndex;
  const qData = QUESTIONS[index];
  state.answers[qData.id] = optionIndex;

  const btnA = document.getElementById('btn-option-a');
  const btnB = document.getElementById('btn-option-b');
  btnA.classList.toggle('selected', optionIndex === 0);
  btnB.classList.toggle('selected', optionIndex === 1);

  const nextBtn = document.getElementById('btn-next-question');
  if (nextBtn) nextBtn.style.display = 'inline-flex';

  setTimeout(() => {
    if (state.currentQuestionIndex < 24) {
      state.currentQuestionIndex++;
      renderCurrentQuestion();
    } else {
      renderCurrentQuestion();
    }
  }, 190);
}

function proceedToCalculation() {
  showScreen('calculating');

  setTimeout(() => {
    const result = calculatePSP(state.answers, state.bestFitOverrides);
    state.calculationResult = result;
    renderResults();
    showScreen('results');
  }, 600);
}

function renderResults() {
  const { dimensionResults, styleCode } = state.calculationResult;

  const codeEl = document.getElementById('res-style-code');
  const codeCircleEl = document.getElementById('code-circle-text');
  const subtitleEl = document.getElementById('res-style-subtitle');
  const pillsContainer = document.getElementById('res-summary-pills');

  codeEl.textContent = styleCode;
  codeCircleEl.textContent = styleCode;

  // Participant Name Display
  const nameSpan = document.getElementById('res-participant-name');
  if (nameSpan) {
    nameSpan.textContent = state.participantName ? `${state.participantName} • ` : '';
  }
  const mentorNameSpan = document.getElementById('mentor-participant-name');
  if (mentorNameSpan) {
    mentorNameSpan.textContent = state.participantName || 'Participant';
  }

  const p1 = dimensionResults[1].chosenSide.title;
  const p2 = dimensionResults[2].chosenSide.title;
  const p3 = dimensionResults[3].chosenSide.title;
  const p4 = dimensionResults[4].chosenSide.title;
  subtitleEl.textContent = `${p1} • ${p2} • ${p3} • ${p4}`;

  pillsContainer.innerHTML = `
    <span class="summary-pill">${p1}</span>
    <span class="summary-pill">${p2}</span>
    <span class="summary-pill">${p3}</span>
    <span class="summary-pill">${p4}</span>
  `;

  const dimGrid = document.getElementById('res-dimensions-grid');
  dimGrid.innerHTML = '';

  for (let d = 1; d <= 4; d++) {
    const res = dimensionResults[d];
    const dim = res.dimension;
    const chosen = res.chosenSide;
    const scoreA = res.scoreA;
    const scoreB = res.scoreB;

    let badgeClass = 'strength-balanced';
    if (res.strength.includes('Clear')) badgeClass = 'strength-clear';
    else if (res.strength.includes('Leaning')) badgeClass = 'strength-leaning';

    const card = document.createElement('div');
    card.className = 'dimension-card';

    const pctA = Math.round((scoreA / 6) * 100);
    const pctB = Math.round((scoreB / 6) * 100);

    const dimIcons = { 1: "🗣️", 2: "🔍", 3: "⚖️", 4: "🚀" };
    const icon = dimIcons[d] || "✨";
    const isSideA = res.chosenSide.key === dim.sideA.key;

    card.innerHTML = `
      <div class="infographic-badge-row">
        <div class="dim-label-group">
          <span class="dim-icon-circle">${icon}</span>
          <div>
            <span class="dim-num">Dimension ${d}</span>
            <div class="dim-category-name">${dim.name}</div>
          </div>
        </div>
        <span class="dim-strength-badge ${badgeClass}">${res.strength}</span>
      </div>

      <!-- Infographic Comparison Visual -->
      <div class="infographic-spectrum-card">
        <div class="spectrum-pole-labels">
          <div class="pole-label ${isSideA ? 'active-pole' : ''}">
            <span class="pole-code">${dim.sideA.code}</span>
            <span class="pole-title">${dim.sideA.title}</span>
            <span class="pole-score">${scoreA}</span>
          </div>
          <div class="spectrum-vs-badge">VS</div>
          <div class="pole-label ${!isSideA ? 'active-pole' : ''}">
            <span class="pole-score">${scoreB}</span>
            <span class="pole-title">${dim.sideB.title}</span>
            <span class="pole-code">${dim.sideB.code}</span>
          </div>
        </div>

        <div class="meter-track-infographic">
          <div class="meter-segment-a" style="width: ${pctA}%;">
            ${scoreA > 0 ? `<span class="segment-label">${pctA}%</span>` : ''}
          </div>
          <div class="meter-segment-b" style="width: ${pctB}%;">
            ${scoreB > 0 ? `<span class="segment-label">${pctB}%</span>` : ''}
          </div>
        </div>
      </div>

      <div class="infographic-result-hero">
        <div class="hero-chip">Your Natural Preference</div>
        <h3 class="dim-chosen-title">${chosen.title}</h3>
      </div>

      <p class="dim-description">${chosen.description}</p>
      
      <div class="infographic-quote-callout">
        <span class="quote-icon">💭</span>
        <div class="quote-text">"${chosen.typicalThought}"</div>
      </div>

      <div class="dim-guidance-grid">
        <div class="guidance-box guidance-power">
          <div class="guidance-header">
            <span class="guidance-icon">⭐</span>
            <strong>This may help you when:</strong>
          </div>
          <p>${chosen.helpsWhen}</p>
        </div>
        <div class="guidance-box guidance-flex">
          <div class="guidance-header">
            <span class="guidance-icon">💡</span>
            <strong>Remember / Consider:</strong>
          </div>
          <p>${chosen.remember}</p>
        </div>
      </div>
    `;

    dimGrid.appendChild(card);
  }

  const q25Obj = QUESTION_25.options.find(o => o.id === state.question25Answer) || QUESTION_25.options[0];
  const q25QuoteEl = document.getElementById('res-q25-statement');
  if (q25QuoteEl) {
    q25QuoteEl.textContent = `"${q25Obj.text}"`;
  }

  const mentorCodeEl = document.getElementById('mentor-style-code');
  if (mentorCodeEl) mentorCodeEl.textContent = styleCode;

  const mentorPrefList = document.getElementById('mentor-pref-list');
  mentorPrefList.innerHTML = `
    <li><strong>${p1}</strong> (Processing Style): ${dimensionResults[1].chosenSide.description}</li>
    <li><strong>${p2}</strong> (Information Focus): ${dimensionResults[2].chosenSide.description}</li>
    <li><strong>${p3}</strong> (Decision Approach): ${dimensionResults[3].chosenSide.description}</li>
    <li><strong>${p4}</strong> (Execution Style): ${dimensionResults[4].chosenSide.description}</li>
  `;

  const mentorQ25Quote = document.getElementById('mentor-q25-quote');
  if (mentorQ25Quote) {
    mentorQ25Quote.textContent = `"${q25Obj.text}"`;
  }

}

function switchResultView(viewType) {
  const tabPart = document.getElementById('tab-participant');
  const tabMent = document.getElementById('tab-mentor');
  const viewPart = document.getElementById('view-participant');
  const viewMent = document.getElementById('view-mentor');

  if (viewType === 'participant') {
    tabPart?.classList.add('active');
    tabMent?.classList.remove('active');
    viewPart?.classList.add('active');
    viewMent?.classList.remove('active');
  } else {
    tabPart?.classList.remove('active');
    tabMent?.classList.add('active');
    viewPart?.classList.remove('active');
    viewMent?.classList.add('active');
  }
}

function copySummaryToClipboard() {
  if (!state.calculationResult) return;
  const { dimensionResults, styleCode } = state.calculationResult;
  const q25Obj = QUESTION_25.options.find(o => o.id === state.question25Answer) || QUESTION_25.options[0];
  const participantHeader = state.participantName ? `Participant: ${state.participantName}\n` : '';

  const summaryText = `
=== PERSONAL STYLE PROFILE (PSP) ===
${participantHeader}PSP Style Code: ${styleCode}

PREFERENCES:
• Processing Style: ${dimensionResults[1].chosenSide.title} (${dimensionResults[1].strength})
• Information Focus: ${dimensionResults[2].chosenSide.title} (${dimensionResults[2].strength})
• Decision Approach: ${dimensionResults[3].chosenSide.title} (${dimensionResults[3].strength})
• Execution Style: ${dimensionResults[4].chosenSide.title} (${dimensionResults[4].strength})

ONE THING MY MENTOR SHOULD KNOW:
"${q25Obj.text}"

MENTOR CONVERSATION STARTER:
"Which part of this profile feels most useful for me to understand about you?"
====================================
`.trim();

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(summaryText).then(() => {
      showToast("Summary copied to clipboard!");
    }).catch(() => {
      showToast("Summary ready!");
    });
  } else {
    showToast("Summary ready!");
  }
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (toast) {
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2800);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
