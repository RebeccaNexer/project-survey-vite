export const Summary = ({ name, season, gender }) => {
    return (
<div>   
{(() => {
    if (season === "spring") {
        return (
        <div className="summary">
        <p>Hi {name}, you're a {season} {gender}!</p>
        <p>Spring is a delightful season filled with a burst of color and renewed energy. One of the most enjoyable spring activities is to go on a blooming flower garden tour, where you can revel in the beauty of vibrant tulips, daffodils, and cherry blossoms. Another fantastic pastime is picnicking in the park, surrounded by the fragrant blossoms and the gentle warmth of the sun. Spring is also perfect for outdoor adventures like hiking along scenic trails, where you can witness nature awakening from its winter slumber. Don't forget to embrace the season's spirit of renewal by trying your hand at gardening, whether it's planting your own flowers or growing fresh herbs and vegetables in your backyard.</p>
        </div>)
    } else if (season === "summer") {
        return (
            <div className="summary">
            <p>Hi {name}, you're a {season} {gender}!</p>
            <p>Summer is a season of endless possibilities, where the sun shines brightly, and adventure calls. Beach days are a quintessential summer experience, with opportunities for swimming, building sandcastles, and playing beach volleyball. If you seek an adrenaline rush, water sports like kayaking, jet skiing, or paddleboarding offer excitement on the waves.</p>
            </div>)
    } else if (season === "autumn") {
        return (
                <div className="summary">
                <p>Hi {name}, you're a {season} {gender}!</p>
                <p>Autumn ushers in a season of cozy charm and breathtaking natural beauty. One of the most beloved fall activities is visiting apple orchards and pumpkin patches, where families can pick their own crisp apples and choose the perfect pumpkin for carving.</p>
                </div>)
    } else if (season === "winter") {
        return (
            <div className="summary">
            <p>Hi {name}, you're a {season} {gender}!</p>
            <p>Winter brings with it a magical atmosphere and plenty of delightful pastimes. Embrace the season's wonder by hitting the slopes for some exhilarating skiing or snowboarding adventures. Ice skating in outdoor rinks, with a backdrop of twinkling holiday lights, adds a touch of enchantment to the winter experience</p>
            </div>)
    } else {
        return (<p>You didn't pick your favourite season!</p>)
    }})()}</div>
    );
};