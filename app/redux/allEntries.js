import axios from "axios";

const initialState = { entries: [] };

const GET_ENTRIES = "GET_ENTRIES";
const NEW_ENTRY = "NEW_ENTRY";
const REMOVE_ENTRY = "REMOVE_ENTRY";

const getEntries = (entries) => ({
  type: GET_ENTRIES,
  entries,
});

const newEntry = (entry) => ({
  type: NEW_ENTRY,
  entry,
});

const removeEntry = (entry) => ({ type: REMOVE_ENTRY, entry });

export const fetchEntries = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/entries");
      console.log("FETCHING", data);
      dispatch(getEntries(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewEntry = (entry) => {
  return async (dispatch) => {
    try {
      const date = new Date();
      const { data } = await axios.post("/api/entries", {
        title: entry.title,
        imageUrl:
          entry.imageUrl ||
          "https://vignette.wikia.nocookie.net/haikyuu/images/e/e5/Hinata_s1-e1-1.png/revision/latest/top-crop/width/300/height/300?cb=20200508104838",
        content: entry.content,
        tags: entry.tags || [],
        date: date,
      });
      console.log("NEW", data);
      dispatch(newEntry(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const deleteEntry = (entry) => {
  return async (dispatch) => {
    await axios.delete(`/api/entries/${entry.id}`);
    dispatch(removeEntry(entry));
  };
};

export default function entriesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ENTRIES:
      return { ...state, entries: action.entries };

    case NEW_ENTRY:
      return { ...state, entries: [...state.entries, action.entry] };

    case REMOVE_ENTRY:
      return {
        ...state,
        entries: state.entries.filter((entry) => entry.id !== action.entry.id),
      };
    default:
      return state;
  }
}

// {
//   title: entry.title,
//   imageUrl: entry.imageUrl,
//   content: entry.content,
//   tags: entry.tags,
//   date: entry.date,
// }
