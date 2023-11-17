import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, InputAdornment, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import './resourcesStyle.css'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/rootStore';
import { ResourcesList } from '../../utils/dummyData';
import { SetResources, UpdateSearchResource, UpdateSelectedState } from '../../store/resourceSlicer';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import SearchIcon from '@mui/icons-material/Search';
import { IResource } from '../../store/storeInterface';
function Resources() {
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const Resources = useSelector((state: RootState) => state.resource.Resources)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SetResources(ResourcesList))
  }, [])
  return (
    <div className='mainResourceContainer'>
      <div onClick={handleClick} className='collapseheader'>
        <p>Resources</p>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className='collapsedContainer'>
          <TextField className='inputField' placeholder='Search resources' size="small"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                 <SearchIcon/>
                </InputAdornment>
              ),
            }}
            onChange={(e)=>{
              dispatch(UpdateSearchResource(e.target.value))
            }}
          />
          <div className='resourceList'>
            {Resources && Resources.map((item:IResource) => (
              <div className='profileCard' style={{ backgroundColor: item.selected ?'#F2FFF2':'' }} key={item.id} onClick={() => dispatch(UpdateSelectedState(item.id))}>
                <div className='profile'>
                  <img src={item.image} className='profileImage' alt={item.image} />
                  <p>{item.name}</p>
                </div>
                {item.selected ? <CheckCircleRoundedIcon style={{color:'green'}}/> : <></>}
              </div>
            ))}
          </div>
         
        </div>
      </Collapse>
    </div>
  )
}

export default Resources
