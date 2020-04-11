import carelessDriving from "../../assets/images/pictographs/careless-driving.png";
import emergencyContact from "../../assets/images/pictographs/emergency.jpg";
import gasStation from "../../assets/images/pictographs/gas-station.png";
import healthcard from "../../assets/images/pictographs/health-card.jpg";
import hospital from "../../assets/images/pictographs/hospital.png";
import insurance from "../../assets/images/pictographs/insurance.svg";
import license from "../../assets/images/pictographs/license.svg";
import painscale from "../../assets/images/pictographs/pain-scale.jpg";
import seatbelt from "../../assets/images/pictographs/seat-belt.png";
import speedlimit from "../../assets/images/pictographs/speed-limit.png";
import stopsign from "../../assets/images/pictographs/stop-sign.jpg";
import towTruck from "../../assets/images/pictographs/tow-truck.jpg";
import ahead from "../../assets/images/pictographs/ahead.png";
import changingLane from "../../assets/images/pictographs/change.png";
import human from "../../assets/images/pictographs/human.png";
import yes from "../../assets/images/pictographs/yes.png";
import no from "../../assets/images/pictographs/no.png";
import communicationMethod from "../../assets/images/pictographs/comMethod.png";
import symptoms from "../../assets/images/pictographs/symptoms.png";
import howLong from "../../assets/images/pictographs/Howlong.png";
import treatment from "../../assets/images/pictographs/treatment.png";
import fire from "../../assets/images/pictographs/fire.png";
import flood from "../../assets/images/pictographs/flood.png";
import spill from "../../assets/images/pictographs/spill.png";
import accident from "../../assets/images/pictographs/accident.png";
import group from "../../assets/images/pictographs/group.png";

const ALONE = Object.freeze({
  primaryText: "Were you alone or with others?",
  images: [human, group],
});

const TOFROM = Object.freeze({
  primaryText: "Where were you coming from, and where are you going?",
  images: [],
});

const DATA_SHEETS = Object.freeze({
  primaryText: "Do you have data sheets for the content?",
  images: [yes, no],
});

const CLEAR_AREA = Object.freeze({
  primaryText: "There is a _____ and we need you to clear the area",
  images: [fire, flood, spill, accident],
});

const TURN_AROUND = Object.freeze({
  primaryText: 'There is nothing to worry about we are just investigating an incident and need you to turn around',
  images: [],
});

const ROAD_CLOSED = Object.freeze({
  primaryText: "Is there somewhere nearby you can stay tonight? As the road will be closed till morning",
  images: [yes, no],
});

const WHERE_WHEN_PICTOGRAPH = Object.freeze({
  primaryText: "Where and what time did this happen?",
  images: [],
});

const COMMUNICATION_METHOD = Object.freeze({
  primaryText: "Preferred method of communication",
  images: [communicationMethod],
});

const HOW_LONG = Object.freeze({
  primaryText: "How long have you had Symptoms",
  images: [howLong],
});

const SYMPTOMS = Object.freeze({
  primaryText: "Situation, History and Symptoms",
  images: [symptoms],
});

const TREATMENT = Object.freeze({
  primaryText: "Treatment and Care",
  images: [treatment],
});

const WHAT_CAR_PICTOGRAPH = Object.freeze({
  primaryText: "What kind of car?",
  images: [],
});

const WHAT_HAPPEND_PICTOGRAPH = Object.freeze({
  primaryText: "What happened?",
  images: [],
});

const APPROXIMATE_SPEED_PICTOGRAPH = Object.freeze({
  primaryText: "What was the approximate speed of travel?",
  images: [],
});

const CHANGING_LANES_PICTOGRAPH = Object.freeze({
  primaryText: "Were you changing lanes or driving ahead?",
  images: [ahead, changingLane],
});

const DID_YOU_BRAKE_PICTOGRAPH = Object.freeze({
  primaryText: "Did you brake and if so for how long?",
  images: [yes, no],
});

const OTHER_VEHICLE_PICTOGRAPH = Object.freeze({
  primaryText: "Can you describe the other vehicle involved in the accident?",
  images: [yes, no],
});

const WHO_WAS_DRIVING_PICTOGRAPH = Object.freeze({
  primaryText: "Who was driving that car?",
  images: [],
});

const ONSET_TIME_PICTOGRAPH = Object.freeze({
  primaryText: "When did this start?",
  images: [],
});

const DOING_AT_ONSET_PICTOGRAPH = Object.freeze({
  primaryText: "What was being done when this started?",
  images: [],
});

const CURRENT_MEDICATIONS_PICTOGRAPH = Object.freeze({
  primaryText: "What medications are you currently taking?",
  images: [],
});

const ALLERGIES_PICTOGRAPH = Object.freeze({
  primaryText: "Do you have any allergies?",
  images: [yes, no],
});

const ID_PICTOGRAPH = Object.freeze({
  primaryText: "Please show me your ID",
  images: [license, healthcard],
});

const INSURANCE_PICTOGRAPH = Object.freeze({
  primaryText: "Please show me your insurance",
  images: [insurance],
});

const PAIN_SCALE_PICTOGRAPH = Object.freeze({
  primaryText: "What is your pain level and location of the pain?",
  images: [painscale, human],
});

const POLICE_STOP_PICTOGRAPH = Object.freeze({
  primaryText: "I stopped you because",
  images: [speedlimit, stopsign, seatbelt, carelessDriving],
});

const WHERE_TO_FIND = Object.freeze({
  primaryText: "Where can I find",
  images: [hospital, gasStation],
});

const CONTACT_HELP = Object.freeze({
  primaryText: "Can you help me contact",
  images: [emergencyContact, towTruck],
});

export const PAGE_RENDER_DATA = Object.freeze({
  fire: {
    headerText: "Fire",
    pictographData: [
      PAIN_SCALE_PICTOGRAPH, 
      ID_PICTOGRAPH,
      ALONE,
      TOFROM,
      DATA_SHEETS,
      CLEAR_AREA,
      TURN_AROUND,
      ROAD_CLOSED,
    ],
  },
  ems: {
    headerText: "EMS",
    pictographData: [
      PAIN_SCALE_PICTOGRAPH,
      ID_PICTOGRAPH,
      ONSET_TIME_PICTOGRAPH,
      DOING_AT_ONSET_PICTOGRAPH,
      CURRENT_MEDICATIONS_PICTOGRAPH,
      ALLERGIES_PICTOGRAPH,
      SYMPTOMS,
      TREATMENT,
      HOW_LONG,
    ],
  },
  police: {
    headerText: "Police",
    pictographData: [
      ID_PICTOGRAPH,
      INSURANCE_PICTOGRAPH,
      POLICE_STOP_PICTOGRAPH,
      WHAT_HAPPEND_PICTOGRAPH,
      WHERE_WHEN_PICTOGRAPH,
      WHAT_CAR_PICTOGRAPH,
      WHO_WAS_DRIVING_PICTOGRAPH,
      APPROXIMATE_SPEED_PICTOGRAPH,
      CHANGING_LANES_PICTOGRAPH,
      DID_YOU_BRAKE_PICTOGRAPH,
      OTHER_VEHICLE_PICTOGRAPH,
    ],
  },
  help: {
    headerText: "General Help",
    pictographData: [WHERE_TO_FIND, CONTACT_HELP, COMMUNICATION_METHOD],
  },
});
