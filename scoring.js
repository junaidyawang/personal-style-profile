// Scoring logic and calculations for PSP

import { DIMENSIONS } from './data.js';

export function calculatePSP(answers, bestFitOverrides = {}) {
  // answers: object where key is questionId (1-24), value is 'A' or 'B'
  // bestFitOverrides: { [dimensionId]: 'A' | 'B' } for 3-3 ties
  
  const dimScores = {
    1: { A: 0, B: 0 },
    2: { A: 0, B: 0 },
    3: { A: 0, B: 0 },
    4: { A: 0, B: 0 }
  };

  // Questions 1-24:
  // Q1, 5, 9, 13, 17, 21 -> Dim 1
  // Q2, 6, 10, 14, 18, 22 -> Dim 2
  // Q3, 7, 11, 15, 19, 23 -> Dim 3
  // Q4, 8, 12, 16, 20, 24 -> Dim 4
  for (let qId = 1; qId <= 24; qId++) {
    const dim = ((qId - 1) % 4) + 1;
    const ans = answers[qId];
    if (ans === 'A') {
      dimScores[dim].A++;
    } else if (ans === 'B') {
      dimScores[dim].B++;
    }
  }

  const dimensionResults = {};
  const ties = []; // dimension IDs that need best-fit confirmation
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
      // 3 - 3 Tie
      if (bestFitOverrides[dim]) {
        preference = bestFitOverrides[dim];
        codeLetter = preference === 'A' ? dimMeta.sideA.code : dimMeta.sideB.code;
        strength = "Balanced (Confirmed Best-Fit)";
      } else {
        ties.push(dim);
        preference = null;
        strength = "Balanced / Context Dependent";
      }
    }

    dimensionResults[dim] = {
      dimension: dimMeta,
      scoreA,
      scoreB,
      preference,
      strength,
      codeLetter,
      chosenSide: preference === 'A' ? dimMeta.sideA : (preference === 'B' ? dimMeta.sideB : null)
    };

    if (codeLetter) {
      styleCode += codeLetter;
    }
  }

  return {
    dimScores,
    dimensionResults,
    ties,
    isComplete: ties.length === 0,
    styleCode: ties.length === 0 ? styleCode : null
  };
}
