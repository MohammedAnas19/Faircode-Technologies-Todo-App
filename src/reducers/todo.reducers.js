import { todoConstants } from "../actions/constants";

const initState=[
    {id:1,title:"Home Work Mathematics",completed:true},
    {id:2,title:"Home Work Science",completed:false},
    {id:3,title:"Home Work Malayalam",completed:false},
    {id:4,title:"Home Work Computer Science",completed:true},
]

export default (state=initState,action)=>{
    console.log(action)
    switch(action.type){
        case todoConstants.ADD_TODO_REQUEST:
            state=[
                action.payload,
                ...state
            ]
            break;
        
        case todoConstants.COMPLETE_TODO_REQUEST:
            const index=state.findIndex((i)=>i.id===action.payload.id)
            const newState=[...state]
            newState[index].completed=true
            state=[...newState]
            break;

        default:
            return state;
    }
    return state;
}