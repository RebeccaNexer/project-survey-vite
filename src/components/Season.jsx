export const Season = ({ updateFormData, value }) => {
    const season = (e) => updateFormData("season", e.target.value);
    return (
        <div>
            <label htmlFor="season">Favourite season:</label>
            <select id="season" name="season" className="custom-select" value={value} onChange={season}>
                <option value="">Pick your fav season</option>
                <option value="autumn">Autumn</option>
                <option value="winter">Winter</option>
                <option value="spring">Spring</option>
                <option value="summer">Summer</option>
            </select>
        </div>
    );
};