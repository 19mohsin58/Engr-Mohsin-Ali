

const INITIAL_STATE = {
    
    current_user : {}
} 

export  default (state = INITIAL_STATE , actions ) =>{
    switch(actions.type){
        case  'SETDATA' :
            console.log('currentuser>>>>', actions.payload)
    }
    return state;
}
