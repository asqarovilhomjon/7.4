// import React, { useState } from 'react';
// import { useCreateUserMutation, useDeleteUserMutation, useGetProductQuery, useEditUserMutation } from '../redux/api/users-api';
// import { FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { IoMdPersonAdd } from "react-icons/io";

// const Home = () => {
//    const { data, isLoading } = useGetProductQuery();
//    const [createUser] = useCreateUserMutation();
//    const [deleteUser] = useDeleteUserMutation();
//    const [editUser] = useEditUserMutation();
//    const [editFormData, setEditFormData] = useState({
//       id: '',
//       name: '',
//       surname: '',
//       age: '',
//       gender: '',
//       url: ''
//    });

//    const [isModalOpen, setIsModalOpen] = useState(false);
//    const [deleteModalOpen, setDeleteModalOpen] = useState(false);
//    const [userToDelete, setUserToDelete] = useState(null);

//    const handleCreateUser = e => {
//       e.preventDefault();
//       const data = new FormData(e.target);
//       const newUser = Object.fromEntries(data);
//       createUser(newUser)
//          .unwrap()
//          .then(() => {
//             e.target.reset();
//             toast.success("User added successfully!");
//          })
//          .catch(() => {
//             toast.error("Error adding user!");
//          });
//    };

//    const handleDelete = () => {
//       if (userToDelete) {
//          deleteUser(userToDelete)
//             .unwrap()
//             .then(() => {
//                toast.warning("User deleted successfully!");
//                setDeleteModalOpen(false);
//                setUserToDelete(null);
//             })
//             .catch(() => {
//                toast.error("Error deleting user!");
//                setDeleteModalOpen(false);
//                setUserToDelete(null);
//             });
//       }
//    };

//    const handleEdit = (id) => {
//       const userToEdit = data.find((user) => user.id === id);
//       setEditFormData(userToEdit);
//       setIsModalOpen(true);
//    };

//    const handleSaveEdit = (e) => {
//       e.preventDefault();
//       const updatedUser = { ...editFormData };

//       editUser({ id: editFormData.id, body: updatedUser })
//          .unwrap()
//          .then(() => {
//             toast.info('User updated successfully!');
//             setIsModalOpen(false);
//             setEditFormData({
//                id: '',
//                name: '',
//                surname: '',
//                age: '',
//                gender: '',
//                url: ''
//             });
//          })
//          .catch(() => {
//             toast.error('Error updating user');
//          });
//    };

//    const closeModal = (e) => {
//       if (e.target === e.currentTarget) {
//          setIsModalOpen(false);
//          setDeleteModalOpen(false);
//       }
//    };

//    return (
//       <div className="container mx-auto p-6">
//          <form onSubmit={handleCreateUser} className="mb-[50px] ml-[280px] bg-slate-600 w-[700px] p-[20px] rounded-xl">
//             <div className="flex items-center justify-center gap-[10px]">
//                <div className="flex flex-col gap-[20px]">
//                   <input required type="text" placeholder="Name" name="name" className="pl-[10px] rounded-xl outline-none border-[1px] p-[3px] border-white focus:border" />
//                   <input required type="text" placeholder="Surname" name="surname" className="pl-[10px] rounded-xl outline-none border-[1px] p-[3px] border-white focus:border" />
//                </div>
//                <div className="flex flex-col gap-[20px]">
//                   <input required type="number" placeholder="Age" name="age" className="pl-[10px] p-[3px] rounded-xl outline-none border-[1px] border-white focus:border" />
//                   <input required type="text" placeholder="Url Image" name="url" className="pl-[10px] p-[3px] rounded-xl outline-none border-[1px] border-white focus:border" />
//                </div>
//                <div className="flex flex-col gap-[20px]">
//                   <select required name="gender" id="" className="pl-[10px] p-[3px] rounded-xl outline-none border-[1px] border-white focus:border">
//                      <option value="">Gender</option>
//                      <option value="">Male</option>
//                      <option value="">Female</option>
//                   </select>
//                   <button className="w-[150px] p-[3px] pl-[65px] rounded-xl text-white bg-black hover:bg-white hover:text-black duration-300 border-[1px] border-black">
//                     <IoMdPersonAdd className='text-[22px]'/>
//                   </button>
//                </div>
//             </div>
//          </form>

//          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {data?.map((item) => (
//                <div key={item.id} className="bg-black shadow-md rounded-lg text-white p-4 hover:bg-white hover:text-black duration-300">
//                   <img
//                      src={item.url}
//                      alt={item.name}
//                      className="w-full h-48 object-contain rounded-[20px]"
//                   />
//                   <div className="flex items-center justify-between">
//                      <div className="mt-4">
//                         <p className="text-lg font-semibold">{item.name}</p>
//                         <p className="text-sm">{item.surname}</p>
//                         <div className="flex gap-[50px] items-center mt-2">
//                            <strong className="">{item.age} years old</strong>
//                            <strong className="capitalize">{item.gender}</strong>
//                         </div>
//                      </div>
//                      <div className="flex gap-[10px] mt-4">
//                         <button
//                            onClick={() => handleEdit(item.id)}
//                            className="bg-blue-500 text-white px-4 py-2 rounded-md border border-blue-500 hover:bg-white  duration-300 hover:border-[1px] hover:border-slate-400 hover:text-blue-500"
//                         >
//                            <FaUserEdit />
//                         </button>
//                         <button
//                            onClick={() => {
//                               setUserToDelete(item.id);
//                               setDeleteModalOpen(true);
//                            }}
//                            className="bg-red-500 text-white px-4 py-2 rounded-md border border-red-500 hover:bg-white  duration-300 hover:border-[1px] hover:border-slate-400 hover:text-red-500"
//                         >
//                            <FaRegTrashAlt />
//                         </button>
//                      </div>
//                   </div>
//                </div>
//             ))}
//          </div>

//          {isModalOpen && (
//             <div
//                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//                onClick={closeModal}
//             >
//                <div className="bg-white p-8 rounded-lg w-96" onClick={(e) => e.stopPropagation()}>
//                   <h2 className="text-xl font-bold mb-4 text-center">Edit User</h2>
//                   <form onSubmit={handleSaveEdit}>
//                      <div className="flex flex-col gap-4">
//                         <input
//                            type="text"
//                            name="name"
//                            value={editFormData.name}
//                            onChange={(e) => setEditFormData({ ...editFormData, name: e.target.value })}
//                            className="border p-2 rounded"
//                            placeholder="Name"
//                         />
//                         <input
//                            type="text"
//                            name="surname"
//                            value={editFormData.surname}
//                            onChange={(e) => setEditFormData({ ...editFormData, surname: e.target.value })}
//                            className="border p-2 rounded"
//                            placeholder="Surname"
//                         />
//                         <input
//                            type="number"
//                            name="age"
//                            value={editFormData.age}
//                            onChange={(e) => setEditFormData({ ...editFormData, age: e.target.value })}
//                            className="border p-2 rounded"
//                            placeholder="Age"
//                         />
//                         <input
//                            type="text"
//                            name="url"
//                            value={editFormData.url}
//                            onChange={(e) => setEditFormData({ ...editFormData, url: e.target.value })}
//                            className="border p-2 rounded"
//                            placeholder="URL"
//                         />
//                         <select
//                            name="gender"
//                            value={editFormData.gender}
//                            onChange={(e) => setEditFormData({ ...editFormData, gender: e.target.value })}
//                            className="border p-2 rounded"
//                         >
//                            <option value="Male">Male</option>
//                            <option value="Female">Female</option>
//                         </select>
//                         <button type="submit" className="bg-blue-500 text-white p-2 rounded">Save</button>
//                         <button type="button" onClick={() => setIsModalOpen(false)} className="bg-red-500 text-white p-2 rounded mt-2">Cancel</button>
//                      </div>
//                   </form>
//                </div>
//             </div>
//          )}

//          {deleteModalOpen && (
//             <div
//                className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
//                onClick={closeModal}
//             >
//                <div className="bg-white p-8 rounded-lg w-96" onClick={(e) => e.stopPropagation()}>
//                   <h2 className="text-xl font-bold mb-4">Confirm Deletion</h2>
//                   <p>Are you sure you want to delete this user?</p>
//                   <div className="flex gap-4 mt-4">
//                      <button onClick={handleDelete} className="bg-red-500 text-white p-2 rounded">Delete</button>
//                      <button onClick={() => setDeleteModalOpen(false)} className="bg-gray-500 text-white p-2 rounded">Cancel</button>
//                   </div>
//                </div>
//             </div>
//          )}
//       </div>
//    );
// };

// export default Home;

import React, { useState } from 'react';
import {
   useCreateUserMutation,
   useDeleteUserMutation,
   useGetProductQuery,
   useEditUserMutation,
} from '../redux/api/users-api';
import { FaUserEdit, FaRegTrashAlt } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IoMdPersonAdd } from "react-icons/io";

const Home = () => {
   const { data, isLoading } = useGetProductQuery();
   const [createUser] = useCreateUserMutation();
   const [deleteUser] = useDeleteUserMutation();
   const [editUser] = useEditUserMutation();
   const [editFormData, setEditFormData] = useState({
      id: '',
      name: '',
      age: '',
      gender: '',
   });

   const [isModalOpen, setIsModalOpen] = useState(false);
   const [deleteModalOpen, setDeleteModalOpen] = useState(false);
   const [userToDelete, setUserToDelete] = useState(null);

   const handleCreateUser = (e) => {
      e.preventDefault();
      const data = new FormData(e.target);
      const newUser = Object.fromEntries(data);
      createUser(newUser)
         .unwrap()
         .then(() => {
            e.target.reset();
            toast.success("User added successfully!");
         })
         .catch(() => {
            toast.error("Error adding user!");
         });
   };

   const handleDelete = () => {
      if (userToDelete) {
         deleteUser(userToDelete)
            .unwrap()
            .then(() => {
               toast.warning("User deleted successfully!");
               setDeleteModalOpen(false);
               setUserToDelete(null);
            })
            .catch(() => {
               toast.error("Error deleting user!");
               setDeleteModalOpen(false);
               setUserToDelete(null);
            });
      }
   };

   const handleEdit = (id) => {
      const userToEdit = data.find((user) => user.id === id);
      setEditFormData(userToEdit);
      setIsModalOpen(true);
   };

   const handleSaveEdit = (e) => {
      e.preventDefault();
      const updatedUser = { ...editFormData };

      editUser({ id: editFormData.id, body: updatedUser })
         .unwrap()
         .then(() => {
            toast.info('User updated successfully!');
            setIsModalOpen(false);
            setEditFormData({
               id: '',
               name: '',
               age: '',
               gender: '',
            });
         })
         .catch(() => {
            toast.error('Error updating user');
         });
   };

   const closeModal = (e) => {
      if (e.target === e.currentTarget) {
         setIsModalOpen(false);
         setDeleteModalOpen(false);
      }
   };

   return (
      <div className="bg-gray-200 min-h-screen p-6">
         <form
            onSubmit={handleCreateUser}
            className="bg-white shadow-md p-6 rounded-lg mx-auto w-full max-w-lg mb-8"
         >
            <h2 className="text-xl font-bold mb-4 text-center">Add New User</h2>
            <div className="flex flex-col gap-4">
               <input
                  required
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="p-2 border rounded-md"
               />
               <input
                  required
                  type="number"
                  placeholder="Age"
                  name="age"
                  className="p-2 border rounded-md"
               />
               <select
                  required
                  name="gender"
                  className="p-2 border rounded-md"
               >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
               </select>
               <button className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
                  <IoMdPersonAdd className="inline mr-2" /> Add User
               </button>
            </div>
         </form>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.map((item) => (
               <div
                  key={item.id}
                  className="bg-white p-4 shadow-md rounded-lg"
               >
                  <p><strong>ID:</strong> {item.id}</p>
                  <p><strong>Name:</strong> {item.name}</p>
                  <p><strong>Age:</strong> {item.age} years old</p>
                  <p><strong>Gender:</strong> {item.gender}</p>
                  <div className="flex gap-4 mt-4">
                     <button
                        onClick={() => handleEdit(item.id)}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                     >
                        <FaUserEdit />
                     </button>
                     <button
                        onClick={() => {
                           setUserToDelete(item.id);
                           setDeleteModalOpen(true);
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                     >
                        <FaRegTrashAlt />
                     </button>
                  </div>
               </div>
            ))}
         </div>

         {isModalOpen && (
            <div
               className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
               onClick={closeModal}
            >
               <div
                  className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                  onClick={(e) => e.stopPropagation()}
               >
                  <h2 className="text-xl font-bold mb-4 text-center">Edit User</h2>
                  <form onSubmit={handleSaveEdit} className="flex flex-col gap-4">
                     <input
                        type="text"
                        name="name"
                        value={editFormData.name}
                        onChange={(e) =>
                           setEditFormData({ ...editFormData, name: e.target.value })
                        }
                        className="p-2 border rounded-md"
                        placeholder="Name"
                     />
                     <input
                        type="number"
                        name="age"
                        value={editFormData.age}
                        onChange={(e) =>
                           setEditFormData({ ...editFormData, age: e.target.value })
                        }
                        className="p-2 border rounded-md"
                        placeholder="Age"
                     />
                     <select
                        name="gender"
                        value={editFormData.gender}
                        onChange={(e) =>
                           setEditFormData({ ...editFormData, gender: e.target.value })
                        }
                        className="p-2 border rounded-md"
                     >
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                     </select>
                     <button type="submit" className="bg-blue-500 text-white py-2 rounded-md">
                        Save
                     </button>
                     <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="bg-red-500 text-white py-2 rounded-md"
                     >
                        Cancel
                     </button>
                  </form>
               </div>
            </div>
         )}

         {deleteModalOpen && (
            <div
               className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
               onClick={closeModal}
            >
               <div
                  className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
                  onClick={(e) => e.stopPropagation()}
               >
                  <h2 className="text-xl font-bold mb-4 text-center">Confirm Deletion</h2>
                  <p>Are you sure you want to delete this user?</p>
                  <div className="flex justify-between mt-4">
                     <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white py-2 px-6 rounded-md"
                     >
                        Delete
                     </button>
                     <button
                        onClick={() => setDeleteModalOpen(false)}
                        className="bg-gray-500 text-white py-2 px-6 rounded-md"
                     >
                        Cancel
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   );
};

export default Home;
