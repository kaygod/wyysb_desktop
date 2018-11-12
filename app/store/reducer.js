import { combineReducers } from 'redux-immutable';
import { reducer as detail} from "../containers/detail/store";
const reducer= combineReducers({
  detail
})
export default reducer;
  