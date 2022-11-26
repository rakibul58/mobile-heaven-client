import React from 'react';

const AdvertisedItem = ({phone}) => {
    const { image , model , price} = phone;
    return (
        <div>
            <div className="card bg-base-100 shadow-2xl pt-6">
                <figure><img className='rounded-xl' style={{height:'200px'}} src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-accent">
                        {model}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <div className="card-actions flex-col justify-start">
                        <h1 className='text-lg text-accent text-opacity-90'>Price: <strong>{price} Taka</strong></h1>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline text-info">Advertised</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdvertisedItem;