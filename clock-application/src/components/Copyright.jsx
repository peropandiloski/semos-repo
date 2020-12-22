import React from 'react'


function Copyright() {
    let thisYear = new Date().getFullYear();
    console.log(thisYear);

    var personalInfo = {
        name: "Pero",
        surname: "Pandiloski",
        year: { thisYear }
    }
    return (
        <div>
            <p className="footer">{personalInfo.name} {personalInfo.surname}</p>
            <p className="footer">Copyright Semos Education</p>
            <p className="footer">{thisYear}</p>
        </div>
    );
}

export default Copyright;