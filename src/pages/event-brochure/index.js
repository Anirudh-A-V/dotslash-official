import { useEffect } from "react";

const EvenBrochureLink = 'https://drive.google.com/file/d/1vqHnh7LIyvCGPGi2hkTnXlrd_dP_dYSS/view?usp=sharing'

const EventBrochure = () => {
    useEffect(() => {
        window.location.replace(EvenBrochureLink);
    }, []);

    return null;
}

export default EventBrochure;