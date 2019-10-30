import {ACTION_EXETUTION, ACTION_SETTER} from "./actionConst";

export const actionSetter = (reducer, payload) => (
    {
        type: ACTION_SETTER,
        reducer,
        payload
    }
)
