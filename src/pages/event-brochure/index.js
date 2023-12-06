import { useEffect } from "react";

const EvenBrochureLink = 'https://drive.google.com/file/d/1M8Sw5Hf9kUiCyb8rrP5XChWDfghvRCDg/view?usp=drive_link'

const EventBrochure = () => {
    useEffect(() => {
        window.location.replace(EvenBrochureLink);
    }, []);

    return null;
}

export default EventBrochure;
