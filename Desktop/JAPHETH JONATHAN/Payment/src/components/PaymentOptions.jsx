import React from 'react';
import { Link } from 'react-router-dom';

const PaymentOptions = () => {
  return (
    <div className='flex flex-col py-6 items-center w-full min-h-screen bg-dB'>
      <h1 className='text-4xl font-bold text-center my-10 text-white drop-shadow-md'>Select Payment Option</h1>
      <div className='flex text-center justify-center mx-auto sm:w-3/4 flex-wrap gap-y-10 gap-10'>
        <Link to={'/crypto'} className='border border-gray-300 rounded-3xl w-2/5 py-10 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-200'>
          <p className=' text-2xl font-semibold text-gray-800'>Crypto</p>
        </Link>
        <Link to={'/banktransfer'} className='border border-gray-300 rounded-3xl w-2/5 py-10 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-200'>
          <p className='text-2xl font-semibold text-gray-800'>Bank Transfer</p>
        </Link>
        <Link to={'/cardpayment'} className='border border-gray-300 rounded-3xl w-2/5 py-10 bg-white shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 hover:bg-blue-200'>
          <p className='text-2xl font-semibold text-gray-800'>PayPal/Card Payment</p>
        </Link>
      </div>
    </div>
  );
}

export default PaymentOptions;
