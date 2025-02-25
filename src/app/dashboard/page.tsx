"use client";

import { signout } from "../actions/auth";

export default function Page(){
    return <div> 
            <button onClick={()=>signout()}> signout </button>
        </div>
}