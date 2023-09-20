import React from "react";

function Counter(props) {
    const [hours, setHours] = React.useState(0);
    const [minutes, setMinutes] = React.useState(0);
    const [seconds, setSeconds] = React.useState(0);

    function getTime() {
        const time = Date.parse(props.deadline) - Date.now();

        setHours(Math.floor((time / (1000 * 60 * 60))).toString().padStart(2, '0'));
        setMinutes(Math.floor((time / 1000 / 60) % 60).toString().padStart(2, '0'));
        setSeconds(Math.floor((time / 1000) % 60).toString().padStart(2, '0'));
    }

    React.useEffect(() => {
        const interval = setInterval(() => getTime(), 1000);
        return () => clearInterval(interval);
    }, [])

    return (<div className={`text text_color_light text_size_h1`}>{hours}:{minutes}:{seconds}</div>)
}

export default Counter;