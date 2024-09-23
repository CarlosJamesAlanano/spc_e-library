<body class="bg-gray-50">
    <header class="bg-white shadow-md py-4 px-8">
        <div class="container mx-auto flex justify-between items-center">
            <div class="flex items-center">
                <img src="logo.png" alt="SPC Library Logo" class="w-16 h-16" />
                <h1 class="ml-4 text-3xl font-bold text-gray-800">SPC Public Library</h1>
            </div>
            <nav class="flex space-x-6 text-gray-600">
                <a href="src/routes/+page.svelte" class="hover:text-blue-600 transition">Home</a>
                <a href="src/routes/browse.svelte" class="hover:text-blue-600 transition">Browse</a>
                <a href="src/routes/contact.svelte" class="hover:text-blue-600 transition">Contact</a>
                <a href="src/routes/about.svelte" class="hover:text-blue-600 transition">About Us</a>
            </nav>
        </div>
    </header>

    <main class="container mx-auto py-12">
        <section class="bg-blue-100 rounded-lg p-8 mb-12 text-center">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">Welcome to SPC Public eLibrary</h2>
            <p class="text-lg text-gray-600 mb-6">
                Discover a world of knowledge with our digital library, featuring a vast collection of research papers.
            </p>
            <a href="/browse" class="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition">
                Explore Now
            </a>
        </section>

        <!-- Featured Books and Library Information -->
        <section class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">About the Library</h2>
                <p class="text-gray-600">
                    SPC Public Library offers a wide range of resources for both students and professionals. With a focus on fostering learning and research, our digital collections span across various disciplines.
                </p>
            </div>
            <div>
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Featured Research Papers</h2>
                <ul class="space-y-4">
                    <li class="bg-white rounded-md shadow-lg p-4">
                        <h3 class="text-xl font-bold text-gray-800">Research Title 1</h3>
                        <p class="text-gray-600">Short description of the study goes here.</p>
                    </li>
                    <li class="bg-white rounded-md shadow-lg p-4">
                        <h3 class="text-xl font-bold text-gray-800">Research Title 2</h3>
                        <p class="text-gray-600">Short description of the study goes here.</p>
                    </li>
                </ul>
            </div>
        </section>

        <section class="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div class="md:col-span-1">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Featured Collections</h2>
                <div class="grid grid-cols-1 gap-6">
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="collection-1.jpg" alt="Collection 1" class="w-full h-40 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-bold text-gray-800">Collection of Topic 1</h3>
                            <p class="text-gray-600">Brief description of the collection.</p>
                        </div>
                    </div>
                    <div class="bg-white rounded-lg shadow-lg overflow-hidden">
                        <img src="collection-2.jpg" alt="Collection 2" class="w-full h-40 object-cover">
                        <div class="p-4">
                            <h3 class="text-xl font-bold text-gray-800">Collection of Topics 2</h3>
                            <p class="text-gray-600">Brief description of the collection.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="md:col-span-2">
                <h2 class="text-3xl font-bold text-gray-800 mb-4">Announcements</h2>
                <div class="bg-white rounded-lg shadow-lg p-6">
                    <p class="text-gray-600">Stay updated with the latest news and events happening at SPC Public Library. Check back regularly for important announcements and updates.</p>
                </div>
            </div>
        </section>
    </main>

    <footer class="bg-gray-900 text-white py-8">
        <div class="container mx-auto text-center">
            <div class="mb-4">
                <a href="#" class="hover:text-gray-300 mx-2">Home</a> |
                <a href="#" class="hover:text-gray-300 mx-2">Privacy Policy</a> |
                <a href="#" class="hover:text-gray-300 mx-2">Terms of Service</a>
            </div>
            <p>&copy; 2024 San Pablo City Public Library. All rights reserved.</p>
        </div>
    </footer>
</body>
