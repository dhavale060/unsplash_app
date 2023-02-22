import React, { useContext, useState } from 'react';
import './PageFirst.css';
import { ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import noteContext from './NoteContext';

function PageFirst({activeStep , handleBack , handleNext,steps}) {
  const {userData , setUserData} = useContext(noteContext);
  const [type , setType] = useState("text");
  // const [isSubmit , setIsSubmit] = useState(false)
  console.log(userData);
  return (
    <div>
      <Formik 
       initialValues={{FirstName :"" , LastName : "" ,Email :"",Age:"", Height : "", Gender:"",MiddleName:"" , Mobile:"" , BirthDay : "" ,
       BloodGroup : "" , Weight : "" , MaritalStatus : ""}}
       validationSchema = {yup.object({
        FirstName : yup.string().required(),
        LastName : yup.string().required(),
        Email : yup.string().required(),
        Age : yup.string().required(),
        Height : yup.string().required(), 
        Gender : yup.string().required(),
        MiddleName :yup.string().required(),
        Mobile :yup.string().required(),
        BirthDay:yup.date().required(),
        BloodGroup :yup.string().required(),
        Weight : yup.number().required(),
        MaritalStatus :yup.string().required()
       })}
       onSubmit = {
        (values ,{resetForm} ) => {
          console.log(JSON.stringify(values));
          // resetForm({values : ""})
          setUserData(values);
          handleNext();
        }
       }
      >
        <div className='form-box mt-3'>
        <Form>
          <div className='form_content'>
           <section className='for_section'>
           <div>
             <dl>
              <dd><Field type = "text" name = 'FirstName' className = 'form-control' placeholder="First name"/></dd>
              <dd className='text-danger'><ErrorMessage name='FirstName'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dd><Field type = "text" name = 'LastName' className = 'form-control' placeholder="Last name"/></dd>
              <dd className='text-danger'><ErrorMessage name='LastName'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dd><Field type = "email" name = 'Email' className = 'form-control' placeholder="Email"/></dd>
              <dd className='text-danger'><ErrorMessage name='Email'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
             <dd><Field type = "text" name = 'Age' className = 'form-control' placeholder="Age"/></dd>
              <dd className='text-danger'><ErrorMessage name='Age'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
              <dl>
              <dd><Field type = "text" name = 'Height' className = 'form-control' placeholder="Height"/></dd>
              <dd className='text-danger'><ErrorMessage name='Height'></ErrorMessage></dd>
              </dl>
           </div>
           <div className='gender_block'>
             <dl className='form-check gender-list'>
             <dt className='form-label'>Gender :</dt>
              <span className='hor_list'>
              <dd><Field type = "radio" id = "Male" value = 'Male' name = 'Gender' className = 'form-check-input'/> Male</dd>
              <dd><Field type = "radio" id = "Femail" value = 'Femail' name = 'Gender' className = 'form-check-input'/> Femail</dd>
              </span>
              <dd className='text-danger'><ErrorMessage name='Gender'></ErrorMessage></dd>
             </dl>
           </div>
           </section>
           <section className='for_section'>
           <div>
             <dl>
              <dd><Field type = "text" name = 'MiddleName' className = 'form-control' placeholder="Middle name"/></dd>
              <dd className='text-danger'><ErrorMessage name='MiddleName'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>        
              <dd><Field type = "mobile" name = 'Mobile' className = 'form-control' placeholder="Mobile No"/></dd>
              <dd className='text-danger'><ErrorMessage name='Mobile'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dd><Field type = {type} name = 'BirthDay' className = 'form-control' placeholder="Birth day" 
              onFocus={() => setType("date")} onBlur={() => setType("text")} /></dd>
              <dd className='text-danger'><ErrorMessage name='BirthDay'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
             <dd><Field as = "select" type = 'text' name = 'BloodGroup' className = 'form-select' placeholder="Blood Group">
                     <option>Blood Group</option>
                     <option id='0'>A+</option>
                     <option id='1'>A-</option>
                     <option id='2'>B+</option>
                     <option id='3'>B-</option>
                     <option id='4'>AB+</option>
                     <option id='5'>AB-</option>
                     <option id='6'>o+</option>
                     <option id='7'>o-</option>
                  </Field>
              </dd>
             <dd className='text-danger'><ErrorMessage name='BloodGroup'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
             <dd><Field type = "mobile" name = 'Weight' className = 'form-control' placeholder="Weight"/></dd>
             <dd className='text-danger'><ErrorMessage name='Weight'></ErrorMessage></dd>
             </dl>
           </div>
           <div className='gender_block'>
             <dl className='form-check gender-list'>
             <dt className='form-label'>Marital Status :</dt>
              <span className='hor_list'>
              <dd><Field type = "radio" id = "single" value = 'single' name = 'MaritalStatus' className = 'form-check-input'/> Singlr</dd>
              <dd><Field type = "radio" id = "married" value = 'married' name = 'MaritalStatus' className = 'form-check-input'/> Married</dd>
              <dd><Field type = "radio" id = "divorced" value = 'divorced' name = 'MaritalStatus' className = 'form-check-input'/> Devorced</dd>
              <dd><Field type = "radio" id = "windowed" value = 'windowed' name = 'MaritalStatus' className = 'form-check-input'/> Windowed</dd>
              </span>
              <dd className='text-danger'><ErrorMessage name='MaritalStatus'></ErrorMessage></dd>
             </dl>
           </div>
           </section>
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
          {/* <button type='submit' className='btn btn-info'>
              {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </button> */}
        </Form>
        </div>
      </Formik>
    </div>
  )
}

export default PageFirst
