import { useEffect } from "react";

const EvenBrochureLink = 'https://drive.google.com/file/d/1qRh6_AagIl-hdyPe0kgVCyX4P9YuWtlh/view?usp=sharing'

const EventBrochure = () => {
    useEffect(() => {
        window.location.replace(EvenBrochureLink);
    }, []);

    return null;
}

export default EventBrochure;
