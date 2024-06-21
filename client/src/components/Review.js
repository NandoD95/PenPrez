// import React from "react";

// function Review(){
//     return(
//         <div className="review-container">
//             <form>
//                 <label htmlFor="reviewInput">Leave Your Review</label>
//                 <div>
//                     <textarea id="reviewInput" className="review-input" rows="5" placeholder="Write your review here..." required></textarea>
//                 </div>
//                 <button type="submit" className="review-submit-btn">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Review;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

function Review() {
    // Validation schema using Yup
    const validationSchema = Yup.object().shape({
        reviewInput: Yup.string().required("Review is required")
    });

    // Form submission logic using Formik
    const formik = useFormik({
        initialValues: {
            reviewInput: ""
        },
        validationSchema: validationSchema,
        onSubmit: (values, { resetForm }) => {
            // You can handle form submission logic here (e.g., API call)
            alert("Review submitted!"); // Placeholder for submission action
            resetForm(); // Clear form fields after submission
        }
    });

    return (
        <div className="review-container">
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="reviewInput">Leave Your Review</label>
                <div>
                    <textarea
                        id="reviewInput"
                        name="reviewInput"
                        className="review-input"
                        rows="5"
                        placeholder="Write your review here..."
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.reviewInput}
                    ></textarea>
                    {formik.touched.reviewInput && formik.errors.reviewInput ? (
                        <div className="error-message">{formik.errors.reviewInput}</div>
                    ) : null}
                </div>
                <button type="submit" className="review-submit-btn">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Review;
