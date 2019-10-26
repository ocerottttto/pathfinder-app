//  DICE CONVERTER

export const parseDice = dice => {
  if (dice.includes("d")) return parseInt(dice.replace("d", ""));
  return parseInt(dice);
};

//  DICE THROWER

export const throwDice = dice => {
  return parseInt((Math.random() * 100) % parseDice(dice)) + 1;
};

//  DICE FORMULA CONVERTER

export const parseFormula = formula => {
  let dice,
    diceThrow = 0,
    bonus = 0;
  if (formula.includes("+")) {
    const operators = formula.split("+");
    dice = operators[0];
    bonus = parseInt(operators[1]);
  } else if (formula.includes("-")) {
    const operators = formula.split("-");
    dice = operators[0];
    bonus = parseInt(operators[1]);
  } else dice = formula;

  if (formula.split("")[0] !== "d") {
    let multiplier = parseInt(dice.split("d")[0]);
    dice = dice.split("d")[1];
    while (multiplier > 0) {
      diceThrow += throwDice(dice);
      multiplier--;
    }
  } else diceThrow = throwDice(dice);
  return diceThrow + bonus;
};

//  STATS CALCULATOR

export const calculateMaxHp = (maxHp, hd, level) => {
  if (level === 1) maxHp = parseDice(hd);
  else maxHp += parseDice(hd);
  return (maxHp = isNaN(maxHp) ? 0 : parseInt(maxHp));
};

export const calculateMaxHpMod = (level, conMod) => {
  let maxHpMod = conMod * level;
  return (maxHpMod = isNaN(maxHpMod) ? 0 : parseInt(maxHpMod));
};

export const calculateInititative = (mod, misc) => {
  let score = mod + misc;
  return (score = isNaN(score) ? 0 : parseInt(score));
};

export const calculateSaveThrow = (
  baseSave,
  classBonus,
  abilityMod,
  magicMod,
  misc
) => {
  let value = baseSave + classBonus + abilityMod + magicMod + misc;
  return isNaN(value) ? 0 : parseInt(value);
};

export const calculateAbilityScore = ability => {
  let score = ability.base + ability.misc;
  return isNaN(score) ? 0 : parseInt(score);
};

export const calculateAbilityMod = score => {
  let mod = (score - 10) / 2;
  mod = mod > 0 ? mod | 0 : mod.toFixed(0);
  return isNaN(mod) ? 0 : parseInt(mod);
};

export const calculateSkillRanks = (bonus, mod, misc) => {
  let score = parseInt(bonus) + parseInt(mod) + misc;
  return isNaN(score) ? 0 : parseInt(score);
};

export const calculateSkillScore = (mod, skill) => {
  let score =
    parseInt(mod) +
    skill.ranks +
    skill.misc +
    (skill.ranks >= 1 && skill.classSkill ? 3 : 0);
  return isNaN(score) ? 0 : parseInt(score);
};
