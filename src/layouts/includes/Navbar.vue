<script></script>

<template>
    <nav class="border-t-4 border-blue-500 shadow-lg">
        <div class="px-4 mx-auto max-w-6xl">
            <div class="flex justify-between">
            <div class="flex space-x-7">
                <div>
                <a href="#" class="flex items-center px-2 py-4">
                    <img src="https://cdn.discordapp.com/avatars/699203703164633120/2f34ca5ca47fc1e257cc77e7ef97f02d.png" alt="Logo" class="mr-2 w-8 h-8 rounded-full" /><span class="text-lg font-semibold text-gray-500">MrDark</span>
                    </a>
                </div>
            </div>
            <div class="hidden items-center space-x-1 md:flex">
                <a href="" class="px-2 py-4 font-semibold text-blue-500">Home</a>
                <a href="" class="px-2 py-4 font-semibold text-gray-500 transition duration-300 hover:text-blue-500">Projects</a>
                <a href="https://www.buymeacoffee.com/MrDark" class="px-3 py-2 text-sm font-medium text-white bg-purple-600 rounded-md transition duration-300 hover:bg-purple-800">Donate</a>
            </div>
            <div class="flex mr-10 md:hidden">
                <button class="inline-flex justify-center items-center p-2 rounded-md text-dark">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                    <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z">
                    </path>
                </svg>
                </button>
            </div>
            </div>
        </div>
        <div class="hidden">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 md:hidden">
            <a href="" class="block px-3 py-2 text-base font-medium text-white text-blue-500 rounded-md transition duration-300 cursor-pointer hover:text-blue-500">Home </a>
            <a href="" class="block px-3 py-2 text-base font-medium text-white rounded-md transition duration-300 cursor-pointer hover:text-blue-500">Projects</a>
            <a href="" class="block px-3 py-2 text-base font-medium text-white bg-purple-600 rounded-md transition duration-300 cursor-pointer hover:bg-purple-800">Donate</a>
            </div>
        </div>
    </nav>
</template>