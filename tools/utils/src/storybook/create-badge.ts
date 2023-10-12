export const createBadge = (pckgeJson: Object): string => {
  if (Object.keys(pckgeJson).includes('oscd')) {
    return pckgeJson['oscd'].status;
  }
  return '';
};
