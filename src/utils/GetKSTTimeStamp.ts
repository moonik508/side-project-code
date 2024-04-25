export const ToKSTFullTimeStamp = (dateString: string) => {
  const KST_DIFF = 9 * 60 * 60 * 1000;
  const data = new Date(dateString);
  const dateData = new Date(data.getTime() + KST_DIFF)
    .toISOString()
    .split('T')[0];
  const timeData = data.toTimeString().split(' ')[0];
  return `${dateData} ${timeData}`;
};

export const ToKSTFullDateStamp = (dateString: string | undefined) => {
  if (dateString === '' || dateString === undefined || dateString === null) {
    return '';
  }
  const KST_DIFF = 9 * 60 * 60 * 1000;
  const data = new Date(dateString);
  const dateData = new Date(data.getTime() + KST_DIFF)
    .toISOString()
    .split('T')[0];
  return `${dateData}`;
};
