export const NameForm = ({ updateFormData, value }) => {
    const nameForm = (e) => updateFormData("name", e.target.value);
    return (
        <div>
            <label htmlFor="name" className="name">Name:</label>
            <input type="text" id="name" value={value} onChange={nameForm} />
        </div>
    );
};