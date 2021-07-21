import React from "react";
import Card from "../component/Card"
import Dataz from "../component/Dataz"

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-3 mb-4">
              {
                Dataz.map((val,ind) => {
                  return <Card 
                  key = {ind}
                  title={val.title}
                  txt = {val.txt}/>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;