<template>
    <header class="w-full">
        <nav class="w-full bg-gray-50 shadow dark:bg-gray-800">
            <div class="container px-6 pt-4 mx-auto">
                <div class="lg:flex lg:items-center lg:justify-between">
                    <div class="flex items-center justify-between">
                        <div class="text-xl font-semibold text-gray-700">
                            <a data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1500" data-aos-delay="200" class="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300" href="/">Kay<span>tex</span></a> 
                        </div>

                        <!-- Mobile menu button -->
                        <div class="flex lg:hidden">
                            <button type="button" class="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
                    <ul class="hidden -mx-4 lg:flex lg:items-center">
                        <li data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-delay="300" data-mdb-ripple="true" data-mdb-ripple-color="dark" class="block mx-4 mt-2 text-md text-gray-500 capitalize lg:mt-0 hover:text-gray-700 focus:text-gray-700 cursor-pointer">
                            Home
                        </li>
                        <li data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-delay="400" @mouseenter="dropDown(true)" data-mdb-ripple="true" data-mdb-ripple-color="light" class="block mx-4 mt-2 text-md text-gray-500 capitalize lg:mt-0 hover:text-gray-700 focus:text-gray-700 cursor-pointer">
                            Services
                            <svg class="inline w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                        </li>
                        <div v-if="dropdown" @mouseleave="dropDown(false)" class="transition-all duration-300 transform origin-top-right -translate-y-2 scale-95 z-50">
                            <div class="absolute right-0 w-56 mt-4 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
                                <div class="px-4 py-3">         
                                    <a href="" class="text-sm leading-5">IT Consulting</a>
                                    <!-- <p class="text-sm font-medium leading-5 text-gray-900 truncate">admin@foodie.com</p> -->
                                </div>
                                <div class="py-1">
                                    <a href="" tabindex="0" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" >App Development</a>
                                    <a href="" tabindex="1" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" >Website Design</a>
                                    <a href="" tabindex="2" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" >E-Commerce</a>
                                </div>
                                <div class="py-1">
                                    <a tabindex="3" class="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left cursor-pointer">Digital Marketing</a>
                                </div>
                            </div>
                        </div>
                        <li data-aos="zoom-in" data-aos-easing="ease-in" data-aos-duration="1000" data-aos-delay="500" data-mdb-ripple="true" data-mdb-ripple-color="dark" class="block mx-4 mt-2 text-md text-gray-500 capitalize lg:mt-0 hover:text-gray-700 focus:text-gray-700 cursor-pointer">
                            Contact Us
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        <!-- <div class="waveWrapper waveAnimation">
            <div class="waveWrapperInner bgTop">
                <div class="wave waveTop" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-top.png')"></div>
            </div>
            <div class="waveWrapperInner bgMiddle">
                <div class="wave waveMiddle" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-mid.png')"></div>
            </div>
            <div class="waveWrapperInner bgBottom">
                <div class="wave waveBottom" style="background-image: url('http://front-end-noobs.com/jecko/img/wave-bot.png')"></div>
            </div>
        </div> -->

        <div class="w-full bg-gray-50">
            <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
                <div class="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                    <h1 data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="500" class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-600 font-bold leading-7 md:leading-10">
                        Delivering Cutting-Edge 
                        <span class="text-orange-600">Technology </span>
                        Solutions
                    </h1>
                    <p data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700" class="mt-5 sm:mt-10 lg:w-10/12 text-gray-500 font-normal text-center text-md sm:text-xl">With the right technology partner, growth, innovation and possibilities are endless. </p>
                </div>
                <div class="flex justify-center items-center">
                    <button data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700" data-mdb-ripple="true" data-mdb-ripple-color="light" class="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-orange-500 transition duration-150 ease-in-out hover:bg-orange-400 lg:text-xl lg:font-bold  rounded-full text-white px-4 sm:px-10 border border-orange-500 py-2 sm:py-4 text-sm">StartUp Solutions</button>
                    <button data-aos="zoom-in" data-aos-duration="1500" data-aos-delay="700" data-mdb-ripple="true" data-mdb-ripple-color="warning" class="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 bg-transparent transition duration-150 ease-in-out hover:border-orange-400 lg:text-xl lg:font-bold  hover:text-orange-400 rounded-full border border-orange-500 text-orange-500 px-4 sm:px-10 py-2 sm:py-4 text-sm">Ecommerce Solutions</button>
                </div>
            </div>
        </div>
        <!-- <div class="w-full bg-center bg-cover h-screen motion-safe:animate-fadeIn" style="background-image: url('images/banner.jpg')">
            <div class="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
                <div class="text-center">
                    <h1 class="text-2xl font-semibold text-white uppercase lg:text-3xl">Delivering Cutting-Edge Technology Solutions</h1>
                    <p class="mt-8">
                        <span class="text-xl font-semibold text-blue-400 uppercase lg:text-lg">With the right technology partner, growth, innovation and possibilities are endless.</span>
                    </p>
                </div>
            </div>
        </div> -->

        <div class="w-full bg-orange-100">
            <div class="container flex flex-col px-6 py-10 mx-auto lg:py-16 lg:flex-row lg:items-center" >
                <div class="w-full lg:w-1/2">
                    <div data-aos="zoom-in-right" data-aos-duration="1000" daa-aos-delay="200" class="lg:max-w-lg">
                        <h1 class="text-xl font-bold tracking-wide text-gray-600 dark:text-white lg:text-3xl">
                            Scnip, the right technology partner for your brand
                        </h1>
                        
                        <div class="mt-8 space-y-5">
                            <p class="flex items-center -mx-2 text-gray-500 dark:text-gray-200">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> -->
                                <span class="mx-4 text-lg">Scnip is a world-class technology firm, providing cutting-edge information technology solutions.</span>
                            </p>                        
                        </div>

                        <div class="mt-8 space-y-5">
                            <p class="flex items-center -mx-2 text-gray-500 dark:text-gray-200">
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg> -->
                                <span class="mx-4 text-lg">Our core areas include web/application analysis, design and development, corporate branding, networking, network and information security and information technology consulting services.</span>
                            </p>                        
                        </div>
                    </div>
                </div>
        
                <div data-aos="zoom-in-left" data-aos-duration="1000" daa-aos-delay="300" class="flex items-center justify-center w-full h-96 lg:w-1/2">
                    <!-- <img class="object-cover w-full h-full mx-auto rounded-md lg:max-w-2xl" src="https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="glasses photo"> -->
                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" width="357.03596" height="746.13897" viewBox="0 0 657.03596 776.13897" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M916.98312,822.59834a50.79382,50.79382,0,0,1-13.58984,12.63c-1.12012.71-2.27,1.38-3.43994,2H872.42355c.32959-.66.64991-1.33.96-2a95.35446,95.35446,0,0,0-19.84034-109.34c16.64014,5.14,32.02,15.16,42.08008,29.37006a64.46956,64.46956,0,0,1,10.23,23,96.27571,96.27571,0,0,0-7.66992-48.41c13.50977,10.99,24.03027,26.04,28.04,42.98C930.23312,789.77833,927.32346,808.58833,916.98312,822.59834Z" transform="translate(-271.48202 -61.93052)" fill="teal"/>
                        <path class="animate-pulse" id="b35682e1-9f03-403a-b8b0-c3d37d0d1380-757" data-name="Path 2533" d="M928.136,838.06948H670.398v-2.106h258.12Z" transform="translate(-271.48202 -61.93052)" fill="#3f3d56"/>
                        <path class="animate-pulse" d="M580.23,325.2c0,38.64-13.5,71.63-39.19,96.18-18.23,17.43-46.31,41.86-46.31,67.69v21.37h-85.5V489.07c0-26.1-28.19-50.58-46.31-67.69-25.11-23.69-39.19-58.92-39.19-96.18v-.79a128.25061,128.25061,0,0,1,256.5.79Z" transform="translate(-271.48202 -61.93052)" fill="#f3a60c"/>
                        <path id="ecc2cf6c-8ee8-498c-972d-3c77e28b77e9-758" data-name="Path 2546" d="M494.729,513.44052a3,3,0,0,1-3-3v-21.374c0-25.125,24.779-48.58,42.873-65.706,1.5-1.422,2.961-2.8,4.363-4.145,25.029-23.928,38.259-56.437,38.259-94.014,0-70.229-55.013-125.243-125.242-125.243h-.354A125.03,125.03,0,0,0,326.739,324.49652v.7c0,36.8,13.939,71.063,38.245,94.007,1.231,1.163,2.51,2.36,3.823,3.589,18.327,17.159,43.427,40.658,43.427,66.275v21.373a3,3,0,0,1-6,0v-21.374c0-23.015-24-45.486-41.528-61.9q-1.9785-1.851-3.841-3.605c-25.5-24.072-40.126-59.924-40.126-98.364v-.72c.2-72.045,58.885-130.523,130.88-130.523h.371A130.557,130.557,0,0,1,583.22407,323.83091q.00357.68526-.00006,1.3706c0,39.255-13.871,73.264-40.112,98.351-1.409,1.347-2.876,2.736-4.386,4.165-17.3,16.377-41,38.806-41,61.349v21.374a3,3,0,0,1-3,3Z" transform="translate(-271.48202 -61.93052)" fill="#ff8d00"/>
                        <path id="b22bef41-3cd7-4c1e-881c-c9a642005cb0-759" data-name="Path 2547" d="M480.481,551.93552h-57a5,5,0,1,1,0-10h57a5,5,0,0,1,0,10Z" transform="translate(-271.48202 -61.93052)" fill="#ff8d00"/>
                        <path d="M458.10991,585.43538H445.84282a23.44664,23.44664,0,0,1-12.09412-3.35059,2.79354,2.79354,0,0,1-1.26831-3.21435,2.8865,2.8865,0,0,1,2.80164-2.14209h33.38891a2.88664,2.88664,0,0,1,2.80176,2.14209,2.79336,2.79336,0,0,1-1.26856,3.21435A23.44509,23.44509,0,0,1,458.10991,585.43538Z" transform="translate(-271.48202 -61.93052)" fill="#ff8d00"/>
                        <path d="M480.49077,567.72932l-57.33814-.00634-.17761-.38086a4.726,4.726,0,0,1,.89978-4.05811,4.85563,4.85563,0,0,1,3.82288-1.84863h48.55773a4.855,4.855,0,0,1,3.82325,1.84912,4.698,4.698,0,0,1,.91089,4.00732l-.09009.38623Z" transform="translate(-271.48202 -61.93052)" fill="#ff8d00"/>
                        <path id="e0eb6627-54a4-4797-861b-0d156b8b485b-760" data-name="Path 2548" d="M319.381,207.34151a4.98,4.98,0,0,1-3.286-1.233l-42.939-37.481a5,5,0,0,1,6.576-7.533l42.939,37.481a5,5,0,0,1-3.29,8.767Z" transform="translate(-271.48202 -61.93052)" fill="#f3a60c"/>
                        <path id="e13fc22b-cd18-4b6e-a2d4-df4b74c6b7e7-761" data-name="Path 2549" d="M577.45905,207.34151a5,5,0,0,1-3.29-8.767l42.93792-37.484a5,5,0,0,1,6.576,7.533l-42.939,37.481A4.98,4.98,0,0,1,577.45905,207.34151Z" transform="translate(-271.48202 -61.93052)" fill="#ff8d00"/>
                        <path id="a74da646-4683-465e-97fe-dd817e7fc328-762" data-name="Path 2550" d="M494.729,534.19052h-85.5a5,5,0,0,1,0-10h85.5a5,5,0,0,1,0,10Z" transform="translate(-271.48202 -61.93052)" fill="#ff8d00"/>
                        <path d="M449.88,403.57,432.1,510.44H421.95l18.06-108.51a5.00266,5.00266,0,0,1,9.87,1.64Z" transform="translate(-271.48202 -61.93052)" fill="#e6e6e6"/>
                        <path d="M484.05,510.44H473.9L456.12,403.57a5.00266,5.00266,0,0,1,9.87-1.64Z" transform="translate(-271.48202 -61.93052)" fill="#e6e6e6"/>
                        <path id="be3a5c8a-fbb4-472c-819b-e8dd06032f6a-763" data-name="Path 2551" d="M419.48452,400a5,5,0,0,1,5-5h54.993a5,5,0,0,1,0,10h-54.993A5,5,0,0,1,419.48452,400Z" transform="translate(-271.48202 -61.93052)" fill="#e6e6e6"/>
                        <path id="e9f776ed-f4b6-47dc-b212-c247d99ecb23-764" data-name="Path 2553" d="M451.981,157.43052a5,5,0,0,1-5-5v-85.5a5,5,0,0,1,10,0v85.5A5,5,0,0,1,451.981,157.43052Z" transform="translate(-271.48202 -61.93052)" fill="#efd110"/>
                        <path id="eba1f826-879a-4c25-b118-6bb025be95d0-765" data-name="Path 2559" d="M860.701,824.07953H848.443l-5.832-47.288h18.092Z" transform="translate(-271.48202 -61.93052)" fill="#feb8b8"/>
                        <path id="f6694a1b-3521-46e6-aa9c-51f4297aac52-766" data-name="Path 2560" d="M863.82805,835.96354H824.297v-.5a15.387,15.387,0,0,1,15.385-15.386h24.146Z" transform="translate(-271.48202 -61.93052)" fill="#2f2e41"/>
                        <path id="fae71c2d-33fb-45f7-8331-19b4de5eddc8-767" data-name="Path 2561" d="M767.564,823.67553l-11.844-3.167,6.58-47.19,17.48,4.674Z" transform="translate(-271.48202 -61.93052)" fill="#feb8b8"/>
                        <path id="b3b10fd6-5fa4-49f3-8270-96ad6a3a1e0e-768" data-name="Path 2562" d="M767.515,835.96354l-38.189-10.212.129-.483a15.387,15.387,0,0,1,18.839-10.89h0l23.325,6.237Z" transform="translate(-271.48202 -61.93052)" fill="#2f2e41"/>
                        <path id="f6267da0-acb1-421a-9dac-5a6151c1f955-769" data-name="Path 2563" d="M867.754,559.06753l10.269,11.931-13.28,242.442h-28.369l-14.3-186.551-44.349,191.554-29.492-7.233,26.816-243.3Z" transform="translate(-271.48202 -61.93052)" fill="#2f2e41"/>
                        <path id="ea0dabd6-18d7-4484-8048-4cddc34702bd-770" data-name="Path 2564" d="M781.905,402.54252l28.246-14.172,43.437.764,37.38,19.127L869.7,514.4795l9.187,55.38h0a226.53255,226.53255,0,0,1-108.335.892l-.284-.068s21.114-74.916,12.126-97.779Z" transform="translate(-271.48202 -61.93052)" fill="#e6e6e6"/>
                        <path id="a75b604a-8411-40e9-b5d3-81fba8b6e00c-771" data-name="Path 2565" d="M863.621,345.93452a31.994,31.994,0,1,0,0,.237Z" transform="translate(-271.48202 -61.93052)" fill="#feb8b8"/>
                        <path id="b97e8772-edf1-4d51-bb40-aaab108bf113-772" data-name="Path 2567" d="M778.007,479.9835a11.462,11.462,0,0,0,16.65,5.627l57.353,30.318,1.857-13.971-55.73-32.863a11.524,11.524,0,0,0-20.131,10.889Z" transform="translate(-271.48202 -61.93052)" fill="#feb8b8"/>
                        <path id="b7638692-4395-4c34-bc33-e4b41c888504-773" data-name="Path 2568" d="M854.436,482.39851a11.462,11.462,0,0,1-17.478,1.848l-62.6,17.035.545-17.738,62.27106-16.173a11.524,11.524,0,0,1,17.261,15.03Z" transform="translate(-271.48202 -61.93052)" fill="#feb8b8"/>
                        <path id="fb7d8996-2760-43c1-a9a4-d402d6d3756c-774" data-name="Path 2569" d="M878.762,409.0305l12.205-.765s14.29,18.855,6.364,39.316c0,0,1.373,73.5-30.276,70.48s-41.65-3.019-41.65-3.019l9.5-26.5,21.253-6.562s-6.55-28.894,5.849-40.916Z" transform="translate(-271.48202 -61.93052)" fill="#e6e6e6"/>
                        <path id="a9eb06d8-8cbf-43ab-991d-4f9eccd60edd-775" data-name="Path 2570" d="M790.63005,408.38551l-1.725-8.843s-25.44-.6-30.47,37.951c0,0-22.877,57.692-.454,65.121s47.089,0,47.089,0l-1.85711-25.444-24.67-5.033s12.745-16.489,5.805-30.792Z" transform="translate(-271.48202 -61.93052)" fill="#e6e6e6"/>
                        <path id="ba7ab43e-494b-455d-a87f-0e0f24cb0a47-776" data-name="Path 2387" d="M842.70445,361.6451c-2.35273-.92321-4.95894-.87527-7.44567-1.33105-8.89342-1.63849-15.75239-10.70648-14.90781-19.70962a10.84778,10.84778,0,0,0,.05763-3.5329c-.61621-2.569-3.47169-3.94789-6.09484-4.25558s-5.33331.086-7.885-.59694c-3.93954-1.05505-6.883-4.64835-7.88062-8.603a19.487,19.487,0,0,1,1.267-11.96329l1.22416,2.55209a9.91759,9.91759,0,0,0,2.5062-4.85275,6.25462,6.25462,0,0,1,5.16622,3.27253c1.58106.70614,1.388-2.90614,2.96395-3.621a2.95887,2.95887,0,0,1,2.10019.27339c3.47269,1.16515,7.156-.583,10.59739-1.83576a40.41732,40.41732,0,0,1,18.64164-2.13018c4.18269.51056,8.40506,1.74686,11.66025,4.41951a26.60667,26.60667,0,0,1,6.156,8.27393c4.017,7.50846,7.04316,15.79159,6.96075,24.30956a35.29808,35.29808,0,0,1-6.1645,19.5192c-2.052,2.98581-8.67978,13.34292-13.08484,12.20287C843.00869,372.607,849.32934,364.24347,842.70445,361.6451Z" transform="translate(-271.48202 -61.93052)" fill="#2f2e41"/>
                    </svg>
                </div>
            </div>

            <div class="relative -mt-12 lg:-mt-24">
                <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
                            <path d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z" opacity="0.100000001"></path>
                            <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
                        </g>
                        <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
                            <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z" ></path>
                        </g>
                    </g>
                </svg>
            </div>

        </div>
    </header>
</template>

<script>

export default {
    data() {
        return {
            dropdown: false
        }
    },
    methods: {
        dropDown(param) {
            this.dropdown = param
        }
    }
}
</script>

<style scoped>
@keyframes move_wave {
    0% {
        transform: translateX(0) translateZ(0) scaleY(1)
    }
    50% {
        transform: translateX(-25%) translateZ(0) scaleY(0.55)
    }
    100% {
        transform: translateX(-50%) translateZ(0) scaleY(1)
    }
}
.waveWrapper {
    overflow: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: auto;
}
.waveWrapperInner {
    position: absolute;
    width: 100%;
    overflow: hidden;
    height: 100%;
    bottom: -1px;
    background-image: linear-gradient(to top, #86377b 20%, #27273c 80%);
}
.bgTop {
    z-index: 15;
    opacity: 0.5;
}
.bgMiddle {
    z-index: 10;
    opacity: 0.75;
}
.bgBottom {
    z-index: 5;
}
.wave {
    position: absolute;
    left: 0;
    width: 200%;
    height: 100%;
    background-repeat: repeat no-repeat;
    background-position: 0 bottom;
    transform-origin: center bottom;
}
.waveTop {
    background-size: 50% 100px;
}
.waveAnimation .waveTop {
    animation: move-wave 3s;
    -webkit-animation: move-wave 3s;
    -webkit-animation-delay: 1s;
    animation-delay: 1s;
}
.waveMiddle {
    background-size: 50% 120px;
}
.waveAnimation .waveMiddle {
    animation: move_wave 10s linear infinite;
}
.waveBottom {
    background-size: 50% 100px;
}
.waveAnimation .waveBottom {
    animation: move_wave 15s linear infinite;
}
</style>