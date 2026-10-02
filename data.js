// PSP – Personal Style Profile Data Specification (v1.0 - 2 October 2026)

export const DIMENSIONS = {
  1: {
    id: 1,
    name: "How I Process",
    reflectionQuestion: "Do I understand my thinking better by talking about it, or by having time to think first?",
    sideA: {
      code: "T",
      title: "Talk Through",
      typicalThought: "Talking about it helps me work out what I really think.",
      description: "You often develop your thinking through conversation. Discussing an idea, question or problem with someone can help you clarify what you think.",
      helpsWhen: "You can talk ideas through, brainstorm out loud, or collaborate in real-time.",
      othersNotice: "You may start talking to discover what you think and refine your view through conversation.",
      remember: "Sometimes others need quiet time to process before they are ready to discuss."
    },
    sideB: {
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
    id: 2,
    name: "How I See Things",
    reflectionQuestion: "Do I naturally start with where this could lead, or with what is actually happening?",
    sideA: {
      code: "B",
      title: "Big Picture",
      typicalThought: "Help me understand where this fits and what it could lead to.",
      description: "You tend to notice patterns, connections, possibilities and where something may be heading. Understanding the overall purpose can help you make sense of information.",
      helpsWhen: "You are exploring ideas, change, strategy or unfamiliar situations.",
      othersNotice: "You look at the overarching context, possibilities, and long-term implications.",
      remember: "Sometimes the immediate facts and details need attention before exploring what could be possible."
    },
    sideB: {
      code: "D",
      title: "Details",
      typicalThought: "Show me what this actually looks like and how it works.",
      description: "You tend to notice facts, specifics, examples and what is happening in practice. Concrete information can help you understand something quickly.",
      helpsWhen: "You need practical accuracy, operational precision, or clear execution guidelines.",
      othersNotice: "You focus on real-world examples, concrete facts, and tangible steps.",
      remember: "Checking in on the bigger vision helps ensure daily details align with the wider purpose."
    }
  },
  3: {
    id: 3,
    name: "How I Decide",
    reflectionQuestion: "When I need to decide, what do I naturally consider first: the reasoning or the people impact?",
    sideA: {
      code: "S",
      title: "What Makes Sense",
      typicalThought: "What is the most reasonable course of action?",
      description: "You tend to give weight to logic, consistency, evidence and what can be reasonably justified. You may naturally step back from a situation to examine it objectively.",
      helpsWhen: "You need to analyse alternatives, solve a problem or challenge assumptions.",
      othersNotice: "You examine evidence, consistency, and objective reasoning.",
      remember: "A sound decision may also need to consider how people experience its impact."
    },
    sideB: {
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
    id: 4,
    name: "How I Move Forward",
    reflectionQuestion: "Do I feel more comfortable establishing the plan, or leaving room to adjust along the way?",
    sideA: {
      code: "P",
      title: "Plan It",
      typicalThought: "Let's agree what we are doing and get moving.",
      description: "You tend to appreciate clarity, direction, milestones and knowing what needs to happen next. Having a plan can help you focus and move forward.",
      helpsWhen: "There are deadlines, multiple priorities or a clear outcome to achieve.",
      othersNotice: "You establish milestones, clarify ownership, and drive toward completion.",
      remember: "Sometimes new information makes it useful to keep an option open or change the plan."
    },
    sideB: {
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

export const QUESTIONS = [
  {
    id: 1,
    dimension: 1,
    prompt: "You are trying to make sense of a new assignment. What are you more likely to do?",
    optionA: {
      text: "Talk about it with someone because the conversation helps me develop my thinking.",
      side: "A" // Talk Through
    },
    optionB: {
      text: "Spend some time thinking about it myself before discussing my view.",
      side: "B" // Think Through
    }
  },
  {
    id: 2,
    dimension: 2,
    prompt: "Someone is introducing you to a new project. What helps you understand it more quickly?",
    optionA: {
      text: "Understanding the overall purpose, connections and what the project could lead to.",
      side: "A" // Big Picture
    },
    optionB: {
      text: "Understanding the specific requirements, examples and what actually needs to happen.",
      side: "B" // Details
    }
  },
  {
    id: 3,
    dimension: 3,
    prompt: "Two possible solutions could both work. What are you more likely to consider first?",
    optionA: {
      text: "Which solution can be supported most clearly by reasoning and evidence.",
      side: "A" // What Makes Sense
    },
    optionB: {
      text: "Which solution best considers the circumstances and people involved.",
      side: "B" // What Matters to People
    }
  },
  {
    id: 4,
    dimension: 4,
    prompt: "You receive an assignment that is due in several weeks. What feels more natural?",
    optionA: {
      text: "Establish the key steps and timeline reasonably early.",
      side: "A" // Plan It
    },
    optionB: {
      text: "Keep the approach open and adjust it as I learn more.",
      side: "B" // Adapt It
    }
  },
  {
    id: 5,
    dimension: 1,
    prompt: "When somebody asks for your opinion unexpectedly, what feels more natural?",
    optionA: {
      text: "Begin talking through my initial thoughts and develop the answer as I speak.",
      side: "A" // Talk Through
    },
    optionB: {
      text: "Take a moment to organise my thinking before giving my view.",
      side: "B" // Think Through
    }
  },
  {
    id: 6,
    dimension: 2,
    prompt: "When learning how something works in the organisation, which question are you more naturally drawn to?",
    optionA: {
      text: "\"How does this connect with everything else?\"",
      side: "A" // Big Picture
    },
    optionB: {
      text: "\"How does this actually work in practice?\"",
      side: "B" // Details
    }
  },
  {
    id: 7,
    dimension: 3,
    prompt: "You need to give someone developmental feedback. What do you naturally focus on first?",
    optionA: {
      text: "Making the feedback clear, reasonable and supported by what I observed.",
      side: "A" // What Makes Sense
    },
    optionB: {
      text: "Considering how to make the feedback useful while taking the person's situation into account.",
      side: "B" // What Matters to People
    }
  },
  {
    id: 8,
    dimension: 4,
    prompt: "You have several onboarding activities to complete this week. What would you normally prefer?",
    optionA: {
      text: "Decide when I will complete them and work through the plan.",
      side: "A" // Plan It
    },
    optionB: {
      text: "Keep some flexibility and decide as the week develops.",
      side: "B" // Adapt It
    }
  },
  {
    id: 9,
    dimension: 1,
    prompt: "You are working through a difficult problem. Which approach helps you more?",
    optionA: {
      text: "Discussing the problem with someone and testing ideas aloud.",
      side: "A" // Talk Through
    },
    optionB: {
      text: "Having some uninterrupted time to work through the problem in my head first.",
      side: "B" // Think Through
    }
  },
  {
    id: 10,
    dimension: 2,
    prompt: "When a mentor shares an experience with you, what are you most interested in hearing?",
    optionA: {
      text: "The wider lesson, pattern or insight that can be applied to other situations.",
      side: "A" // Big Picture
    },
    optionB: {
      text: "What happened, what was done and the specific lessons from that situation.",
      side: "B" // Details
    }
  },
  {
    id: 11,
    dimension: 3,
    prompt: "When making a difficult decision, which question are you more likely to ask yourself first?",
    optionA: {
      text: "\"What makes the most sense based on what I know?\"",
      side: "A" // What Makes Sense
    },
    optionB: {
      text: "\"How will this affect the people involved?\"",
      side: "B" // What Matters to People
    }
  },
  {
    id: 12,
    dimension: 4,
    prompt: "Before an important meeting or discussion, what would you usually prefer?",
    optionA: {
      text: "Know the purpose, key topics and what needs to be achieved.",
      side: "A" // Plan It
    },
    optionB: {
      text: "Know the general purpose but leave room for the conversation to develop.",
      side: "B" // Adapt It
    }
  },
  {
    id: 13,
    dimension: 1,
    prompt: "You have an idea that is not yet fully formed. What feels more natural?",
    optionA: {
      text: "Share the idea with someone and use the conversation to shape it.",
      side: "A" // Talk Through
    },
    optionB: {
      text: "Develop the idea further on my own before sharing it.",
      side: "B" // Think Through
    }
  },
  {
    id: 14,
    dimension: 2,
    prompt: "When you hear about a new organisational initiative, what grabs your attention first?",
    optionA: {
      text: "Why it is happening, how things connect and what it could lead to.",
      side: "A" // Big Picture
    },
    optionB: {
      text: "What is changing, what the key facts are and what people need to do.",
      side: "B" // Details
    }
  },
  {
    id: 15,
    dimension: 3,
    prompt: "A colleague asks you to help choose between two approaches. Both are workable. What are you more likely to emphasise?",
    optionA: {
      text: "Which approach is more consistent, efficient or logically defensible.",
      side: "A" // What Makes Sense
    },
    optionB: {
      text: "Which approach better considers the needs and circumstances of those affected.",
      side: "B" // What Matters to People
    }
  },
  {
    id: 16,
    dimension: 4,
    prompt: "You know the required outcome of an assignment but not exactly how to get there. Which approach feels more comfortable?",
    optionA: {
      text: "Define an approach early and work systematically towards the outcome.",
      side: "A" // Plan It
    },
    optionB: {
      text: "Explore different approaches and adjust as I discover what works.",
      side: "B" // Adapt It
    }
  },
  {
    id: 17,
    dimension: 1,
    prompt: "You have just received a lot of new information. What helps you make sense of it?",
    optionA: {
      text: "Talking through the information with someone and hearing myself work through it.",
      side: "A" // Talk Through
    },
    optionB: {
      text: "Having time to review and process the information quietly before discussing it.",
      side: "B" // Think Through
    }
  },
  {
    id: 18,
    dimension: 2,
    prompt: "When learning something unfamiliar, what usually helps you first?",
    optionA: {
      text: "Understanding the overall concept and seeing how the different pieces connect.",
      side: "A" // Big Picture
    },
    optionB: {
      text: "Seeing a concrete example, demonstration or step-by-step explanation.",
      side: "B" // Details
    }
  },
  {
    id: 19,
    dimension: 3,
    prompt: "A team has to make an unpopular but necessary decision. What are you more likely to focus on?",
    optionA: {
      text: "Whether the decision is fair, consistent and supported by sound reasoning.",
      side: "A" // What Makes Sense
    },
    optionB: {
      text: "How the decision can take account of the people affected and their circumstances.",
      side: "B" // What Matters to People
    }
  },
  {
    id: 20,
    dimension: 4,
    prompt: "You have a plan, but new information appears halfway through the work. What is your more natural response?",
    optionA: {
      text: "Revisit the plan, clarify the changes and establish the new way forward.",
      side: "A" // Plan It
    },
    optionB: {
      text: "Adjust the approach as needed and see what the new information makes possible.",
      side: "B" // Adapt It
    }
  },
  {
    id: 21,
    dimension: 1,
    prompt: "Your mentor asks, \"What do you think?\" about an unfamiliar situation. Which response feels more natural?",
    optionA: {
      text: "Start discussing what I notice and use the conversation to refine my view.",
      side: "A" // Talk Through
    },
    optionB: {
      text: "Ask for a little time to think before giving a considered response.",
      side: "B" // Think Through
    }
  },
  {
    id: 22,
    dimension: 2,
    prompt: "When somebody presents a new idea, what are you more likely to notice first?",
    optionA: {
      text: "The potential, connections and possibilities behind the idea.",
      side: "A" // Big Picture
    },
    optionB: {
      text: "The facts, feasibility and specific details needed to make it work.",
      side: "B" // Details
    }
  },
  {
    id: 23,
    dimension: 3,
    prompt: "When people disagree about what to do, what tends to guide your judgement first?",
    optionA: {
      text: "Which argument is most consistent and makes the strongest sense.",
      side: "A" // What Makes Sense
    },
    optionB: {
      text: "Which approach best respects the needs, values and circumstances of those involved.",
      side: "B" // What Matters to People
    }
  },
  {
    id: 24,
    dimension: 4,
    prompt: "When beginning something new, what gives you greater comfort?",
    optionA: {
      text: "Having enough clarity about the direction, priorities and next steps.",
      side: "A" // Plan It
    },
    optionB: {
      text: "Having enough freedom to explore, respond and change direction if necessary.",
      side: "B" // Adapt It
    }
  }
];

export const QUESTION_25 = {
  id: 25,
  title: "One Thing My Mentor Should Know About Me",
  instruction: "Choose ONE statement that you believe would be most useful for your mentor to understand about you.",
  options: [
    { key: "A", text: "Talking things through often helps me develop my thinking." },
    { key: "B", text: "Give me some time to think and I will usually contribute more." },
    { key: "C", text: "I engage quickly when I understand the bigger picture and where something could lead." },
    { key: "D", text: "Specific examples and clear details help me understand something quickly." },
    { key: "E", text: "I appreciate questions that challenge my reasoning and help me test whether something makes sense." },
    { key: "F", text: "I value conversations that consider the people, relationships and circumstances involved." },
    { key: "G", text: "Clear expectations and next steps help me move forward." },
    { key: "H", text: "Give me room to explore and adjust as I learn." }
  ]
};

// Map of the 16 PSP Style Codes
export const PSP_CODES = {
  "TBSP": { processing: "Talk Through", info: "Big Picture", decision: "Makes Sense", action: "Plan It" },
  "TBSA": { processing: "Talk Through", info: "Big Picture", decision: "Makes Sense", action: "Adapt It" },
  "TBMP": { processing: "Talk Through", info: "Big Picture", decision: "Matters to People", action: "Plan It" },
  "TBMA": { processing: "Talk Through", info: "Big Picture", decision: "Matters to People", action: "Adapt It" },
  "TDSP": { processing: "Talk Through", info: "Details", decision: "Makes Sense", action: "Plan It" },
  "TDSA": { processing: "Talk Through", info: "Details", decision: "Makes Sense", action: "Adapt It" },
  "TDMP": { processing: "Talk Through", info: "Details", decision: "Matters to People", action: "Plan It" },
  "TDMA": { processing: "Talk Through", info: "Details", decision: "Matters to People", action: "Adapt It" },
  "RBSP": { processing: "Think Through", info: "Big Picture", decision: "Makes Sense", action: "Plan It" },
  "RBSA": { processing: "Think Through", info: "Big Picture", decision: "Makes Sense", action: "Adapt It" },
  "RBMP": { processing: "Think Through", info: "Big Picture", decision: "Matters to People", action: "Plan It" },
  "RBMA": { processing: "Think Through", info: "Big Picture", decision: "Matters to People", action: "Adapt It" },
  "RDSP": { processing: "Think Through", info: "Details", decision: "Makes Sense", action: "Plan It" },
  "RDSA": { processing: "Think Through", info: "Details", decision: "Makes Sense", action: "Adapt It" },
  "RDMP": { processing: "Think Through", info: "Details", decision: "Matters to People", action: "Plan It" },
  "RDMA": { processing: "Think Through", info: "Details", decision: "Matters to People", action: "Adapt It" }
};

export const MENTOR_CONSIDERATIONS = {
  "T": "allowing time for verbal exploration and conversational brainstorming,",
  "R": "giving important questions a little reflection time before expecting contributions,",
  "B": "helping connect ideas and assignments to the wider organizational context,",
  "D": "providing specific examples, concrete demonstrations, and practical expectations,",
  "S": "challenging reasoning logically and walking through objective criteria,",
  "M": "acknowledging individual circumstances, team relationships, and personal impact,",
  "P": "agreeing on clear milestones and next steps while maintaining structure,",
  "A": "leaving room to experiment, iterate, and adjust as new insights emerge."
};
