import React from 'react'
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { IconButton, Popover } from '@mui/material'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import './EmailRow.css'
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectMail } from './features/mailSlice';

function EmailRow({id, title, subject, description, time}) {
  const navigate= useNavigate();
  const dispatch= useDispatch();


  const openMail =() =>{
    dispatch(
      selectMail({
        id,
        title,
        subject,
        description,
        time,

      })    
    );
    navigate("/mail")
  };
  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <CheckBoxOutlineBlankIcon />
        <IconButton>
            <StarBorderOutlinedIcon />
        </IconButton>

        <IconButton>
            <LabelImportantOutlinedIcon />
        </IconButton>
      </div>

      <h3 className='emailRow__title'>
            {title}
      </h3>

      <div className='emailRow__message'>
            <h4>{subject}{"   "}
            <span className="emailRow__description">
                {description}
            </span>
            </h4>
      </div>

      <p className='emailRow__description'>
        {time}
      </p>

    </div>
  )
}

export default EmailRow
