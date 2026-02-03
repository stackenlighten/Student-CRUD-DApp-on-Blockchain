import React, { useState, useEffect } from 'react';
import { getWeb3, contractAddr, abi } from '../scripts/web3handler.js';

export default function StudentManager() {
  const [students, setStudents] = useState([]);
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [loading, setLoading] = useState(false);
  
  // Form State
  const [formData, setFormData] = useState({ id: "", name: "", age: "", class: "" });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    async function init() {
      const web3 = await getWeb3();
      const accounts = await web3.eth.requestAccounts();
      const instance = new web3.eth.Contract(abi, contractAddr);
      setAccount(accounts[0]);
      setContract(instance);
      fetchStudents(instance);
    }
    init();
  }, []);
  

  const fetchStudents = async (instance) => {
    const count = await instance.methods.numberOfStudents().call(); //
    const list = [];
    for (let i = 1; i <= count; i++) {
      const s = await instance.methods.students(i).call(); //
      if (s.exists) list.push(s); //
    }
    setStudents(list);
  };

  // --- ACTION 1: CREATE/UPDATE ---
  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (isEditing) {
        await contract.methods.updateStudent(formData.id, formData.name, formData.age, formData.class).send({ from: account }); //
      } else {
        await contract.methods.createStudent(formData.name, formData.age, formData.class).send({ from: account }); //
      }
      resetForm();
      fetchStudents(contract);
    } catch (err) { alert(err.message); }
    setLoading(false);
  };

  // --- ACTION 2: DELETE ---
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await contract.methods.removeStudent(id).send({ from: account }); //
      fetchStudents(contract);
    } catch (err) { alert(err.message); }
    setLoading(false);
  };

  const startUpdate = (student) => {
    setFormData({ id: student.id, name: student.name, age: student.age, class: student.class });
    setIsEditing(true); //
  };

  const resetForm = () => {
    setFormData({ id: "", name: "", age: "", class: "" });
    setIsEditing(false);
  };

  return (
    <div className="container">
    <div className="row mt-4">
      <div className="col-12 col-sm-12 col-md-12 col-lg-4">
        <div className="card p-3 bg-dark text-white">
          <input value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="form-control mb-2" placeholder="Name" />
          <input value={formData.age} onChange={e => setFormData({...formData, age: e.target.value})} type="number" className="form-control mb-2" placeholder="Age" />
          <input value={formData.class} onChange={e => setFormData({...formData, class: e.target.value})} type="number" className="form-control mb-3" placeholder="Class" />
          
          <button onClick={handleSubmit} className="btn btn-primary w-100" disabled={loading}>
            {loading ? "Processing..." : isEditing ? "Update Record" : "Add Record"}
          </button>
          {isEditing && <button onClick={resetForm} className="btn btn-link text-white mt-2">Cancel</button>}
        </div>
      </div>

      <div className="col-12 col-sm-12 col-md-12 col-lg-8">
        <table className="table table-dark table-hover">
          <thead>
            <tr><th>Roll No</th><th>Name</th><th>Age</th><th>Class</th><th>Actions</th></tr>
          </thead>
          <tbody>
            {students.map((s, index) => (
              <tr key={s.id}>
                <td>{index + 1}</td>
                <td>{s.name}</td>
                <td>{s.age} Years</td>
                <td>Class {s.class}</td>
                <td>
                  <button onClick={() => startUpdate(s)} className="btn btn-sm btn-outline-success me-2">Update</button>
                  <button onClick={() => handleDelete(s.id)} className="btn btn-sm btn-outline-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </div>
  );
}