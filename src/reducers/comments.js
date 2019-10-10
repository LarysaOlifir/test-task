import { 
  SUCCEEDED, 
  REQUESTED, 
  ADD_COMMENT, 
  GET_COMMENTS, 
  DELETE_COMMENT, 
  EDIT_COMMENT,
  TOGGLE_EDIT_COMMENT_MODE
 } from '../constants';

const comments = (state = [], action) => {
    switch (action.type) {
      case ADD_COMMENT + REQUESTED:
        return [{text: action.text, isSaving: true, id: action.fakeId}, ...state.map(comment => ({...comment, isEditing: false}))];

      case ADD_COMMENT + SUCCEEDED:
        return state.map(comment => comment.id === action.fakeId ? action.comment : comment);

      case GET_COMMENTS + SUCCEEDED:
        return action.comments;
      
      case DELETE_COMMENT + REQUESTED:
        return state.map(comment => comment.id === action.id ? {...comment, isSaving: true } : comment);

      case DELETE_COMMENT + SUCCEEDED:
        return state.filter(comment => comment.id !== action.id);;

      case EDIT_COMMENT + REQUESTED:
        return state.map(comment => comment.id === action.id ? {...comment, isSaving: true, text: action.text} : comment);

      case EDIT_COMMENT + SUCCEEDED:
        return state.map(comment => comment.id === action.comment.id ? action.comment : comment);

      case TOGGLE_EDIT_COMMENT_MODE:
          return state.map(comment => comment.id === action.id ? {...comment, isEditing: action.value} : { ...comment, isEditing: false});

      default:
        return state;
    }
  }
  
export default comments;