import { calculateInititative } from "../../shared/Utils";
import characterModel from "./CharacterModel.json";

// Actions
const SET_CHARACTER = "SET_CHARACTER";
const SET_PROPERTY = "SET_PROPERTY";
const SET_INITITATIVE = "SET_INITITATIVE";
const SET_CLASSES = "SET_CLASSES";
const SET_ABILITY = "SET_ABILITY";
const SET_SKILL = "SET_SKILLS";
const SET_ABILITIESINFO = "SET_ABILITIESINFO";
const SET_SKILLSINFO = "SET_SKILLSINFO";
const SET_TRAITS = "SET_TRAITS";
const SET_FEATS = "SET_FEATS";
const SET_SAVETHROWSINFO = "SET_SAVETHROWSINFO";

// Reducer
const initialState = { character: characterModel };

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CHARACTER:
      return Object.assign({}, state, {
        character: action.payload
      });
    case SET_PROPERTY:
      let name = "",
        value = "";
      if (action.value !== "") {
        // [COM] Distinguish between int and string value
        if (!isNaN(parseInt(action.value)))
          action.value = parseInt(action.value);
        // [COM] Manage nested objects
        let property = action.name.split("-");
        if (property.length > 1) {
          name = property[0];
          value = {
            ...state.character[property[0]],
            [property[1]]: action.value
          };
        } else {
          name = property[0];
          value = action.value;
        }
        return Object.assign({}, state, {
          ...state,
          character: { ...state.character, [name]: value }
        });
      }
      return state;
    case SET_INITITATIVE:
      return Object.assign({}, state, {
        ...state,
        character: {
          ...state.character,
          initiative: {
            ...state.character.initiative,
            value: calculateInititative(
              state.character.abilities.dex.mod,
              state.character.initiative.misc
            )
          }
        }
      });
    // case SET_CLASSES:
    //   return Object.assign({}, state, {
    //     classes: action.payload
    //   });
    // case SET_ABILITY:
    //   return Object.assign({}, state, {
    //     ...state,
    //     character: {
    //       ...state.character,
    //       abilities: {
    //         ...state.character.abilities,
    //         [action.name]: action.value
    //       }
    //     }
    //   });
    // case SET_SKILL:
    //   return Object.assign({}, state, {
    //     ...state,
    //     character: {
    //       ...state.character,
    //       skills: { ...state.character.skills, [action.name]: action.value }
    //     }
    //   });
    case SET_ABILITIESINFO:
      return Object.assign({}, state, {
        abilitiesInfo: action.payload
      });
    case SET_SKILLSINFO:
      return Object.assign({}, state, {
        skillsInfo: action.payload
      });
    // case SET_TRAITS:
    //   return Object.assign({}, state, {
    //     traits: action.payload
    //   });
    // case SET_FEATS:
    //   return Object.assign({}, state, {
    //     feats: action.payload
    //   });
    // case SET_SAVETHROWSINFO:
    //   return Object.assign({}, state, {
    //     saveThrowsInfo: action.payload
    //   });
    default:
      return state;
  }
}

// Action Creators
export function setCharacter(payload) {
  return { type: SET_CHARACTER, payload };
}

export function setProperty(name, value) {
  return { type: SET_PROPERTY, name, value };
}

export function setInitiative(name, value) {
  return { type: SET_INITITATIVE, name, value };
}

export function setClasses(payload) {
  return { type: SET_CLASSES, payload };
}

export function setAbility(name, value) {
  return { type: SET_ABILITY, name, value };
}

export function setSkill(name, value) {
  return { type: SET_SKILL, name, value };
}

export function setAbilitiesInfo(payload) {
  return { type: SET_ABILITIESINFO, payload };
}

export function setSkillsInfo(payload) {
  return { type: SET_SKILLSINFO, payload };
}

export function setTraits(payload) {
  return { type: SET_TRAITS, payload };
}

export function setFeats(payload) {
  return { type: SET_FEATS, payload };
}

export function setSaveThrowsInfo(payload) {
  return { type: SET_SAVETHROWSINFO, payload };
}
