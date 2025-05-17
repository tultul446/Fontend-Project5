import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Modal from '@mui/material/Modal';



const style = {
  hight:'100%',
   padding:20,
  position: 'absolute',
    top: '50%',
    left: '50%',
   bottom:'50%',
   transform: 'translate(-50%, -50%)',
    width: 950,
   bgcolor: 'background.paper',
   border: '2px solid #000',
  
  boxShadow: 24,
  p: 4,
};

 function BasicModal() {


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div >
      <Button onClick={handleOpen} sx={{color:'#26395C'}}>Account</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
      <Box sx={{style,} }> 
        <div className="h-auto  ">
     


     

      {/* Main Content */}
      <div className=''>
      <div className="max-w-[950px]  mx-auto px-4  md:px-20  mt-5 mb-5">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-auto  bg-inherit pb-10">
          {/* Left Column */}
          

          <div className="hidden md:block  bg-[url('./image38.png')] bg-cover bg-no-repeat  md:py-24 md:px-9 ">


            <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign Up</h2>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 mb-2">
              Aliquam fosca dolore magna aliquam sed diam.
            </p>
            <p className="text-gray-600 mb-2">
              Aliquam eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            <p className="text-gray-600 mb-2">
              Aliquam magna nec quis nostrud exercitation ullamco laboris nisi.
            </p>
          </div>



          {/* Right Column */}
          <div className="bg-white p-2 md:p-8 mx-auto  md:mx-0 shadow-md h-auto border border-gray-400 mb-9 md:mb-0 ">
            <img src="./Group1.png" alt="" className='ml-9 w-28 h-16  md:w-38 md:h-19'/>
            <h3 className="text-lg md:text-2xl font-bold text-gray-900 md:mb-2">Sign up and get exploring!</h3>
            <p className=" text-sm  text-gray-600 mb-1 md:mb-6">Already have an account? 
              <span className='text-sky-500 underline ml-1'>Sign In</span></p>

            <div className="space-y-1 md:space-y-4">
              <button className="w-full flex items-center justify-center md:px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg className="w-3 md:w-5 h-3 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.16-5.68 2.16-6.92v-.1H12.48z"/>
                </svg>
                Sign Up with Google
              </button>

              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg className="w-3 md:w-5 h-3 md:h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
                Sign Up with Facebook
              </button>

              <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <svg className="w-4 md:w-5 h-4 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Sign Up with Apple
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Or</span>
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  placeholder="@childsbeenvision.com"
                />
              </div>

              <button className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Sign Up
              </button>
              <p className='text-sm text-gray-400'>By creating an account, you agree to our<br/> <span className='text-sky-400'>Terms & Conditions </span>and  <span className='text-sky-400'>Privacy Policy</span>.</p>
            </div>
          </div>
        </div>
      </div>

    
    </div>
    </div>
        </Box>
      </Modal>
    </div>
  );
}

export default BasicModal;