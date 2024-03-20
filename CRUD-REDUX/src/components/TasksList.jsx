import {useSelector} from 'react-redux'

const TasksList = () => {
    const tasks=useSelector(state=>state.tasks)
    console.log(tasks)
  return (
    <div>
      {tasks.map(task=>(
        <div key={task.id}>
            <h3>{task.title}</h3>
            <h3>{task.description}</h3>
        </div>
      ))}
    </div>
  )
}

export default TasksList
