export const GoBackAndRefresh = () => {
    if ('referrer' in document) {
        window.location = document.referrer;
        //location.replace(document.referrer);
    } else {
        window.history.back();
    }
}