import {createNewAppointment, 
    addNewSpeciality, 
    listAllSpecialities, 
    removeSpeciality, 
    getSpecialityDetails, 
    updateSpeciality, 
    retrieveUserDetails, 
    retrieveAllSpecialists, 
    retrieveSpecialistDetails, 
    getSpecialistSchedule, 
    addNewTimeSlots, 
    updateSlot, 
    removeTimeSlot,
    cancelAppointment, 
    listAllAppointments
} from "../use-cases/index.js";

import makePostAppointment from "./post-appointment.js";
import makePostSpeciality from "./post-speciality.js";
import makeGetSpecialities from "./get-specialities.js";
import makeDeleteSpeciality from "./delete-speciality.js";
import makeGetSpecialityById from "./get-speciality-by-id.js";
import makeUpdateASpeciality from "./update-speciality.js";
import makeGetUser from "./get-user.js";
import makeGetSpecialists from "./getSpecialists.js";
import makeGetSpecialistById from "./getSpecialistById.js";
import makeGetSpecialistSchedule from "./getSpecialistSchedule.js";
import makePostNewTimeSlots from "./post-new-time-slots.js";
import makePutScheduleSlot from "./put-schedule-slot.js";
import makeDeleteTimeSlot from "./delete-time-slot.js";
import makeDeleteAppointment from "./delete-appointment.js";
import makeGetAppointments from "./get-appointments.js";

const postAppointment = makePostAppointment({ createNewAppointment });
const postSpeciality = makePostSpeciality({ addNewSpeciality });
const getSpecialities = makeGetSpecialities({ listAllSpecialities });
const deleteSpeciality = makeDeleteSpeciality({ removeSpeciality });
const getSpecialityById = makeGetSpecialityById({ getSpecialityDetails})
const updateASpeciality = makeUpdateASpeciality({ updateSpeciality })
const getUser = makeGetUser({retrieveUserDetails})
const getSpecialists = makeGetSpecialists({retrieveAllSpecialists})
const getSpecialistById = makeGetSpecialistById({retrieveSpecialistDetails})
const getSchedule = makeGetSpecialistSchedule({getSpecialistSchedule})
const postNewTimeSlots = makePostNewTimeSlots({addNewTimeSlots})
const putScheduleSlot = makePutScheduleSlot({updateSlot})
const deleteTimeSlot = makeDeleteTimeSlot({removeTimeSlot})
const deleteAppointment = makeDeleteAppointment({cancelAppointment})
const getAppointments = makeGetAppointments({listAllAppointments})

const appointmentController = Object.freeze({
    postAppointment,
    postSpeciality, 
    getSpecialities,
    deleteSpeciality,
    getSpecialityById, 
    updateASpeciality,
    getUser, 
    getSpecialists, 
    getSpecialistById,
    getSchedule, 
    postNewTimeSlots, 
    putScheduleSlot, 
    deleteTimeSlot, 
    deleteAppointment, 
    getAppointments
});

export default appointmentController;
export { postAppointment, 
    postSpeciality, 
    getSpecialities, 
    deleteSpeciality, 
    getSpecialityById, 
    updateASpeciality, 
    getUser, 
    getSpecialists, 
    getSpecialistById,
    getSchedule, 
    postNewTimeSlots, 
    putScheduleSlot, 
    deleteTimeSlot, 
    deleteAppointment, 
    getAppointments

};