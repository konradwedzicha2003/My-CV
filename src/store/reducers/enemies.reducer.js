// import { initialReduxValues } from "../../config/config";

// const enemies = (state = initialReduxValues.enemies, action) => {
//     switch (action.type) {
//         case "SPAWN_ENEMY":
//             return [
//                 ...state,
//                 {
//                     ...action.payload,
//                 }
//             ]

//         case "PATCH_ENEMY":
//             return state.map(el => el.id === action.id ? {id: action.id, ...action.payload} : {...el})
            
//         default:
//             return state
//     }
// }

// export default enemies