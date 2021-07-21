import React , {useState} from 'react';

const Contact = () => {

  const [data , setData] = useState({fullname:"",contact:"",email:"",txt:"",});

  const InputEvent = (event) => {
    const {name , value} = event.target;
    setData((preVal)=> {
      return{
        ... preVal, [name] : value,
      };
    });
  };

  const formSubmit = (e) =>{
    e.preventDefault();
    alert(`Entered data by user : ${data.fullname} .Contact number is : ${data.contact} .Email id is : ${data.email}. `)
  };

  return (<>
    <div className="my-4">
      <h1 className="text-center fw-bold">Contact Us</h1>
    </div>
    <div className="container contact_div">
      <div className="row">
        <div className="col-md-6 col-10 mx-auto">
          <form onSubmit = {formSubmit}>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="fullname" value={data.fullname} onChange={InputEvent} placeholder="Enter name here" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" name="email" value={data.email} onChange={InputEvent} placeholder="Enter email" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Contact No</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" name="contact" value={data.contact} onChange={InputEvent} placeholder="Enter contact number" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Message for our team</label>
              <textarea class="form-control" type="text" id="exampleFormControlTextarea1" rows="3" name="txt" value={data.txt} onChange={InputEvent}></textarea>
            </div>
            <div class="col-12">
              <button class="btn btn-outline-primary" type="submit">Submit form</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </>);
};

export default Contact;