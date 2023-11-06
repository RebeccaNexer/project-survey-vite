export const Gender = ({ updateFormData, value }) => {
    const gender = (e) => updateFormData("gender", e.target.value);
  
    return (
    <div>
      <fieldset>
      <legend>Pick gender:</legend>
        <div className="radio">
          <label htmlFor="man">
            <input id="man"
                   type="radio"
                   value="man"
                   name="gender"
                   onChange={gender} />
            Man
          </label>
        </div>
        <div className="radio">
          <label htmlFor="woman">
            <input id="woman"
                   type="radio"
                   value="woman"
                   name="gender"
                   onChange={gender}  />
            Woman
          </label>
        </div>
    </fieldset>
  </div>
    );
};