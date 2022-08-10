import React from 'react';
import Styles from './KeeperCard.module.css'
import LocationIcon from '../assets/images/location.png';

const KeeperCard = (props) => {
    return (
        <div className={`card h-100 ${Styles.keeperCard}`}>
            <div className={`${Styles.hireMeContainer} d-flex justify-content-center align-items-center`}>
                <button className={`btn ${Styles.hireMeButton}`} type="button">
                    Hire me
                </button>
            </div>

            <div className="card-body p-0">

                <div className="row mx-0 h-100">
                     <div className="col d-flex justify-content-center align-items-center px-0">
                        <div className={`${Styles.avatar}`} style={{ backgroundImage: `url(${props.pictureUrl})` }}>
                            
                        </div>
                    </div>

                    <div className="col px-0">
                        <div className="row h-50 mx-0">
                            <div className="col d-flex flex-column align-items-start px-0">
                                <div className={`row pt-4 ${Styles.textHighlight} w-100 mx-0`}>
                                    <div className="col">
                                        <p className={`text-start m-0 ${Styles.keeperName}`}>
                                            {props.name}
                                        </p>
                                    </div>
                                </div>

                                <div className={`row pb-2 ${Styles.textHighlight} w-100 mx-0`}>
                                    <div className="col">
                                        <p className={`text-start m-0 ${Styles.keeperDate}`}>
                                            Since {new Date(props.createdAt).getFullYear()}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row h-50 mx-0">
                            <div className="col d-flex flex-column align-items-end px-0">
                                <div className="row pt-4 mx-0 w-100">
                                    <div className="col d-flex justify-content-start">
                                        <p className={`m-0 ${Styles.rate}`}>
                                            ${props.price}
                                        </p>
                                    </div>
                                </div>

                                <div className="row pb-4 mx-0 w-100">
                                    <div className="col d-flex justify-content-end align-items-center">
                                        <img className={Styles.locationIcon} src={LocationIcon} />
                                        <p className={`${Styles.locationText} mb-0 ms-2`}>
                                            {props.city}, {props.state}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                

                {/* <h5 className="pt-3">{props.petName}</h5>
                <h6 className="mb-2 text-muted">{props.petType}</h6>

                <Link to={`/pets/${props.id}`}><Button type="button" className="btn btn-primary mx-1">Details</Button></Link>
                <Link to={`/pets/edit/${props.id}`}><Button type="button" className="btn btn-danger mx-1">Edit</Button></Link> */}
            </div>
        </div>
    );
};

export default KeeperCard;