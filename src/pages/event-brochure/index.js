import { useEffect } from "react";

const EvenBrochureLink = 'https://drive.google.com/file/d/1ru8mQjz0O_E3a4Et6mXPmSZ4fdL3A0yc/view?usp=sharing'

const EventBrochure = () => {
    useEffect(() => {
        window.location.replace(EvenBrochureLink);
    }, []);

    return null;
}

export default EventBrochure;
