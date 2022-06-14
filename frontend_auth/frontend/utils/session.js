//needs 3 methods, create user, login, and logout
//look at rails routes to know where to send the request

//create User
export const postUser = (user) => (
    $.ajax({
        url: '/api/users',
        method: 'POST',    //is a post request because data is being sent
        data: { user },  //nests user object under keyword:user
    })
);


//login
export const postSession = (user) => (
    $.ajax({
        url:  '/api/session',
        method: 'POST',
        data: { user },  //creates a new session with the user being logged in
    })
);


//logout
export const deleteSession = () => (
   $.ajax({
    url: '/api/session',
    method: 'DELETE', //destroys the current session
   })
)