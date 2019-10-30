import {ACTION_SETTER} from "../actions/actionConst";
import {getStorage} from "../utils/getStorage";

const initState = {
}

export const mainReducer = (state = getStorage().getInitStorage('mainReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.reducer === 'mainReducer') {
        if (action.type === ACTION_SETTER) {
            newState = Object.assign(newState, action.payload);
        }
    }

    return newState;

}
