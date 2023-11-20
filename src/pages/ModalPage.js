import { useState } from 'react';
import Modal from '../components/Modal';
import Button from '../components/Button';

function ModalPage() {
    const [showModal, setShowModal] = useState(false);


    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    const actionBar = (
        <div>
            <Button onClick={handleClose} primary>
                I Accept
            </Button>
        </div>
    );

    const modal = (
        <Modal onClose={handleClose} actionBar={actionBar}>
            <p>Here is an important agreement for you to accept</p>
        </Modal>);
    return (
        <div>
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal}
            <p>
                Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Just my luck, no ice.
                So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Did he just throw my cat out of the window? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
            </p>
            <p>
                Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Just my luck, no ice.
                So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Did he just throw my cat out of the window? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
            </p>
            <p>
                Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Just my luck, no ice.
                So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Did he just throw my cat out of the window? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
            </p>
            <p>
                Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Just my luck, no ice.
                So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Did he just throw my cat out of the window? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
            </p>
            <p>
                Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Just my luck, no ice.
                So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Did he just throw my cat out of the window? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
            </p>
            <p>
                Eventually, you do plan to have dinosaurs on your dinosaur tour, right? So you two dig up, dig up dinosaurs? Yeah, but your scientists were so preoccupied with whether or not they could, they didn't stop to think if they should. Just my luck, no ice.
                So you two dig up, dig up dinosaurs? We gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause maybe if we screw up this planet enough, they won't want it anymore! Did he just throw my cat out of the window? Is this my espresso machine? Wh-what is-h-how did you get my espresso machine?
            </p>
        </div>

    );
};

export default ModalPage;