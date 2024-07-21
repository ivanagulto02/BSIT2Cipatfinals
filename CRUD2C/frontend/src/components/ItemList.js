import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ItemList.css';

const ItemList = ({ onEdit, onDelete }) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await axios.get('http://localhost:8000/api/items/');
            setItems(response.data);
        } catch (error) {
            console.error('There was an error fetching the items!', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/items/${id}/`);
            
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            console.error('There was an error deleting the item!', error);
        }
    };

    return (
        <div className="item-list">
            <h1>Items</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.surname} {item.first_name} {item.middle_name}, {item.date_of_birth}, {item.place_of_birth}, {item.sex}, {item.civil_status}, {item.height}, {item.weight}, {item.blood_type}, {item.gsis_id_no}, {item.pagibig_id_no}, {item.philhealth_no}, {item.sss_no}, {item.tin_no}, {item.agency_employee_no}, {item.citizenship}, {item.residential_address}, {item.residential_zip_code}, {item.permanent_address}, {item.permanent_zip_code}, {item.telephone_no}, {item.mobile_no}, {item.email_address},
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => handleDelete(item.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
