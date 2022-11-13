import React from 'react'
import { useFormik } from 'formik'

function Genelformyapisi() {

    //State yapısı gibi fieldLarı tutuyoruz
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            gender: "",
            hobies: [],
            country: " ",
        },
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input onChange={handleChange} id="firstName" name="firstName" placeholder="Jane" value={values.firstName} />

                <label htmlFor="lastName">Last Name</label>
                <input onChange={handleChange} id="lastName" name="lastName" placeholder="Doe" value={values.lastName} />

                <label htmlFor="email">Email</label>
                <input onChange={handleChange}
                    id="email"
                    name="email"
                    placeholder="jane@acme.com"
                    type="email" value={values.email}
                />

                <br />
                <br />

                <span>Male</span>
                <input type={"radio"} name='gender' value={"male"} onChange={handleChange} checked={values.gender === "male"} />

                <span>Female</span>
                <input type={"radio"} name="gender" value={"female"} onChange={handleChange} checked={values.gender === "female"} />

                <br />
                <br />

                <div>
                    <input type={"checkbox"} name={"hobies"} value={"Football"} onChange={handleChange} />
                    Football
                </div>

                <div>
                    <input type={"checkbox"} name={"hobies"} value={"Cinema"} onChange={handleChange} />
                    Cinema
                </div>

                <div>
                    <input type={"checkbox"} name={"hobies"} value={"Photography"} onChange={handleChange} />
                    Photography
                </div>

                <br />
                <br />

                <select name={"country"} value={values.country} onChange={handleChange} >
                    <option value={"tr"}>Turkey</option>
                    <option value={"en"}>England</option>
                    <option value={"usa"}>USA</option>
                </select>

                <button type="submit">Submit</button>

                <br />
                <br />

                <code>
                    {JSON.stringify(values)}
                </code>
            </form>
        </div>
    )
}

export default Genelformyapisi