import { Authenticated, Unauthenticated } from "convex/react";
import { SignInForm } from "./SignInForm";
import { SignOutButton } from "./SignOutButton";

export default function App() {
  return (
    <div>
      <header>
        <h1>Simple Photo Storage</h1>
        <SignOutButton />
      </header>
      
      <Unauthenticated>
        <div>
          <h2>Please sign in to continue</h2>
          <SignInForm />
        </div>
      </Unauthenticated>

      <Authenticated>
        <div id="app">
          <SimplePhotoApp />
        </div>
      </Authenticated>
    </div>
  );
}

function SimplePhotoApp() {
  return (
    <div>
      <style>{`
        .upload-form {
          margin: 20px;
          padding: 20px;
          border: 1px solid #ccc;
        }
        
        .photo-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 20px;
          padding: 20px;
        }
        
        .photo-card {
          border: 1px solid #ccc;
          padding: 10px;
        }
        
        .photo-card img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        .photo-card h3 {
          margin: 10px 0;
        }
        
        button {
          background: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
        }
        
        button:disabled {
          background: #ccc;
        }
        
        input, textarea {
          width: 100%;
          padding: 8px;
          margin: 5px 0;
        }
      `}</style>

      <form className="upload-form" id="uploadForm">
        <h2>Upload Photo</h2>
        <div>
          <label>Photo:</label>
          <input type="file" accept="image/*" id="photoInput" required />
        </div>
        <div>
          <label>Name:</label>
          <input type="text" id="nameInput" required />
        </div>
        <div>
          <label>Description (optional):</label>
          <textarea id="descriptionInput"></textarea>
        </div>
        <button type="submit" id="uploadButton">Upload</button>
      </form>

      <div id="photoGrid" className="photo-grid">
        <div id="loading">Loading photos...</div>
      </div>

      <script dangerouslySetInnerHTML={{__html: `
        // Get references to DOM elements
        const form = document.getElementById('uploadForm');
        const photoInput = document.getElementById('photoInput');
        const nameInput = document.getElementById('nameInput');
        const descriptionInput = document.getElementById('descriptionInput');
        const uploadButton = document.getElementById('uploadButton');
        const photoGrid = document.getElementById('photoGrid');

        // Handle form submission
        form.onsubmit = async (e) => {
          e.preventDefault();
          
          const file = photoInput.files[0];
          const name = nameInput.value;
          const description = descriptionInput.value;
          
          if (!file || !name) {
            alert('Please select a file and enter a name');
            return;
          }
          
          try {
            uploadButton.disabled = true;
            uploadButton.textContent = 'Uploading...';
            
            // Get upload URL from Convex
            const postUrl = await window.convex.mutation('photos:generateUploadUrl')();
            
            // Upload file
            const result = await fetch(postUrl, {
              method: 'POST',
              headers: { 'Content-Type': file.type },
              body: file
            });
            
            const { storageId } = await result.json();
            
            // Save photo metadata
            await window.convex.mutation('photos:savePhoto')({
              storageId,
              name,
              description
            });
            
            // Reset form
            form.reset();
            alert('Photo uploaded successfully!');
          } catch (error) {
            alert('Upload failed');
          } finally {
            uploadButton.disabled = false;
            uploadButton.textContent = 'Upload';
          }
        };

        // Load and display photos
        async function loadPhotos() {
          try {
            const photos = await window.convex.query('photos:listPhotos')();
            
            if (!photos.length) {
              photoGrid.innerHTML = '<div>No photos yet. Upload your first photo above!</div>';
              return;
            }
            
            photoGrid.innerHTML = photos.map(photo => \`
              <div class="photo-card">
                <img src="\${photo.url}" alt="\${photo.name}" />
                <h3>\${photo.name}</h3>
                \${photo.description ? \`<p>\${photo.description}</p>\` : ''}
              </div>
            \`).join('');
          } catch (error) {
            photoGrid.innerHTML = '<div>Error loading photos</div>';
          }
        }

        // Load photos initially and subscribe to updates
        loadPhotos();
        window.convex.onUpdate('photos:listPhotos', loadPhotos);
      `}} />
    </div>
  );
}
