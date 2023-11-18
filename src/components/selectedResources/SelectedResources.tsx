import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../store/rootStore'
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import { TextField } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import './selectedResource.css'
import EmptyImage from '../../../src/utils/images/Empty.png'
import { UpdateSelectedState } from '../../store/resourceSlicer';
import { IResource } from '../../store/storeInterface';
function SelectedResources() {
    const Resources = useSelector((state: RootState) => state.resource.SelectedResources)
    const [isEmpty, SetIsEmpty] = useState<boolean>(true)
    const dispatch=useDispatch()
    useEffect(() => {
        let CheckEmpty = Resources.some((obj: any) => obj.selected)
        SetIsEmpty(!CheckEmpty)
    }, [Resources])

    return (
        <div className='selectedMainContainer'>
            {isEmpty ?
                <div className='emptyContainer'>
                    <img src={EmptyImage} width={350} height={250} />
                    <p className='emptyText'>Select resources / groups to schedule date and time</p>
                </div>
                :
                <>
                    <div className='selectedResourceContainer'>
                        {Resources && Resources.map((item:IResource) => (
                            <>
                                {item.selected ?
                                    <div key={item.id} className='SeletedMainCard'>
                                        <div className='selectedProfileCard' >
                                            <div className='selectedProfile'>
                                                <img src={item.image} className='profileImage' />
                                                <p>{item.name}</p>
                                            </div>
                                            <div className='deleteIcon' onClick={()=>{
                                                dispatch(UpdateSelectedState(item.id))
                                            }}>
                                                <DeleteOutlineRoundedIcon />
                                            </div>
                                        </div>
                                        <div className='selectedActions'>
                                            <div className='selectedInputs'>
                                                <TextField type='datetime-local' label="Start Date & time"  focused/>
                                                <TextField type='datetime-local' label="End Date & time" focused />
                                            </div>
                                            <AddIcon className='addIcon' />

                                        </div>
                                    </div> : <></>
                                }
                            </>
                        ))}
                    </div>
                    <div className='footerActions'>
                        <button className='cancelButton'>Cancel</button>
                        <button className='saveButton'>Save</button>
                    </div></>}
        </div>
    )
}

export default SelectedResources
