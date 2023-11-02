import React,{useState} from 'react';
import { result } from '../data/data.js';
import Modal from 'react-modal';


const Search = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenTo, setIsOpenTo] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchTermTo, setSearchTermTo] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdownTo = () => {
    setIsOpenTo(!isOpenTo);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setIsOpen(true);
  };

  const handleSearchTo = (e) => {
    setSearchTermTo(e.target.value);
    setIsOpenTo(true);
  };


  const handleResultClick = (selectedResult) => {
    setSearchTerm(selectedResult.Code);
    setIsOpen(false);
  };
  
  const handleResultClickTo = (selectedResult) => {
    setSearchTermTo(selectedResult.Code); 
    setIsOpenTo(false);
  };

  const filteredResults = result.filter((item) =>
    item.City.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredResultsTo = result.filter((item) =>
  item.City.toLowerCase().includes(searchTermTo.toLowerCase())
);

const handleIconClick = () => {
  const temp = searchTerm;
  setSearchTerm(searchTermTo);
  setSearchTermTo(temp);
};

const handleModalOpen = () => {
  setIsModalOpen(true);
};

const handleModalClose = () => {
  setIsModalOpen(false);
};


  return (
     <div className="flex justify-center items-center h-screen bg-grey overflow-hidden">
     
     <div className="pt-8 pb-10 p-relative px-10 px-4--xs pt-4--xs pb-4--xs home-search-banner" style={{ background: 'rgb(255, 255, 255)', border: '1px solid rgb(230, 230, 230)', boxShadow: 'rgba(0, 0, 0, 0.04) 0px 8px 16px', borderRadius: '12px' }}>
      <div className='text-center mb-8'>
        <h1 className='text-5xl'>Book <span className='text-orange-500'> Flight</span></h1>
        
      </div>
     <div className="flex flex-row items-center mt-5 space-x-4 mb-10">
          <button className="py-1 px-3 border border-green-500 hover:border-orange-500 text-green-500 hover:text-orange-500 font-semibold rounded-md">
            Regular fare
          </button>
          <button className="py-1 px-3 border border-blue-500 hover:border-orange-500 text-blue-500 hover:text-orange-500 font-semibold rounded-md">
            Student fare
          </button>
          <button className="py-1 px-3 border border-yellow-500 hover:border-orange-500 text-yellow-500 hover:text-orange-500 font-semibold rounded-md">
            Senior citizen fare
          </button>
          <button className="py-1 px-3 border border-red-500 hover:border-orange-500 text-red-500 hover:text-orange-500 font-semibold rounded-md">
            Armed forces fare
          </button>
        </div>
        
        <div className="dropdown-container h-13 bc-neutral-100 flex ba mb-5 relative"  style={{ border: '1px solid #e2e8f0' }}>
     
          <div className="field-1 flex flex-middle p-relative pr-4 w-100p ">
          <div className="flex items-center">
            <div className="mx-4">
              <svg
                width="20"
                height="17"
                viewBox="0 0 20 17"
                fill="#808080"
                className="icon-1"
              >
                <path d="M1.37578 16.4977V15.4977H18.3758V16.4977H1.37578ZM2.95078 11.4227L0.675781 7.49766L1.52578 7.29766L3.32578 8.84766L8.72578 7.39766L4.67578 0.547657L5.75078 0.222656L12.6008 6.34766L17.8258 4.94766C18.2091 4.84766 18.5551 4.91832 18.8638 5.15966C19.1718 5.40166 19.3258 5.71432 19.3258 6.09766C19.3258 6.36432 19.2508 6.59766 19.1008 6.79766C18.9508 6.99766 18.7508 7.13099 18.5008 7.19766L2.95078 11.4227Z"></path>
              </svg>
            </div>
            </div>
            <div className="relative ">
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Where from?"
            value={searchTerm}
            onChange={handleSearch}
            onClick={toggleDropdown}
          />
          {isOpen && (
            <div className="md:absolute max-h-96  bg-white border border-gray-300 rounded-md mt-1 w-full overflow-auto"  >
              {filteredResults.slice(0, 5).map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleResultClick(item)}
                  className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6v6l3 1.5V18H9v-4.5L12 12V6z"
                    />
                  </svg>
                  <div className="flex-1">
                    <p className="text-lg font-semibold">{item.City}</p>
                    <p className="text-sm text-gray-500">{`${item.Code} - ${item.Country}`}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
          
          </div>
     
          <div className="p-relative">
            <div
              className="bc-grey-10 bl bw-1 d-block flex-1"
  
            ></div>
            
            <div className="md:hidden mx-4 p-absolute nl-8 t-2 z-10" onClick={handleIconClick}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                className="c-pointer"
              >
                <rect width="32" height="32" rx="16" fill="white"></rect>
                <g clipPath="url(#clip0_160_1650)">
                  <path
                    d="M24.1666 14.8333H7.83325"
                    stroke="#3366CC"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.83325 14.8333L13.6666 9"
                    stroke="#3366CC"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M7.83342 18.3335H24.1667"
                    stroke="#3366CC"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M24.1667 18.3334L18.3334 24.1667"
                    stroke="#3366CC"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <circle
                    cx="16"
                    cy="16"
                    r="13.375"
                    stroke="#3366CC"
                    strokeWidth="1.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></circle>
                </g>
                <defs>
                  <clipPath id="clip0_160_1650">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="translate(2 2)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
          <div className="field-2 flex flex-middle p-relative pr-4 w-100p">
          <div className="flex items-center">
            <div className="mr-4 pl-8 icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#808080"
                className="icon-2"
              >
                <mask
                  id="mask0_160_1644"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="24"
                  height="24"
                  style={{ maskType: 'alpha' }}
                >
                  <rect width="24" height="24" fill="#D9D9D9"></rect>
                </mask>
                <g mask="url(#mask0_160_1644)">
                  <path d="M3.5 20.5004V19.5004H20.5V20.5004H3.5ZM18.975 15.4004L3.5 11.1254V6.70039L4.3 6.92539L5 9.05039L10.5 10.6004V2.65039L11.625 2.92539L14.375 11.6754L19.625 13.1504C19.8917 13.2171 20.1043 13.3587 20.263 13.5754C20.421 13.7921 20.5 14.0337 20.5 14.3004C20.5 14.6837 20.3377 14.9921 20.013 15.2254C19.6877 15.4587 19.3417 15.5171 18.975 15.4004Z"></path>
                </g>
              </svg>
            </div>
            </div>
            <div className="relative">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Where to?"
                value={searchTermTo}
                onChange={handleSearchTo}
                onClick={toggleDropdownTo}
              />
              {isOpenTo && (
                <div className=" md:absolute w-full max-h-96  bg-white border border-gray-300 rounded-md mt-1 overflow-auto"   >
                  {filteredResultsTo.slice(0, 5).map((item, index) => (
                    <div
                      key={index}
                      onClick={() => handleResultClickTo(item)}
                      className="flex items-center py-2 px-4 hover:bg-gray-100 cursor-pointer"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6l3 1.5V18H9v-4.5L12 12V6z"
                        />
                      </svg>
                      <div className="flex-1">
                        <p className="text-lg font-semibold">{item.City}</p>
                        <p className="text-sm text-gray-500">{`${item.Code} - ${item.Country}`}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        <div className='flex mt-10'>
       
    <div className="field-3 flex flex-middle p-relative pr-4 w-100p">
      <button
        className="py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-md"
        onClick={handleModalOpen}
      >
        Search Flight
      </button>
    </div>

        <div className="field-4 flex flex-middle p-relative pr-4 w-100p ">
          <input
            className="w-100p fs-4 fw-500 c-neutral-500 py-2 pl-3 pr-10 rounded-md"
            type="date"
            placeholder="Select Date"
            style={{ border: '1px solid #e2e8f0' }}
          />
        </div>
        <Modal
      isOpen={isModalOpen}
      onRequestClose={handleModalClose}
      contentLabel="Flight Booked Successfully"
      style={{
        content: {
          width: '300px',
          height: '150px',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
      }}
    >
      <div className="flex items-center justify-center">
        <div className="bg-green-500 rounded-md p-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <p className="text-white text-sm">Flight Booked Successfully</p>
        </div>
      </div>
    </Modal>
</div>
      </div>
    </div>
    
  );
};

export default Search;