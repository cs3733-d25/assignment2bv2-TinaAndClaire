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
                <textarea name="comments" id="comments" cols={50} rows={10} placeholder="Anything to add?"></textarea>
                <label htmlFor="drop down">Do you think you'll try one of these hikes?</label>
                <select name="try a hike" id="try a hike">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br /> <br />
                <input type="button" value="Submit" id="submitButton" />
            </form>
        </>
    )
}
export default Form2;