// Function to copy Shayari text to clipboard
function copyShayari(button) {
    // Find the paragraph containing the shayari text inside the same card
    const card = button.closest('.shayari-card');
    const textElement = card.querySelector('.shayari-text');
    
    // Clean up HTML line breaks (<br>) into standard newlines for copying
    const textToCopy = textElement.innerHTML.replace(/<br\s*[\/]?>/gi, '\n').replace(/['"]+/g, '');

    // Copy to clipboard API
    navigator.clipboard.writeText(textToCopy).then(() => {
        const originalText = button.innerText;
        button.innerText = "Copied!";
        setTimeout(() => {
            button.innerText = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
}

// Function to share Shayari on WhatsApp
function shareOnWhatsApp(button) {
    const card = button.closest('.shayari-card');
    const textElement = card.querySelector('.shayari-text');
    
    const textToShare = textElement.innerHTML.replace(/<br\s*[\/]?>/gi, '\n').replace(/['"]+/g, '');
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;
    
    // Open WhatsApp share link in a new tab
    window.open(whatsappUrl, '_blank');
}
