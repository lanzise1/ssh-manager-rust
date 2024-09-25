export const formatBytes = (bytes: number, decimals = 2) => {
    if (bytes == 0 || bytes == null) return '0 KB/s'

    const k = 1024
    const sizes = ['KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return (
        parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) +
        ' ' +
        sizes[i] +
        '/s'
    )
}
