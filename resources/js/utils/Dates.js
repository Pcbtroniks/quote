export const useDate = () => {
    return {
        Today: new Date().toISOString().split('T')[0],
    }
}