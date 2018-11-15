import { combineReducers } from 'redux-immutable';
import { reducer as detail} from "../containers/detail/store";
import { reducer as leftpart} from "../components/leftpart/store";
const reducer= combineReducers({
  detail,
  leftpart
})
export default reducer;
  