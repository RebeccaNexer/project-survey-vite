export const NameForm = ({ updateFormData, value }) => {
    const nameForm = (e) => updateFormData("name", e.target.value);
    return (
        <div>
            <label className="name">Name:</label>
            <input type="text" value={value} onChange={nameForm} />
        </div>
    );
};