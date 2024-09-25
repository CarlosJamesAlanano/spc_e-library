<script lang="ts">
    let isMenuOpen = false;

    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<body class="bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-md py-4 px-8">
        <div class="container mx-auto flex justify-between items-center">
            <!-- Logo and Title -->
            <div class="flex items-center">
                <img src="./logo.png" alt="SPC Library Logo" class="w-12 h-12 sm:w-16 sm:h-16" />
                <h1 class="ml-4 text-2xl sm:text-3xl font-bold text-gray-800">SPC Public Library</h1>
            </div>

            <!-- Hamburger Menu Button (Mobile Only) -->
            <button
                aria-label="Toggle Menu"
                class="block sm:hidden text-gray-600 focus:outline-none"
                on:click={toggleMenu}
            >
                <svg class="w-6 h-6" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            <!-- Navigation Menu -->
            <nav class={`flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6 text-gray-600 mt-4 sm:mt-0 ${isMenuOpen ? 'flex' : 'hidden'} sm:flex`}>
                <a href="src/routes/+page.svelte" class="hover:text-blue-600 transition">Home</a>
                <a href="src/routes/browse.svelte" class="hover:text-blue-600 transition">Browse</a>
                <a href="src/routes/contact.svelte" class="hover:text-blue-600 transition">Contact</a>
                <a href="src/routes/about.svelte" class="hover:text-blue-600 transition">About Us</a>
            </nav>
        </div>
    </header>

    <!-- Main Content -->
    <main class="container mx-auto py-12 px-4">
        <!-- Hero Section -->
        <section class="bg-blue-100 rounded-lg p-6 sm:p-8 mb-12 text-center">
            <h2 class="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">Welcome to SPC Public eLibrary</h2>
            <p class="text-md sm:text-lg text-gray-600 mb-6">
                Discover a world of knowledge with our digital library, featuring a vast collection of research papers.
            </p>
            <a href="src/routes/browse.svelte" class="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold hover:bg-blue-700 transition">
                Explore Now
            </a>
        </section>

        <!-- About & Featured Research Papers Section -->
        <section class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-12 mb-12">
            <!-- About Section -->
            <article>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">About the Library</h2>
                <p class="text-gray-600">
                    SPC Public Library offers a wide range of resources for both students and professionals. With a focus on fostering learning and research, our digital collections span across various disciplines.
                </p>
            </article>

            <!-- Featured Research Papers -->
            <article>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Recently Added</h2>
                <ul class="space-y-4">
                    <li class="bg-white rounded-md shadow-lg p-4">
                        <h3 class="text-lg sm:text-xl font-bold text-gray-800">Research Title 1</h3>
                        <p class="text-gray-600">Short description of the study goes here.</p>
                    </li>
                    <li class="bg-white rounded-md shadow-lg p-4">
                        <h3 class="text-lg sm:text-xl font-bold text-gray-800">Research Title 2</h3>
                        <p class="text-gray-600">Short description of the study goes here.</p>
                    </li>
                </ul>
            </article>
        </section>

        <!-- Featured Collections & Announcements Section -->
        <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-12">
            <!-- Featured Collections -->
            <article class="col-span-1">
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Featured Collections</h2>
                <div class="grid grid-cols-1 gap-4">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="#" alt="Collection 1" class="w-full h-40 object-cover">
                        <div class="p-4">
                            <h3 class="text-lg sm:text-xl font-bold text-gray-800">Collection of Topic 1</h3>
                            <p class="text-gray-600">Brief description of the collection.</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="#" alt="Collection 2" class="w-full h-40 object-cover">
                        <div class="p-4">
                            <h3 class="text-lg sm:text-xl font-bold text-gray-800">Collection of Topic 2</h3>
                            <p class="text-gray-600">Brief description of the collection.</p>
                        </div>
                    </div>
                </div>
            </article>

            <!-- Announcements -->
            <article class="lg:col-span-2">
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Announcements</h2>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <p class="text-gray-600">Stay updated with the latest news and events happening at SPC Public Library. Check back regularly for important announcements and updates.</p>
                </div>
            </article>
        </section>
    </main>

    <!-- Footer -->
    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto text-center">
            <div class="mb-4">
                <a href="src/routes/+page.svelte" class="hover:text-gray-300 mx-2">Home</a> 
                <a href="#" class="hover:text-gray-300 mx-2">Privacy Policy</a> 
                <a href="#" class="hover:text-gray-300 mx-2">Terms of Service</a>
            </div>
            <p class="text-sm">&copy; 2024 San Pablo City Public Library. All rights reserved.</p>
        </div>
    </footer>
</body>
