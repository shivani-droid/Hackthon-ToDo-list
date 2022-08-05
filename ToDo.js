import React from 'react';



const ToDo = ({ toDo, markDone, setUpdateData, deleteTask }) => {
  return(
    <>
      {toDo && toDo
      .sort((a, b) => a.id > b.id ? 1 : -1)
      .map( (task, index) => {
        return(
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <div className={ task.status ? 'done' : '' }>
                <span className="taskNumber">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </div>
              <div className="btn">
                <button title="Completed / Not Completed"
                  onClick={ (e) => markDone(task.id) }
                >
                  
                </button>

                {task.status ? null : (
                  <button title="Edit"
                    onClick={ () => setUpdateData({ 
                      id: task.id, 
                      title: task.title, 
                      status: task.status ? true : false
                    }) }
                  >
                    
                  </button>
                )}

                <button title="Delete"
                  onClick={() => deleteTask(task.id)}
                >
                
                </button>
              </div>
            </div>
          </React.Fragment>
        )
      })
      }  
    </>
  )
}

export default ToDo;