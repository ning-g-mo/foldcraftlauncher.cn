// 立即执行的初始化代码
(function() {
    const changelogContent = document.getElementById('changelogContent');
    if (changelogContent) {
        changelogContent.innerHTML = `
            <div class="version-block">
                <div class="version-header">
                    <h3>Version 1.1.8.8 <span class="version-type release">Release</span></h3>
                    <p class="version-date">2024.11.7</p>
                </div>
                <div class="version-description">
                    <p class="version-note">更新如下：</p>
                    <p class="version-item">1. 修复主页UI错误</p>
                    <p class="version-item">2. 修复LWJGL部分文件缺失导致的某些mod无法使用的bug</p>
                    <p class="version-item">3. 更新俄语翻译</p>
                    <p class="version-item">4. 新增下载页面可查看截图的功能</p>
                </div>
            </div>
        `;
    }
})();

// 其他UI相关的代码延迟执行
document.addEventListener('DOMContentLoaded', function() {
    // 导航栏交互
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle?.addEventListener('click', function() {
        this.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // 主题切换功能
    const themeToggle = document.querySelector('.theme-toggle');
    
    // 检查本地存储的主题设置
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        updateThemeIcon(currentTheme);
    }

    themeToggle?.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
        if (!themeToggle) return;
        themeToggle.innerHTML = theme === 'dark' 
            ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
            : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
    }
});