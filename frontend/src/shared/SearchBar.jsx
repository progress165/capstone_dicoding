import React, { useRef } from "react";
import "./search-bar.css";
import { Col, Form, FormGroup } from "reactstrap";

import { BASE_URL } from "./../utils/config";

import { useNavigate } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { IoPeople } from "react-icons/io5";

const SearchBar = () => {
  const locationRef = useRef("");

  const maxGroupSizeRef = useRef(0);
  const navigate = useNavigate();

  const searchHandler = async () => {
    const location = locationRef.current.value;

    const maxGroupSize = maxGroupSizeRef.current.value;

    if (location === "" || maxGroupSize === "") {
      return alert("All fields are required!");
    }

    const res = await fetch(
      `${BASE_URL}/tours/search/getTourBySearch?city=${location}&maxGroupSize=${maxGroupSize}`
    );

    if (!res.ok) alert("Something went wrong");

    const result = await res.json();

    navigate(`/tours/search?city=${location}&maxGroupSize=${maxGroupSize}`, {
      state: result.data,
    });
  };

  return (
    <Col lg="12">
      <div className="section_searchbar">
        <div className="search_bar">
          <Form className="d-flex align-items-center gap-2 wrapper">
            <FormGroup className="form_group form__group-fast">
              <div className="header_searchbar">
                <IoLocationOutline  size={30} style={{ marginRight: '5px', color: '#5FBDFF' }}/>
                <input
                  type="text"
                  placeholder="Kemana anda akan pergi?"
                  ref={locationRef}
                />
              </div>
            </FormGroup>

            <FormGroup className="form_group form__group-fast">
              <div className="header_searchbar">
                <IoPeople  size={30} style={{ marginRight: '5px', color: '#5FBDFF' }}/>
                <input
                  type="number"
                  placeholder="0"
                  ref={maxGroupSizeRef}
                />
              </div>
            </FormGroup>

            <span 
            className="btn_searchbar"
            type="submit"
            onClick={searchHandler}>
            <i class="ri-search-line"></i>
            </span>
          </Form>
        </div>
      </div>


      {/* <div className="search__bar">
        <Form className="d-flex align-items-center gap-4">
          <FormGroup className="d-flex gap-3 form__group form__group-fast">
            <span>
              <i class="ri-map-pin-line"></i>
            </span>
            <div>
              <h6>Location</h6>
              <input
                type="text"
                placeholder="Where are you going?"
                ref={locationRef}
              />
            </div>
          </FormGroup>

          <FormGroup className="d-flex gap-3 form__group form__group-last">
            <span>
              <i class="ri-group-line"></i>
            </span>
            <div>
              <h6>Max People</h6>
              <input type="number" placeholder="0" ref={maxGroupSizeRef} />
            </div>
          </FormGroup>

          <span className="search__icon" type="submit" onClick={searchHandler}>
            <i class="ri-search-line"></i>
          </span>
        </Form>
      </div> */}
    </Col>
  );
};

export default SearchBar;
