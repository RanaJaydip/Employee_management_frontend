import React from 'react'
import api from '../api/axios.js'

function Employee() {
    const [employees, setEmployees] = useState();
    const [form, setForm] = useState({name: "", email: "", department: "", position: "", salary: "", isRemote: "", skills: "", address: "", attendance:""})

    const getProduct = async () => {
        try {
            const response = await api.get("/employees")
            setEmployees(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct();
    }, [])

    return (
        <>
            <div>Employee</div>

            <form onClick={handleSubmit()}>
                name: <input type='String' name='name' placeholder='name' required />
                email: <input type='String' name='name' placeholder='name' required />
            </form>


            {employees.map((emp)=>{
                <div key={employees.id}>
                    <h3>{emp.name}</h3>
                    <p>{emp.email}</p>
                    <p>{emp.department}</p>
                    <p>{emp.position}</p>
                    <p>{emp.salary}</p>
                    <p>{emp.isRemote}</p>
                    <p>{emp.skills}</p>
                    <p>{emp.address}</p>
                    <p>{emp.attendance}</p>
                </div>
            })}
        </>



    )
}

export default Employee