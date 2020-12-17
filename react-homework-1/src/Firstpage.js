import React from 'react'


class Firstpage extends React.Component {

    render() {

        return (
            <div>
                <h1>Pero Pandiloski</h1>
                <img src={'./images/pero.png'} />

                <p><em>IT Teacher at ООУ Гоце Делчев - Гостивар
                    <strong> web creator and administrator</strong></em></p>
                <p>I am IT Teacher and Web Developer, i love coffee, and gym</p>

                <h3>Education</h3>
                <ul>
                    <li>FON University - Information and communication technology</li>
                </ul>
                <hr></hr>
                <h3>Work Experience</h3>
                <table cellSpacing='10'>
                    <thead>
                        <tr>
                            <th>Dates</th>
                            <th>Work</th>
                        </tr>
                    </thead>
                    <tr>
                        <td>2013-2018</td>
                        <td>IT Teacher at High School - SEOU Gostivar</td>
                    </tr>
                    <tr>
                        <td>2019-2020</td>
                        <td>IT Teacher at Elementary School - OOU Goce Delcev - Gostivar</td>
                    </tr>
                </table>

                <h3>Skills</h3>
                <table cellspacing="10">
                    <tr>
                        <td>HTML5</td>
                        <td>⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>CSS3</td>
                        <td>⭐⭐⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>Javascript</td>
                        <td>⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>Photoshop</td>
                        <td>⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>C++</td>
                        <td>⭐⭐⭐</td>
                    </tr>
                    <tr>
                        <td>React</td>
                        <td>⭐⭐</td>
                    </tr>
                </table>
                <hr></hr>
                <a href="Hobbies.js">My Hobbies</a> <br></br>
                <a href="contact.js">Contact Me</a>

            </div >

        )
    }
}


export default Firstpage
