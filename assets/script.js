        // Vocabulary data
        const vocabulary = {
        colors: [
            { word: "Red", translation: "Merah", image: "https://via.placeholder.com/150?text=Red", color: "#FF0000" },
            { word: "Blue", translation: "Biru", image: "https://via.placeholder.com/150?text=Blue", color: "#0000FF" },
            { word: "Yellow", translation: "Kuning", image: "https://via.placeholder.com/150?text=Yellow", color: "#FFFF00" },
            { word: "Green", translation: "Hijau", image: "https://via.placeholder.com/150?text=Green", color: "#00FF00" },
            { word: "Pink", translation: "Merah Muda", image: "https://via.placeholder.com/150?text=Pink", color: "#FFC0CB" },
            { word: "Purple", translation: "Ungu", image: "https://via.placeholder.com/150?text=Purple", color: "#800080" },
            { word: "Orange", translation: "Oranye", image: "https://via.placeholder.com/150?text=Orange", color: "#FFA500" },
            { word: "Black", translation: "Hitam", image: "https://via.placeholder.com/150?text=Black", color: "#000000" },
            { word: "White", translation: "Putih", image: "https://via.placeholder.com/150?text=White", color: "#000000" },
            { word: "Brown", translation: "Cokelat", image: "https://via.placeholder.com/150?text=Brown", color: "#A52A2A" }
        ],
        animals: [
            { word: "Dog", translation: "Anjing", image: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg", sound: "https://www.soundjay.com/mechanical/sounds/dog-bark-01.mp3" },
            { word: "Cat", translation: "Kucing", image: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg", sound: "https://www.soundjay.com/mechanical/sounds/cat-meow-01.mp3" },
            { word: "Bird", translation: "Burung", image: "https://cdn.pixabay.com/photo/2017/02/07/16/47/kingfisher-2046453_960_720.jpg", sound: "https://www.soundjay.com/nature/sounds/bird-chirp-01.mp3" },
            { word: "Fish", translation: "Ikan", image: "https://cdn.pixabay.com/photo/2016/12/31/21/22/discus-fish-1943755_960_720.jpg", sound: "https://www.soundjay.com/nature/sounds/water-bubbles-01.mp3" },
            { word: "Lion", translation: "Singa", image: "https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg", sound: "https://www.soundjay.com/mechanical/sounds/lion-roar-01.mp3" },
            { word: "Elephant", translation: "Gajah", image: "https://img.freepik.com/free-psd/majestic-elephant-isolated_23-2151857814.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740", sound: "https://www.soundjay.com/button/sounds/button-4.mp3" },
            { word: "Monkey", translation: "Monyet", image: "https://img.freepik.com/free-photo/monkeys-eating-fruit_181624-26885.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740", sound: "https://www.soundjay.com/button/sounds/button-3.mp3" },
            { word: "Cow", translation: "Sapi", image: "https://img.freepik.com/free-photo/cows-standing-green-field-front-fuji-mountain-japan_335224-197.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740", sound: "https://www.soundjay.com/button/sounds/button-2.mp3" },
            { word: "Duck", translation: "Bebek", image: "https://img.freepik.com/free-vector/hand-drawn-cartoon-duck-illustration_23-2150426966.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740", sound: "https://www.soundjay.com/button/sounds/button-1.mp3" },
            { word: "Horse", translation: "Kuda", image: "https://img.freepik.com/free-photo/herd-horses-grazing-pasture-beautiful-sky_181624-41307.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740", sound: "https://www.soundjay.com/button/sounds/button-09.mp3" }
        ],
        food: [
            { word: "Apple", translation: "Apel", image: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" },
            { word: "Banana", translation: "Pisang", image: "https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" },
            { word: "Pizza", translation: "Pizza", image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg" },
            { word: "Ice Cream", translation: "Es Krim", image: "https://img.freepik.com/free-vector/realistic-ice-cream-collection_52683-64217.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" },
            { word: "Milk", translation: "Susu", image: "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg" },
            { word: "Bread", translation: "Roti", image: "https://img.freepik.com/free-vector/vector-set-delicious-breads_1308-132310.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" },
            { word: "Egg", translation: "Telur", image: "https://img.freepik.com/free-psd/raw-eggs-arrangement_23-2151864154.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" },
            { word: "Cheese", translation: "Keju", image: "https://img.freepik.com/free-vector/emmental-cheese-wedge-with-thin-slices-swiss-italian-dairy-fresh-organic-product_1441-1612.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" },
            { word: "Rice", translation: "Nasi", image: "https://img.freepik.com/free-photo/milled-rice-bowl-wooden-spoon-black-cement-floor_1150-20058.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" },
            { word: "Carrot", translation: "Wortel", image: "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740" }
        ],
        transportation: [
            {
            word: "Car",
            translation: "Mobil",
            image: "https://img.freepik.com/free-psd/modern-car-isolated_23-2151504570.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Bus",
            translation: "Bus",
            image: "https://img.freepik.com/free-vector/school-bus-transport_24877-83090.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Bicycle",
            translation: "Sepeda",
            image: "https://img.freepik.com/premium-vector/bike-cyclism-graphic-design_24877-41803.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Airplane",
            translation: "Pesawat",
            image: "https://img.freepik.com/premium-psd/modern-white-passenger-aircraft-isolated_527900-2915.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Boat",
            translation: "Perahu",
            image: "https://img.freepik.com/free-vector/cute-monkey-rowing-wooden-boat-white-background_1308-70763.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Train",
            translation: "Kereta",
            image: "https://img.freepik.com/premium-vector/realistic-train-vector-illustration-concept_1253202-13912.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Motorcycle",
            translation: "Sepeda Motor",
            image: "https://img.freepik.com/free-psd/3d-scooter-isolated-transparent-background_191095-16626.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Helicopter",
            translation: "Helikopter",
            image: "https://img.freepik.com/free-vector/helicopter-cartoon-sticker-white-background_1308-76792.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Truck",
            translation: "Truk",
            image: "https://img.freepik.com/premium-vector/cartoon-truck-trailer-isolated-vehicle-vector-illustration_939711-4051.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            },
            {
            word: "Scooter",
            translation: "Skuter",
            image: "https://img.freepik.com/premium-vector/push-scooter-illustration-balance-kick-bike-yellow-color-isolated-white-background_408115-1653.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740"
            }
        ]
        };


        // Quiz data
        const quizzes = {
        colors: [
            {
            question: "Bahasa Inggrisnya 'Merah' ?",
            image: "https://via.placeholder.com/150?text=Red",
            options: ["Blue", "Green", "Red", "Yellow"],
            answer: "Red",
            level: 1
            },
            {
            question: "Bahasa Inggrisnya 'Biru' ?",
            image: "https://via.placeholder.com/150?text=Blue",
            options: ["Blue", "Green", "Red", "Yellow"],
            answer: "Blue",
            level: 2
            },
            {
            question: "Bahasa Inggrisnya 'Kuning'?",
            image: "https://via.placeholder.com/150?text=Yellow",
            options: ["Yellow", "Red", "Pink", "Black"],
            answer: "Yellow",
            level: 3
            },
            {
            question: "Bahasa Inggrisnya 'Hijau'?",
            image: "https://via.placeholder.com/150?text=Green",
            options: ["Green", "Blue", "Brown", "White"],
            answer: "Green",
            level: 4
            },
            {
            question: "Bahasa Inggrisnya 'Merah Muda'?",
            image: "https://via.placeholder.com/150?text=Pink",
            options: ["Pink", "Purple", "Orange", "Yellow"],
            answer: "Pink",
            level: 5
            },
            {
            question: "Bahasa Inggrisnya 'Ungu'?",
            image: "https://via.placeholder.com/150?text=Purple",
            options: ["White", "Orange", "Purple", "Black"],
            answer: "Purple",
            level: 6
            },
            {
            question: "Bahasa Inggrisnya 'Oranye'?",
            image: "https://via.placeholder.com/150?text=Orange",
            options: ["Black", "Brown", "White", "Orange"],
            answer: "Orange",
            level: 7
            },
            {
            question: "Bahasa Inggrisnya 'Hitam'?",
            image: "https://via.placeholder.com/150?text=Black",
            options: ["White", "Brown", "Purple", "Black"],
            answer: "Black",
            level: 8
            },
            {
            question: "Bahasa Inggrisnya 'Putih'?",
            image: "https://via.placeholder.com/150?text=White",
            options: ["White", "Brown", "Orange", "Black"],
            answer: "White",
            level: 9
            },
            {
            question: "Bahasa Inggrisnya 'Coklat'?",
            image: "https://via.placeholder.com/150?text=Brown",
            options: ["Orange", "Black", "Purple", "Brown"],
            answer: "Brown",
            level: 10
            }

            // ... lanjut untuk semua warna
        ],
        animals: [
            {
            question:  "What Animal Is This?",
            image: "https://cdn.pixabay.com/photo/2016/12/13/05/15/puppy-1903313_960_720.jpg",
            options: ["Dog", "Cat", "Lion", "Fish"],
            answer: "Dog",
            level: 1
            },
            {
            question:  "What Animal Is This?",
            image: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_960_720.jpg",
            options: ["Cat", "Monkey", "Bird", "Duck"],
            answer: "Cat",
            level: 2
            },
            {
            question:  "What Animal Is This?",
            image: "https://cdn.pixabay.com/photo/2017/11/06/09/53/tiger-2923186_960_720.jpg",
            options: ["Duck", "Elephant", "Cow", "Tiger"],
            answer: "Tiger",
            level: 3
            },
            {
            question:  "What Animal Is This?",
            image: "https://img.freepik.com/free-psd/majestic-elephant-isolated_23-2151857814.jpg",
            options: ["Elephant", "Lion", "Monkey", "Duck"],
            answer: "Elephant",
            level: 4
            },
            {
            question:  "What Animal Is This?",
            image: "https://img.freepik.com/free-photo/monkeys-eating-fruit_181624-26885.jpg",
            options: ["Monkey", "Cow", "Elephant", "Duck"],
            answer: "Monkey",
            level: 5
            },
            {
            question:  "What Animal Is This?",
            image: "https://img.freepik.com/free-photo/cows-standing-green-field-front-fuji-mountain-japan_335224-197.jpg",
            options: ["Cow", "Elephant", "Lion", "Duck"],
            answer: "Cow",
            level: 6
            },
            {
            question:  "What Animal Is This?",
            image: "https://img.freepik.com/free-vector/hand-drawn-cartoon-duck-illustration_23-2150426966.jpg",
            options: ["Lion", "Duck", "Monkey", "Cow"],
            answer: "Duck",
            level: 7
            }

            
            // ... lanjut untuk semua binatang
        ],
        food: [
        {
            question: "What is this?",
            image: "https://img.freepik.com/free-psd/close-up-delicious-apple_23-2151868338.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Banana", "Carrot", "Pizza", "Apple"],
            answer: "Apple",
            level: 1
        },
        {
            question: "What is this?",
            image: "https://img.freepik.com/free-vector/vector-ripe-yellow-banana-bunch-isolated-white-background_1284-45456.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Banana", "Rice", "Cheese", "Ice Cream"],
            answer: "Banana",
            level: 2
        },
        {
            question: "What is this?",
            image: "https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg",
            options: ["Pizza", "Carrot", "Bread", "Milk"],
            answer: "Pizza",
            level: 3
        },
        {
            question: "What is this?",
            image: "https://img.freepik.com/free-vector/realistic-ice-cream-collection_52683-64217.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Carrot", "Pizza", "Milk", "Ice Cream"],
            answer: "Ice Cream",
            level: 4
        },
        {
            question: "What is this?",
            image: "https://cdn.pixabay.com/photo/2017/07/05/15/41/milk-2474993_960_720.jpg",
            options: ["Bread", "Carrot", "Ice Cream", "Milk"],
            answer: "Milk",
            level: 5
        },
        {
            question: "What is this?",
            image: "https://img.freepik.com/free-vector/vector-set-delicious-breads_1308-132310.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Pizza", "Ice Cream", "Milk", "Bread"],
            answer: "Bread",
            level: 6
        },
        {
            question: "What is this?",
            image: "https://img.freepik.com/free-photo/fresh-carrots-white-background_1127-244.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Bread", "Pizza", "Ice Cream", "Carrot"],
            answer: "Carrot",
            level: 7
        }
        ],
        transportation: [
        {
            question: "What type of vehicle is this?",
            image: "https://img.freepik.com/free-psd/modern-car-isolated_23-2151504570.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Car", "Bus", "Boat", "Train"],
            answer: "Car",
            level: 1
        },
        {
            question: "What type of vehicle is this?",
            image: "https://img.freepik.com/free-vector/school-bus-transport_24877-83090.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Bus", "Truck", "Scooter", "Airplane"],
            answer: "Bus",
            level: 2
        },
        {
            question: "What type of vehicle is this?",
            image: "https://img.freepik.com/premium-vector/realistic-train-vector-illustration-concept_1253202-13912.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Scooter", "Helicopter", "Motorcycle", "Train"],
            answer: "Train",
            level: 3
        },
        {
            question: "What type of vehicle is this?",
            image: "https://img.freepik.com/free-psd/3d-scooter-isolated-transparent-background_191095-16626.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Motorcycle", "Truck", "Helicopter", "Train"],
            answer: "Motorcycle",
            level: 4
        },
        {
            question: "What type of vehicle is this?",
            image: "https://img.freepik.com/free-vector/helicopter-cartoon-sticker-white-background_1308-76792.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Scooter", "Helicopter", "Motorcycle", "Truck"],
            answer: "Helicopter",
            level: 5
        },
        {
            question: "What type of vehicle is this?",
            image: "https://img.freepik.com/premium-vector/cartoon-truck-trailer-isolated-vehicle-vector-illustration_939711-4051.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Helicopter", "Train", "Scooter", "Truck"],
            answer: "Truck",
            level: 6
        },
        {
            question: "What type of vehicle is this?",
            image: "https://img.freepik.com/premium-vector/push-scooter-illustration-balance-kick-bike-yellow-color-isolated-white-background_408115-1653.jpg?ga=GA1.1.609423078.1747635114&semt=ais_hybrid&w=740",
            options: ["Truck", "Helicopter", "Train", "Scooter"],
            answer: "Scooter",
            level: 7
        }
        ]

        };


        // Songs data
        const songs = {
            abc: {
                title: "ABC Song",
                lyrics: [
                    "A, B, C, D, E, F, G",
                    "H, I, J, K, L, M, N, O, P",
                    "Q, R, S, T, U, V",
                    "W, X, Y and Z",
                    "Now I know my ABCs",
                    "Next time won't you sing with me?"
                ],
                audio: "/web-education/assets/music/abc-alphabet-song-274033.mp3" // ✅ path absolut dari root server
            },
        };
        
        // Global variables
        let currentTab = 'home';
        let currentQuiz = null;
        let currentSong = null;
        let currentLyricIndex = 0;
        let lyricInterval = null;
        let progress = JSON.parse(localStorage.getItem('progress')) || {
            colors: [],
            animals: [],
            food: [],
            transportation: []
        };
        let screenTimeStart = null;
        let screenTimeTimer = null;

        // Initialize the app
        document.addEventListener('DOMContentLoaded', function() {
            updateTime();
            setInterval(updateTime, 1000);
            updateProgressDisplay();
            startScreenTimeMonitoring();
        });

        // Tab functions
        function showTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.add('hidden');
            });
            
            // Show selected tab
            document.getElementById(`${tabName}-tab`).classList.remove('hidden');
            
            // Update tab buttons
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });
            
            // Set current tab
            currentTab = tabName;
            
            // Special handling for quiz tab
            if (tabName === 'quiz') {
                checkQuizAvailability();
            }
        }

        // Vocabulary functions
        function showVocabulary(category) {
            const container = document.getElementById('vocabulary-display');
            container.innerHTML = '';
            
            vocabulary[category].forEach(item => {
                const card = document.createElement('div');
                card.className = 'vocab-card bg-white';
                
            let content = `
                <div class="p-3">
                    <img src="${item.image}" alt="${item.word}" class="w-full h-32 object-cover rounded-t-lg">
                    <div class="p-2">
                        <h3 class="text-lg font-bold" style="color: ${item.color || '#6A89CC'};">${item.word}</h3>
                        <p class="text-sm text-gray-600 italic">${item.translation}</p>
                    </div>
                    <div class="flex justify-end mt-2">
                        <button onclick="speakWord('${item.word}', '${category}')" class="speaker-btn p-2 rounded-full" style="background-color: ${item.color || '#6A89CC'};">
                            <i class="fas fa-volume-up text-white"></i>
                        </button>
                    </div>
                </div>
            `;

                
                card.innerHTML = content;
                container.appendChild(card);
            });
            
            // Update progress
        }

        function showRandomVocabulary() {
            const categories = Object.keys(vocabulary);
            const randomCategory = categories[Math.floor(Math.random() * categories.length)];
            showTab('vocabulary');
            showVocabulary(randomCategory);
        }

        function speakWord(word, category) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.rate = 0.8;
            utterance.pitch = 1.2;
            speechSynthesis.speak(utterance);

            // Tambah ke progress kalau belum ada
            if (!progress[category].includes(word)) {
                progress[category].push(word);
                localStorage.setItem('progress', JSON.stringify(progress));
                updateProgressDisplay(); // Update dot
            }
                checkAllCompleted();
        }


        // Quiz functions
        function checkQuizAvailability() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            
            const quizContainer = document.getElementById('quiz-container');
            
            // Check if time is between 9:00 AM and 9:30 AM
            if (hours != 0) {
                // Quiz is available
                quizContainer.innerHTML = `
                    <h2 class="text-xl font-bold mb-4" style="color: #6A89CC;">Daily Quiz Time!</h2>
                    <p class="mb-4">Choose a category to start the quiz:</p>
                    <div class="grid grid-cols-2 gap-3">
                        <button onclick="startQuiz('colors')" class="category-btn" style="background-color: #F9AFAF;">
                            <i class="fas fa-palette text-2xl mb-1 text-white"></i>
                            <span class="text-white font-bold">Colors</span>
                        </button>
                        <button onclick="startQuiz('animals')" class="category-btn" style="background-color: #F6E58D;">
                            <i class="fas fa-paw text-2xl mb-1" style="color: #6A89CC;"></i>
                            <span style="color: #6A89CC; font-weight: bold;">Animals</span>
                        </button>
                        <button onclick="startQuiz('food')" class="category-btn" style="background-color: #F6E58D;">
                            <i class="fas fa-bowl-food text-2xl mb-1" style="color: #6A89CC;"></i>
                            <span style="color: #6A89CC; font-weight: bold;">Foods</span>
                        </button>
                        <button onclick="startQuiz('transportation')" class="category-btn" style="background-color: #F6E58D;">
                            <i class="fas fa-bus text-2xl mb-1" style="color: #6A89CC;"></i>
                            <span style="color: #6A89CC; font-weight: bold;">Transportation</span>
                        </button>
                    </div>
                `;
            } else {
                // Quiz is not available
                const nextAvailableTime = hours < 9 || (hours === 9 && minutes < 30) ? 
                    "9:00 AM" : "tomorrow at 9:00 AM";
                
                quizContainer.innerHTML = `
                    <div class="text-center p-4 rounded-xl" style="background-color: #F6E58D;">
                        <i class="fas fa-clock text-4xl mb-3" style="color: #6A89CC;"></i>
                        <h2 class="text-xl font-bold mb-2" style="color: #6A89CC;">Quiz Time is Over</h2>
                        <p class="mb-3">The quiz is only available between 9:00 AM and 9:30 AM.</p>
                        <p>Come back ${nextAvailableTime} for more fun!</p>
                    </div>
                `;
            }
        }

        function startQuiz(category) {
            currentQuiz = {
                category: category,
                currentQuestion: 0,
                score: 0
            };
            
            showQuizQuestion();
        }

        function showQuizQuestion() {
            const quizData = quizzes[currentQuiz.category];
            const question = quizData[currentQuiz.currentQuestion];
            const quizContainer = document.getElementById('quiz-container');
            
            quizContainer.innerHTML = `
                <div class="mb-4">
                    <h3 class="text-lg font-bold mb-2">Question ${currentQuiz.currentQuestion + 1} of ${quizData.length}</h3>
                    <div class="h-2 bg-gray-200 rounded-full">
                        <div class="h-full rounded-full" style="width: ${(currentQuiz.currentQuestion / quizData.length) * 100}%; background-color: #6A89CC;"></div>
                    </div>
                </div>
                <h2 class="text-xl font-bold mb-3">${question.question}</h2>
                <img src="${question.image}" alt="Question image" class="w-full h-48 object-contain mb-4">
                <div class="grid grid-cols-2 gap-3">
                    ${question.options.map((option, index) => `
                        <div class="quiz-option bg-white p-3 rounded-lg text-center" onclick="selectQuizOption(${index})">
                            <p class="font-bold">${option}</p>
                        </div>
                    `).join('')}
                </div>
            `;
        }
        

        function selectQuizOption(index) {
            const quizData = quizzes[currentQuiz.category];
            const question = quizData[currentQuiz.currentQuestion];
            const options = document.querySelectorAll('.quiz-option');
            
            // Mark selected option
            options.forEach(opt => opt.classList.remove('selected'));
            options[index].classList.add('selected');
            
            // Check answer
            const selectedAnswer = question.options[index];
            if (selectedAnswer === question.answer) {
                currentQuiz.score++;
            }
            
            // Move to next question or show results
            setTimeout(() => {
                currentQuiz.currentQuestion++;
                if (currentQuiz.currentQuestion < quizData.length) {
                    showQuizQuestion();
                } else {
                    showQuizResults();
                }
            }, 1000);
        }

        function showQuizResults() {
            const quizContainer = document.getElementById('quiz-container');
            const totalQuestions = quizzes[currentQuiz.category].length;
            const percentage = (currentQuiz.score / totalQuestions) * 100;

            let message = "";
            let stars = 0;

            if (percentage >= 90) {
                message = "Excellent! You're amazing!";
                stars = 5;
            } else if (percentage >= 75) {
                message = "Great job! Keep it up!";
                stars = 4;
            } else if (percentage >= 60) {
                message = "Good effort!";
                stars = 3;
            } else if (percentage >= 40) {
                message = "Keep practicing!";
                stars = 2;
            } else {
                message = "Don't give up! Try again!";
                stars = 1;
            }

            const starDisplay = "⭐️".repeat(stars) + "✩".repeat(5 - stars);

            quizContainer.innerHTML = `
                <div class="text-center p-4 rounded-xl" style="background-color: #F9AFAF;">
                    <h2 class="text-2xl font-bold mb-3 text-white">Quiz Complete!</h2>
                    <p class="text-xl mb-2 text-white">You scored ${currentQuiz.score} out of ${totalQuestions}</p>
                    <p class="text-3xl mb-3">${starDisplay}</p>
                    <p class="text-lg mb-4 text-white">${message}</p>
                    <div class="flex justify-center gap-4">
                        <button onclick="checkQuizAvailability()" class="px-6 py-2 rounded-full text-white font-bold" style="background-color: #6A89CC;">
                            Try Again
                        </button>
                        <button onclick="checkQuizAvailability()" class="px-6 py-2 rounded-full text-white font-bold" style="background-color: #38ada9;">
                            Next Quiz
                        </button>
                    </div>
                </div>
            `;
                localStorage.setItem('quizCompleted', 'true');
                checkAllCompleted();

        }



        // Song functions
        let audioPlayer = null;

        function playSong(songName) {
            currentSong = songName;
            document.getElementById('karaoke-display').classList.remove('hidden');
            document.getElementById('current-song-title').textContent = songs[songName].title;

            const lyricsContainer = document.getElementById('karaoke-lyrics');
            lyricsContainer.innerHTML = songs[songName].lyrics.map(line => `<p>${line}</p>`).join('');

            // Mainkan audio lokal
            if (audioPlayer) {
                audioPlayer.pause();
            }
            audioPlayer = new Audio(songs[songName].audio);
            audioPlayer.play();

            // Highlight lirik (kasar: 3 detik per baris)
            currentLyricIndex = 0;
            highlightCurrentLyric();

            lyricInterval = setInterval(() => {
                currentLyricIndex++;
                if (currentLyricIndex >= songs[songName].lyrics.length) {
                    clearInterval(lyricInterval);
                } else {
                    highlightCurrentLyric();
                }
            }, 5000);
        }


        function highlightCurrentLyric() {
            const lyrics = document.querySelectorAll('#karaoke-lyrics p');
            lyrics.forEach((line, index) => {
                if (index === currentLyricIndex) {
                    line.classList.add('lyrics-highlight');
                    line.style.fontSize = '1.3em';
                } else {
                    line.classList.remove('lyrics-highlight');
                    line.style.fontSize = '1em';
                }
            });
        }

        function stopSong() {
            if (lyricInterval) {
                clearInterval(lyricInterval);
                lyricInterval = null;
            }

            // Tambahan: hentikan audio
            if (audioPlayer) {
                audioPlayer.pause();
                audioPlayer.currentTime = 0; // Reset ke awal
            }

            document.getElementById('karaoke-display').classList.add('hidden');
            currentSong = null;
        }


        // Progress functions
        function updateProgressDisplay() {
            const container = document.getElementById('progress-display');
            container.innerHTML = '';

            Object.keys(vocabulary).forEach(category => {
                const totalWords = vocabulary[category].length;
                const learnedWordsArray = progress[category] || [];
                const learnedWords = learnedWordsArray.length;

                // Buat wrapper per kategori
                const categoryContainer = document.createElement('div');

                // Status
                let statusText = '❌ Not Started';
                if (learnedWords === totalWords) {
                    statusText = '🏁 Completed';
                } else if (learnedWords > 0) {
                    statusText = '✅ In Progress';
                }

                // Judul + status
                const title = document.createElement('p');
                title.className = 'text-sm font-semibold mb-1 text-gray-700';
                title.textContent = `${category.charAt(0).toUpperCase() + category.slice(1)} - ${statusText}`;
                categoryContainer.appendChild(title);

                // Dot wrapper
                const dotsWrapper = document.createElement('div');
                dotsWrapper.className = 'flex flex-wrap gap-1';

                for (let i = 0; i < totalWords; i++) {
                    const dot = document.createElement('div');
                    dot.className = 'progress-dot';

                    // Mark as learned or not based on word match
                    const word = vocabulary[category][i].word;
                    const isLearned = learnedWordsArray.includes(word);
                    dot.style.backgroundColor = isLearned ? '#6A89CC' : '#E5E7EB';

                    dotsWrapper.appendChild(dot);
                }

                categoryContainer.appendChild(dotsWrapper);
                container.appendChild(categoryContainer);
            });
        }




        // Activity functions
        function downloadActivity(type) {
            alert(`Downloading ${type}... (This is a demo - in a real app, this would download a PDF)`);
        }

        // Time functions
        function updateTime() {
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            const displayHours = hours % 12 || 12;
            
            document.getElementById('current-time').textContent = `${displayHours}:${minutes} ${ampm}`;
        }

        // Screen time monitoring
        function startScreenTimeMonitoring() {
            console.log("⏳ Timer 30 menit dimulai");
            screenTimeStart = new Date();
            screenTimeTimer = setTimeout(() => {
                console.log("✅ Timer selesai, memanggil showTimeoutMessage()");
                showTimeoutMessage();
            },30 * 60 * 1000); // 1 menit
        }
        function showTimeoutMessage() {
            document.querySelector('.timeout-overlay').style.display = 'flex';
        }

        function hideTimeoutMessage() {
            document.querySelector('.timeout-overlay').style.display = 'none';
            startScreenTimeMonitoring(); // Reset the timer
        }

        // Handle tab switching with animation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                this.classList.add('active');
            });
        });

        function checkAllCompleted() {
            const anak = 'Zea';
            const score = currentQuiz?.score || 'N/A';
            const allCategories = Object.keys(vocabulary);
            const allProgressDone = allCategories.every(category => {
                return progress[category].length === vocabulary[category].length;
            });

            const quizDone = localStorage.getItem('quizCompleted') === 'true';

            if (allProgressDone && quizDone && !localStorage.getItem('waSent')) {
                // Simpan flag agar tidak dobel kirim
                localStorage.setItem('waSent', 'true');

                const parentNumber = '6282189652008';
                const message = encodeURIComponent(`Halo om! Semua progress dan kuis ${anak} sudah selesai. Skor terakhir: ${score}/10 🎉`);
                const waLink = `https://wa.me/${parentNumber}?text=${message}`;

                // Pakai SweetAlert2 versi aman (pakai <a> agar tidak diblokir browser)
                Swal.fire({
                    title: '🎉 Semua Selesai!',
                    html: `
                        <p>WOW! Adek Zea sudah baca dan belajar semua materinya nih! Zea boleh dapet rewards dari Om! 💛</p>
                        <br>
                        <a href="${waLink}" target="_blank"
                        class="swal2-confirm swal2-styled"
                        style="background-color: #3085d6; text-decoration: none; display: inline-block; padding: 0.6em 1.5em; border-radius: 5px; margin-top: 1em;">
                        Kirim Pesan ke Om
                        </a>
                    `,
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: false
                });
            }
        }



//         progress = {
//     colors: vocabulary.colors.map(item => item.word),
//     animals: vocabulary.animals.map(item => item.word),
//     food: vocabulary.food.map(item => item.word),
//     transportation: vocabulary.transportation.map(item => item.word)
// };
// localStorage.setItem('progress', JSON.stringify(progress));
// localStorage.setItem('quizCompleted', 'true');
// localStorage.removeItem('waSent'); // biar alert bisa muncul
// checkAllCompleted(); // panggil fungsi


