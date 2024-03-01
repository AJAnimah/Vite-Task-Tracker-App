import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';

function TaskList({ task }) {
  return (
    <div>
      <Card variant='contained' className={task.reminder && 'actve'} sx={{ background: 'pink', marginTop: '2rem' }}>
        <CardContent>
          <Typography>
            {task.title}
          </Typography>
          <Typography variant='subtitle1' gutterBottom>
            {task.day}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}

export default TaskList;