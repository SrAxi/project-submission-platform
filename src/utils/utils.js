export const getTechColor = (tech = '') => {
    switch (tech.toLowerCase()) {
        case 'python':
            return '#39CCCC'
        case 'javascript':
            return '#3D9970'
        case 'java':
            return '#001f3f'
        case 'sql':
            return '#FF4136'
        case 'vue':
            return '#2ECC40'
        case 'react':
            return '#B10DC9'
        case 'docker':
            return '#0074D9'
        case 'kubernetes':
            return '#4169E1'
        case 'c#':
            return '#DB7093'
        case 'c++':
            return '#4B0082'
        case 'angular':
            return '#800000'
        default:
            return 'green'
    }
}

export const truncateString = (string = '', maxLength = 50) =>
    string.length > maxLength
        ? `${string.substring(0, maxLength)}...`
        : string
