import React from 'react';

export default class App extends React.Component {
    render() {
        const users = [
            {
                name: 'Robin',
                ocuppation: "waiter"
            },
            {
                name: 'Markus',
                ocuppation: "teacher"
            }
        ];
        const person = { name: "Jhon" };
        const student = { ID: "21", GPA: "3.0" };

        const new_object = { ...person, ...student, semester: '3' };

        const showUsers = true;

        const countries = ["Colombia", "Bolivia", "Paris", "Ecuador", "Suecia"];
        const more_countries = [...countries, "España", "Italia", "Africa"];

        function myFunction(){
            alert("Soy una funcion!")
        }

        var myFunction2 = function(){
            alert("Soy una funcion anonima")
        }

        const saludo = () => alert("Soy una funcion flecha");

        return (
            <div>
                {
                    showUsers ? (
                        <>
                            <h3>Usuarios</h3>
                            <ul>
                                {users.map(user => <li>{user.name} <br /> {user.ocuppation} </li>)}
                            </ul>
                        </>

                    ) : (
                        null
                    )
                }
                {
                    <>
                        <button onClick={myFunction}>Funcion normal</button>
                        <br />
                        <button onClick={myFunction2}>Funcion anonima</button>
                        <br />
                        <button onClick={saludo}>Funcion flecha</button>

                        <h3>Test object</h3>
                        <ul>
                            <li>Nombre: {new_object.name}</li>
                            <li>ID: {new_object.ID}</li>
                            <li>GPA: {new_object.GPA}</li>
                            <li>Semester: {new_object.semester}</li>
                        </ul>
                    </>
                }
                {
                    <>
                        <h3>Listado paises</h3>
                        <ol>
                            {countries.map(country => <li>{country}</li>)}
                        </ol>
                        <h3>Listado clonado ++</h3>
                        <ol>
                            {more_countries.map(country => <li>{country}</li>)}
                        </ol>
                    </>
                }
            </div>
        );
    }
}