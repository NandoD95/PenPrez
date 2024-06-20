import React from "react";

function Review(){
    return(
        <div className="review-container">
            <form>
                <label htmlFor="reviewInput">Leave Your Review</label>
                <div>
                    <textarea id="reviewInput" className="review-input" rows="5" placeholder="Write your review here..." required></textarea>
                </div>
                <button type="submit" className="review-submit-btn">Submit</button>
            </form>
        </div>
    );
}

export default Review;