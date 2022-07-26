import React, { useState, useEffect } from 'react';
import axios from 'axios';
import KeeperCard from '../../components/KeeperCard';

const PAGE_SIZE = 6;

const KeeperSearch = () => {

    const [allKeepers, setAllKeepers] = useState([]);
    const [ page, setPage ] = useState(1);
    const [ total, setTotal ] = useState(0);
    const [ lastCursor, setLastCursor ] = useState(null);

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/user/keepers-total`)
    //         .then((response) => {
    //             setTotal(response.data);
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         })
    // }, []);

    const fetchKeepers = () => {
        axios.post(
            'https://us-central1-woof-keeper-backend.cloudfunctions.net/getAllKeepers',
            { lastCursor },
            )
            .then((response) => {
                console.log(response.data);
                setAllKeepers([...allKeepers, ...response.data.results]);
                setLastCursor(response.data.lastCursor);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        fetchKeepers();
    }, []);

    const handleShowingMoreResults = (ev) => {
        ev.preventDefault();
        fetchKeepers();
    };

    return (
        <>
            <div className="row mx-0 px-2 py-4">
                {allKeepers.map((keeper) => (
                    <div key={keeper._id} className="col-4 pb-4">
                        <KeeperCard
                            name={keeper.name}
                            pictureUrl={keeper.pictureUrl}
                            price={keeper.price}
                            city={keeper.city}
                            state={keeper.state}
                            createdAt={keeper.createdAt}
                        />
                    </div>
                ))}
            </div>
            
            <div className='row mx-0 pb-4'>
                <div className='col'>
                    {
                        lastCursor && (
                            <button
                                type='button'
                                className='btn btn-primary'
                                onClick={handleShowingMoreResults}
                            >Show more</button>
                        )
                    }
                </div>
            </div>
        </>
    );
};

export default KeeperSearch;