export const Gender = ({ updateFormData, value }) => {
    const gender = (e) => updateFormData("gender", e.target.value);
    return (
    <div>
    <label>Pick gender:</label>
    <div className="radio">
      <label>
        <input type="radio" value="man" 
               onChange={gender} />
        Man
      </label>
    </div>
    <div className="radio">
      <label>
        <input type="radio" value="woman"
               onChange={gender}  />
        Woman
      </label>
    </div>
        </div>
    );
};