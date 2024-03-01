import React, { useState } from 'react';
import './index.css';
import Header from './components/Header';
import { Box, Typography,} from '@mui/material';
import Button from './components/Button';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';


function App() {
const [tasks, setTasks] = useState([
{id:'1',title:'React Tutorials',day: 'Feb 10 @ 2:00pm',reminder: true},
{id:'2',title:'Career Session',day: 'Feb 10 @ 5:00pm',reminder: true},
{id:'3',title:'Self Study',day: 'Feb 10 @ 8:00pm',reminder: false},
])

  const [show, setShow] = useState(false)

  const handleShow = () => {
  setShow(prevState => !prevState)
}

  return (
    <div className='App'>
      <Header />
        <Box 
          sx={{ width: '600',
          height: '100vh',
          background: '#fff',
          padding: '4rem'
          }}>
          <Box sx={{width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '1rem'}}>
            <Typography sx={{ fontSize: '16px', fontWeight: '600' }}>
            Total Task: <span style={zeroStyle}>{tasks.length}</span>
            </Typography>
            <Button onShow={handleShow} show={show}/>
          </Box>
          <Box>
            
            {
              show && <AddTask/>
            }
            
          </Box>
          <Box>
            {
              tasks.length > 0 ? tasks.map(task=>(
                <TaskList key={task.id} task={task} />
              )) : (<Typography>No Task</Typography>)
            }
          </Box>
      </Box>
      
    </div>
  );
}
const zeroStyle = {
  backgroundColor: '#3E36B0',
  color: '#fff',
  display: 'inline-block',
  borderRadius: '4px',
  padding: '2px 8px',
  fontSize: '16px',
  width: '10px',
  height: '24px',
  fontWeight: '400'
}
export default App;

