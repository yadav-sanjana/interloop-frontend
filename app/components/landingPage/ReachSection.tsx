import Image from 'next/image';
import React from 'react';
import map from '../../../public/map.png'

const GlobalBusinessSection: React.FC = () => {
    return (
        <section className="w-full table relative py-0 px-0 pb-50 bg-blue-800">
            <div className="container">
                <div className="map m-14">
                    <div className='flex-row items-center text-center'>
                        <div className='text-white text-center text-3xl mb-2'>
                            Build for Global Business
                        </div>
                        <div className="text-white text-center text-xl mb-20">
                            Interloop has a worldwide presence through offshore offices and global partners across continents
                        </div>
                        <Image className='items-center text-center m-auto' src={map} alt="map" />
                    </div>

                </div>

            </div>
        </section>
    );
};

export default GlobalBusinessSection;
