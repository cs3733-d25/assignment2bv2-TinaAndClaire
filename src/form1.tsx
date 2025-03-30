function Form1(){
    return(
        <>
            <h4>Share your thoughts!</h4>
            <form>
                <label htmlFor="hobbies">What hobbies do you have?</label>
                <input type="text" id="hobbies"/>
                <br/><br/>
                <label htmlFor="anime">What anime do you like to watch?</label>
                <input type="text" id="anime"/>
                <br/><br/>
                What game genres do you like to play?
                <br/>
                <label htmlFor="RPG">RPG?</label>
                <input type="checkbox" className="genres" id="RPG"/>
                <br/>
                <label htmlFor="fighting">Fighting?</label>
                <input type="checkbox" className="genres" id="fighting"/>
                <br/>
                <label htmlFor="puzzle">Puzzle?</label>
                <input type="checkbox" className="genres" id="puzzle"/>
                <br/>
                <label htmlFor="other">Other</label>
                <input type="checkbox" className="genres" id="other"/>
                <br/>
                <label htmlFor="other answer">If you checked other, please specify:</label>
                <input type="text" id="other answer"/>
                <br/><br/>
                How often do you make origami?
                <br/>
                <label htmlFor="all">All the time?</label>
                <input type="radio" id="all" name="origami"/>
                <br/>
                <label htmlFor="sometimes">Sometimes?</label>
                <input type="radio" className="genres" id="sometimes" name="origami"/>
                <br/>
                <label htmlFor="never">Never?</label>
                <input type="radio" className="genres" id="never" name="origami"/>
                <br/><br/>
                <label htmlFor="comment">Do you have any other comments?</label>
                <br/>
                <textarea name="comment" id="comment" cols={50} rows={10}></textarea>
                <br/><br/>
                <label htmlFor="mailing list">Do you want to be added to my mailing list?</label>
                <select name="mailing list" id="mailing list">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                </select>
                <br/><br/>
                <label htmlFor="submit">Once done, please submit:</label>
                <input type="submit" id="Submit"/>
            </form>
        </>
    )
}
export default Form1;