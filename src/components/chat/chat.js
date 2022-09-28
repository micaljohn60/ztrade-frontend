import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

export default function Chat(){
    const tawkMessengerRef = useRef();
    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };
    return (
        <div className="Test">
            <TawkMessengerReact
                propertyId="62ffcdf537898912e964075f"
                widgetId="1garjp2rn"/>
        </div>
    );
}