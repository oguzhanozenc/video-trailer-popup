# Video Trailer Popup

This project creates a simple webpage featuring a movie preview with a watch button. Clicking the "Watch Now!" button opens a popup trailer. The trailer can be closed by clicking the close button or by clicking anywhere outside the trailer.

## Project Structure

- `index.html`: HTML file defining the structure of the webpage.
- `style.css`: CSS file providing styles for the webpage.
- `index.js`: JavaScript file for handling interactive functionality.

## HTML Structure

- The main content is contained within the `<main>` element.
- The movie information and image are displayed in a grid layout using the `.container` class.
- The movie title, description, and watch button are included in the `.textcontainer`.
- The trailer container with the video and close button is hidden by default, and its visibility is controlled by the presence of the "active" class.

## CSS Styles

- Styling is designed for a responsive and visually appealing layout.
- Dark theme background with white text for readability.
- Grid layout for the movie information container.
- Stylish hover effect for the "Watch Now!" button.
- Trailer container is initially hidden with opacity transition.

## JavaScript Functionality

- Event listeners are added to the "Watch Now!" button and the close button.
- Clicking the "Watch Now!" button removes the "active" class from the trailer container, making it visible.
- Clicking the close button adds the "active" class to the trailer container, hiding it, and resets the video to the beginning.

## Media and Dependencies

- Font Awesome is used for the close button icon.
- External CSS is imported for Font Awesome styles.
- The project includes an image (`img.jpg`) and a video (`video.mp4`) for demonstration purposes.

## Responsive Design

- The layout is responsive and adjusts for screens with a maximum width of 1000 pixels.
- The video size is adjusted for smaller screens to maintain a good user experience.

## Usage

1. Clone the repository: `git clone https://github.com/your-username/video-trailer-popup.git`
2. Open `index.html` in a web browser to view the webpage.

Feel free to customize the content, styles, and functionality to suit your needs.
