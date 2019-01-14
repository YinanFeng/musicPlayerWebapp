
export const getPlayStatus = (status) => {
  switch(status) {
    case 'playing':
      return 'stopping';
    case 'stopping':
      return 'playing';
    default:
      return 'stopping'
  }
}
