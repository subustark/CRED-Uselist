import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useParams } from 'react-router-dom';
const formvalidationSchema = yup.object({
    id: yup
        .number()
        .required(),
    name: yup
        .string()
        .required().min(4),
    email: yup
        .string()
        .required(),
    role: yup
        .string()
        .required().min(5),
    salary: yup
        .number()
        .required().min(3)
})

function EditUser({ data }) {
    const params = useParams();
    const Index = data.findIndex((item) => item.id == params.id);
    const details = data[Index];

    const navigate = useNavigate();

    const myFormik = useFormik({
        initialValues: {
            id: details.id,
            name: details.name,
            email: details.email,
            role: details.role,
            salary: details.salary
        },
        validationSchema: formvalidationSchema,
        onSubmit: (values) => {
            data.splice(Index, 1, values);
            navigate("/portal/userlist");
        },
    })

    return (
        <>
            <form className="container" onSubmit={myFormik.handleSubmit}>
                <div className="row mt-4">
                    <div className="col-lg-4  m-auto">
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.name && myFormik.errors.name ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.name}
                            name="name"
                            placeholder="Name"
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.name && myFormik.errors.name ? myFormik.errors.name : null}</span><br />
                        <input
                            type="email"
                            className={`form-control ${myFormik.touched.email && myFormik.errors.email ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.email}
                            name="email"
                            placeholder="Email"
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.email && myFormik.errors.email ? myFormik.errors.email : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.id && myFormik.errors.id ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.id}
                            name="id"
                            placeholder="Employe Id"
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.id && myFormik.errors.id ? myFormik.errors.id : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.role && myFormik.errors.role ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.role}
                            name="role"
                            placeholder="Role"
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.role && myFormik.errors.role ? myFormik.errors.role : null}</span><br />
                        <input
                            type="text"
                            className={`form-control ${myFormik.touched.salary && myFormik.errors.salary ? "is-invalid" : "is-valid"}`}
                            value={myFormik.values.salary}
                            name="salary"
                            placeholder="Salary"
                            onChange={myFormik.handleChange}
                        /><span style={{ color: "red", fontSize: ".5" }} >{myFormik.touched.salary && myFormik.errors.salary ? myFormik.errors.salary : null}</span>
                        <div className="d-sm-flex  justify-content-end mt-3">
                            <button type="submit" className="btn btn-outline-info create-btn">
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}

export default EditUser

