<script setup>
</script>

<template>    

    <!-- Container for demo purpose -->
    <div class="w-full">

        <!-- Section: Design Block -->
        <section class="mb-40 w-full">

            <nav class="flex relative justify-between items-center py-2 w-full bg-white shadow-md navbar navbar-expand-lg">
                <div class="flex flex-wrap justify-between items-center px-6 w-full">
                    <div class="flex items-center">
                    <button
                        class="py-3 mr-2 text-xl leading-none text-gray-600 bg-transparent border-0 transition-shadow duration-150 ease-in-out navbar-toggler lg:hidden hover:text-gray-700 focus:text-gray-700"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContentY"
                        aria-controls="navbarSupportedContentY"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        class="w-5"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        >
                        <path
                            fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                        ></path>
                        </svg>
                    </button>
                    <a class="text-blue-600 navbar-brand" href="#!">
                        <svg class="mr-2 ml-2 w-5 h-5 lg:ml-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                        <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
                        </svg>
                    </a>
                    </div>
                    <div class="items-center navbar-collapse collapse grow" id="navbarSupportedContentY">
                    <ul class="mr-auto navbar-nav lg:flex lg:flex-row">
                        <li class="nav-item">
                        <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
                        </li>
                        <li class="nav-item">
                        <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
                        </li>
                        <li class="mb-2 nav-item lg:mb-0">
                        <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
                        </li>
                    </ul>
                    </div>
                    <div class="flex items-center lg:ml-auto">
                    <button type="button" class="inline-block px-6 py-2.5 mr-2 text-xs font-medium leading-tight text-blue-600 uppercase bg-transparent rounded transition duration-150 ease-in-out hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
                    <button type="button" class="inline-block px-6 py-2.5 text-xs font-medium leading-tight text-white uppercase bg-blue-600 rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
                    </div>
                </div>
            </nav>

            <div class="overflow-hidden relative bg-no-repeat bg-cover" style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/textures/full/142.jpg'); height: 500px;"></div>

            <div class="container px-6 mx-auto md:px-12 xl:px-32">
                <div class="text-center text-gray-800">
                    <div class="block px-6 py-12 rounded-lg shadow-lg md:py-16 md:px-12" style="margin-top: -170px; background: hsla(0, 0%, 100%, 0.7); backdrop-filter: blur(30px);">
                        <h1 class="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">The best offer on the market <br /><span class="text-blue-600">for your business</span></h1>
                        <a data-mdb-ripple="true" href="#!" role="button" class="inline-block px-7 py-3 mr-0 mb-2 text-sm font-medium leading-snug text-white uppercase bg-blue-600 rounded shadow-md transition duration-150 ease-in-out md:mb-0 md:mr-2 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg">
                            Get started
                        </a>
                        
                        <a data-mdb-ripple="true" href="#!" role="button" class="inline-block px-7 py-3 mb-2 text-sm font-medium leading-tight leading-snug text-blue-600 text-blue-700 uppercase bg-transparent bg-gray-100 rounded transition duration-150 ease-in-out hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200">
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Section: Design Block -->

    </div>
    <!-- Container for demo purpose -->

    <!-- Container for demo purpose -->
<div>

  <!-- Section: Design Block -->
  <section class="mb-40">
    <nav class="flex relative justify-between items-center py-2 w-full bg-white shadow-md navbar navbar-expand-lg">
      <div class="flex flex-wrap justify-between items-center px-6 w-full">
        <div class="flex items-center">
          <button
            class="py-3 mr-2 text-xl leading-none text-gray-600 bg-transparent border-0 transition-shadow duration-150 ease-in-out navbar-toggler lg:hidden hover:text-gray-700 focus:text-gray-700"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <a class="text-blue-600 navbar-brand" href="#!">
            <svg class="mr-2 ml-2 w-5 h-5 lg:ml-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
            </svg>
          </a>
        </div>
        <div class="items-center navbar-collapse collapse grow" id="navbarSupportedContentY">
          <ul class="mr-auto navbar-nav lg:flex lg:flex-row">
            <li class="nav-item">
              <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
            </li>
            <li class="mb-2 nav-item lg:mb-0">
              <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
            </li>
          </ul>
        </div>
        <div class="flex items-center lg:ml-auto">
          <button type="button" class="inline-block px-6 py-2.5 mr-2 text-xs font-medium leading-tight text-blue-600 uppercase bg-transparent rounded transition duration-150 ease-in-out hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
          <button type="button" class="inline-block px-6 py-2.5 text-xs font-medium leading-tight text-white uppercase bg-blue-600 rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
        </div>
      </div>
    </nav>

    <svg
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      class="hidden absolute svg lg:block"
      style="height: 560px; width: 100%; z-index: -10; overflow: hidden"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
          <stop stop-color="hsl(217,88%, 93%)" offset="100%"></stop>
        </linearGradient>
      </defs>
      <path
        fill="url(#sw-gradient-0)"
        d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
      ></path>
    </svg>

    <div class="px-6 py-12 text-center text-gray-800 lg:my-12 md:px-12 lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="flex grid gap-12 items-center lg:grid-cols-2">
          <div class="mt-12 lg:mt-0">
            <h1 class="mb-12 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">Are you ready <br /><span class="text-blue-600">for an adventure?</span></h1>
            <div class="flex-row md:flex">
              <input type="text" class="block px-4 py-2 m-0 mb-2 w-full text-xl font-normal text-gray-700 bg-clip-padding bg-white rounded border border-gray-300 border-solid transition ease-in-out form-control md:mb-0 md:mr-2 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Enter your email" />
              <button type="submit" class="inline-block px-7 py-3 text-sm font-medium leading-snug text-white uppercase bg-blue-600 rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">Subscribe</button>
            </div>
          </div>
          <div class="mb-12 lg:mb-0">
            <div
              class="overflow-hidden relative w-full rounded-lg shadow-lg embed-responsive embed-responsive-16by9"
              style="padding-top: 56.25%"
            >
              <iframe
                class="absolute top-0 right-0 bottom-0 left-0 w-full h-full embed-responsive-item"
                src="https://www.youtube.com/embed/vlDzYIIOYmM?enablejsapi=1&amp;origin=https%3A%2F%2Fmdbootstrap.com"
                allowfullscreen=""
                data-gtm-yt-inspected-2340190_699="true"
                id="240632615"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->

</div>
<!-- Container for demo purpose -->


<!-- Container for demo purpose -->
<div>

  <!-- Section: Design Block -->
  <section class="mb-40">
    <nav class="flex relative justify-between items-center py-2 w-full bg-white shadow-md navbar navbar-expand-lg">
      <div class="flex flex-wrap justify-between items-center px-6 w-full">
        <div class="flex items-center">
          <button
            class="py-3 mr-2 text-xl leading-none text-gray-600 bg-transparent border-0 transition-shadow duration-150 ease-in-out navbar-toggler lg:hidden hover:text-gray-700 focus:text-gray-700"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContentY"
            aria-controls="navbarSupportedContentY"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-5"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              ></path>
            </svg>
          </button>
          <a class="text-blue-600 navbar-brand" href="#!">
            <svg class="mr-2 ml-2 w-5 h-5 lg:ml-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
            </svg>
          </a>
        </div>
        <div class="items-center navbar-collapse collapse grow" id="navbarSupportedContentY">
          <ul class="mr-auto navbar-nav lg:flex lg:flex-row">
            <li class="nav-item">
              <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
            </li>
            <li class="nav-item">
              <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
            </li>
            <li class="mb-2 nav-item lg:mb-0">
              <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
            </li>
          </ul>
        </div>
        <div class="flex items-center lg:ml-auto">
          <button type="button" class="inline-block px-6 py-2.5 mr-2 text-xs font-medium leading-tight text-blue-600 uppercase bg-transparent rounded transition duration-150 ease-in-out hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
          <button type="button" class="inline-block px-6 py-2.5 text-xs font-medium leading-tight text-white uppercase bg-blue-600 rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
        </div>
      </div>
    </nav>

    <div class="px-6 py-12 text-center text-gray-800 md:px-12 lg:text-left">
      <div class="container mx-auto xl:px-32">
        <div class="flex grid items-center lg:grid-cols-2">
          <div class="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
            <div class="block px-6 py-12 rounded-lg shadow-lg md:px-12 lg:-mr-14" style="background: hsla(0, 0%, 100%, 0.55); backdrop-filter: blur(30px);">
              <h1 class="mb-12 text-4xl font-bold tracking-tight md:text-5xl xl:text-6xl">The best offer <br /><span class="text-blue-600">for your business</span></h1>
              <a class="inline-block px-7 py-3 mb-2 text-sm font-medium leading-snug text-white uppercase bg-blue-600 rounded shadow-md transition duration-150 ease-in-out md:mb-0 md:mr-2 hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" data-mdb-ripple="true"  href="#!" role="button">Get started</a>
              <a class="inline-block px-7 py-3 text-sm font-medium leading-snug text-blue-600 uppercase bg-transparent rounded transition duration-150 ease-in-out hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
            </div>
          </div>
          <div class="md:mb-12 lg:mb-0">
            <img
              src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
              class="w-full rounded-lg shadow-lg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Section: Design Block -->

</div>
<!-- Container for demo purpose -->

      <!-- Container for demo purpose -->
      <div>

        <!-- Section: Design Block -->
        <section class="overflow-hidden mb-40">
          <nav class="flex relative justify-between items-center py-2 w-full bg-white shadow-md navbar navbar-expand-lg">
            <div class="flex flex-wrap justify-between items-center px-6 w-full">
              <div class="flex items-center">
                <button
                  class="py-3 mr-2 text-xl leading-none text-gray-600 bg-transparent border-0 transition-shadow duration-150 ease-in-out navbar-toggler lg:hidden hover:text-gray-700 focus:text-gray-700"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContentY"
                  aria-controls="navbarSupportedContentY"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    class="w-5"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                    ></path>
                  </svg>
                </button>
                <a class="text-blue-600 navbar-brand" href="#!">
                  <svg class="mr-2 ml-2 w-5 h-5 lg:ml-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path fill="currentColor" d="M485.5 0L576 160H474.9L405.7 0h79.8zm-128 0l69.2 160H149.3L218.5 0h139zm-267 0h79.8l-69.2 160H0L90.5 0zM0 192h100.7l123 251.7c1.5 3.1-2.7 5.9-5 3.3L0 192zm148.2 0h279.6l-137 318.2c-1 2.4-4.5 2.4-5.5 0L148.2 192zm204.1 251.7l123-251.7H576L357.3 446.9c-2.3 2.7-6.5-.1-5-3.2z"></path>
                  </svg>
                </a>
              </div>
              <div class="items-center navbar-collapse collapse grow" id="navbarSupportedContentY">
                <ul class="mr-auto navbar-nav lg:flex lg:flex-row">
                  <li class="nav-item">
                    <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Dashboard</a>
                  </li>
                  <li class="nav-item">
                    <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Team</a>
                  </li>
                  <li class="mb-2 nav-item lg:mb-0">
                    <a class="block py-2 pr-2 text-gray-600 transition duration-150 ease-in-out nav-link lg:px-2 hover:text-gray-700 focus:text-gray-700" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">Projects</a>
                  </li>
                </ul>
              </div>
              <div class="flex items-center lg:ml-auto">
                <button type="button" class="inline-block px-6 py-2.5 mr-2 text-xs font-medium leading-tight text-blue-600 uppercase bg-transparent rounded transition duration-150 ease-in-out hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200" data-mdb-ripple="true" data-mdb-ripple-color="light">Login</button>
                <button type="button" class="inline-block px-6 py-2.5 text-xs font-medium leading-tight text-white uppercase bg-blue-600 rounded shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg" data-mdb-ripple="true" data-mdb-ripple-color="light">Sign up for free</button>
              </div>
            </div>
          </nav>

          <div class="overflow-hidden relative bg-no-repeat bg-cover" style="background-position: 50%; background-image: url('https://mdbootstrap.com/img/new/standard/city/078.jpg');
          height: 500px;">
            <div class="overflow-hidden absolute top-0 right-0 bottom-0 left-0 w-full h-full bg-fixed" style="background-color: rgba(0, 0, 0, 0.75);">
              <div class="flex justify-center items-center h-full">
                <div class="px-6 text-center text-white md:px-12">
                  <h1 class="mb-12 text-5xl font-bold tracking-tight md:text-6xl xl:text-7xl">The best offer on the market <br /><span>for your business</span></h1>
                  <a class="inline-block px-7 py-3 mr-1.5 text-sm font-medium leading-snug text-white uppercase rounded-full border-2 border-white shadow-md transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Get started</a>
                  <a class="inline-block px-7 py-3 text-sm font-medium leading-snug text-white uppercase bg-transparent rounded-full border-2 border-transparent transition duration-150 ease-in-out focus:outline-none focus:ring-0" data-mdb-ripple="true" data-mdb-ripple-color="light" href="#!" role="button">Learn more</a>
                </div>
              </div>
            </div>
          </div>

          <div class="-mt-2.5 md:-mt-4 lg:-mt-6 xl:-mt-10" style="height: 50px; transform: scale(2); transform-origin: top center; color: #fff;">
            <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z" fill="currentColor" ></path>
            </svg>
          </div>
        </section>
        <!-- Section: Design Block -->

      </div>
      <!-- Container for demo purpose -->

      <!-- Container for demo purpose -->
<div>

 

</div>
<!-- Container for demo purpose -->
</template>

<style scoped>
      .background-radial-gradient {
        background-color: hsl(218, 41%, 15%);
        background-image: radial-gradient(
          650px circle at 0% 0%,
          hsl(218, 41%, 35%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%
        ),
        radial-gradient(
          1250px circle at 100% 100%,
          hsl(218, 41%, 45%) 15%,
          hsl(218, 41%, 30%) 35%,
          hsl(218, 41%, 20%) 75%,
          hsl(218, 41%, 19%) 80%,
          transparent 100%
        );
      }
      #radius-shape-1 {
        height: 220px;
        width: 220px;
        top: -60px;
        left: -130px;
        background: radial-gradient(#44006b, #ad1fff);
        overflow: hidden;
      }
      #radius-shape-2 {
        border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;
        bottom: -60px;
        right: -110px;
        width: 300px;
        height: 300px;
        background: radial-gradient(#44006b, #ad1fff);
        overflow: hidden;
      }
      .bg-glass {
        background-color: hsla(0, 0%, 100%, 0.9);
        backdrop-filter: saturate(200%) blur(25px);
      }
    </style>