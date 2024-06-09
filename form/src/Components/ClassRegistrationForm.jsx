import {useState, useEffect} from 'react';

const RegistrationForm = () => {
  const [selectedDiv, setSelectedDiv] = useState(null);
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.clickable-div')) {
        setSelectedDiv(null);
      }
    };

    document.body.addEventListener('click', handleOutsideClick);

    return () => {
      document.body.removeEventListener('click', handleOutsideClick);
    };
  }, []);
  return (
    <div className="max-w-md mx-auto mt-8 p-4 border border-gray-300 rounded">
      <h2 className="text-xl font-bold mb-4">Registration Form</h2>
      <p className="text-sm mb-4">Fill out the form carefully for registration</p>
      <div className="mb-4 border-t border-b border-gray-300">

      
      {/* Student Name */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'studentName' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('studentName')}>
        <h3 className="font-semibold mb-2">Student Name</h3>
        <div className="flex">
          <input type="text" placeholder="First Name" className="mr-2 border border-gray-300 p-2 rounded w-full" />
          <input type="text" placeholder="Middle Name" className="mr-2 border border-gray-300 p-2 rounded w-full" />
          <input type="text" placeholder="Last Name" className="border border-gray-300 p-2 rounded w-full" />
        </div>
      </div>

      {/* Birth Date */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Birth Date' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Birth Date')}>
        <h3 className="font-semibold mb-2">Birth Date</h3>
        <div className="flex">
          <select className="mr-2 border border-gray-300 p-2 rounded " style={{ width: '33%' }}>
          <option value="" hidden>Please</option>
            <option>Please select a month</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
        <option key={month} value={month}>
          {new Date(0, month - 1).toLocaleString('default', { month: 'long' })}
        </option>
      ))}
        
          </select>
          <select className="mr-2 border border-gray-300 p-2 rounded" style={{ width: '33%' }}>
          <option value="" hidden>Please</option>
          <option>Please select a Day</option>
          {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
        <option key={day} value={day}>{day}</option>
      ))}        
          </select>
          <select className="border border-gray-300 p-2 rounded" style={{ width: '33%' }}>
          <option value="" hidden>Please</option>
          <option>Please select a Year</option> 
          {Array.from({length: 105}, (_, i) => 2024 - i).map((year) => (
        <option key={year} value={year}>{year}</option>
      ))}
          </select>
        </div>
      </div>

      {/* Gender */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Gender' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Gender')}>
        <h3 className="font-semibold mb-2">Gender</h3>
        <select className="border border-gray-300 p-2 rounded w-full">
        <option value="" hidden>Please Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>N/A</option>
        </select>
      </div>

      {/* Address */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Address' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Address')}>
        <h3 className="font-semibold mb-2">Address</h3>
        <input type="text" placeholder="Street Address" className="mb-2 border border-gray-300 p-2 rounded w-full" />
        <input type="text" placeholder="Street Address Line 2" className="mb-2 border border-gray-300 p-2 rounded w-full" />
        <input type="text" placeholder="Street City" className="mb-2 border border-gray-300 p-2 rounded w-full" />
        <input type="text" placeholder="Street State / Province" className="mb-2 border border-gray-300 p-2 rounded w-full" />
        <input type="text" placeholder="Street Postal / Zip Code" className="border border-gray-300 p-2 rounded w-full" />
      </div>

      {/* Student Email */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Student E-mail' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Student E-mail')}>
        <h3 className="font-semibold mb-2">Student E-mail</h3>
        <input type="email" placeholder="e.g. myname@example.com" className="border border-gray-300 p-2 rounded w-full" />
      </div>

      {/* Mobile Number */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Mobile Number' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Mobile Number')}>
        <h3 className="font-semibold mb-2">Mobile Number</h3>
        <input type="tel" maxLength={10} placeholder="(000) 000-0000" className="border border-gray-300 p-2 rounded w-full" />
      </div>

      {/* Phone Number */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Phone Number' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Phone Number')}>
        <h3 className="font-semibold mb-2">Phone Number</h3>
        <input type="tel" maxLength={10} placeholder="(000) 000-0000" className="border border-gray-300 p-2 rounded w-full" />
      </div>

      {/* Work Number */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Work Number' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Work Number')}>
        <h3 className="font-semibold mb-2">Work Number</h3>
        <input type="tel" maxLength={10} placeholder="(000) 000-0000" className="border border-gray-300 p-2 rounded w-full" />
      </div>

      {/* Company */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Company' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Company')}>
        <h3 className="font-semibold mb-2">Company</h3>
        <input type="text" className="border border-gray-300 p-2 rounded w-full" />
      </div>

      {/* Courses */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'Courses' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('Courses')}>
        <h3 className="font-semibold mb-2">Courses</h3>
        <select className="border border-gray-300 p-2 rounded w-full">
        <option value="" hidden>Please Select</option>
          <option>Math 101</option>
          <option>Math 102</option>
          <option>History 101</option>
          <option>History 102</option>
          <option>Creative writing 1</option>
          <option>Creative writing 2</option>
          <option>English 101</option>
          <option>English 102</option>
          <option>Introduction to Linux</option>
          <option>Windows 8</option>
        </select>
      </div>

      {/* Additional Comments */}
      <div className={`mb-4 clickable-div ${selectedDiv === 'additionalComments' ? 'bg-blue-100' : ''}`} onClick={() => setSelectedDiv('additionalComments')}>
        <h3 className="font-semibold mb-2">Additional Comments</h3>
        <textarea rows="4" className="border border-gray-300 p-2 rounded w-full"></textarea>
      </div>
      </div>
      {/* Submit Button */}
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Submit</button>
    </div>
  );
};

export default RegistrationForm;
