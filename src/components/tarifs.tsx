import React from "react";
import "./tarifs.css";
import Wallet from '../assets/wallet.png';
import Deal from '../assets/deal.png';
import premium from '../assets/crown.png';

export default function Tarifs() {
    return (
        <>
        <div className="plans-container">

            <div className="tarifs">
                <p className="title-tarifs">Basic</p>
                <img src={Deal} alt="Wallet" className='wallet-logo' width={30} height={30}/>
                <h1 className="price">$80</h1>
                <p className="tarif-description">Basic Plan offers a great balance of features and speed. It includes more benefits and is done within 7 days.</p>
                <div className="quality-container">
                    <p className="tarif-quality">✓ Finished within 7 days</p>
                    <p className="tarif-quality">✓ High quality design</p>
                    <p className="tarif-quality">✕ Full refund (80%)</p>
                    <p className="tarif-quality">✕ Extra features</p>
                    <p className="tarif-quality">✓ 100% responsive</p>
                </div>
            </div>

            <div className="tarifs">
                <p className="title-tarifs">Standart</p>
                <img src={Wallet} alt="Wallet" className='wallet-logo' width={30} height={30}/>
                <h1 className="price">$40</h1>
                <p className="tarif-description">Eco Plan is budget-friendly and efficient. It includes essential features and is completed within 10 days.</p>
                <div className="quality-container">   
                    <p className="tarif-quality">✓ Finished within 10 days</p>
                    <p className="tarif-quality">✕ Generic design</p>
                    <p className="tarif-quality">✕ Full refund (80%)</p>
                    <p className="tarif-quality">✕ Extra features</p>
                    <p className="tarif-quality">✓ 100% responsive</p>
                </div>
            </div>

            <div className="tarifs">
                <p className="title-tarifs">Premium</p>
                <img src={premium} alt="Wallet" className='wallet-logo' width={30} height={30}/>
                <h1 className="price">$100</h1>
                <p className="tarif-description">Premium Plan is the best you can get. It includes extra features, and is done within 5 days. Possibility of reimbursement.</p>
                <div className="quality-container">
                    <p className="tarif-quality">✓ Finished within 5 days</p>
                    <p className="tarif-quality">✓ High quality design</p>
                    <p className="tarif-quality">✓ Full refund</p>
                    <p className="tarif-quality">✓ Extra features</p>
                    <p className="tarif-quality">✓ 100% responsive</p>
                </div>
            </div>
            
        </div>
        </>
    );
}

