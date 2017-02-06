var match = window.URLMap[location.pathname];
location.href = match || window.URLMap['/'] + location.pathname;
