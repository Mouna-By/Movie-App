import React from 'react';
import {Rate} from "antd";
function FilterByRate({rating,isRating, rate, setRate}) {
    let desc=["terrible","bad", "good", "excellent", "awsome"]
    return (
    <div>
        {isRating?<div>
            <Rate disabled value={rating}/>
            </div>:
            <div>
                <Rate tooltips={desc} value={rate} 
                on onChange={(e)=>setRate(e)}/></div>}
    </div>
    );
}

export default FilterByRate;
