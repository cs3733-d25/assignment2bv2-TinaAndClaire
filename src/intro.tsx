function Intro(props: { name: string; }) {
    if(props.name==="Tina"){
        return(
            <>
                <p>Hi! I am Tina Cheng. I am a sophomore student at WPI studying Computer Science.</p>
            </>
        )
    }else if (props.name==="Claire"){
        return(
            <>
            </>
        )
    }
}
export default Intro;