import React from 'react';


function RestartButton(){

    function refreshPage(){
        window.location.reload();
    }
return(
<div >
    <button type="button" onClick={()=>refreshPage()}>RESTART</button>
         </div>
)
}
export default RestartButton;