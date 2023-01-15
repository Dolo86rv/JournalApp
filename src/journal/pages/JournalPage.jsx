import { AddOutlined } from '@mui/icons-material'
import { IconButton, Typography } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSetectedView } from '../views'

export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*<Typography>Incididunt deserunt nulla duis pariatur esse dolor. Anim nostrud exercitation ex consequat nulla commodo. Non irure minim laborum eu incididunt sunt Lorem duis eu. Nostrud adipisicing qui eu culpa consectetur occaecat ut ut.</Typography>*/}
    
      {/* NothingSetected */}
      {/* <NothingSetectedView /> */}
      <NothingSetectedView />
      {/* NoteView */}
      {/*<NoteView />*/}

      <IconButton
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined  sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>    
  )
}
