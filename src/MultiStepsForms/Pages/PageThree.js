import React, { useContext } from 'react';
import noteContext from './NoteContext';
import './PageThree.css';

function PageThree({activeStep , handleBack , handleNext,steps}) {
  const {userData} = useContext(noteContext);
  console.log(userData);
  return (
    <div className='mt-3 third_container'>
      <div>
      <p>{userData.FirstName}</p>
      <p>{userData.LastName}</p>
      <p>{userData.Email}</p>
      <p>{userData.Age}</p>
      <p>{userData.Height}</p>
      <p>{userData.Gender}</p>
      <p>{userData.MiddleName}</p>
      <p>{userData.Mobile}</p>
      <p>{userData.BirthDay}</p>
      <p>{userData.BloodGroup}</p>
      <p>{userData.Weight}</p>
      <p>{userData.MaritalStatus}</p>
      <p>{userData.values.Address1}</p>
      <p>{userData.values.Address2}</p>
      </div>
      <div className='btn-container'>
            <button className=' btn btn-info'
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </button>
            <button type='submit' className='btn btn-info'>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
    </div>
  )
}

export default PageThree
