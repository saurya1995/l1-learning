import React from "react"

const GlassContainer = (props) =>
    <div style={{'backdropFilter': 'blur(20px)', 'WebkitBackgroundClip': 'padding', 'WebkitBackdropFilter': 'blur(20px)'}}
         className={props.className + " bg-clip-padding w-full h-full"}>
        {props.children}
    </div>


export default GlassContainer
