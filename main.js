function toast({title = '', massage = '', type = 'info', duration = 3000}) {
    const main = document.getElementById('toast');
    if (main) {
        const toast = document.createElement('div');

        //Auto remove toast
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
        }, duration + 1000);

        //Remove toast when clicked
        toast.onclick = (e) => {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
                alert('Xoá thành công')
            }
        }

        const icons = {
            success: 'fa-solid fa-check',
            info: 'fa-solid fa-info',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-exclamation',
        };
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);
        
        toast.classList.add('toast', `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards` /*1s 3s là 3s sau mới mờ, còn 1s là mờ trong vòng 1s; forwards là dừng ở điểm cuối*/
        toast.innerHTML = `
            <div class="toast__icon">
                    <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__message">${massage}</p>
            </div>
            <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
            </div>
        `
        main.appendChild(toast);
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        massage: 'Bạn đã đặt hàng thành công',
        type: 'success',
        duration: 10000
    });
}

function showErrorToast() {
    toast({
        title: 'Error',
        massage: 'Có lỗi xảy ra',
        type: 'error',
        duration: 10000
    });
}
