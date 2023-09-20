import React from "react";
import { motion } from "framer-motion"

import representationStyles from './representation.module.css'

function Representation(props) {
    const [currOption, setCurrOption] = React.useState(props.options[0])
    const [animation, setAnimation] = React.useState(true)

    const variants = {
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeOut',
                duration: 0.3,
            },
        },
        hide: {
            y: -20,
            opacity: 0,
        },
    };

    function handleSwitch(el) {
        setAnimation(false)
        setTimeout(setCurrOption, 250, el)
    }
    
    React.useEffect(() => {
        setTimeout(setAnimation, 250, true)
    }, [currOption])

    return (
        <div className={`${representationStyles.about}`}>
            <motion.div className={`${representationStyles.about__currentPhoto}`}
                style={{ backgroundImage: `url(${currOption.image})` }}
                variants={variants}
                animate={animation ? 'show' : 'hide'}
               />

            <div className={`${representationStyles.about__photoOptions}`}>
                {props.options.map((el, index) => {
                    return <div key={index} className={`${representationStyles.about__photoOption} ${currOption.color === el.color ? representationStyles.about__photoOption_active : ''}`}
                        onClick={() => handleSwitch(el)}
                        style={{ backgroundImage: `url(${el.image})` }} />
                })}
            </div>
        </div>)
}

export default Representation;