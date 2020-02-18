
export const toDos = [
        {id: 1, content: 'Finish React Homework', complete: false},
        {id: 2, content: 'Clean up yard', complete: false},
        {id: 3, content: 'Go to work', complete: false}
     
]
    

export const toDoReducer = (toDos, action) => {
    if(action.type === 'ADD_ITEM'){
        return toDos.map(todo => {
            if(todo.id === action.payload) {
                todo.add = false;
                    console.log(todo)

            }
            return todo
            
        })
    }
    if(action.type ==='REMOVE_ITEM') {
        return toDos.map(todo => {
            if(todo.id === action.payload){
                todo.add = true
            }
            return todo
        })
    }
}