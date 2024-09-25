<script lang="ts">
    // A boolean flag to track the state of the mobile navigation menu (open or closed).
    let isMenuOpen = false;

    // Function to toggle the menu open and close state.
    // This is triggered by the hamburger button click event for mobile screens.
    const toggleMenu = () => {
        isMenuOpen = !isMenuOpen;
    };
</script>

<body class="bg-gray-50 text-gray-800 antialiased">
    <!-- Header Section: Contains the logo, title, and navigation -->
    <header class="bg-white shadow-sm sticky top-0 z-50 py-4">
        <div class="container mx-auto flex justify-between items-center px-6 md:px-12">
            <!-- Logo and Title Block -->
            <div class="flex items-center space-x-4">
                <!-- Logo Image for SPC eLibrary -->
                <img src="./logo.png" alt="SPC Library Logo" class="w-10 h-10 md:w-12 md:h-12" />
                <!-- Title of the Website -->
                <h1 class="text-xl md:text-2xl font-bold">SPC eLibrary</h1>
            </div>

            <!-- Hamburger Menu Button: Visible on mobile screens to toggle the navigation -->
            <button
                aria-label="Toggle Menu"
                class="block md:hidden text-gray-600 focus:outline-none"
                on:click={toggleMenu} 
            ><!-- Click event to toggle the mobile menu -->
                <!-- Icon for the Hamburger Menu using SVG -->
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>

            <!-- Navigation Menu: Hidden by default on mobile, visible on larger screens -->
            <!-- When isMenuOpen is true, the menu will be shown on mobile devices -->
            <nav class={`flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 text-gray-700 md:flex ${isMenuOpen ? 'flex' : 'hidden'} md:flex`}>
                <!-- Individual navigation links with hover transition effects -->
                <a href="src/routes/+page.svelte" class="hover:text-blue-600 transition">Home</a>
                <a href="src/routes/browse.svelte" class="hover:text-blue-600 transition">Browse</a>
                <a href="src/routes/contact.svelte" class="hover:text-blue-600 transition">Contact</a>
                <a href="src/routes/about.svelte" class="hover:text-blue-600 transition">About</a>
            </nav>
        </div>
    </header>

    <!-- Main Content Section: Includes hero section, about information, featured research, and other site features -->
    <main class="container mx-auto py-16 px-6 md:px-12">
        <!-- Hero Section: A banner section with a brief introduction and call to action -->
        <section class="bg-white shadow-md rounded-lg p-8 text-center mb-12">
            <!-- Main Heading for the Hero Section -->
            <h2 class="text-4xl font-bold mb-4">Discover Knowledge at SPC eLibrary</h2>
            <!-- Short description below the main heading -->
            <p class="text-lg text-gray-600 mb-6">Access a world of research and educational resources from anywhere.</p>
            <!-- Call to Action Button for browsing the library -->
            <a href="src/routes/browse.svelte" class="inline-block bg-blue-600 text-white py-3 px-8 rounded-full font-semibold hover:bg-blue-700 transition">
                Explore Now
            </a>
        </section>

        <!-- About and Recently Added Section -->
        <!-- Grid layout that adjusts to one or two columns depending on the screen size -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <!-- About Section: Brief description of SPC eLibrary -->
            <div>
                <h2 class="text-3xl font-bold mb-4">About SPC eLibrary</h2>
                <!-- A short paragraph explaining the library's purpose -->
                <p class="text-gray-600">SPC eLibrary provides access to vast research collections for students and professionals, promoting learning and innovation. Explore across disciplines with ease.</p>
            </div>

            <!-- Recently Added Section: Highlights new research papers or documents -->
            <div>
                <h2 class="text-3xl font-bold mb-4">Recently Added</h2>
                <!-- List of recently added research papers, each styled with padding and shadow -->
                <ul class="space-y-4">
                    <li class="bg-white shadow rounded-md p-6">
                        <h3 class="text-xl font-semibold">Research Title 1</h3>
                        <p class="text-gray-600">Brief description of this study.</p>
                    </li>
                    <li class="bg-white shadow rounded-md p-6">
                        <h3 class="text-xl font-semibold">Research Title 2</h3>
                        <p class="text-gray-600">Brief description of this study.</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- Featured Collections and Announcements Section -->
        <!-- Grid layout adjusts from 1 to 3 columns based on screen size -->
        <section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Featured Collections Section -->
            <div class="lg:col-span-1">
                <h2 class="text-3xl font-bold mb-4">Featured Collections</h2>
                <div class="space-y-6">
                    <!-- Card-like structure for individual collections -->
                    <div class="bg-white shadow rounded-lg overflow-hidden">
                        <!-- Collection image placeholder -->
                        <img src="#" alt="Collection 1" class="w-full h-40 object-cover" />
                        <!-- Collection title and description -->
                        <div class="p-6">
                            <h3 class="text-lg font-semibold">Collection Title 1</h3>
                            <p class="text-gray-600">Brief description of collection.</p>
                        </div>
                    </div>
                    <div class="bg-white shadow rounded-lg overflow-hidden">
                        <img src="#" alt="Collection 2" class="w-full h-40 object-cover" />
                        <div class="p-6">
                            <h3 class="text-lg font-semibold">Collection Title 2</h3>
                            <p class="text-gray-600">Brief description of collection.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Announcements Section: Displays recent news or events related to the library -->
            <div class="lg:col-span-2">
                <h2 class="text-3xl font-bold mb-4">Announcements</h2>
                <!-- Simple block for announcements -->
                <div class="bg-white shadow rounded-lg p-6">
                    <p class="text-gray-600">Stay up to date with our latest events and news.</p>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer Section: Contains links and copyright information -->
    <footer class="bg-gray-900 text-white py-12">
        <div class="container mx-auto text-center">
            <!-- Navigation Links for the Footer -->
            <div class="mb-6">
                <a href="src/routes/+page.svelte" class="mx-4 hover:text-gray-400">Home</a>
                <a href="#" class="mx-4 hover:text-gray-400">Privacy Policy</a>
                <a href="#" class="mx-4 hover:text-gray-400">Terms of Service</a>
            </div>
            <!-- Copyright Notice -->
            <p class="text-sm">&copy; 2024 SPC eLibrary. All rights reserved.</p>
        </div>
    </footer>
</body>
