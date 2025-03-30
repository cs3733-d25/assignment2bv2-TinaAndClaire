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
                <p>Hey! I'm Claire Desrosiers, a junior at WPI studying computer science and finance.</p>
            </>
        )
    }
}
export default Intro;