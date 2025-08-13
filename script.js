/*
 * This file contains all the JavaScript logic extracted from the original HTML document.
 * To use this file, upload it to a public web host (like a GitHub Pages repository)
 * and link to it from your HTML file using the <script> tag provided below.
 */

function showTab(tabName) {
    // Hide all tab contents
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Scroll to top of content
    document.querySelector('.content').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Add interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Make questions clickable for easy copying
    const questions = document.querySelectorAll('.question-box p:first-of-type');
    questions.forEach(question => {
        question.style.cursor = 'pointer';
        question.title = 'Click to select text';
        question.addEventListener('click', function() {
            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(this);
            selection.removeAllRanges();
            selection.addRange(range);
        });
    });
    
    // Add hover effect for table rows
    const tableRows = document.querySelectorAll('tr');
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Track checklist progress
    const checkboxes = document.querySelectorAll('.checklist-item input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const label = this.nextElementSibling;
            if (this.checked) {
                label.style.transition = 'all 0.3s ease';
            }
        });
    });
});
