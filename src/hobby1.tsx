import List1 from "./list1.tsx";
import Table1 from "./table1.tsx";
import Form1 from "./form1.tsx";
function Hobby1(){
    return(
        <>
            <p>My hobby are watching anime, playing games, and making origami. My latest game obsession if Wuthering Waves(aka WUWA).</p>
            <div className="banner">
                <img src="../public/tina-image.jpg" alt="AI generated image of my hobby" width={640}></img>
            </div>
            <List1/>
            <Table1/>
            <Form1/>
        </>
    )
}
export default Hobby1;