var url = window.URLMap[location.pathname] || ('https://adrienjoly.com/' + location.pathname);
document.body.innerHTML = 'Redirecting to ' + url + '...';
location.href = url + (location.search || '');
