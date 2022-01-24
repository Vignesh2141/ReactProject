import { NavLink } from "react-router-dom";
import React, { useState } from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import "./Nav.css"

export function Nav(){
    return(
        <>
            <header>
                <AppBar>
                <Toolbar>
                    <NavLink className="nav" to="/students/showall">ShowStudents</NavLink>
                    <NavLink className="nav" to="/students/addstudent">AddStudents</NavLink>
                    </Toolbar>
                </AppBar>
            </header>
        </>
    )
}