const copyToClipBoard = (event) => {

    const { currentTarget } = {...event};
    const textToCopy = currentTarget.parentElement.innerText;

    navigator.clipboard.writeText(textToCopy)
    .then(() => { document.querySelector('.notification-popup').classList.remove('hide') });
};

export default copyToClipBoard;