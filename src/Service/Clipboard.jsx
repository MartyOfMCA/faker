const copyToClipBoard = (event) => {

    const { currentTarget } = {...event};
    const textToCopy = currentTarget.parentElement.innerText;

    navigator.clipboard.writeText(textToCopy)
    .then(() => { 
        const notification = document.querySelector('.notification-popup');
        notification.classList.remove('hide');
        notification.ariaHidden = false;
    });
};

export default copyToClipBoard;