import { authConstants } from "../actions/constants";

const initState={
    users:[
        {email:"user1@gmail.com",password:"123456",mobileNumber:"1234567890"},
        {email:"mohammedanas44@gmail.com",password:"Estore@2969",mobileNumber:"1234567890"},

],
currentUser:{},
authenticated:false,
errorMessage:""
};
export default (state=initState,action)=>{
    const users=state.users;
    const user=action.payload;
    switch(action.type){
        case authConstants.LOGIN_REQUEST:
            
            const exUser=users.filter(d=>d.email==user.email);
            if(exUser.length===1){
                if(exUser[0].password==user.password){
                    state.currentUser={
                        ...user
                    }
                    state.authenticated=true
                    state.errorMessage=""
                    localStorage.setItem("TodoUser", JSON.stringify(user));
                }
                else{
                    state.errorMessage="Wrong Password"
                }
            }
            else{
                state.errorMessage="No User Found"
            }
            
            break;

        case authConstants.REGISTER_REQUEST:
            state.users=[
                ...state.users,
                {...user}
            ]
            state.currentUser={
                ...user
            }
            state.authenticated=true
            localStorage.setItem("TodoUser", JSON.stringify(user));
            break;
            
        
        case authConstants.IS_USER_LOGGED_IN:
            const userStr = localStorage.getItem("TodoUser");
            if(userStr){
                const userStorage = JSON.parse(localStorage.getItem("TodoUser"));
                state.currentUser=userStorage;
                state.authenticated=true;
            }
            break;

        case authConstants.LOGOUT_REQUEST:
            localStorage.removeItem("TodoUser");
            state.currentUser={};
            state.authenticated=false;
            break;
        }
        return state;

}