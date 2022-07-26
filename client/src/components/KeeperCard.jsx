import React from 'react';
// import './KeeperCard2.css';
import Styles from './KeeperCard.module.css'

const KeeperCard = (props) => {
    return (
            <div className="card">
                <div className="card-body">

                    <div className="row">
                        <div className="col d-flex justify-content-center align-items-center">
                            <div className={Styles.avatar} style={{ backgroundImage: `url(${props.pictureUrl})` }}></div>
                        </div>
                    </div>

                    <p className="m-0">
                        {props.name}
                    </p>

                    <p className="m-0">
                        Since {new Date(props.createdAt).getFullYear()}
                    </p>

                    <div className="row">
                        <div className="col d-flex justify-content-start">
                            <p className={`m-0 ${Styles.rate}`}>
                                ${props.price}
                            </p>
                        </div>

                        <div className="col d-flex justify-content-end align-items-center">
                            <p className="m-0">
                                {props.city}, {props.state}
                            </p>
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