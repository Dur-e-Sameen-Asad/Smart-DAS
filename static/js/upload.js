// document.addEventListener('DOMContentLoaded', () => {
//     const fileUploadBox = document.getElementById('fileUploadBox');
//     const fileInput = document.getElementById('fileInput');
//     const fileNameDisplay = document.getElementById('fileNameDisplay');
//     const processButton = document.getElementById('processButton');
//     const previewStatus = document.getElementById('previewStatus');
//     const imagePreview = document.getElementById('imagePreview');
//     const processNoteText = document.getElementById('processNoteText');
//     const previewType = document.getElementById('previewType');

//     // Click box → trigger hidden file input
//     fileUploadBox.addEventListener('click', () => fileInput.click());

//     // Handle file selection
//     fileInput.addEventListener('change', () => {
//         const file = fileInput.files[0];
//         if (file) {
//             const fileName = file.name;
//             const fileExt = fileName.split('.').pop().toLowerCase();

//             fileNameDisplay.textContent = fileName;
//             previewStatus.textContent = `File selected: ${fileName}`;
//             processButton.disabled = false;
//             processButton.style.opacity = '1';
//             processNoteText.textContent = 'Click "Process Document" to start AI analysis';

//             // Show preview based on type
//             if (['jpg','jpeg','png'].includes(fileExt)) {
//                 const reader = new FileReader();
//                 reader.onload = e => {
//                     imagePreview.src = e.target.result;
//                     imagePreview.style.display = 'block';
//                     previewType.textContent = 'Image Preview';
//                 };
//                 reader.readAsDataURL(file);
//             } else if (fileExt === 'pdf') {
//                 imagePreview.style.display = 'none';
//                 previewType.textContent = 'PDF file selected';
//             } else if (['doc','docx'].includes(fileExt)) {
//                 imagePreview.style.display = 'none';
//                 previewType.textContent = 'Word document selected';
//             } else {
//                 imagePreview.style.display = 'none';
//                 previewType.textContent = 'Unsupported file type';
//             }
//         } else {
//             // Reset UI
//             fileNameDisplay.textContent = 'Select Document (Image/PDF/Word)';
//             previewStatus.textContent = 'No file selected';
//             processButton.disabled = true;
//             processButton.style.opacity = '0.5';
//             processNoteText.textContent = 'Select a document to begin processing';
//             imagePreview.style.display = 'none';
//             previewType.textContent = 'File Preview';
//         }
//     });

//     // Initial visual state
//     processButton.style.opacity = '0.5';
// });


















// document.addEventListener('DOMContentLoaded', () => {
//     // --- Get Necessary Elements (Consolidated) ---
//     const previewBox = document.getElementById('previewBox');
//     const fileInput = document.getElementById('fileInput');
//     const imagePreview = document.getElementById('imagePreview');
//     const defaultIcon = document.getElementById('defaultIcon');
//     const previewType = document.getElementById('previewType');
//     const previewStatus = document.getElementById('previewStatus');
    
//     // Elements from the original broader logic (adjust IDs if needed)
//     const fileNameDisplay = document.getElementById('fileNameDisplay'); 
//     const processButton = document.getElementById('processButton');
//     const processNoteText = document.getElementById('processNoteText');

//     // --- Event Listeners ---
    
//     // 1. Click box → trigger hidden file input
//     previewBox.addEventListener('click', () => fileInput.click()); 

//     // 2. Handle file selection
//     fileInput.addEventListener('change', (event) => {
//         const file = event.target.files[0];

//         if (file) {
//             const fileName = file.name;
//             const fileExt = fileName.split('.').pop().toLowerCase();

//             // --- Common UI Updates for File Selected ---
//             if (fileNameDisplay) fileNameDisplay.textContent = fileName;
//             previewStatus.textContent = 'File selected';
            
//             // Show file-specific elements/text
//             defaultIcon.style.display = 'none';
//             previewType.style.display = 'block';
//             previewStatus.style.display = 'block';
            
//             // Enable process button and update note
//             if (processButton) {
//                 processButton.disabled = false;
//                 processButton.style.opacity = '1';
//             }
//             if (processNoteText) processNoteText.textContent = 'Click "Process Document" to start AI analysis';

//             // --- Handle File Type Specific Previews ---
//             if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp'].includes(fileExt)) {
//                 // IMAGE FILE LOGIC (Show image preview)
//                 const reader = new FileReader();
//                 reader.onload = e => {
//                     imagePreview.src = e.target.result;
//                     imagePreview.style.display = 'block'; // Show the image
//                     imagePreview.alt = `Preview of: ${fileName}`;
//                 };
//                 reader.readAsDataURL(file);
                
//                 previewType.textContent = 'Image Preview';

//             } else if (fileExt === 'pdf') {
//                 // PDF FILE LOGIC (Show generic PDF icon)
//                 imagePreview.style.display = 'none'; // Hide the image
//                 previewType.textContent = 'PDF Document Selected';
//                 defaultIcon.style.display = 'block';

//             } else if (['doc', 'docx'].includes(fileExt)) {
//                 // WORD FILE LOGIC (Show generic Word icon)
//                 imagePreview.style.display = 'none'; // Hide the image
//                 previewType.textContent = 'Word Document Selected';
//                 defaultIcon.style.display = 'block';
                
//             } else {
//                 // UNSUPPORTED FILE LOGIC
//                 imagePreview.style.display = 'none'; // Hide the image
//                 previewType.textContent = 'Unsupported File Type';
//                 defaultIcon.style.display = 'block';
                
//                 // Disable process button for unsupported files
//                 if (processButton) {
//                     processButton.disabled = true;
//                     processButton.style.opacity = '0.5';
//                 }
//             }
//         } else {
//             // --- Reset UI (No file selected/Selection cancelled) ---
//             resetPreviewBox();
//         }
//     });

//     // --- Helper Function for Resetting State ---
//     function resetPreviewBox() {
//         // 1. Reset file-specific text
//         if (fileNameDisplay) fileNameDisplay.textContent = 'Select Document (Image/PDF/Word)';
//         previewStatus.textContent = 'No file selected';
//         previewType.textContent = 'Image Preview';
        
//         // 2. Disable process button and reset note
//         if (processButton) {
//             processButton.disabled = true;
//             processButton.style.opacity = '0.5';
//         }
//         if (processNoteText) processNoteText.textContent = 'Select a document to begin processing';
        
//         // 3. Reset image preview state
//         imagePreview.src = "";
//         imagePreview.style.display = 'none';
        
//         // 4. Show default icon and main text
//         defaultIcon.style.display = 'block';
//         previewType.style.display = 'block';
//         previewStatus.style.display = 'block';
//     }

//     // --- Initial State Setup ---
//     resetPreviewBox();
// });






























































document.addEventListener('DOMContentLoaded', () => {
    // --- Get Necessary Elements (Consolidated) ---
    // Corrected ID reference for the new clickable area
    const fileUploadBox = document.getElementById('fileUploadBox'); 
    
    // Preview box elements
    const fileInput = document.getElementById('fileInput');
    const imagePreview = document.getElementById('imagePreview');
    const defaultIcon = document.getElementById('defaultIcon');
    const previewType = document.getElementById('previewType');
    const previewStatus = document.getElementById('previewStatus');
    
    // Elements for broader application logic
    const fileNameDisplay = document.getElementById('fileNameDisplay'); 
    const processButton = document.getElementById('processButton');
    const processNoteText = document.getElementById('processNoteText');

    // --- Event Listeners ---
    
    // 1. Click Trigger: fileUploadBox is now the exclusive clickable area.
    if (fileUploadBox) {
        fileUploadBox.addEventListener('click', () => {
            fileInput.click();
        });
    }
    
    // 2. Handle file selection
    fileInput.addEventListener('change', (event) => {
        const file = event.target.files[0];

        if (file) {
            const fileName = file.name;
            const fileExt = fileName.split('.').pop().toLowerCase();

            // --- Common UI Updates for File Selected ---
            if (fileNameDisplay) fileNameDisplay.textContent = fileName;
            previewStatus.textContent = 'File selected';
            
            // Default State for Preview: Hide image, show placeholders
            imagePreview.style.display = 'none';
            defaultIcon.style.display = 'block';
            previewType.style.display = 'block';
            previewStatus.style.display = 'block';
            
            // Enable process button and update note
            if (processButton) {
                processButton.disabled = false;
                processButton.style.opacity = '1';
            }
            if (processNoteText) processNoteText.textContent = 'Click "Process" to start AI analysis';

            // --- Handle File Type Specific Previews ---
            if (['jpg', 'jpeg', 'png', 'webp', 'gif', 'bmp'].includes(fileExt)) {
                // IMAGE FILE LOGIC (Show image preview ONLY)
                const reader = new FileReader();
                reader.onload = e => {
                    imagePreview.src = e.target.result;
                    
                    // CRITICAL FIX: HIDE ALL PLACEHOLDER TEXT AND ICONS 
                    // This ensures the image takes up the full space and no text overflows.
                    defaultIcon.style.display = 'none'; 
                    previewType.style.display = 'none';  
                    previewStatus.style.display = 'none'; 
                    
                    imagePreview.style.display = 'block'; // Show the image
                    imagePreview.alt = `Preview of: ${fileName}`;
                };
                reader.readAsDataURL(file);
                
            } else if (fileExt === 'pdf') {
                // PDF FILE LOGIC (Show generic PDF icon + text)
                previewType.textContent = 'PDF Document Selected';

            } else if (['doc', 'docx'].includes(fileExt)) {
                // WORD FILE LOGIC (Show generic Word icon + text)
                previewType.textContent = 'Word Document Selected';
                
            } else {
                // UNSUPPORTED FILE LOGIC
                previewType.textContent = 'Unsupported File Type';
                
                // Disable process button for unsupported files
                if (processButton) {
                    processButton.disabled = true;
                    processButton.style.opacity = '0.5';
                }
            }
        } else {
            // --- Reset UI (No file selected/Selection cancelled) ---
            resetPreviewBox();
        }
    });

    // --- Helper Function for Resetting State ---
    function resetPreviewBox() {
        // 1. Reset file-specific text
        if (fileNameDisplay) fileNameDisplay.textContent = 'Select Document (Image/PDF/Word)';
        previewStatus.textContent = 'No file selected';
        previewType.textContent = 'Image Preview';
        
        // 2. Disable process button and reset note
        if (processButton) {
            processButton.disabled = true;
            processButton.style.opacity = '0.85';
        }
        if (processNoteText) processNoteText.textContent = 'Select a document to begin processing';
        
        // 3. Reset image preview state
        imagePreview.src = "";
        imagePreview.style.display = 'none';
        
        // 4. Show default icon and main text
        defaultIcon.style.display = 'block';
        previewType.style.display = 'block';
        previewStatus.style.display = 'block';
    }

    // --- Initial State Setup ---
    resetPreviewBox();
});