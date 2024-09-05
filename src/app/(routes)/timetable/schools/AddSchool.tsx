import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const AddSchool = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await axios.post('/api/schools', { name, email, password });
      router.push(`/schools/${response.data._id}`);
    } catch (error) {
      console.error('Error adding school:', error);
    }
  };

  // ... Handle updating logic if needed

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">{isEditing ? 'Edit School' : 'Add School'}</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for name, email, and password */}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          {isEditing ? 'Update' : 'Add'}
        </button>
      </form>
    </div>
  );
};

export default AddSchool;