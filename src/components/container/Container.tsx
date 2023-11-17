import { Box, Tab, Tabs } from '@mui/material'
import Resources from '../resources/Resources'
import SelectedResources from '../selectedResources/SelectedResources'
import CloseIcon from '@mui/icons-material/Close';
import './containerStyle.css'
function Container() {
  return (
    <div className='mainContainer'>
      <div>
        <div className='mainHeader'>
          <p>Assignees & Schedule</p>
          <CloseIcon />
        </div>
        <div className='mainTab'>
          <Box sx={{ borderBottom: 1, borderColor: 'divider'}} className='tab'>
            <Tabs value={"Schedule"}>
              <Tab
                className='tabs'
                value="Schedule"
                label="Schedule"
              />
            </Tabs>
          </Box>
        </div>
        <div className='mainSubContainer'>
          <div>
            <Resources />
          </div>
          <div>
            <SelectedResources />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Container
