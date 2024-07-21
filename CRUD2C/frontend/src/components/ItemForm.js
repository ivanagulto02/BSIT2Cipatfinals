import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ItemForm.css';

const ItemForm = ({ item, onSuccess }) => {
    const [formData, setFormData] = useState({
        surname: '',
        first_name: '',
        middle_name: '',
        date_of_birth: '',
        place_of_birth: '',
        sex: '',
        civil_status: '',
        height: '',
        weight: '',
        blood_type: '',
        gsis_id_no: '',
        pagibig_id_no: '',
        philhealth_no: '',
        sss_no: '',
        tin_no: '',
        agency_employee_no: '',
        citizenship: '',
        residential_address: '',
        residential_zip_code: '',
        permanent_address: '',
        permanent_zip_code: '',
        telephone_no: '',
        mobile_no: '',
        email_address: '',




    });

    useEffect(() => {
        if (item) {
            setFormData({
                surname: item.surname || '',
                first_name: item.first_name || '',
                middle_name: item.middle_name || '',
                date_of_birth: item.date_of_birth || '',
                place_of_birth: item.place_of_birth || '',
                sex: item.sex || '',
                civil_status: item.civil_status || '',
                height: item.height || '',
                weight: item.weight || '',
                blood_type: item.blood_type || '',
                gsis_id_no: item.gsis_id_no || '',
                pagibig_id_no: item.pagibig_id_no || '',
                philhealth_no: item.philhealth_no || '',
                sss_no: item.sss_no || '',
                tin_no: item.tin_no || '',
                agency_employee_no: item.agency_employee_no || '',
                citizenship: item.citizenship || '',
                residential_address: item.residential_address || '',
                residential_zip_code: item.residential_zip_code || '',
                permanent_address: item.permanent_address || '',
                permanent_zip_code: item.permanent_zip_code || '',
                telephone_no: item.telephone_no || '',
                mobile_no: item.mobile_no || '',
                email_address: item.email_address || '',


            });
        }
    }, [item]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            let response;
            if (item) {
                response = await axios.put(`http://localhost:8000/api/items/${item.id}/`, formData);
            } else {
                response = await axios.post('http://localhost:8000/api/items/', formData);
            }
            onSuccess(response.data); 
        } catch (error) {
            console.error('There was an error submitting the form!', error);
        }
    };

    return (
        <div className="item-form">
            <h2>{item ? 'Edit Item' : 'Add New Item'}</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Surname:</label>
                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} required />
                </div>
                <div>
                    <label>First Name:</label>
                    <input type="text" name="first_name" value={formData.first_name} onChange={handleChange} required />
                </div>
                <div>
                    <label>Middle Name:</label>
                    <input type="text" name="middle_name" value={formData.middle_name} onChange={handleChange} />
                </div>
                <div>
                    <label>Date of Birth:</label>
                    <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} required />
                </div>
                <div>
                    <label>Place of Birth:</label>
                    <input type="text" name="place_of_birth" value={formData.place_of_birth} onChange={handleChange} required />
                </div>
                <div>
                    <label>Sex:</label>
                    <input type="text" name="sex" value={formData.sex} onChange={handleChange} required />
                </div>
                <div>
                    <label>Civil Status:</label>
                    <input type="text" name="civil_status" value={formData.civil_status} onChange={handleChange} required />
                </div>
                <div>
                    <label>Height (m):</label>
                    <input type="text" name="height" value={formData.height} onChange={handleChange} required />
                </div>
                <div>
                    <label>Weight (kg):</label>
                    <input type="text" name="weight" value={formData.weight} onChange={handleChange} required />
                </div>
                <div>
                    <label>Blood Type:</label>
                    <input type="text" name="blood_type" value={formData.blood_type} onChange={handleChange} required />
                </div>
                <div>
                    <label>GSIS ID No.:</label>
                    <input type="text" name="gsis_id_no" value={formData.gsis_id_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>PAG-IBIG ID No.:</label>
                    <input type="text" name="pagibig_id_no" value={formData.pagibig_id_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>PHILHEALTH No.:</label>
                    <input type="text" name="philhealth_no" value={formData.philhealth_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>SSS No.:</label>
                    <input type="text" name="sss_no" value={formData.sss_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>TIN No.:</label>
                    <input type="text" name="tin_no" value={formData.tin_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>Agency Employee No.:</label>
                    <input type="text" name="agency_employee_no" value={formData.agency_employee_no} onChange={handleChange} required />
                </div>
                <div>
                    <label>Citizenship:</label>
                    <input type="text" name="citizenship" value={formData.citizenship} onChange={handleChange} required />
                </div>
                <div>
                    <label>Residential Address:</label>
                    <input type="text" name="residential_address" value={formData.residential_address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Residential Zip Code:</label>
                    <input type="text" name="residential_zip_code" value={formData.residential_zip_code} onChange={handleChange} required />
                </div>
                <div>
                    <label>Permanent Address:</label>
                    <input type="text" name="permanent_address" value={formData.permanent_address} onChange={handleChange} required />
                </div>
                <div>
                    <label>Permanent Zip Code:</label>
                    <input type="text" name="permanent_zip_code" value={formData.permanent_zip_code} onChange={handleChange} required />
                </div>
                <div>
                    <label>Telephone No.:</label>
                    <input type="text" name="telephone_no" value={formData.telephone_no} onChange={handleChange} />
                </div>
                <div>
                    <label>Mobile No.:</label>
                    <input type="text" name="mobile_no" value={formData.mobile_no} onChange={handleChange} />
                </div>
                <div>
                    <label>Email Address:</label>
                    <input type="email" name="email_address" value={formData.email_address} onChange={handleChange} required />
                </div>




                
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ItemForm;
