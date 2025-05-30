
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Curated Links</title>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap" rel="stylesheet">
    <style>
        /* --- Dark Theme Variables (Default) --- */
        :root {
            --bg-color: #282c34; /* Dark background */
            --text-color: #abb2bf; /* Light gray text */
            --primary-color: #61afef; /* Blue for links/accents */
            --secondary-color: #c678dd; /* Purple for descriptions */
            --card-bg: #3a3f4b; /* Darker card background */
            --border-color: #4b5263; /* Subtle border */
            --button-bg: #98c379; /* Green for buttons */
            --button-hover-bg: #8bb874;
            --toggle-bg: #4b5263; /* Toggle background */
            --toggle-handle-bg: #f5f5f5; /* Toggle handle */
        }

        /* --- Light Theme Variables --- */
        body.light-theme {
            --bg-color: #f0f2f5; /* Light background */
            --text-color: #333; /* Dark text */
            --primary-color: #007bff; /* Brighter blue for links */
            --secondary-color: #6c757d; /* Gray for descriptions */
            --card-bg: #ffffff; /* White card background */
            --border-color: #ddd; /* Lighter border */
            --button-bg: #007bff;
            --button-hover-bg: #0056b3;
            --toggle-bg: #ccc;
            --toggle-handle-bg: #333;
        }

        body {
            font-family: 'Roboto', sans-serif;
            background-color: var(--bg-color);
            color: var(--text-color);
            margin: 0;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            box-sizing: border-box;
            line-height: 1.6;
            transition: background-color 0.3s ease, color 0.3s ease; /* Smooth theme transition */
        }

        .container {
            width: 100%;
            max-width: 900px;
            background-color: var(--card-bg);
            border-radius: 12px;
            box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
            padding: 30px;
            box-sizing: border-box;
            margin-bottom: 20px;
            transition: background-color 0.3s ease, box-shadow 0.3s ease; /* Smooth theme transition */
            position: relative; /* For theme toggle button positioning */
        }

        .theme-toggle-button {
            position: absolute;
            top: 20px;
            right: 20px;
            padding: 10px 15px;
            background-color: var(--button-bg);
            color: white;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-size: 0.9em;
            font-weight: 600;
            transition: background-color 0.2s ease, transform 0.1s ease;
        }

        .theme-toggle-button:hover {
            background-color: var(--button-hover-bg);
            transform: translateY(-2px);
        }

        .theme-toggle-button:active {
            transform: translateY(0);
        }


        h1 {
            color: var(--primary-color);
            text-align: center;
            margin-bottom: 30px;
            font-weight: 700;
            font-size: 2.5em;
            padding-top: 20px; /* Space for the toggle button */
            transition: color 0.3s ease;
        }

        .intro-text {
            text-align: center;
            margin-bottom: 40px;
            font-size: 1.1em;
            color: var(--text-color);
            transition: color 0.3s ease;
        }

        .links-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 20px;
        }

        .link-card {
            background-color: var(--bg-color);
            border-radius: 10px;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            transition: transform 0.2s ease, box-shadow 0.2s ease, background-color 0.3s ease;
        }

        .link-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
        }

        .link-card a {
            color: var(--primary-color);
            text-decoration: none;
            font-weight: 600;
            font-size: 1.1em;
            word-break: break-word; /* Prevents long URLs from breaking layout */
            transition: color 0.3s ease;
        }

        .link-card a:hover {
            text-decoration: underline;
        }

        .link-card p {
            font-size: 0.9em;
            color: var(--secondary-color);
            word-break: break-word;
            margin: 0; /* Remove default paragraph margin */
            transition: color 0.3s ease;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
            .container {
                padding: 20px;
            }
            .links-grid {
                grid-template-columns: 1fr; /* Stack cards on smaller screens */
            }
            h1 {
                font-size: 2em;
            }
            .theme-toggle-button {
                top: 15px;
                right: 15px;
                padding: 8px 12px;
                font-size: 0.8em;
            }
        }
        @media (max-width: 480px) {
            body {
                padding: 10px;
            }
            .container {
                border-radius: 8px;
            }
            h1 {
                font-size: 1.8em;
                padding-top: 10px;
            }
            .link-card {
                padding: 15px;
            }
            .theme-toggle-button {
                top: 10px;
                right: 10px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <button id="themeToggle" class="theme-toggle-button">Switch to Light Theme</button>
        <h1>My Links</h1>
        <p class="intro-text">
           
        </p>

        <div class="links-grid">
            <div class="link-card">
                <a href="https://atultiwari997721.github.io/MaiharMata" target="_blank" rel="noopener noreferrer">Maihar Mata Darshan</a>
                
            </div>

            <div class="link-card">
                <a href="https://atultiwari997721.github.io/main" target="_blank" rel="noopener noreferrer">Important Web Links</a>
            </div>

            <div class="link-card">
                <a href="https://atultiwari997721.github.io/GAME" target="_blank" rel="noopener noreferrer">Play Games</a>
           
            </div>

            <div class="link-card">
                <a href="https://atultiwari997721.github.io/fun" target="_blank" rel="noopener noreferrer">Shre with Your Friends For Fun</a>
        
            </div>

            <div class="link-card">
                <a href="https://atultiwari997721.github.io/passwordManager/" target="_blank" rel="noopener noreferrer">Password Manager</a>

            </div>
            
            <div class="link-card">
                <a href="https://atultiwari997721.github.io/email_Validation/" target="_blank" rel="noopener noreferrer">Email Validation</a>
    
            </div>
            
            <div class="link-card">
                <a href="https://atultiwari997721.github.io/text-to-speechForPhone/" target="_blank" rel="noopener noreferrer">Text To Speech</a>
            </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const themeToggleButton = document.getElementById('themeToggle');
            const body = document.body;

            // Function to update the button text
            function updateThemeButtonText() {
                if (body.classList.contains('light-theme')) {
                    themeToggleButton.textContent = 'Switch to Dark Theme';
                } else {
                    themeToggleButton.textContent = 'Switch to Light Theme';
                }
            }

            // Check for saved theme preference on load
            const savedTheme = localStorage.getItem('theme');
            if (savedTheme) {
                body.classList.add(savedTheme);
            } else {
                // Default to dark theme if no preference is saved
                body.classList.add('dark-theme');
            }
            updateThemeButtonText(); // Set initial button text based on loaded theme

            // Event listener for button click
            themeToggleButton.addEventListener('click', () => {
                if (body.classList.contains('light-theme')) {
                    body.classList.remove('light-theme');
                    body.classList.add('dark-theme');
                    localStorage.setItem('theme', 'dark-theme');
                } else {
                    body.classList.remove('dark-theme');
                    body.classList.add('light-theme');
                    localStorage.setItem('theme', 'light-theme');
                }
                updateThemeButtonText(); // Update button text after theme change
            });
        });
    </script>
</body>
</html>
