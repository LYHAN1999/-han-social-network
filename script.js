// Sample posts data
const samplePosts = [
    {
        id: 1,
        author: "An Nguyen",
        avatar: "https://via.placeholder.com/40x40/4267B2/ffffff?text=A",
        time: "2 giờ",
        content: "Chào mọi người! Hôm nay mình vừa hoàn thành dự án HAN social network. Cảm ơn tất cả mọi người đã ủng hộ! 🎉",
        image: "https://via.placeholder.com/500x300/1877f2/ffffff?text=HAN+Project",
        likes: 42,
        comments: 8,
        shares: 3
    },
    {
        id: 2,
        author: "Bình Trần",
        avatar: "https://via.placeholder.com/40x40/4267B2/ffffff?text=B",
        time: "4 giờ",
        content: "Một ngày làm việc hiệu quả! Đã học được rất nhiều điều mới về React và Node.js. Công nghệ phát triển thật nhanh! 💻",
        image: null,
        likes: 28,
        comments: 5,
        shares: 2
    },
    {
        id: 3,
        author: "Chi Lê",
        avatar: "https://via.placeholder.com/40x40/4267B2/ffffff?text=C",
        time: "6 giờ",
        content: "Buổi sáng tuyệt vời với ly cà phê và một cuốn sách hay. Cuối tuần này ai có kế hoạch gì thú vị không? ☕📚",
        image: "https://via.placeholder.com/500x300/FF6B6B/ffffff?text=Coffee+Time",
        likes: 15,
        comments: 12,
        shares: 1
    },
    {
        id: 4,
        author: "Dũng Vũ",
        avatar: "https://via.placeholder.com/40x40/4267B2/ffffff?text=D",
        time: "8 giờ",
        content: "Vừa tham gia một workshop về AI và Machine Learning. Tương lai của công nghệ thật đáng mong chờ! 🤖",
        image: null,
        likes: 56,
        comments: 18,
        shares: 7
    },
    {
        id: 5,
        author: "Ế Phạm",
        avatar: "https://via.placeholder.com/40x40/4267B2/ffffff?text=E",
        time: "1 ngày",
        content: "Cuối tuần đi hiking với team. Thiên nhiên thật tuyệt vời và không khí trong lành. Mọi người nên thử đi hiking một lần! 🏔️",
        image: "https://via.placeholder.com/500x300/4ECDC4/ffffff?text=Hiking+Adventure",
        likes: 73,
        comments: 22,
        shares: 9
    }
];

// Load posts when page loads
document.addEventListener('DOMContentLoaded', function() {
    loadPosts();
    setupEventListeners();
});

// Load posts into the timeline
function loadPosts() {
    const postsContainer = document.getElementById('postsContainer');
    
    samplePosts.forEach(post => {
        const postElement = createPostElement(post);
        postsContainer.appendChild(postElement);
    });
}

// Create post element
function createPostElement(post) {
    const postDiv = document.createElement('div');
    postDiv.className = 'post';
    postDiv.innerHTML = `
        <div class="post-header">
            <img src="${post.avatar}" alt="${post.author}">
            <div class="post-info">
                <h4>${post.author}</h4>
                <div class="post-time">${post.time}</div>
            </div>
        </div>
        <div class="post-content">
            <div class="post-text">${post.content}</div>
            ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
        </div>
        <div class="post-stats">
            <span>${post.likes} lượt thích</span>
            <span>${post.comments} bình luận • ${post.shares} chia sẻ</span>
        </div>
        <div class="post-actions">
            <div class="post-action like-btn" data-post-id="${post.id}">
                <i class="far fa-thumbs-up"></i>
                <span>Thích</span>
            </div>
            <div class="post-action">
                <i class="far fa-comment"></i>
                <span>Bình luận</span>
            </div>
            <div class="post-action">
                <i class="far fa-share"></i>
                <span>Chia sẻ</span>
            </div>
        </div>
    `;
    
    return postDiv;
}

// Setup event listeners
function setupEventListeners() {
    // Handle create post input click
    const postInput = document.getElementById('postInput');
    if (postInput) {
        postInput.addEventListener('click', function() {
            openCreatePostModal();
        });
    }
    
    // Handle like button clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('.like-btn')) {
            handleLikeClick(e.target.closest('.like-btn'));
        }
    });
    
    // Handle story clicks
    document.addEventListener('click', function(e) {
        if (e.target.closest('.story') && !e.target.closest('.create-story')) {
            showStoryModal();
        }
    });
    
    // Handle create story click
    document.addEventListener('click', function(e) {
        if (e.target.closest('.create-story')) {
            showCreateStoryModal();
        }
    });
}

// Handle like button click
function handleLikeClick(button) {
    const icon = button.querySelector('i');
    const span = button.querySelector('span');
    
    if (button.classList.contains('liked')) {
        button.classList.remove('liked');
        icon.className = 'far fa-thumbs-up';
        span.textContent = 'Thích';
    } else {
        button.classList.add('liked');
        icon.className = 'fas fa-thumbs-up';
        span.textContent = 'Đã thích';
    }
}

// Open create post modal (simplified version)
function openCreatePostModal() {
    const content = prompt('Bạn đang nghĩ gì?');
    if (content && content.trim()) {
        createNewPost(content);
    }
}

// Create new post
function createNewPost(content) {
    const newPost = {
        id: Date.now(),
        author: "Nguyễn Văn A",
        avatar: "https://via.placeholder.com/40x40/4267B2/ffffff?text=U",
        time: "Vừa xong",
        content: content,
        image: null,
        likes: 0,
        comments: 0,
        shares: 0
    };
    
    const postsContainer = document.getElementById('postsContainer');
    const newPostElement = createPostElement(newPost);
    postsContainer.insertBefore(newPostElement, postsContainer.firstChild);
    
    // Add a nice animation
    newPostElement.style.opacity = '0';
    newPostElement.style.transform = 'translateY(-20px)';
    setTimeout(() => {
        newPostElement.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        newPostElement.style.opacity = '1';
        newPostElement.style.transform = 'translateY(0)';
    }, 100);
}

// Show story modal (placeholder)
function showStoryModal() {
    alert('Tính năng xem story sẽ được phát triển trong phiên bản tiếp theo!');
}

// Show create story modal (placeholder)
function showCreateStoryModal() {
    alert('Tính năng tạo story sẽ được phát triển trong phiên bản tiếp theo!');
}

// Simulate real-time updates
setInterval(() => {
    updateOnlineStatus();
}, 30000); // Update every 30 seconds

function updateOnlineStatus() {
    const onlineIndicators = document.querySelectorAll('.online-indicator');
    onlineIndicators.forEach(indicator => {
        // Randomly show/hide online status
        indicator.style.display = Math.random() > 0.3 ? 'block' : 'none';
    });
}

// Add some interactive animations
document.addEventListener('mouseover', function(e) {
    if (e.target.matches('.post-action')) {
        e.target.style.transform = 'scale(1.05)';
    }
});

document.addEventListener('mouseout', function(e) {
    if (e.target.matches('.post-action')) {
        e.target.style.transform = 'scale(1)';
    }
});

// Lazy loading simulation for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.3s ease';
        // Trigger load
        img.src = img.src;
    });
});

// Add notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 70px;
        right: 20px;
        background: ${type === 'success' ? '#42b883' : '#1877f2'};
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Welcome message
setTimeout(() => {
    showNotification('Chào mừng bạn đến với HAN Social Network!', 'success');
}, 1000);