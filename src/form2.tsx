function Form2(){
    return(
        <>
            <h4> Do you have a favorite hike? Let me know!</h4>
            <form>
                <label htmlFor="trailname"> Enter the name of the trail: </label>
                <input type="text" id="trailname" />
                <br />
                <label htmlFor="citystate"> Enter the city and state where the trail is located: </label>
                <input type="text" id="citystate" />
                <br />
                <p> What equipment do you suggest bringing?</p>
                <input type="checkbox" id="suggestion1" />
                <label htmlFor="suggestion1"> Boots </label>
                <br />
                <input type="checkbox" id="suggestion2" />
                <label htmlFor="suggestion2"> Spikes</label>
                <br />
                <input type="checkbox" id="suggestion3" />
                <label htmlFor="suggestion3"> Gloves </label>
                <br />
                <p> How difficult do you think the hike is?</p>
                <input type="radio" id="difficulty1" name="difficulty1" />
                <label htmlFor="difficulty1"> Easy </label>
                <br />
                <input type="radio" id="difficulty2" name="difficulty2" />
                <label htmlFor="difficulty2"> Medium </label>
                <br />
                <input type="radio" id="difficulty3" name="difficulty3" />
                <label htmlFor="difficulty3"> Hard </label>
                <br /> <br />
                <label htmlFor="comments">Comments</label>
                <br />
                <textarea name="comments" id="comments" cols={50} rows={10} placeholder="Checkout the dropdown menu below for other relevant info to include."></textarea>
                <div className ="dropdown">
                    <button className ="dropbtn">Other Helpful Info</button>
                    <div className ="dropdown-content">
                        <a href="https://www.rei.com/learn/expert-advice/day-hiking-checklist.html?msockid=2c3259d3a1c1663a2a174c42a00a6710">Packing Suggestions</a>
                        <a href="https://www.iexplore.com/experiences/hiking/22-things-to-know-you-go-hiking">Tips</a>
                    </div>
                </div>
                <br /> <br />
                <input type="button" value="Submit" id="submitButton" />
            </form>
        </>
    )
}
export default Form2;