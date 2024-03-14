import React from "react";

function InputPhoto(){
    return(
        <div>
            <input id='inFile' type='file' alt="Select Photo" style={{display:'none'}}/>
            <label for='inFile' style={{
                color:'white' , backgroundColor:'black'
            }}
            >Choose a Photo</label>
        </div>
    )
}

export default InputPhoto;


//position:'absolute', top:'300px',left:'720px',border: '2px solid #497ecd',
//boxSizing: 'border-box', borderRadius: '10px',width:'100px',height:'100px',textAlign:'center',lineHeight:'90px',
