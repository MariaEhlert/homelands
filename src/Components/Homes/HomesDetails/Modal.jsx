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
                {/* <div><img src={props.item.floorplan} alt={props.item.id} /></div> */}
            </Modal>
        </div>
    );
}
