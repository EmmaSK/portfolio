// import axios from 'axios'

// // import history from '../history'

// /**
//  * ACTION TYPES
//  */
// const GET_AUTHOR = 'GET_AUTHOR'
// const REMOVE_AUTHOR= 'REMOVE_AUTHOR'

// /**
//  * INITIAL STATE
//  */
// const defaultAuthor = {}

// /**
//  * ACTION CREATORS
//  */
// const getAuthor = author => ({type: GET_AUTHOR, author})
// const removeAuthor = () => ({type: REMOVE_AUTHOR})

// /**
//  * THUNK CREATORS
//  */
// export const me = () => async dispatch => {
//   try {
//     const res = await axios.get('/auth/me')
//     dispatch(getAuthor(res.data || defaultAuthor))
//   } catch (err) {
//     console.error(err)
//   }
// }

// export const auth = (handle, password, method) => async dispatch => {
//   let res
//   try {
//     res = await axios.post(`/auth/${method}`, {handle, password})
//   } catch (authError) {
//     return dispatch(getUser({error: authError}))
//   }

//   try {
//     dispatch(getUser(res.data))
//     history.push('/home')
//   } catch (dispatchOrHistoryErr) {
//     console.error(dispatchOrHistoryErr)
//   }
// }

// export const logout = () => async dispatch => {
//   try {
//     await axios.post('/auth/logout')
//     dispatch(removeUser())
//     dispatch(clearCart())
//     history.push('/login')
//   } catch (err) {
//     console.error(err)
//   }
// }

// /**
//  * REDUCER
//  */
// export default function(state = defaultUser, action) {
//   switch (action.type) {
//     case GET_USER:
//       return action.user
//     case REMOVE_USER:
//       return defaultUser
//     default:
//       return state
//   }
// }
