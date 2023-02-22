import React, { useContext } from 'react';
import './PageSecond.css';
import './PageFirst.css';
import { ErrorMessage, Field, Form, Formik} from 'formik';
import * as yup from 'yup';
import noteContext from './NoteContext';

function PageSecond({activeStep , handleBack , handleNext,steps}) {
  const {userData , setUserData} = useContext(noteContext);
  return (
    <div>
      <Formik 
       initialValues={{Address1 :"" , Address2 : "" ,City :"", State:"", Country : "", Pincode:""}}
       validationSchema = {yup.object({
        Address1 : yup.string().required(),
        Address2 : yup.string().required(),
        City : yup.string().required(),
        State : yup.string().required(),
        Country : yup.string().required(), 
        Pincode : yup.string().min(6).max(6).required(),
       })}
       onSubmit = {
        (values ,{resetForm} ) => {
          console.log(JSON.stringify(values));
          // resetForm({values : ""})
          setUserData({...userData , values});
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
              <dd><Field type = "text" name = 'Address1' className = 'form-control' placeholder="Address Line 1"/></dd>
              <dd className='text-danger'><ErrorMessage name='Address1'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dd><Field type = "text" name = 'City' className = 'form-control' placeholder="City"/></dd>
              <dd className='text-danger'><ErrorMessage name='City'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dd><Field type = "text" name = 'Country' className = 'form-control' placeholder="Country"/></dd>
              <dd className='text-danger'><ErrorMessage name='Country'></ErrorMessage></dd>
             </dl>
           </div>
           </section>
           <section className='for_section'>
           <div>
             <dl>
              <dd><Field type = "text" name = 'Address2' className = 'form-control' placeholder="Address Line 2"/></dd>
              <dd className='text-danger'><ErrorMessage name='Address2'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
             <dd><Field as = "select" type = 'text' name = 'State' className = 'form-select' placeholder="State">
                     <option>State</option>
                     <option id='0'>Maharashtra</option>
                     <option id='1'>Gujrat</option>
                     <option id='2'>Panjab</option>
                     <option id='3'>Karnataka</option>
                  </Field>
              </dd>
             <dd className='text-danger'><ErrorMessage name='State'></ErrorMessage></dd>
             </dl>
           </div>
           <div>
             <dl>
              <dd><Field type = "text" name = 'Pincode' className = 'form-control' placeholder="Pincode"/></dd>
              <dd className='text-danger'><ErrorMessage name='Pincode'></ErrorMessage></dd>
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

export default PageSecond
