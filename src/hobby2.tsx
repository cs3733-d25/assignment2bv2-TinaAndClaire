import List2 from "./list2.tsx";
import Table2 from "./table2.tsx";
import Form2 from "./form2.tsx";
function Hobby2(){
    return(
        <>
            <p>My favorite hobby is going hiking in New England, especially in New Hampshire! It's a calming activity for me that I always look forward to doing.</p>
            <div className="banner2">
                <img src="../public/claire-image.jpg" alt="Hiking Photos" width={640}></img>
            </div>
            <List2/>
            <Table2/>
            <Form2/>
        </>
    )
}
export default Hobby2;