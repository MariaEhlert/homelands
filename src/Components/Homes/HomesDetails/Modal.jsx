import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
// import { Slide } from 'react-slideshow-image';
// import ImageGallery from 'react-image-gallery';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        width: '60%',
        // marginRight: '100%',
        transform: 'translate(-50%, -50%)',
    },
};
Modal.setAppElement('#root');

export const ImageModal = props => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>
                <img src={require('../../../Assets/Images/CameraIcon.png')} alt="cameraIcon" />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>
                    <img src={require('../../../Assets/Images/XIcon.png')} alt="XIcon" />
                </button>
                <figure className='imageModalWrapper'>
                    <Carousel>
                        {props.item.images && props.item.images.map((image) => {
                            return (
                                <React.Fragment key={image.file}>
                                    <img src={image.filename.medium} width='100%' alt={image.file} />
                                </React.Fragment>
                            )
                        })}
                    </Carousel>
                </figure>
            </Modal>
        </div>
    );
}
export const LayoutModal = props => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>
                <img src={require('../../../Assets/Images/LayoutIcon.png')} alt="layoutIcon" />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>
                    <img src={require('../../../Assets/Images/XIcon.png')} alt="XIcon" />
                </button>
                <div><img src={props.item.floorplan} alt={props.item.id} /></div>
            </Modal>
        </div>
    );
}
export const MapModal = props => {
    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <div>
            <button onClick={openModal}>
                <img src={require('../../../Assets/Images/LocationIcon.png')} alt="locationIcon" />
            </button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={closeModal}>
                    <img src={require('../../../Assets/Images/XIcon.png')} alt="XIcon" />
                </button>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2170.1487200338147!2d9.96242401596871!3d57.04899359874515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sda!2sdk!4v1662629819602!5m2!1sda!2sdk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </Modal>
        </div>
    );
}
