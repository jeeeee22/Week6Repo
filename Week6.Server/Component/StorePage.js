import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddStore from '../components/AddStore';

const StoresPage = () => {
    const [stores, setStores] = useState([]);

    const fetchStores = async () => {
        try {
            const response = await axios.get('http://localhost:5062/api/stores');
            setStores(response.data);
        } catch (error) {
            console.error('Error fetching stores:', error);
        }
    };

    useEffect(() => {
        fetchStores();
    }, []);

    const handleStoreAdded = () => {
        fetchStores();
    };

    return (
        <div>
            <h1>Stores</h1>
            <AddStore onStoreAdded={handleStoreAdded} />
            <ul>
                {stores.map((store) => (
                    <li key={store.id}>{store.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StoresPage;
